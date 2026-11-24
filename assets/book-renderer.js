/* Viraaasat's one-scene book model. Three.js is loaded only for motion mode. */
(() => {
  const canvas = document.querySelector(".book-renderer");
  const stage = document.querySelector("[data-book-stage]");
  if (!canvas || !stage || !window.THREE) return;

  const THREE = window.THREE;
  const reducedData = window.matchMedia("(max-width: 800px)").matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(reducedData ? 33 : 35, 1, 0.1, 80);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !reducedData,
    powerPreference: "low-power",
    premultipliedAlpha: false,
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const root = new THREE.Group();
  scene.add(root);

  scene.add(new THREE.HemisphereLight(0xf4e6ca, 0x191512, 1.7));
  scene.add(new THREE.AmbientLight(0xf4e8d3, 0.46));
  const key = new THREE.DirectionalLight(0xffdfb0, 3.4);
  key.position.set(-3, 8, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(reducedData ? 512 : 1024, reducedData ? 512 : 1024);
  key.shadow.camera.left = -8;
  key.shadow.camera.right = 8;
  key.shadow.camera.top = 8;
  key.shadow.camera.bottom = -8;
  key.shadow.bias = -0.00022;
  key.shadow.radius = 5;
  key.shadow.camera.updateProjectionMatrix();
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xb76f47, 1.65);
  rim.position.set(5, 4, -4);
  scene.add(rim);

  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(24, 16),
    new THREE.ShadowMaterial({ color: 0x080705, opacity: 0.36 }),
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -0.43;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  const loadImage = (path) => new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Could not load ${path}`));
    image.src = path;
  });

  const canvasTexture = (source, color = false) => {
    const texture = new THREE.CanvasTexture(source);
    if (color) texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    texture.needsUpdate = true;
    return texture;
  };

  const makeLeatherFallback = () => {
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 512;
    textureCanvas.height = 512;
    const context = textureCanvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, "#653a2a");
    gradient.addColorStop(0.48, "#49271f");
    gradient.addColorStop(1, "#2a1a16");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);
    for (let index = 0; index < 1700; index += 1) {
      const x = (index * 73) % 512;
      const y = (index * 139) % 512;
      context.fillStyle = index % 2 ? "#d6a5780c" : "#120d0b15";
      context.fillRect(x, y, 1 + (index % 3), 1 + (index % 2));
    }
    return canvasTexture(textureCanvas, true);
  };

  const makePageEdgeTexture = () => {
    const edgeCanvas = document.createElement("canvas");
    edgeCanvas.width = 256;
    edgeCanvas.height = 512;
    const context = edgeCanvas.getContext("2d");
    context.fillStyle = "#e7dbc1";
    context.fillRect(0, 0, edgeCanvas.width, edgeCanvas.height);
    for (let y = 6; y < edgeCanvas.height; y += 11) {
      context.fillStyle = y % 3 ? "#86765733" : "#fff6df88";
      context.fillRect(0, y, edgeCanvas.width, y % 3 ? 1 : 2);
    }
    return canvasTexture(edgeCanvas, true);
  };

  const roundedBoardGeometry = (width, height, thickness) => {
    const radius = 0.13;
    const shape = new THREE.Shape();
    shape.moveTo(radius, -height / 2);
    shape.lineTo(width - radius, -height / 2);
    shape.quadraticCurveTo(width, -height / 2, width, -height / 2 + radius);
    shape.lineTo(width, height / 2 - radius);
    shape.quadraticCurveTo(width, height / 2, width - radius, height / 2);
    shape.lineTo(radius, height / 2);
    shape.quadraticCurveTo(0, height / 2, 0, height / 2 - radius);
    shape.lineTo(0, -height / 2 + radius);
    shape.quadraticCurveTo(0, -height / 2, radius, -height / 2);
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: thickness,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.025,
      curveSegments: 5,
    });
    geometry.rotateX(-Math.PI / 2);
    return geometry;
  };

  const makeCurvedPage = (side, width, height, material) => {
    const columns = 26;
    const rows = 24;
    const positions = [];
    const uvs = [];
    const indices = [];
    for (let row = 0; row <= rows; row += 1) {
      const v = row / rows;
      const z = (v - 0.5) * height;
      for (let column = 0; column <= columns; column += 1) {
        const u = column / columns;
        const x = side * width * u;
        const gutter = Math.sin(Math.PI * u) * 0.105;
        const edge = Math.pow(Math.abs(v - 0.5) * 2, 2) * 0.035;
        const curl = Math.sin(v * Math.PI * 2) * 0.018 * u;
        positions.push(x, 0.012 + gutter + edge + curl, z);
        uvs.push(u, 1 - v);
      }
    }
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const a = row * (columns + 1) + column;
        const b = a + columns + 1;
        if (side > 0) indices.push(a, b, a + 1, b, b + 1, a + 1);
        else indices.push(a, a + 1, b, b, a + 1, b + 1);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };

  const makeFolioCanvas = (image) => {
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = reducedData ? 1024 : 2048;
    pageCanvas.height = reducedData ? 1400 : 2800;
    const context = pageCanvas.getContext("2d");
    context.fillStyle = "#efe5d1";
    context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    const marginX = 68;
    const marginY = 82;
    const ratio = Math.min(
      (pageCanvas.width - marginX * 2) / image.naturalWidth,
      (pageCanvas.height - marginY * 2) / image.naturalHeight,
    );
    const drawWidth = image.naturalWidth * ratio;
    const drawHeight = image.naturalHeight * ratio;
    const drawX = (pageCanvas.width - drawWidth) / 2;
    const drawY = (pageCanvas.height - drawHeight) / 2;
    context.fillStyle = "#fffaf0";
    context.fillRect(drawX - 12, drawY - 12, drawWidth + 24, drawHeight + 24);
    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    return pageCanvas;
  };

  const makeEmbossTexture = () => {
    const embossCanvas = document.createElement("canvas");
    embossCanvas.width = 1024;
    embossCanvas.height = 1365;
    const context = embossCanvas.getContext("2d");
    context.clearRect(0, 0, embossCanvas.width, embossCanvas.height);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#d8bb83";
    context.font = '400 184px "Cormorant Garamond", Georgia, serif';
    context.fillText("वि", 512, 620);
    context.globalAlpha = 0.75;
    context.font = '500 22px Manrope, Arial, sans-serif';
    context.letterSpacing = "5px";
    context.fillText("VIRAAASAT", 512, 770);
    context.globalAlpha = 1;
    return canvasTexture(embossCanvas, true);
  };

  const createPageBlock = (side, edgeMaterial, surfaceMaterial) => {
    const width = 3.18;
    const height = 4.48;
    const group = new THREE.Group();
    group.position.x = side * width / 2;
    const blockMaterials = [edgeMaterial, edgeMaterial, surfaceMaterial, surfaceMaterial, edgeMaterial, edgeMaterial];
    const block = new THREE.Mesh(new THREE.BoxGeometry(width, 0.29, height), blockMaterials);
    block.position.y = -0.045;
    block.castShadow = true;
    block.receiveShadow = true;
    group.add(block);
    return group;
  };

  const makeCover = (leatherMaterial, pageEdgeMaterial) => {
    const hinge = new THREE.Group();
    const board = new THREE.Mesh(
      roundedBoardGeometry(3.42, 4.82, 0.19),
      [leatherMaterial, pageEdgeMaterial],
    );
    board.castShadow = true;
    board.receiveShadow = true;
    hinge.add(board);

    const railMaterial = new THREE.MeshStandardMaterial({
      color: 0xc6a66b,
      metalness: 0.48,
      roughness: 0.48,
      emissive: 0x3d2813,
      emissiveIntensity: 0.06,
    });
    const borderY = 0.206;
    const borderX = 0.19;
    const borderZ = 0.3;
    const insideWidth = 3.03;
    const insideHeight = 4.22;
    const rails = [
      [insideWidth, 0.014, 0.014, borderX + insideWidth / 2, borderY, -insideHeight / 2],
      [insideWidth, 0.014, 0.014, borderX + insideWidth / 2, borderY, insideHeight / 2],
      [0.014, 0.014, insideHeight, borderX, borderY, 0],
      [0.014, 0.014, insideHeight, borderX + insideWidth, borderY, 0],
    ];
    rails.forEach(([width, height, depth, x, y, z]) => {
      const line = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), railMaterial);
      line.position.set(x, y, z);
      hinge.add(line);
    });

    const emboss = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 3.3),
      new THREE.MeshBasicMaterial({ map: makeEmbossTexture(), transparent: true, depthWrite: false }),
    );
    emboss.rotation.x = -Math.PI / 2;
    emboss.position.set(1.72, borderY + 0.012, 0);
    hinge.add(emboss);
    return hinge;
  };

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, reducedData ? 1.25 : 1.7);
    renderer.setPixelRatio(dpr);
    renderer.setSize(bounds.width, bounds.height, false);
    camera.aspect = bounds.width / bounds.height;
    camera.position.set(reducedData ? 0.4 : 0.7, reducedData ? 9.4 : 8.2, reducedData ? 9.2 : 9.8);
    camera.lookAt(reducedData ? 0.2 : 0.45, 0.12, 0);
    camera.updateProjectionMatrix();
    render();
  };

  const render = () => renderer.render(scene, camera);
  const fallbackLeather = makeLeatherFallback();
  const leather = new THREE.MeshStandardMaterial({
    color: 0x8d4730,
    map: fallbackLeather,
    roughness: 0.66,
    metalness: 0.04,
  });
  const pageEdgeTexture = makePageEdgeTexture();
  const paperEdge = new THREE.MeshStandardMaterial({ map: pageEdgeTexture, roughness: 0.94 });
  const paperTop = new THREE.MeshStandardMaterial({ color: 0xeee4d0, roughness: 0.97 });
  const folioLeft = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.92, side: THREE.DoubleSide });
  const folioRight = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.92, side: THREE.DoubleSide });

  const leftBackboard = new THREE.Mesh(
    roundedBoardGeometry(3.42, 4.82, 0.15),
    [leather, paperEdge],
  );
  leftBackboard.position.set(-3.42, -0.18, 0);
  leftBackboard.castShadow = true;
  leftBackboard.receiveShadow = true;
  root.add(leftBackboard);

  const rightBackboard = new THREE.Mesh(
    roundedBoardGeometry(3.42, 4.82, 0.15),
    [leather, paperEdge],
  );
  rightBackboard.position.set(0, -0.18, 0);
  rightBackboard.castShadow = true;
  rightBackboard.receiveShadow = true;
  root.add(rightBackboard);

  const leftPageGroup = new THREE.Group();
  leftPageGroup.position.x = 0;
  root.add(leftPageGroup);
  const leftBlock = createPageBlock(-1, paperEdge, paperTop);
  leftPageGroup.add(leftBlock);
  const leftLeaf = makeCurvedPage(-1, 3.18, 4.48, folioLeft);
  leftLeaf.position.y = 0.12;
  leftPageGroup.add(leftLeaf);

  const rightBlock = createPageBlock(1, paperEdge, paperTop);
  root.add(rightBlock);
  const rightLeaf = makeCurvedPage(1, 3.18, 4.48, folioRight);
  rightLeaf.position.y = 0.12;
  root.add(rightLeaf);

  const spine = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 4.82, 36, 1, true),
    leather,
  );
  spine.rotation.x = Math.PI / 2;
  spine.position.set(0, 0.04, 0);
  spine.castShadow = true;
  root.add(spine);
  const spineBand = new THREE.MeshStandardMaterial({ color: 0x6b462f, roughness: 0.76 });
  [-2.08, 2.08].forEach((z) => {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.018, 7, 48), spineBand);
    band.position.set(0, 0.04, z);
    root.add(band);
  });

  const cover = makeCover(leather, paperEdge);
  cover.position.set(0, 0.28, 0);
  cover.castShadow = true;
  root.add(cover);
  root.position.set(reducedData ? 0.06 : 1.52, -0.12, 0);
  root.scale.setScalar(reducedData ? 0.57 : 0.94);
  root.rotation.x = -0.035;
  root.rotation.z = -0.035;

  const setProgress = (progress) => {
    const value = THREE.MathUtils.clamp(progress, 0, 1);
    const settle = value * value * (3 - 2 * value);
    cover.rotation.z = Math.PI * settle;
    cover.position.y = 0.28 - 0.43 * settle;
    leftPageGroup.scale.x = 0.001 + 0.999 * settle;
    leftBackboard.scale.x = 0.001 + 0.999 * settle;
    root.rotation.x = -0.035 + Math.sin(value * Math.PI) * 0.055;
    root.rotation.z = -0.035 + Math.sin(value * Math.PI) * 0.018;
    root.position.y = -0.12 + Math.sin(value * Math.PI) * 0.035;
    root.scale.setScalar((reducedData ? 0.57 : 0.94) * (0.88 + settle * 0.12));
    render();
  };

  const draw = async () => {
    try {
      const [leatherImage, normalImage, kalpaImage, gitaImage] = await Promise.all([
        loadImage("./assets/book-material/brown-leather-albedo-2k.jpg"),
        loadImage("./assets/book-material/brown-leather-normal-gl-2k.jpg"),
        loadImage("./assets/kalpa-sutra-folio.jpg"),
        loadImage("./assets/gita-govinda-folio.jpg"),
      ]);
      const leatherTexture = canvasTexture(leatherImage, true);
      leatherTexture.wrapS = leatherTexture.wrapT = THREE.RepeatWrapping;
      leatherTexture.repeat.set(2.6, 1.4);
      const normalTexture = canvasTexture(normalImage);
      normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
      normalTexture.repeat.copy(leatherTexture.repeat);
      leather.map = leatherTexture;
      leather.normalMap = normalTexture;
      leather.normalScale.set(0.34, 0.34);
      leather.needsUpdate = true;

      folioLeft.map = canvasTexture(makeFolioCanvas(kalpaImage), true);
      folioRight.map = canvasTexture(makeFolioCanvas(gitaImage), true);
      folioLeft.needsUpdate = true;
      folioRight.needsUpdate = true;
      stage.classList.add("book-webgl-ready");
      setProgress(0);
    } catch (error) {
      console.warn("The detailed book materials did not load; using the local fallback material.", error);
      stage.classList.add("book-webgl-ready");
      setProgress(0);
    }
  };

  resize();
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
  } else {
    window.addEventListener("resize", resize, { passive: true });
  }
  window.addEventListener("orientationchange", resize, { passive: true });
  window.viraaasatBook = { setProgress, render };
  draw();
})();
