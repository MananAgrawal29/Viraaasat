import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def guess_type(self, path):
        ctype = super().guess_type(path)
        if path.endswith('.html'):
            return 'text/html; charset=utf-8'
        elif path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        elif path.endswith('.css'):
            return 'text/css; charset=utf-8'
        return ctype

    def send_head(self):
        if 'Range' not in self.headers:
            return super().send_head()

        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, 'File not found')
            return None

        fs = os.fstat(f.fileno())
        total_length = fs[6]

        range_header = self.headers.get('Range').strip()
        if not range_header.startswith('bytes='):
            f.close()
            return super().send_head()

        range_val = range_header[6:].split('-')
        start = int(range_val[0]) if range_val[0] else 0
        end = int(range_val[1]) if len(range_val) > 1 and range_val[1] else total_length - 1

        if start >= total_length or end >= total_length or start > end:
            self.send_error(416, 'Requested Range Not Satisfiable')
            self.send_header('Content-Range', f'bytes */{total_length}')
            self.end_headers()
            f.close()
            return None

        self.send_response(206)
        content_type = self.guess_type(path)
        self.send_header('Content-type', content_type)
        self.send_header('Content-Range', f'bytes {start}-{end}/{total_length}')
        self.send_header('Content-Length', str(end - start + 1))
        self.end_headers()

        f.seek(start)
        return RangeFileWrapper(f, end - start + 1)

class RangeFileWrapper:
    def __init__(self, f, length):
        self.f = f
        self.remaining = length

    def read(self, size=-1):
        if self.remaining <= 0:
            return b''
        if size < 0 or size > self.remaining:
            size = self.remaining
        data = self.f.read(size)
        self.remaining -= len(data)
        return data

    def close(self):
        self.f.close()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, RangeRequestHandler)
    print(f'Serving multi-threaded HTTP with Range support on port {port}...')
    httpd.serve_forever()
