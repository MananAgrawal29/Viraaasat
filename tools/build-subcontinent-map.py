"""Build a no-border physical map plate from Natural Earth 1:10m GeoJSON.

The script downloads the public-domain land and river centerline datasets and
emits a lightweight, clipped SVG for the homepage. Its equirectangular framing
is explicitly a broad physical reference, not a political or historical map.
"""

from __future__ import annotations

import json
import math
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "subcontinent-physical-map.svg"
BOUNDS = (59.0, -4.0, 103.0, 40.5)  # west, south, east, north
WIDTH, HEIGHT = 1500, 1240
PAD_X, PAD_Y = 74, 72
WEST, SOUTH, EAST, NORTH = BOUNDS
SCALE_X = (WIDTH - 2 * PAD_X) / (EAST - WEST)
SCALE_Y = (HEIGHT - 2 * PAD_Y) / (NORTH - SOUTH)

LAND_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_land.geojson"
RIVERS_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_rivers_lake_centerlines_scale_rank.geojson"


def download(url: str) -> dict:
    request = urllib.request.Request(url, headers={"User-Agent": "Viraaasat-map-build/1.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def project(point: tuple[float, float]) -> tuple[float, float]:
    lon, lat = point[:2]
    x = PAD_X + (lon - WEST) * SCALE_X
    y = HEIGHT - PAD_Y - (lat - SOUTH) * SCALE_Y
    return x, y


def clip_ring(points: list[list[float]]) -> list[tuple[float, float]]:
    """Sutherland-Hodgman clip for land rings within the map window."""
    ring = [(point[0], point[1]) for point in points]
    if len(ring) < 3:
        return []
    if ring[0] == ring[-1]:
        ring.pop()

    def clip_edge(values, inside, intersect):
        result = []
        if not values:
            return result
        previous = values[-1]
        previous_inside = inside(previous)
        for current in values:
            current_inside = inside(current)
            if current_inside:
                if not previous_inside:
                    result.append(intersect(previous, current))
                result.append(current)
            elif previous_inside:
                result.append(intersect(previous, current))
            previous, previous_inside = current, current_inside
        return result

    def vertical(bound, point_a, point_b):
        delta = point_b[0] - point_a[0]
        t = 0 if delta == 0 else (bound - point_a[0]) / delta
        return (bound, point_a[1] + t * (point_b[1] - point_a[1]))

    def horizontal(bound, point_a, point_b):
        delta = point_b[1] - point_a[1]
        t = 0 if delta == 0 else (bound - point_a[1]) / delta
        return (point_a[0] + t * (point_b[0] - point_a[0]), bound)

    west, south, east, north = BOUNDS
    ring = clip_edge(ring, lambda p: p[0] >= west, lambda a, b: vertical(west, a, b))
    ring = clip_edge(ring, lambda p: p[0] <= east, lambda a, b: vertical(east, a, b))
    ring = clip_edge(ring, lambda p: p[1] >= south, lambda a, b: horizontal(south, a, b))
    ring = clip_edge(ring, lambda p: p[1] <= north, lambda a, b: horizontal(north, a, b))
    return ring if len(ring) >= 3 else []


def path_data(points: list[tuple[float, float]], close: bool = False) -> str:
    coordinates = [project(point) for point in points]
    if not coordinates:
        return ""
    path = [f"M{coordinates[0][0]:.1f},{coordinates[0][1]:.1f}"]
    path.extend(f"L{x:.1f},{y:.1f}" for x, y in coordinates[1:])
    if close:
        path.append("Z")
    return " ".join(path)


def land_path(geojson: dict) -> str:
    paths = []
    for feature in geojson["features"]:
        geometry = feature["geometry"]
        polygons = geometry["coordinates"] if geometry["type"] == "MultiPolygon" else [geometry["coordinates"]]
        for polygon in polygons:
            for ring in polygon:
                clipped = clip_ring(ring)
                if clipped:
                    paths.append(path_data(clipped, close=True))
    return " ".join(paths)


def clip_segment(a: list[float], b: list[float]):
    """Liang-Barsky line clipping; returns a clipped pair or None."""
    x0, y0 = a[:2]
    x1, y1 = b[:2]
    dx, dy = x1 - x0, y1 - y0
    p = (-dx, dx, -dy, dy)
    q = (x0 - WEST, EAST - x0, y0 - SOUTH, NORTH - y0)
    lower, upper = 0.0, 1.0
    for edge, distance in zip(p, q):
        if edge == 0:
            if distance < 0:
                return None
            continue
        ratio = distance / edge
        if edge < 0:
            lower = max(lower, ratio)
        else:
            upper = min(upper, ratio)
        if lower > upper:
            return None
    return ((x0 + lower * dx, y0 + lower * dy), (x0 + upper * dx, y0 + upper * dy))


def clipped_lines(points: list[list[float]]) -> list[list[tuple[float, float]]]:
    pieces = []
    current = []
    for a, b in zip(points, points[1:]):
        segment = clip_segment(a, b)
        if segment is None:
            if len(current) > 1:
                pieces.append(current)
            current = []
            continue
        start, end = segment
        if current and math.dist(current[-1], start) < 1e-7:
            current.append(end)
        else:
            if len(current) > 1:
                pieces.append(current)
            current = [start, end]
    if len(current) > 1:
        pieces.append(current)
    return pieces


def river_paths(geojson: dict) -> list[str]:
    paths = []
    for feature in geojson["features"]:
        if feature.get("properties", {}).get("scalerank", 99) > 5:
            continue
        geometry = feature["geometry"]
        lines = geometry["coordinates"] if geometry["type"] == "MultiLineString" else [geometry["coordinates"]]
        for line in lines:
            for piece in clipped_lines(line):
                paths.append(path_data(piece))
    return paths


def graticule() -> str:
    nodes = []
    for longitude in range(60, 101, 5):
        x = project((longitude, 0))[0]
        nodes.append(f'<path d="M{x:.1f},{PAD_Y}V{HEIGHT - PAD_Y}" />')
    for latitude in range(0, 41, 5):
        y = project((0, latitude))[1]
        nodes.append(f'<path d="M{PAD_X},{y:.1f}H{WIDTH - PAD_X}" />')
    return "\n".join(nodes)


def label(name: str, lon: float, lat: float, class_name: str = "place") -> str:
    x, y = project((lon, lat))
    return f'<text class="{class_name}" x="{x:.1f}" y="{y:.1f}">{name}</text>'


def main() -> None:
    land = land_path(download(LAND_URL))
    rivers = river_paths(download(RIVERS_URL))
    river_markup = "\n".join(f'<path d="{path}" />' for path in rivers)
    annotations = "\n".join(
        (
            label("HIMALAYA", 80.6, 34.7, "terrain"),
            label("ARABIAN SEA", 64.6, 18.5, "water-label"),
            label("BAY OF BENGAL", 96.3, 14.5, "water-label"),
            label("INDIAN OCEAN", 82.6, 0.1, "water-label"),
            label("SOUTH ASIA", 81.0, 23.5, "region"),
        )
    )
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {WIDTH} {HEIGHT}" role="img" aria-labelledby="title desc">
  <title id="title">South Asia physical geography</title>
  <desc id="desc">Natural Earth land outlines and major river centerlines across the Indian subcontinent and surrounding region. Political boundaries are intentionally not shown.</desc>
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e9e0cc"/><stop offset="1" stop-color="#dcd0b6"/></linearGradient>
    <linearGradient id="land" x1="0" y1="0" x2="0.7" y2="1"><stop stop-color="#c5c0a4"/><stop offset=".48" stop-color="#b7b79d"/><stop offset="1" stop-color="#a9aa90"/></linearGradient>
    <pattern id="paper" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M0 7h18M0 16h18" stroke="#78694d" stroke-opacity=".035"/><circle cx="4" cy="12" r=".5" fill="#78694d" fill-opacity=".07"/></pattern>
    <clipPath id="map-window"><rect x="{PAD_X}" y="{PAD_Y}" width="{WIDTH - 2 * PAD_X}" height="{HEIGHT - 2 * PAD_Y}" rx="2"/></clipPath>
  </defs>
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#sea)"/>
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#paper)"/>
  <rect x="24" y="24" width="{WIDTH - 48}" height="{HEIGHT - 48}" fill="none" stroke="#8f7851" stroke-opacity=".62"/>
  <g clip-path="url(#map-window)" fill="none" stroke="#6c725f" stroke-opacity=".25" stroke-width="1.15">{graticule()}</g>
  <g clip-path="url(#map-window)" fill="url(#land)" fill-rule="evenodd" stroke="#6f725f" stroke-width="2.1" stroke-linejoin="round"> <path d="{land}"/></g>
  <g clip-path="url(#map-window)" fill="none" stroke="#728a84" stroke-width="2.15" stroke-linecap="round" stroke-linejoin="round">{river_markup}</g>
  <g class="map-annotations">{annotations}</g>
  <g class="coordinates" aria-hidden="true">
    <text x="{PAD_X}" y="{HEIGHT - 26}">59°E</text><text x="{project((80, 0))[0] - 18:.1f}" y="{HEIGHT - 26}">80°E</text><text x="{WIDTH - PAD_X - 48}" y="{HEIGHT - 26}">103°E</text>
    <text x="28" y="{project((0, 40))[1] + 4:.1f}">40°N</text><text x="28" y="{project((0, 20))[1] + 4:.1f}">20°N</text><text x="28" y="{project((0, 0))[1] + 4:.1f}">0°</text>
  </g>
  <g class="north" transform="translate({WIDTH - 70} 76)"><path d="M0 32V0m0 0-8 14m8-14 8 14"/><text x="0" y="50" text-anchor="middle">N</text></g>
</svg>'''
    OUTPUT.write_text(svg, encoding="utf-8")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size:,} bytes), {len(rivers)} river segments")


if __name__ == "__main__":
    main()
