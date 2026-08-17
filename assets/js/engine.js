/* ==========================================================================
   IDÉAL CONTEMPORAIN — Moteur 3D procédural
   Géométrie paramétrique + matières générées par canvas. Aucun modèle
   externe : tout est construit à la volée, donc léger et modifiable
   en temps réel.

   Script CLASSIQUE (pas un module ES) : fonctionne en file://.
   THREE lui est injecté par la page, qui l'importe depuis le CDN.

   Usage :  const E = window.ENGINE(THREE, RoundedBoxGeometry);
   ULTRA VISION
   ========================================================================== */
window.ENGINE = function (THREE, RoundedBoxGeometry) {
  'use strict';

  var S = 0.01; // cm → unités de scène

  /* ======================================================================
     Textures procédurales
     ====================================================================== */

  function canvas2d(size) {
    var c = document.createElement('canvas');
    c.width = c.height = size || 512;
    return { c: c, x: c.getContext('2d') };
  }

  function toTexture(c, repeat) {
    var t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat || 1, repeat || 1);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }

  /** Travertin : fond calcaire, veines horizontales douces, pores fins. */
  function travertinTexture() {
    var o = canvas2d(512), x = o.x;
    x.fillStyle = '#CFBEA4';
    x.fillRect(0, 0, 512, 512);

    for (var i = 0; i < 60; i++) {
      x.globalAlpha = 0.05 + Math.random() * 0.12;
      x.fillStyle = Math.random() > 0.5 ? '#B9A489' : '#E0D2BC';
      x.beginPath();
      x.ellipse(Math.random() * 512, Math.random() * 512,
                90 + Math.random() * 200, 2 + Math.random() * 14, 0, 0, Math.PI * 2);
      x.fill();
    }

    x.globalAlpha = 0.16;
    x.fillStyle = '#9C8C74';
    for (var j = 0; j < 1600; j++) {
      x.beginPath();
      x.arc(Math.random() * 512, Math.random() * 512, Math.random() * 1.7, 0, Math.PI * 2);
      x.fill();
    }

    x.globalAlpha = 1;
    return toTexture(o.c, 2);
  }

  /** Bois : fil vertical, veines irrégulières. */
  function woodTexture(base, dark) {
    var o = canvas2d(512), x = o.x;
    x.fillStyle = base;
    x.fillRect(0, 0, 512, 512);

    for (var i = 0; i < 220; i++) {
      x.globalAlpha = 0.03 + Math.random() * 0.09;
      x.strokeStyle = Math.random() > 0.45 ? dark : '#FFFFFF';
      x.lineWidth = 0.5 + Math.random() * 2.6;
      x.beginPath();
      var px = Math.random() * 512;
      x.moveTo(px, 0);
      x.bezierCurveTo(px + (Math.random() - 0.5) * 26, 170,
                      px + (Math.random() - 0.5) * 26, 340,
                      px + (Math.random() - 0.5) * 16, 512);
      x.stroke();
    }

    x.globalAlpha = 1;
    return toTexture(o.c, 1.5);
  }

  /** Grain très fin — casse l'aspect plastique des laques et du noir mat. */
  function microGrain(tint) {
    var o = canvas2d(256), x = o.x;
    x.fillStyle = tint;
    x.fillRect(0, 0, 256, 256);
    var img = x.getImageData(0, 0, 256, 256);
    for (var i = 0; i < img.data.length; i += 4) {
      var n = (Math.random() - 0.5) * 11;
      img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
    }
    x.putImageData(img, 0, 0);
    return toTexture(o.c, 3);
  }

  /* ======================================================================
     Matières
     Uniquement celles réellement citées par Idéal Contemporain :
     travertin, acier noir, bois massif, laque, métal.
     ====================================================================== */

  var _mats = null;

  function materials() {
    if (_mats) return _mats;
    _mats = {
      travertin: new THREE.MeshStandardMaterial({
        map: travertinTexture(), roughness: 0.82, metalness: 0.0
      }),
      noyer: new THREE.MeshStandardMaterial({
        map: woodTexture('#6B4A32', '#3E2717'), roughness: 0.58, metalness: 0.0
      }),
      chene: new THREE.MeshStandardMaterial({
        map: woodTexture('#C2A277', '#8A6B45'), roughness: 0.66, metalness: 0.0
      }),
      noir: new THREE.MeshStandardMaterial({
        map: microGrain('#22201C'), roughness: 0.88, metalness: 0.05
      }),
      laque: new THREE.MeshPhysicalMaterial({
        map: microGrain('#F1ECE3'), roughness: 0.22, metalness: 0.0,
        clearcoat: 0.7, clearcoatRoughness: 0.25
      }),
      acier: new THREE.MeshStandardMaterial({
        color: 0x1A1815, roughness: 0.42, metalness: 0.82
      })
    };
    return _mats;
  }

  var ESSENCES = [
    { id: 'travertin', nom: 'Travertin',     hex: '#C9B79F' },
    { id: 'noyer',     nom: 'Noyer',         hex: '#6B4A32' },
    { id: 'chene',     nom: 'Chêne',         hex: '#C2A277' },
    { id: 'noir',      nom: 'Noir mat',      hex: '#22201C' },
    { id: 'laque',     nom: 'Laque blanche', hex: '#F1ECE3' }
  ];

  var PIETEMENTS = [
    { id: 'acier',   nom: 'Acier noir fin' },
    { id: 'cannele', nom: 'Cannelé' },
    { id: 'bois',    nom: 'Bois massif' },
    { id: 'central', nom: 'Central' }
  ];

  var TYPES = {
    'table-basse':  { nom: 'Table basse',    L: [60, 240, 120],  W: [40, 120, 70], H: [30, 80, 38] },
    'table-manger': { nom: 'Table à manger', L: [140, 320, 200], W: [70, 120, 95], H: [70, 82, 75] },
    'buffet':       { nom: 'Buffet',         L: [100, 280, 180], W: [35, 60, 45],  H: [60, 110, 78] },
    'console':      { nom: 'Console',        L: [80, 200, 130],  W: [25, 45, 34],  H: [70, 95, 82] }
  };

  /* ======================================================================
     Construction de la pièce
     ====================================================================== */

  function addMesh(group, geo, mat, pos, rot) {
    var m = new THREE.Mesh(geo, mat);
    if (pos) m.position.set(pos[0], pos[1], pos[2]);
    if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    return m;
  }

  /** Base cannelée : fût + cannelures verticales réparties autour. */
  function fluted(group, mat, radius, height, y) {
    addMesh(group, new THREE.CylinderGeometry(radius * 0.92, radius * 0.92, height, 40), mat, [0, y, 0]);
    var n = Math.max(14, Math.round(radius * 150));
    var flute = new THREE.CylinderGeometry(radius * 0.115, radius * 0.115, height, 10);
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2;
      addMesh(group, flute, mat, [Math.cos(a) * radius * 0.92, y, Math.sin(a) * radius * 0.92]);
    }
  }

  /** Piètement acier : 4 pieds fins + traverses basses. */
  function steelLegs(group, mat, L, W, H, top) {
    var legH = H - top, r = 0.011;
    var dx = Math.max(0.04, L / 2 - 0.075);
    var dz = Math.max(0.03, W / 2 - 0.065);
    var geo = new THREE.CylinderGeometry(r, r, legH, 12);

    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (s) {
      addMesh(group, geo, mat, [dx * s[0], legH / 2, dz * s[1]]);
    });

    var barY = legH * 0.16;
    var bx = new THREE.CylinderGeometry(r * 0.72, r * 0.72, dz * 2, 10);
    addMesh(group, bx, mat, [-dx, barY, 0], [Math.PI / 2, 0, 0]);
    addMesh(group, bx, mat, [dx, barY, 0], [Math.PI / 2, 0, 0]);
    var bz = new THREE.CylinderGeometry(r * 0.72, r * 0.72, dx * 2, 10);
    addMesh(group, bz, mat, [0, barY, dz], [0, 0, Math.PI / 2]);
  }

  /** Piètement bois : deux joues pleines + entretoise. */
  function woodLegs(group, mat, L, W, H, top) {
    var legH = H - top, th = 0.032;
    var dx = Math.max(0.05, L / 2 - th / 2 - 0.05);
    var geo = new RoundedBoxGeometry(th, legH, W * 0.86, 2, 0.004);
    addMesh(group, geo, mat, [-dx, legH / 2, 0]);
    addMesh(group, geo, mat, [dx, legH / 2, 0]);
    addMesh(group, new RoundedBoxGeometry(dx * 2, th * 0.7, th * 1.5, 2, 0.004), mat, [0, legH * 0.22, 0]);
  }

  /** Piètement central : fût + socle disque. */
  function centralLeg(group, mat, H, top, radius) {
    var legH = H - top;
    addMesh(group, new THREE.CylinderGeometry(radius * 0.26, radius * 0.30, legH, 28), mat, [0, legH / 2, 0]);
    addMesh(group, new THREE.CylinderGeometry(radius * 0.62, radius * 0.66, 0.022, 32), mat, [0, 0.011, 0]);
  }

  /** Caisson (buffet, console) : corps + façades en relief + socle métal. */
  function caisson(group, matCorps, matPiet, L, W, H, portes) {
    var socle = 0.11, corpsH = Math.max(0.12, H - socle);

    addMesh(group, new RoundedBoxGeometry(L, corpsH, W, 2, 0.006), matCorps, [0, socle + corpsH / 2, 0]);

    /* Façades légèrement en relief — rappel du buffet à façade sculptée observé */
    var pw = (L - 0.03) / portes;
    var face = new RoundedBoxGeometry(pw * 0.94, corpsH * 0.86, 0.012, 2, 0.004);
    for (var i = 0; i < portes; i++) {
      addMesh(group, face, matCorps,
        [-L / 2 + 0.015 + pw * (i + 0.5), socle + corpsH / 2, W / 2 + 0.004]);
    }

    var rail = new THREE.BoxGeometry(L * 0.9, 0.012, 0.014);
    addMesh(group, rail, matPiet, [0, socle * 0.62, W / 2 - 0.05]);
    addMesh(group, rail, matPiet, [0, socle * 0.62, -W / 2 + 0.05]);

    var foot = new THREE.CylinderGeometry(0.008, 0.008, socle * 0.62, 10);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (s) {
      addMesh(group, foot, matPiet, [(L / 2 - 0.06) * s[0], socle * 0.31, (W / 2 - 0.05) * s[1]]);
    });
  }

  /**
   * Construit une pièce complète.
   * @param {string} type  clé de TYPES
   * @param {object} o     { L, W, H } en cm + { essence, pietement }
   */
  function buildPiece(type, o) {
    var M = materials();
    var g = new THREE.Group();
    var mat = M[o.essence] || M.travertin;
    var piet = (o.pietement === 'bois') ? mat : M.acier;

    var L = o.L * S, W = o.W * S, H = o.H * S;

    if (type === 'buffet' || type === 'console') {
      caisson(g, mat, M.acier, L, W, H, type === 'buffet' ? 3 : 2);
      g.userData.radius = Math.max(L, H) * 0.75;
      return g;
    }

    /* Tables — plateau rond avec les piètements cannelé et central */
    var rond = (o.pietement === 'cannele' || o.pietement === 'central');
    var top = type === 'table-manger' ? 0.032 : 0.028;

    if (rond) {
      var r = Math.min(L, Math.max(W, L * 0.62)) / 2;
      addMesh(g, new THREE.CylinderGeometry(r, r, top, 56), mat, [0, H - top / 2, 0]);
      if (o.pietement === 'cannele') fluted(g, piet, r * 0.44, H - top, (H - top) / 2);
      else centralLeg(g, piet, H, top, r);
      g.userData.radius = Math.max(r * 2, H) * 0.78;
    } else {
      addMesh(g, new RoundedBoxGeometry(L, top, W, 3, 0.006), mat, [0, H - top / 2, 0]);
      if (o.pietement === 'bois') woodLegs(g, piet, L, W, H, top);
      else steelLegs(g, piet, L, W, H, top);
      g.userData.radius = Math.max(L, H) * 0.75;
    }

    return g;
  }

  /* ======================================================================
     Studio : scène, éclairage, rendu
     Lumière naturelle latérale et rasante, ombres portées longues et
     douces — la signature lumineuse relevée sur le compte Instagram.
     ====================================================================== */

  function createStudio(el, opts) {
    opts = opts || {};
    var dark = !!opts.dark;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
    camera.position.set(2.0, 1.35, 2.4);

    var renderer = new THREE.WebGLRenderer({
      antialias: true, alpha: true, powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = dark ? 1.05 : 1.18;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xfff6e9, dark ? 0x1a1815 : 0xd8ccb9, dark ? 0.42 : 0.66));

    /* Clé : lumière latérale rasante */
    var key = new THREE.DirectionalLight(0xfff2e0, dark ? 2.3 : 2.05);
    key.position.set(3.2, 3.4, 1.9);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 14;
    key.shadow.camera.left = -2.6;
    key.shadow.camera.right = 2.6;
    key.shadow.camera.top = 2.6;
    key.shadow.camera.bottom = -2.6;
    key.shadow.bias = -0.0015;
    key.shadow.radius = 3;
    scene.add(key);

    /* Remplissage froid, très faible */
    var fill = new THREE.DirectionalLight(0xdfe8f0, 0.42);
    fill.position.set(-2.8, 1.5, -1.6);
    scene.add(fill);

    /* Contre-jour, détache la silhouette */
    var rim = new THREE.DirectionalLight(0xffffff, dark ? 0.9 : 0.5);
    rim.position.set(-0.8, 1.2, -3);
    scene.add(rim);

    /* Sol : reçoit l'ombre uniquement, reste transparent */
    var ground = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.ShadowMaterial({ opacity: dark ? 0.34 : 0.19 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    var controls = null;
    if (opts.orbit && THREE.__OrbitControls) {
      controls = new THREE.__OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = !!opts.autoRotate;
      controls.autoRotateSpeed = 0.55;
      controls.minPolarAngle = 0.35;
      controls.maxPolarAngle = Math.PI / 2 - 0.06;
    }

    var pivot = new THREE.Group();
    scene.add(pivot);

    function resize() {
      var w = el.clientWidth || 1, h = el.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }

    var ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    /** Recadre la caméra sur le rayon de la pièce courante. */
    function frame(radius, lift) {
      lift = lift === undefined ? 0.42 : lift;
      var d = radius / Math.tan((camera.fov * Math.PI / 180) / 2) * 1.06;
      var dir = new THREE.Vector3(0.66, 0.44, 0.79).normalize();
      camera.position.copy(dir.multiplyScalar(Math.max(d, 1.1)));
      camera.position.y = Math.max(camera.position.y, radius * 0.72);
      var target = new THREE.Vector3(0, radius * lift, 0);
      if (controls) { controls.target.copy(target); controls.update(); }
      else camera.lookAt(target);
    }

    var running = true, onFrame = null;

    function loop() {
      if (!running) return;
      requestAnimationFrame(loop);
      if (onFrame) onFrame();
      if (controls) controls.update();
      renderer.render(scene, camera);
    }
    loop();

    return {
      scene: scene, camera: camera, renderer: renderer, controls: controls, pivot: pivot,
      frame: frame,
      setFrameCallback: function (fn) { onFrame = fn; },
      pause: function () { running = false; },
      resume: function () { if (!running) { running = true; loop(); } },
      dispose: function () {
        running = false;
        ro.disconnect();
        if (controls) controls.dispose();
        renderer.dispose();
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      }
    };
  }

  /** Remplace le contenu du pivot par une nouvelle pièce, et recadre. */
  function swapPiece(studio, type, opts) {
    studio.pivot.children.slice().forEach(function (o) {
      studio.pivot.remove(o);
      o.traverse(function (n) { if (n.isMesh) n.geometry.dispose(); });
    });
    var piece = buildPiece(type, opts);
    studio.pivot.add(piece);
    studio.frame(piece.userData.radius);
    return piece;
  }

  /** WebGL disponible ? Sinon on bascule sur le repli statique. */
  function hasWebGL() {
    try {
      var c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext &&
        (c.getContext('webgl2') || c.getContext('webgl')));
    } catch (e) { return false; }
  }

  return {
    ESSENCES: ESSENCES,
    PIETEMENTS: PIETEMENTS,
    TYPES: TYPES,
    materials: materials,
    buildPiece: buildPiece,
    createStudio: createStudio,
    swapPiece: swapPiece,
    hasWebGL: hasWebGL
  };
};
