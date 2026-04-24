'use strict';

// ══════════════════════════════════════════
// DATA — single source of truth
// Add all category metadata directly here.
// ══════════════════════════════════════════
const CATEGORIES = [
  {
    id: 'garage', label: 'Web Dev', sub: '',
    color: '#00e5ff', rgb: '0,229,255',
    plural: 'WEB DEV',
    secondary: 'WEB DEV',
    platform: 'Web App', device: 'Desktop / Mobile', action: 'View Project',
    scanInfo: 'CONSTRUCTION QUOTE PLATFORM',
  },
  {
    id: 'arcade', label: 'Game Dev', sub: '',
    color: '#ff2d78', rgb: '255,45,120',
    plural: 'GAME DEV',
    secondary: 'GAME DEV',
    platform: 'Browser Game', device: 'Mobile / Desktop', action: 'Play / View',
    scanInfo: 'RETRO WESTERN PLATFORMER',
  },
  {
    id: 'fab', label: 'Models', sub: '',
    color: '#ff7c2a', rgb: '255,124,42',
    plural: 'MODELS',
    secondary: 'MODELS',
    platform: '3D Showcase', device: 'Desktop / WebGL', action: 'View Model',
    scanInfo: 'INTERACTIVE 3D MODEL SHOWCASE',
  },
];

// ── PROJECTS ───────────────────────────────────────────────────────────────
// This is the ONLY place projects are defined. Add real projects here.
// Each project needs: id, category, title, summary, role, process[],
// challenges[], skills[], techStack[], techIcons[], metrics[], proof[]
// ──────────────────────────────────────────────────────────────────────────
const PROJECTS = [

  // ── GARAGE ──────────────────────────────────────────────────────────────
  {
    id: 'p1', category: 'garage',
    title: 'Wilkerson Construction',
    summary: 'Developed a client-facing website for a construction business, translating the Owner\'s ideas into a clear, scroll-based experience. Managed the full process from concept to deployment, including domain setup and publishing. This project marked my first real-world implementation of a live website.',
    role: 'Led end-to-end design and structure of the website, shaping the user experience, layout, and storytelling direction based on client input.',
    process: [
      { step: '01', text: 'Gathered business goals, content, and visual preferences directly from the client.' },
      { step: '02', text: 'Tested multiple layout and visual directions to refine clarity and usability.' },
      { step: '03', text: 'Handled domain setup and platform transition from Wix to GoDaddy for greater flexibility.' },
      { step: '04', text: 'Deployed the final site and supported initial rollout for customer-facing use.' },
    ],
    challenges: [
      { label: 'PLATFORM LIMITATIONS', text: 'Wix templates restricted layout control, requiring a shift to GoDaddy with custom embedding to achieve the desired structure.' },
      { label: 'FIRST DEPLOYMENT',     text: 'Navigated domain purchasing, configuration, and publishing for the first time, managing unfamiliar setup steps end-to-end.' },
    ],
    skills: ['UI Design', 'Client Communication', 'Information Architecture', 'Basic HTML', 'CSS', 'JavaScript'],
    techStack: ['Wix', 'GoDaddy Website Builder', 'Domain Management'],
    techIcons: [],
    metrics: [
      { val: 'First',  label: 'Web Dev Deployment' },
      { val: '2',      label: 'Platform Transfers' },
      { val: 'Months', label: 'Client Iteration Cycle' },
    ],
    proof: [
      { label: 'LIVE SITE', url: 'https://wilkersonconstruction.ca' },
    ],
  },

  {
    id: 'p2', category: 'garage',
    title: 'Simply Green',
    summary: 'Built a lightweight website for a service-based business focused on simplicity and clarity. Designed as a customer-facing entry point to showcase services and reviews without overwhelming users. This project introduced GitHub Pages deployment and reinforced core front-end fundamentals.',
    role: 'Handled full design and development, translating a non-technical owner\'s preference for simplicity into a clean, structured web experience.',
    process: [
      { step: '01', text: 'Defined core goals around simplicity, customer trust, and easy navigation.' },
      { step: '02', text: 'Created wireframes in Figma to validate layout and storytelling with the client.' },
      { step: '03', text: 'Developed the site using HTML, CSS, and JavaScript with a focus on clarity and responsiveness.' },
      { step: '04', text: 'Deployed using GitHub Pages and managed version control through Git commands.' },
    ],
    challenges: [
      { label: 'SIMPLICITY CONSTRAINT', text: 'Balancing minimal design with enough content to build trust required careful layout and content prioritization.' },
      { label: 'GITHUB DEPLOYMENT',     text: 'Learned Git workflows, repository management, and GitHub Pages deployment through hands-on iteration.' },
    ],
    skills: ['UI Design', 'Wireframing', 'HTML', 'CSS', 'JavaScript', 'Git', 'Client Communication'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    techIcons: [],
    metrics: [
      { val: 'First',  label: 'GitHub Deployment' },
      { val: '3',      label: 'Core Pages Built' },
      { val: 'Client', label: 'Approved Design System' },
    ],
    proof: [
      { label: 'LIVE SITE', url: 'https://gardenspray.github.io/simplygreen' },
      { label: 'GITHUB',    url: '#' },
    ],
  },

  // ── ARCADE ──────────────────────────────────────────────────────────────
  {
    id: 'p3', category: 'arcade',
    title: 'Gridlock Tactics',
    summary: 'Browser-based turn-based strategy game. 12-level campaign, procedural map gen, AI opponent via minimax alpha-beta pruning.',
    role: 'Solo Developer & Designer',
    process: [
      { step: '01', text: 'Designed core game loop on paper before writing any code.' },
      { step: '02', text: 'Canvas 2D tile renderer optimized for 60fps on mid-range mobile.' },
      { step: '03', text: 'Procedural map generation with BSP tree room placement.' },
      { step: '04', text: 'AI difficulty tuned through 200+ playtests with ELO-style scaler.' },
    ],
    challenges: [
      { label: 'AI BALANCE',  text: 'Early AI extremes fixed with bounded lookahead depth scaling per difficulty tier.' },
      { label: 'PERFORMANCE', text: 'Fog-of-war overdraw fixed via dirty-rect rendering and frustum culling.' },
    ],
    skills: ['Vanilla JS', 'Canvas 2D', 'Game AI', 'Procedural Gen', 'Web Audio API'],
    techStack: ['Vanilla JS', 'HTML5 Canvas', 'Web Audio API', 'Webpack'],
    techIcons: [{ icon: 'JS', name: 'Vanilla' }, { icon: '🎮', name: 'Canvas' }, { icon: '🤖', name: 'AI' }, { icon: '🔊', name: 'Audio' }],
    metrics: [{ val: '12', label: 'Levels' }, { val: '60fps', label: 'Target' }, { val: '4.8★', label: 'Rating' }],
    proof: [{ label: 'PLAY GAME', url: '#' }, { label: 'SOURCE CODE', url: '#' }, { label: 'DEV LOG', url: '#' }],
  },

  {
    id: 'p4', category: 'arcade',
    title: 'Voidrun',
    summary: 'Procedurally generated endless runner with rhythm mechanics. Obstacles sync to adaptive soundtrack. Built in 48 hours for a game jam.',
    role: 'Developer + Sound Designer',
    process: [
      { step: '01', text: 'Scoped vertical slice in first 4 hours — one mechanic, one level, one loop.' },
      { step: '02', text: 'Beat-mapping via Web Audio Analyser API frequency data.' },
      { step: '03', text: 'Obstacle generation tuned to musical phrase boundaries.' },
      { step: '04', text: 'Post-jam: CRT shader, screen shake, global leaderboard.' },
    ],
    challenges: [
      { label: 'AUDIO SYNC', text: 'Web Audio latency desync fixed with predictive offset calibration.' },
      { label: 'JAM SCOPE',  text: 'Feature creep at hour 20 — hard cut to essentials, shipped tight core loop.' },
    ],
    skills: ['JavaScript', 'Web Audio API', 'Canvas 2D', 'GLSL Shaders', 'Node.js'],
    techStack: ['Vanilla JS', 'Web Audio API', 'WebGL', 'Socket.io'],
    techIcons: [{ icon: 'JS', name: 'JS' }, { icon: '🔊', name: 'Audio' }, { icon: '▦', name: 'WebGL' }, { icon: '⚡', name: 'Socket' }],
    metrics: [{ val: '48h', label: 'Build Time' }, { val: '#3', label: 'Jam Rank' }, { val: '1.2k', label: 'Players' }],
    proof: [{ label: 'PLAY GAME', url: '#' }, { label: 'SOURCE CODE', url: '#' }],
  },

  // ── FAB ─────────────────────────────────────────────────────────────────
  {
    id: 'p5', category: 'fab',
    title: 'Mech Unit 7',
    summary: 'Hard-surface mechanical character modeled & rigged in Blender. PBR materials, animated combat cycles, real-time Three.js export.',
    role: 'Lead 3D Artist',
    process: [
      { step: '01', text: '200+ reference photos, concept sketches for silhouette design.' },
      { step: '02', text: 'Blockout + proportion pass before committing to detail.' },
      { step: '03', text: 'Retopology to 24k tris. Normal baking from 2.1M poly sculpt.' },
      { step: '04', text: '62-bone rig with hydraulic FK/IK blend for procedural secondary motion.' },
    ],
    challenges: [
      { label: 'POLY BUDGET', text: '24k tris for mobile WebGL — trim sheets and tiling materials for complexity.' },
      { label: 'ANIMATION',   text: 'Hydraulic piston constraints solved with drivers and custom bone constraints.' },
    ],
    skills: ['Blender', 'Substance Painter', 'Three.js', 'GLSL', 'PBR Pipeline', 'Retopology'],
    techStack: ['Blender 4.0', 'Substance Painter', 'Three.js r160', 'glTF 2.0'],
    techIcons: [{ icon: '🟠', name: 'Blender' }, { icon: '🎨', name: 'Subst.' }, { icon: '▲', name: 'Three' }, { icon: '✦', name: 'glTF' }],
    metrics: [{ val: '24k', label: 'Triangles' }, { val: '4K', label: 'Textures' }, { val: '62', label: 'Bones' }],
    proof: [{ label: 'VIEW MODEL', url: '#' }, { label: 'ARTSTATION', url: '#' }, { label: 'PROCESS', url: '#' }],
  },

  {
    id: 'p6', category: 'fab',
    title: 'Brutalist City Render',
    summary: '12-piece architectural visualization series. Brutalist megastructures in speculative futures. Exhibited digitally — 3,400 visitors.',
    role: 'Artist & Creative Director',
    process: [
      { step: '01', text: 'Research: Chandigarh, La Muralla Roja, Soviet constructivism as anchors.' },
      { step: '02', text: 'Massing models via Blender Geometry Nodes for fast parametric iteration.' },
      { step: '03', text: 'HDRI pipeline with custom area lights for dramatic directional contrast.' },
      { step: '04', text: 'Post-processing in Darktable: grain, CA, vignette, per-piece color grading.' },
    ],
    challenges: [
      { label: 'RENDER TIME', text: '4–8h CPU render per scene — adaptive sampling + denoising → 45min.' },
      { label: 'COHESION',    text: '12 diverse scenes unified via strict upfront lighting + palette system.' },
    ],
    skills: ['Blender Cycles', 'Geometry Nodes', 'HDRI Lighting', 'Color Grading', 'Darktable'],
    techStack: ['Blender 4.1', 'Cycles X', 'Darktable 4.6', 'Geometry Nodes'],
    techIcons: [{ icon: '🟠', name: 'Blender' }, { icon: '☀', name: 'Cycles' }, { icon: '📷', name: 'Darkroom' }, { icon: '⬡', name: 'Nodes' }],
    metrics: [{ val: '12', label: 'Renders' }, { val: '3.4k', label: 'Views' }, { val: '8K', label: 'Res' }],
    proof: [{ label: 'GALLERY', url: '#' }, { label: 'ARTSTATION', url: '#' }],
  },

];

// ── FLOOR DEFINITIONS ───────────────────────────────────────────────────────
const FLOOR_DEFS = [
  { num: 'F1', key: 'overview',   label: 'OVERVIEW',   tag: 'PROJECT_OVERVIEW' },
  { num: 'F2', key: 'process',    label: 'PROCESS',    tag: 'BUILD_PROCESS' },
  { num: 'F3', key: 'challenges', label: 'CHALLENGES', tag: 'CONSTRAINTS' },
  { num: 'F4', key: 'skills',     label: 'SKILLS',     tag: 'TECH_STACK' },
  { num: 'F5', key: 'proof',      label: 'PROOF',      tag: 'DELIVERABLES' },
];

// ── CITY MAP — fixed grid positions for each project node ───────────────────
// gx/gy are grid coordinates in the 15×12 city world.
// Add a new entry here when you add a new project above.
const PROJECT_GRID_POSITIONS = [
  { projectId: 'p1', gx: 2,  gy: 3 },
  { projectId: 'p2', gx: 12, gy: 2 },
  { projectId: 'p3', gx: 6,  gy: 2 },
  { projectId: 'p4', gx: 3,  gy: 7 },
  { projectId: 'p5', gx: 10, gy: 4 },
  { projectId: 'p6', gx: 8,  gy: 8 },
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
const state = {
  scene: 'command',
  activeCategory: null,
  activeProjectIdx: 0,
  activeFloor: 0,
  pingOpen: false,
};

// ══════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════
function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }

function flash() {
  const el = document.createElement('div');
  el.className = 'scene-flash';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 600);
}

function setScene(id) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  document.getElementById('scene-' + id).classList.add('active');
  state.scene = id;
}

function getCat(id) { return CATEGORIES.find(c => c.id === id); }
function getProjectsFor(catId) { return PROJECTS.filter(p => p.category === catId); }

// ══════════════════════════════════════════
// TIMER
// ══════════════════════════════════════════
const startTime = Date.now();
function formatTimer(ms) {
  const s = Math.floor(ms / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `[ ${h}:${m}:${sec} ]`;
}
setInterval(() => {
  const t = formatTimer(Date.now() - startTime);
  ['cmd-timer', 'city-timer', 'bld-timer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t;
  });
}, 1000);

// ══════════════════════════════════════════
// WAVEFORM (command room)
// ══════════════════════════════════════════
function buildWave() {
  const el = document.getElementById('conn-wave');
  if (!el) return;
  for (let i = 0; i < 28; i++) {
    const b = document.createElement('div');
    b.className = 'wave-bar';
    b.style.height = rnd(4, 24) + 'px';
    b.style.setProperty('--dur', (0.4 + Math.random() * 0.8) + 's');
    b.style.setProperty('--del', (Math.random() * 0.8) + 's');
    el.appendChild(b);
  }
}

// ══════════════════════════════════════════
// FLIGHT TRANSITION CANVAS
// ══════════════════════════════════════════
function runFlightTransition(onComplete) {
  const canvas = document.getElementById('flight-canvas');
  const ctx = canvas.getContext('2d');
  let progress = 0;

  function tick() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const W = canvas.width, H = canvas.height;

    ctx.fillStyle = '#030912';
    ctx.fillRect(0, 0, W, H);

    // Zoom grid
    const scale = 1 + progress * 3;
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.scale(scale, scale);
    ctx.translate(-W / 2, -H / 2);
    ctx.globalAlpha = Math.max(0, 1 - progress * 1.5);
    ctx.strokeStyle = 'rgba(0,229,255,0.15)'; ctx.lineWidth = 1;
    for (let x = -W; x < W * 2; x += 80) { ctx.beginPath(); ctx.moveTo(x, -H); ctx.lineTo(x, H * 2); ctx.stroke(); }
    for (let y = -H; y < H * 2; y += 80) { ctx.beginPath(); ctx.moveTo(-W, y); ctx.lineTo(W * 2, y); ctx.stroke(); }
    ctx.restore();

    // Speed lines
    ctx.globalAlpha = progress;
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2;
      const len = 50 + progress * 200;
      const startR = 20 + progress * 60;
      ctx.beginPath();
      ctx.moveTo(W / 2 + Math.cos(angle) * startR, H / 2 + Math.sin(angle) * startR);
      ctx.lineTo(W / 2 + Math.cos(angle) * (startR + len), H / 2 + Math.sin(angle) * (startR + len));
      ctx.strokeStyle = `rgba(0,229,255,${0.3 - progress * 0.2})`;
      ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.globalAlpha = 1;

    progress += 0.018;
    if (progress < 1) requestAnimationFrame(tick);
    else onComplete();
  }
  tick();
}

// ══════════════════════════════════════════
// CITY MAP CANVAS
// ══════════════════════════════════════════
let cityAnimFrame = null;
let cityMapBuildings = null; // cached background buildings

function initCityMap() {
  const canvas = document.getElementById('city-map-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const WORLD = { cols: 15, rows: 12, cell: 150 };

  // ── Filter state ────────────────────────────────────────────────────────
  const filterState = { garage: true, arcade: true, fab: true };

  // ── Camera ──────────────────────────────────────────────────────────────
  const isMobile = () => window.innerWidth < 720;
  const baseZoom = () => isMobile() ? 1.32 : 1.68;
  const snapZoom = () => isMobile() ? 1.42 : 1.86;
  const camera = { x: 0, y: 0, zoom: baseZoom() };
  const targetCamera = { x: 0, y: 0, zoom: baseZoom() };

  // ── Interaction state ───────────────────────────────────────────────────
  let snapIndex      = 0;
  let hoveredNodeId  = null;
  let activeNodeId   = null;
  let wheelLocked    = false;
  let isDragging     = false;
  let didDrag        = false;
  let dragStart      = { x: 0, y: 0 };
  let cameraStart    = { x: 0, y: 0 };
  let pointer        = { x: -9999, y: -9999 };
  let pointerInside  = false;
  let lastPointerMove = performance.now();

  // ── Helpers ──────────────────────────────────────────────────────────────
  function worldPoint(gx, gy, ox = 0.5, oy = 0.5) {
    return { x: (gx + ox) * WORLD.cell, y: (gy + oy) * WORLD.cell };
  }
  function project(x, y) {
    return {
      x: (x - camera.x) * camera.zoom + canvas.width / 2,
      y: (y - camera.y) * camera.zoom + canvas.height / 2,
    };
  }

  function clampValue(value, min, max) {
    if (min > max) return (min + max) / 2;
    return Math.min(Math.max(value, min), max);
  }

  function clampCamera(cam) {
    const worldW = WORLD.cols * WORLD.cell;
    const worldH = WORLD.rows * WORLD.cell;
    const halfW = canvas.width / (2 * cam.zoom);
    const halfH = canvas.height / (2 * cam.zoom);

    cam.x = clampValue(cam.x, halfW, worldW - halfW);
    cam.y = clampValue(cam.y, halfH, worldH - halfH);
  }

  function nudgeCamera(direction) {
    const amount = WORLD.cell * (window.innerWidth < 720 ? 0.42 : 0.58);
    if (direction === 'up') targetCamera.y -= amount;
    if (direction === 'down') targetCamera.y += amount;
    if (direction === 'left') targetCamera.x -= amount;
    if (direction === 'right') targetCamera.x += amount;
    clampCamera(targetCamera);
  }

  function getVisibleNodes() {
    return cityNodes.filter(n => filterState[n.category]);
  }

  // ── Build background buildings (generated once) ──────────────────────────
  function buildCityData() {
    const data = [];
    const reserved = new Set(PROJECT_GRID_POSITIONS.map(p => `${p.gx},${p.gy}`));

    for (let gy = 0; gy < WORLD.rows; gy++) {
      for (let gx = 0; gx < WORLD.cols; gx++) {
        if (reserved.has(`${gx},${gy}`)) continue;
        if (Math.random() < 0.08) continue;
        const isCoreRoad = gx === 4 || gx === 7 || gy === 3 || gy === 6;
        const bw = isCoreRoad ? rnd(42, 84) : rnd(50, 118);
        const bh = isCoreRoad ? rnd(42, 88) : rnd(56, 126);
        const wins = [];
        for (let r = 0; r < Math.floor(bh / 12); r++) {
          for (let c = 0; c < Math.floor(bw / 12); c++) {
            if (Math.random() < 0.38) {
              wins.push({ c, r, type: Math.random() < 0.55 ? 'amber' : Math.random() < 0.82 ? 'cyan' : 'pink' });
            }
          }
        }
        data.push({
          gx, gy, bw, bh,
          ox: rnd(14, 122 - Math.min(bw, 116)),
          oy: rnd(14, 122 - Math.min(bh, 116)),
          height: rnd(2, 8), lum: rnd(8, 19),
          wins, isProject: false,
        });
      }
    }

    // Project nodes
    PROJECT_GRID_POSITIONS.forEach((pos, i) => {
      const proj = PROJECTS.find(p => p.id === pos.projectId);
      if (!proj) return;
      const cat = getCat(proj.category);
      const base = worldPoint(pos.gx, pos.gy);
      data.push({
        gx: pos.gx, gy: pos.gy,
        bw: 116, bh: 116, ox: 17, oy: 16,
        height: 10 + (i % 3), lum: 18, wins: [],
        isProject: true,
        projectId: proj.id,
        category: proj.category,
        projectTitle: proj.title,
        x: base.x, y: base.y,
        color: cat.color, rgb: cat.rgb,
      });
    });

    return data;
  }

  if (!cityMapBuildings) cityMapBuildings = buildCityData();
  const allBuildings = cityMapBuildings;
  const cityNodes = allBuildings.filter(b => b.isProject);

  // ── Snap sequence ────────────────────────────────────────────────────────
  function buildSnapSequence() {
    const seq = [];
    const maxLen = Math.max(...CATEGORIES.map(c => getProjectsFor(c.id).length));
    for (let i = 0; i < maxLen; i++) {
      CATEGORIES.forEach(cat => {
        if (!filterState[cat.id]) return;
        const projs = getProjectsFor(cat.id);
        if (projs[i]) seq.push(projs[i].id);
      });
    }
    return seq;
  }

  function snapToNode(projectId, immediate = false) {
    const node = cityNodes.find(n => n.projectId === projectId);
    if (!node) return;
    activeNodeId = node.projectId;
    state.activeCategory = node.category;
    targetCamera.x = node.x;
    targetCamera.y = node.y;
    targetCamera.zoom = snapZoom();
    clampCamera(targetCamera);
    if (immediate) {
      camera.x = targetCamera.x; camera.y = targetCamera.y; camera.zoom = targetCamera.zoom;
      clampCamera(camera);
    }
  }

  function snapFromSequence(direction) {
    const seq = buildSnapSequence();
    if (!seq.length) return;
    const cur = activeNodeId ? seq.indexOf(activeNodeId) : -1;
    snapIndex = cur >= 0 ? cur : snapIndex;
    snapIndex = (snapIndex + direction + seq.length) % seq.length;
    snapToNode(seq[snapIndex]);
  }

  // ── Hit testing ──────────────────────────────────────────────────────────
  function nearestVisibleNode(sx, sy) {
    let best = null, bestDist = Infinity;
    getVisibleNodes().forEach(n => {
      if (!n.screenBox) return;
      const b = n.screenBox;
      const inside = sx >= b.x - 10 && sx <= b.x + b.w + 10 && sy >= b.y - 10 && sy <= b.y + b.h + 10;
      const dx = sx - b.cx, dy = sy - b.cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if ((inside || dist < 95) && dist < bestDist) { best = n; bestDist = dist; }
    });
    return best;
  }

  // ── Filter HUD ────────────────────────────────────────────────────────────
  function updateFilterHud() {
    const active = Object.keys(filterState).filter(k => filterState[k]);
    document.querySelectorAll('.cfh-toggle').forEach(btn => {
      btn.classList.toggle('active', filterState[btn.dataset.filter]);
    });
    const status = document.getElementById('city-filter-status');
    if (status) {
      status.textContent = active.length === 3
        ? 'ALL PROJECTS ONLINE'
        : active.map(k => getCat(k).plural).join(' + ') + ' ONLINE';
    }
  }

  // ── Draw road grid ────────────────────────────────────────────────────────
  function drawRoadGrid() {
    const W = canvas.width, H = canvas.height;
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.scale(camera.zoom, camera.zoom);
    ctx.translate(-camera.x, -camera.y);
    ctx.lineCap = 'round';

    for (let gx = 0; gx <= WORLD.cols; gx++) {
      const x = gx * WORLD.cell;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD.rows * WORLD.cell);
      ctx.strokeStyle = gx % 3 === 0 ? 'rgba(0,229,255,0.12)' : 'rgba(17,39,70,0.88)';
      ctx.lineWidth = gx % 3 === 0 ? 18 : 28; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD.rows * WORLD.cell);
      ctx.strokeStyle = 'rgba(0,229,255,0.07)'; ctx.lineWidth = 1; ctx.stroke();
    }
    for (let gy = 0; gy <= WORLD.rows; gy++) {
      const y = gy * WORLD.cell;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD.cols * WORLD.cell, y);
      ctx.strokeStyle = gy % 3 === 0 ? 'rgba(255,45,120,0.09)' : 'rgba(17,39,70,0.88)';
      ctx.lineWidth = gy % 3 === 0 ? 18 : 28; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD.cols * WORLD.cell, y);
      ctx.strokeStyle = 'rgba(0,229,255,0.06)'; ctx.lineWidth = 1; ctx.stroke();
    }
    for (let gx = 0; gx <= WORLD.cols; gx++) {
      for (let gy = 0; gy <= WORLD.rows; gy++) {
        ctx.beginPath(); ctx.arc(gx * WORLD.cell, gy * WORLD.cell, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,229,255,0.18)'; ctx.fill();
      }
    }
    ctx.restore();
  }

  // ── Draw a single building ────────────────────────────────────────────────
  function drawBuilding(b) {
    const base = worldPoint(b.gx, b.gy, 0, 0);
    const x = base.x + b.ox, y = base.y + b.oy;
    const z = b.height * 5;
    const p = project(x, y);
    const bw = b.bw * camera.zoom, bh = b.bh * camera.zoom;
    const rise = z * camera.zoom;

    // Frustum cull
    if (p.x + bw < -140 || p.x > canvas.width + 140 || p.y + bh < -140 || p.y - rise > canvas.height + 140) return;

    if (b.isProject) {
      const isVisible = filterState[b.category];
      const isActive  = b.projectId === activeNodeId;
      const isHover   = b.projectId === hoveredNodeId;
      const alpha     = isVisible ? 1 : 0.12;
      const t         = performance.now();
      const livePulse = (Math.sin(t / 180) + 1) / 2;
      const pulse     = isActive ? 0.75 + livePulse * 0.5 : isHover ? 0.6 + livePulse * 0.35 : 0.34;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.44)';
      ctx.fillRect(p.x + rise * 0.35, p.y + rise * 0.35, bw, bh);

      // Body
      const body = ctx.createLinearGradient(p.x, p.y - rise, p.x + bw, p.y + bh);
      body.addColorStop(0, `rgba(${b.rgb},0.42)`);
      body.addColorStop(0.55, 'rgba(8,22,42,0.98)');
      body.addColorStop(1, `rgba(${b.rgb},0.18)`);
      ctx.fillStyle = body;
      ctx.fillRect(p.x, p.y - rise, bw, bh + rise);

      // Border
      ctx.strokeStyle = `rgba(${b.rgb},${0.38 + pulse * 0.38})`;
      ctx.lineWidth = isActive ? 2.4 + livePulse * 1.1 : isHover ? 1.9 + livePulse * 0.8 : 1.1;
      ctx.strokeRect(p.x, p.y - rise, bw, bh + rise);

      // Glow rings
      const ringCount = isActive || isHover ? 6 : 3;
      for (let i = 0; i < ringCount; i++) {
        const pad = (10 + i * 13 + (isActive || isHover ? livePulse * 8 : 0)) * camera.zoom;
        ctx.strokeStyle = `rgba(${b.rgb},${(0.24 - i * 0.03) * pulse})`;
        ctx.lineWidth = isActive || isHover ? 1.25 : 1;
        ctx.strokeRect(p.x - pad, p.y - rise - pad, bw + pad * 2, bh + rise + pad * 2);
      }

      // Windows
      for (let wy = p.y - rise + 14 * camera.zoom; wy < p.y + bh - 8; wy += 16 * camera.zoom) {
        for (let wx = p.x + 12 * camera.zoom; wx < p.x + bw - 10; wx += 17 * camera.zoom) {
          if (Math.sin(wx * 0.04 + wy * 0.02) > -0.25) {
            ctx.fillStyle = Math.random() < 0.8 ? `rgba(${b.rgb},0.38)` : 'rgba(255,190,80,0.46)';
            ctx.fillRect(wx, wy, 5 * camera.zoom, 7 * camera.zoom);
          }
        }
      }

      // Rooftop beacon
      const cx2 = p.x + bw / 2, topY = p.y - rise - 14 * camera.zoom;
      ctx.beginPath(); ctx.arc(cx2, topY, isActive ? 7 : isHover ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = b.color; ctx.shadowColor = b.color;
      ctx.shadowBlur = isActive ? 34 : isHover ? 24 : 11;
      ctx.fill(); ctx.shadowBlur = 0;

      // Label
      const projNum  = getProjectsFor(b.category).findIndex(p => p.id === b.projectId) + 1;
      const labelY   = p.y - rise - 48 * camera.zoom;
      const labelTxt = getCat(b.category).label.toUpperCase() + ' //' + projNum;
      const titleTxt = b.projectTitle.toUpperCase();
      ctx.font = Math.max(9, 8 * camera.zoom) + "px 'Share Tech Mono'";
      const lw = Math.max(ctx.measureText(labelTxt).width, ctx.measureText(titleTxt).width * 0.72) + 22;
      ctx.fillStyle = `rgba(3,9,18,${isVisible ? 0.78 : 0.28})`;
      ctx.strokeStyle = `rgba(${b.rgb},${isActive || isHover ? 0.7 : 0.32})`; ctx.lineWidth = 1;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(cx2 - lw / 2, labelY - 13, lw, 32, 4);
      else ctx.rect(cx2 - lw / 2, labelY - 13, lw, 32);
      ctx.fill(); ctx.stroke();
      ctx.textAlign = 'center';
      ctx.fillStyle = `rgba(232,244,255,${isVisible ? 0.84 : 0.28})`;
      ctx.fillText(labelTxt, cx2, labelY);
      ctx.font = Math.max(7, 6 * camera.zoom) + "px 'Share Tech Mono'";
      ctx.fillStyle = `rgba(${b.rgb},${isVisible ? 0.74 : 0.24})`;
      ctx.fillText(titleTxt.slice(0, 24), cx2, labelY + 11);

      // Connector line
      ctx.strokeStyle = `rgba(${b.rgb},${isActive || isHover ? 0.55 : 0.22})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx2, labelY + 20); ctx.lineTo(cx2, topY + 8 * camera.zoom); ctx.stroke();

      b.screenBox = {
        x: p.x, y: p.y - rise, w: bw, h: bh + rise,
        cx: cx2, cy: p.y - rise + (bh + rise) / 2,
        labelX: cx2, labelY,
      };
      ctx.restore();
      return;
    }

    // Background building
    const wall = ctx.createLinearGradient(p.x, p.y - rise, p.x + bw, p.y + bh);
    wall.addColorStop(0, `hsl(215,28%,${b.lum + 8}%)`);
    wall.addColorStop(1, `hsl(220,35%,${b.lum}%)`);
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(p.x + rise * 0.25, p.y + rise * 0.25, bw, bh);
    ctx.fillStyle = wall; ctx.fillRect(p.x, p.y - rise, bw, bh + rise);
    ctx.fillStyle = `hsl(215,22%,${b.lum + 10}%)`; ctx.fillRect(p.x, p.y - rise, bw, Math.max(6, 10 * camera.zoom));
    b.wins.forEach(w => {
      const wx = p.x + 9 * camera.zoom + w.c * 12 * camera.zoom;
      const wy = p.y - rise + 16 * camera.zoom + w.r * 12 * camera.zoom;
      if (wx > p.x + bw - 8 || wy > p.y + bh - 6) return;
      ctx.fillStyle = w.type === 'amber' ? 'rgba(255,184,48,0.42)' : w.type === 'cyan' ? 'rgba(0,229,255,0.30)' : 'rgba(255,45,120,0.26)';
      ctx.fillRect(wx, wy, 4 * camera.zoom, 5 * camera.zoom);
    });
  }

  // ── Hover scan card ───────────────────────────────────────────────────────
  function drawHoverGui() {
    const node = cityNodes.find(n => n.projectId === hoveredNodeId);
    if (!node || !node.screenBox || !filterState[node.category]) return;
    const cat   = getCat(node.category);
    const proj  = PROJECTS.find(p => p.id === node.projectId);
    if (!cat || !proj) return;

    const w = Math.min(430, Math.max(340, canvas.width * 0.28));
    const h = Math.min(392, Math.max(318, canvas.height * 0.46));
    const x = Math.max(18, canvas.width - w - 28);
    const y = Math.max(92, (canvas.height - h) / 2);
    const t = performance.now();
    const pulse = (Math.sin(t / 170) + 1) / 2;
    const sweep = (t / 18) % h;

    ctx.save();
    ctx.globalAlpha = 0.98;
    ctx.fillStyle = 'rgba(3,9,18,0.90)';
    ctx.strokeStyle = `rgba(${node.rgb},${0.56 + pulse * 0.26})`;
    ctx.lineWidth = 1.45; ctx.shadowColor = node.color; ctx.shadowBlur = 18 + pulse * 16;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, 10); else ctx.rect(x, y, w, h);
    ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;

    const grd = ctx.createLinearGradient(x, y, x + w, y + h);
    grd.addColorStop(0, `rgba(${node.rgb},0.10)`);
    grd.addColorStop(0.44, 'rgba(255,255,255,0.018)');
    grd.addColorStop(1, `rgba(${node.rgb},0.035)`);
    ctx.fillStyle = grd;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x + 1, y + 1, w - 2, h - 2, 10); else ctx.rect(x + 1, y + 1, w - 2, h - 2);
    ctx.fill();

    // Corner accents
    ctx.strokeStyle = `rgba(${node.rgb},0.54)`; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 22, y); ctx.lineTo(x, y); ctx.lineTo(x, y + 22);
    ctx.moveTo(x + w - 22, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + 22);
    ctx.moveTo(x, y + h - 22); ctx.lineTo(x, y + h); ctx.lineTo(x + 22, y + h);
    ctx.moveTo(x + w - 22, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - 22);
    ctx.stroke();

    // Horizontal grid lines
    ctx.strokeStyle = `rgba(${node.rgb},0.18)`;
    for (let yy = y + 34; yy < y + h - 20; yy += 18) {
      ctx.beginPath(); ctx.moveTo(x + 18, yy); ctx.lineTo(x + w - 18, yy); ctx.stroke();
    }

    // Scan sweep
    ctx.fillStyle = `rgba(${node.rgb},0.13)`;
    ctx.fillRect(x + 1, y + sweep, w - 2, 2);

    // Header text
    ctx.font = "9px 'Share Tech Mono'"; ctx.textAlign = 'left';
    ctx.fillStyle = `rgba(${node.rgb},0.92)`;
    ctx.fillText('/// LIVE PROJECT SCAN', x + 18, y + 24);
    ctx.textAlign = 'right'; ctx.fillStyle = 'rgba(74,106,136,0.95)';
    ctx.fillText('LOCKED // HOVER TARGET', x + w - 18, y + 24);
    ctx.textAlign = 'left';

    ctx.font = "20px 'Orbitron'";
    ctx.fillStyle = 'rgba(232,244,255,0.96)';
    ctx.fillText(proj.title.toUpperCase().slice(0, 28), x + 18, y + 58);
    ctx.font = "10px 'Share Tech Mono'";
    ctx.fillStyle = `rgba(${node.rgb},0.82)`;
    ctx.fillText(cat.secondary, x + 18, y + 78);

    ctx.strokeStyle = `rgba(${node.rgb},0.30)`;
    ctx.beginPath(); ctx.moveTo(x + 18, y + 92); ctx.lineTo(x + w - 18, y + 92); ctx.stroke();

    function drawField(label, value, rowY, wide) {
      ctx.font = "9px 'Share Tech Mono'"; ctx.fillStyle = 'rgba(74,106,136,0.96)'; ctx.fillText(label, x + 18, rowY);
      ctx.font = wide ? "13px 'Share Tech Mono'" : "11px 'Share Tech Mono'";
      ctx.fillStyle = 'rgba(232,244,255,0.90)';
      ctx.fillText(String(value).toUpperCase().slice(0, wide ? 34 : 22), x + 118, rowY);
    }

    drawField('PROJECT INFO', cat.scanInfo,   y + 122, true);
    drawField('PLATFORM',    cat.platform,    y + 150, false);
    drawField('DEVICE',      cat.device,      y + 176, false);
    drawField('QUICK LINK',  cat.action,      y + 202, false);

    ctx.strokeStyle = `rgba(${node.rgb},0.22)`;
    ctx.beginPath(); ctx.moveTo(x + 18, y + 222); ctx.lineTo(x + w - 18, y + 222); ctx.stroke();

    const bars = [0.82, 0.64, 0.91, 0.72];
    const barLabels = ['VISUAL', 'UX', 'BUILD', 'DEPLOY'];
    bars.forEach((amt, i) => {
      const by = y + 250 + i * 24;
      ctx.font = "8px 'Share Tech Mono'"; ctx.fillStyle = 'rgba(74,106,136,0.96)'; ctx.fillText(barLabels[i], x + 18, by);
      ctx.strokeStyle = `rgba(${node.rgb},0.22)`; ctx.strokeRect(x + 88, by - 8, w - 126, 8);
      ctx.fillStyle = `rgba(${node.rgb},${0.32 + pulse * 0.15})`; ctx.fillRect(x + 89, by - 7, (w - 128) * amt, 6);
    });

    // Radar
    const rx = x + w - 58, ry = y + h - 46;
    ctx.strokeStyle = `rgba(${node.rgb},0.48)`;
    ctx.beginPath();
    ctx.arc(rx, ry, 24, 0, Math.PI * 2); ctx.arc(rx, ry, 12, 0, Math.PI * 2);
    ctx.moveTo(rx - 28, ry); ctx.lineTo(rx + 28, ry);
    ctx.moveTo(rx, ry - 28); ctx.lineTo(rx, ry + 28);
    ctx.stroke();
    ctx.beginPath(); ctx.arc(rx + Math.cos(t / 230) * 15, ry + Math.sin(t / 230) * 15, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${node.rgb},0.82)`; ctx.fill();

    ctx.font = "8px 'Share Tech Mono'"; ctx.fillStyle = 'rgba(74,106,136,0.88)';
    ctx.fillText('TARGET ID // ' + node.projectId.toUpperCase(), x + 18, y + h - 24);

    // Dashed line to label
    ctx.strokeStyle = `rgba(${node.rgb},0.34)`; ctx.setLineDash([8, 7]);
    ctx.beginPath(); ctx.moveTo(x, y + h / 2); ctx.lineTo(node.screenBox.labelX, node.screenBox.labelY + 16); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // ── Radar cursor ──────────────────────────────────────────────────────────
  function drawRadarCursor() {
    if (!pointerInside || state.scene !== 'city') return;
    const t = performance.now();
    const idle = t - lastPointerMove > 720 && !isDragging;
    const pulse = (Math.sin(t / 210) + 1) / 2;
    const idlePulse = (Math.sin(t / 150) + 1) / 2;
    const r = (idle ? 20 : 18) + pulse * 4 + (idle ? idlePulse * 3 : 0);

    ctx.save();
    ctx.translate(pointer.x, pointer.y);
    ctx.strokeStyle = idle ? 'rgba(0,229,255,0.98)' : 'rgba(0,229,255,0.88)';
    ctx.lineWidth = idle ? 1.75 : 1.4;
    ctx.shadowColor = 'rgba(0,229,255,0.95)'; ctx.shadowBlur = idle ? 22 : 12;
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = idle ? 'rgba(0,229,255,0.62)' : 'rgba(0,229,255,0.46)';
    ctx.beginPath(); ctx.arc(0, 0, r + 8 + (idle ? idlePulse * 4 : 0), 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-r - 8, 0); ctx.lineTo(-r + 3, 0);
    ctx.moveTo(r - 3, 0);  ctx.lineTo(r + 8, 0);
    ctx.moveTo(0, -r - 8); ctx.lineTo(0, -r + 3);
    ctx.moveTo(0, r - 3);  ctx.lineTo(0, r + 8);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0,229,255,0.8)'; ctx.beginPath(); ctx.arc(0, 0, 2.2, 0, Math.PI * 2); ctx.fill();

    if (hoveredNodeId) {
      const textY = -48 - pulse * 2;
      ctx.font = "11px 'Share Tech Mono'"; ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(255,255,255,0.9)'; ctx.shadowBlur = 14 + pulse * 8;
      ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.fillText('CLICK TO ENTER', 0, textY);
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.34)'; ctx.beginPath(); ctx.moveTo(-38, textY + 8); ctx.lineTo(38, textY + 8); ctx.stroke();
    } else if (idle) {
      const textY = -46 - idlePulse * 3;
      ctx.font = "10px 'Share Tech Mono'"; ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0,229,255,0.95)'; ctx.shadowBlur = 12 + idlePulse * 10;
      ctx.fillStyle = `rgba(200,246,255,${0.62 + idlePulse * 0.34})`;
      ctx.fillText('SCROLL TO SNAP  ·  DRAG TO PAN', 0, textY);
      ctx.shadowBlur = 0;
      ctx.strokeStyle = `rgba(0,229,255,${0.26 + idlePulse * 0.2})`;
      ctx.beginPath(); ctx.moveTo(-46, textY + 8); ctx.lineTo(46, textY + 8); ctx.stroke();
    }
    ctx.restore();
  }

  // ── Main draw loop ────────────────────────────────────────────────────────
  function drawCity() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const W = canvas.width, H = canvas.height;

    if (!isDragging) {
      clampCamera(targetCamera);
      camera.x    += (targetCamera.x    - camera.x)    * 0.08;
      camera.y    += (targetCamera.y    - camera.y)    * 0.08;
      camera.zoom += (targetCamera.zoom - camera.zoom) * 0.08;
      clampCamera(camera);
    }

    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#020712'); sky.addColorStop(0.55, '#061222'); sky.addColorStop(1, '#030912');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);

    drawRoadGrid();

    [...allBuildings]
      .sort((a, b) => (a.gy + a.gx * 0.02) - (b.gy + b.gx * 0.02))
      .forEach(drawBuilding);

    // Active node vignette
    const activeNode = cityNodes.find(n => n.projectId === activeNodeId);
    if (activeNode) {
      const scan = ctx.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, Math.max(W, H) * 0.55);
      scan.addColorStop(0, `rgba(${activeNode.rgb},0.08)`);
      scan.addColorStop(0.55, 'rgba(0,0,0,0)');
      scan.addColorStop(1, 'rgba(0,0,0,0.72)');
      ctx.fillStyle = scan; ctx.fillRect(0, 0, W, H);
    }

    // Edge fade bars
    ctx.fillStyle = 'rgba(3,9,18,0.28)';
    ctx.fillRect(0, 0, W, 78);
    ctx.fillRect(0, H - 78, W, 78);

    // Update hover
    if (pointerInside && !isDragging) {
      hoveredNodeId = (nearestVisibleNode(pointer.x, pointer.y) || { projectId: null }).projectId;
    }

    drawHoverGui();
    drawRadarCursor();
    cityAnimFrame = requestAnimationFrame(drawCity);
  }

  // ── Input events ──────────────────────────────────────────────────────────
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    if (wheelLocked) return;
    wheelLocked = true;
    snapFromSequence(e.deltaY >= 0 ? 1 : -1);
    setTimeout(() => { wheelLocked = false; }, 520);
  }, { passive: false });

  canvas.addEventListener('mousedown', e => {
    isDragging = true; didDrag = false;
    dragStart  = { x: e.clientX, y: e.clientY };
    cameraStart = { x: camera.x, y: camera.y };
  });

  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    pointerInside = true; lastPointerMove = performance.now();
    if (isDragging) {
      const dx = e.clientX - dragStart.x, dy = e.clientY - dragStart.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) didDrag = true;
      camera.x = cameraStart.x - dx / camera.zoom;
      camera.y = cameraStart.y - dy / camera.zoom;
      clampCamera(camera);
      targetCamera.x = camera.x; targetCamera.y = camera.y;
      clampCamera(targetCamera);
    }
  });

  window.addEventListener('mouseup', () => { isDragging = false; });
  canvas.addEventListener('mouseleave', () => { hoveredNodeId = null; pointerInside = false; });

  canvas.addEventListener('click', e => {
    if (didDrag) return;
    const rect = canvas.getBoundingClientRect();
    const node = nearestVisibleNode(e.clientX - rect.left, e.clientY - rect.top)
              || cityNodes.find(n => n.projectId === activeNodeId);
    if (node && filterState[node.category]) enterProjectBuilding(node.projectId);
  });

  // Touch support
  let lastTouchX = 0, lastTouchY = 0, touchStartX = 0, touchStartY = 0;
  canvas.addEventListener('touchstart', e => {
    const t = e.touches[0];
    touchStartX = lastTouchX = t.clientX; touchStartY = lastTouchY = t.clientY;
    isDragging = true; didDrag = false;
    dragStart = { x: t.clientX, y: t.clientY }; cameraStart = { x: camera.x, y: camera.y };
  }, { passive: true });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const t = e.touches[0];
    const dx = t.clientX - dragStart.x, dy = t.clientY - dragStart.y;
    if (Math.abs(dx) + Math.abs(dy) > 6) didDrag = true;
    camera.x = cameraStart.x - dx / camera.zoom;
    camera.y = cameraStart.y - dy / camera.zoom;
    clampCamera(camera);
    targetCamera.x = camera.x; targetCamera.y = camera.y;
    clampCamera(targetCamera);
    lastTouchX = t.clientX; lastTouchY = t.clientY;
  }, { passive: false });
  canvas.addEventListener('touchend', () => {
    isDragging = false;
    if (!didDrag) snapFromSequence(1);
  });

  // Directional map controller
  document.querySelectorAll('[data-map-nudge]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      nudgeCamera(btn.dataset.mapNudge);
    });
  });

  // Filter buttons
  document.querySelectorAll('.cfh-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      const activeCount = Object.values(filterState).filter(Boolean).length;
      if (filterState[key] && activeCount === 1) return;
      filterState[key] = !filterState[key];
      updateFilterHud();
      const seq = buildSnapSequence();
      if (!seq.includes(activeNodeId)) { snapIndex = 0; if (seq[0]) snapToNode(seq[0]); }
    });
  });

  window.addEventListener('resize', () => {
    targetCamera.zoom = snapZoom();
    clampCamera(targetCamera);
    clampCamera(camera);
    if (activeNodeId) snapToNode(activeNodeId, true);
  });

  // Boot
  updateFilterHud();
  const firstId = buildSnapSequence()[0];
  if (firstId) snapToNode(firstId, true);
  drawCity();
}

// ══════════════════════════════════════════
// BUILDING VIEW
// ══════════════════════════════════════════
function enterProjectBuilding(projectId) {
  const proj = PROJECTS.find(p => p.id === projectId);
  if (!proj) return;
  state.activeCategory   = proj.category;
  state.activeProjectIdx = getProjectsFor(proj.category).findIndex(p => p.id === projectId);
  state.activeFloor      = 0;
  renderBuilding();
  flash();
  setScene('building');
}

function renderBuilding() {
  const cat      = getCat(state.activeCategory);
  const projects = getProjectsFor(state.activeCategory);
  const proj     = projects[state.activeProjectIdx];

  state.activeFloor = 0;

  document.getElementById('bld-subtitle').textContent = cat.label.toUpperCase();
  document.getElementById('bld-subtitle').style.color = cat.color;
  document.getElementById('proj-cycle-label').textContent = `${state.activeProjectIdx + 1} / ${projects.length}`;

  const brpFloors = document.getElementById('brp-floors');
  brpFloors.innerHTML = '';

  const projectLabel = document.createElement('div');
  projectLabel.className = 'brp-label';
  projectLabel.textContent = 'PROJECT LIST';
  brpFloors.appendChild(projectLabel);

  const projectList = document.createElement('div');
  projectList.className = 'brp-section-block brp-project-list';
  projects.forEach((p, pi) => {
    const item = document.createElement('div');
    const isActive = pi === state.activeProjectIdx;
    item.className = 'brp-floor-item brp-project-item' + (isActive ? ' active' : '');
    if (isActive) {
      item.style.borderColor = `rgba(${cat.rgb},0.28)`;
      item.style.background  = `rgba(${cat.rgb},0.06)`;
      item.style.color       = cat.color;
    }
    item.innerHTML = `
      <div class="brp-dot" ${isActive ? `style="background:${cat.color};box-shadow:0 0 8px ${cat.color}"` : ''}></div>
      <span class="brp-floor-num">P${pi + 1}</span>
      <span class="brp-project-name">${p.title}</span>`;
    item.addEventListener('click', () => {
      state.activeProjectIdx = pi;
      state.activeFloor = 0;
      renderBuilding();
    });
    projectList.appendChild(item);
  });
  brpFloors.appendChild(projectList);

  const floorDivider = document.createElement('div');
  floorDivider.className = 'blp-divider';
  floorDivider.style.margin = '8px 0 12px';
  brpFloors.appendChild(floorDivider);

  const floorLabel = document.createElement('div');
  floorLabel.className = 'brp-label';
  floorLabel.textContent = `FLOOR OVERVIEW · ${proj.title.toUpperCase()}`;
  brpFloors.appendChild(floorLabel);

  FLOOR_DEFS.forEach((f, fi) => {
    const item = document.createElement('div');
    item.className = 'brp-floor-item brp-floor-nav-item' + (state.activeFloor === fi ? ' active' : '');
    item.dataset.floorNav = String(fi);
    item.innerHTML = `<div class="brp-dot"></div><span class="brp-floor-num">${f.num}</span><span class="brp-floor-name">${f.label}</span>`;
    item.addEventListener('click', () => jumpToFloor(fi));
    brpFloors.appendChild(item);
  });

  renderFloors(proj, cat);
}

function renderFloors(proj, cat) {
  const container = document.getElementById('floors-scroll');
  container.innerHTML = '';

  const floorAccents = [
    { color: '#00e5ff', rgb: '0,229,255' },
    { color: '#4fc3f7', rgb: '79,195,247' },
    { color: '#ff7c2a', rgb: '255,124,42' },
    { color: '#b39ddb', rgb: '179,157,219' },
    { color: '#69f0ae', rgb: '105,240,174' },
  ];

  FLOOR_DEFS.forEach((fd, fi) => {
    const fa    = floorAccents[fi];
    const floor = document.createElement('div');
    floor.className  = 'floor-room';
    floor.id         = `floor-room-${fi}`;
    floor.dataset.floor = fi;
    floor.style.setProperty('--floor-accent-color', fa.color);
    floor.style.setProperty('--floor-radial', `rgba(${fa.rgb},0.07)`);
    floor.style.background = `linear-gradient(180deg, rgba(${fa.rgb},0.04) 0%, var(--bg) 40%)`;
    floor.innerHTML = `
      <div class="floor-light-radial"></div>
      <div class="floor-badge">
        <div class="floor-num-label">${fd.num}</div>
        <div class="floor-name-vert">${fd.label}</div>
      </div>
      <div class="floor-content" id="fc-${fi}"></div>`;
    container.appendChild(floor);
    floor.querySelector(`#fc-${fi}`).innerHTML = buildFloorContent(fd.key, proj, fd, fa, cat);
  });

  // Scroll observer — keeps right nav in sync
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const idx = parseInt(e.target.dataset.floor);
      state.activeFloor = idx;
      document.querySelectorAll('#brp-floors .brp-floor-nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.floorNav === String(idx));
      });
    });
  }, { root: container, threshold: 0.5 });

  container.querySelectorAll('.floor-room').forEach(f => observer.observe(f));
}

function buildFloorContent(key, proj, fd, fa, cat) {
  const tag = `<div class="floor-section-tag">${fd.tag}</div>`;
  const titleRow = `
    <div class="floor-title-row">
      <div class="floor-title" style="color:${fa.color};text-shadow:0 0 25px rgba(${fa.rgb},0.4)">${fd.label}</div>
      <div class="floor-title-line" style="background:linear-gradient(90deg,${fa.color},transparent)"></div>
    </div>`;

  switch (key) {
    case 'overview': return `
      ${tag}${titleRow}
      <div class="metrics-row">
        ${proj.metrics.map(m => `
          <div class="metric-item">
            <div class="metric-val" style="color:${fa.color}">${m.val}</div>
            <div class="metric-lbl">${m.label}</div>
          </div>`).join('')}
      </div>
      <div class="floor-body">${proj.summary}</div>
      <div class="tech-tags" style="margin-top:12px">
        ${proj.techStack.map(t => `<div class="tech-tag">${t}</div>`).join('')}
      </div>
      <div style="margin-top:10px;font-family:'Share Tech Mono',monospace;font-size:9px;color:var(--text-dim);letter-spacing:1px;">ROLE // ${proj.role}</div>`;

    case 'process': return `
      ${tag}${titleRow}
      <div class="process-steps">
        ${proj.process.map(s => `
          <div class="step-item">
            <div class="step-num" style="color:${fa.color}">${s.step}</div>
            <div class="step-text">${s.text}</div>
          </div>`).join('')}
      </div>
      <div class="process-flow">
        ${['RESEARCH','PLAN','DESIGN','BUILD','TEST','REFINE'].map((n, i, arr) => `
          <div class="flow-node"><div class="flow-icon">◎</div>${n}</div>
          ${i < arr.length - 1 ? '<span class="flow-arrow">›</span>' : ''}`).join('')}
      </div>`;

    case 'challenges': return `
      ${tag}${titleRow}
      <div class="challenge-list">
        ${proj.challenges.map(c => `
          <div class="challenge-item">
            <div class="challenge-label">${c.label}</div>
            <div class="challenge-text">${c.text}</div>
          </div>`).join('')}
      </div>`;

    case 'skills': return `
      ${tag}${titleRow}
      <div class="skills-section">
        <div class="tech-stack-label">TECH STACK</div>
        <div class="tech-icons">
          ${proj.techIcons.map(t => `
            <div class="tech-icon-chip"><span>${t.icon}</span>${t.name}</div>`).join('')}
        </div>
        <div class="skills-chips">
          ${proj.skills.map(s => `
            <div class="skill-chip" style="color:${fa.color};border-color:rgba(${fa.rgb},0.25)">
              <span style="position:absolute;left:0;top:0;bottom:0;width:2px;background:${fa.color}"></span>
              ${s}
            </div>`).join('')}
        </div>
      </div>`;

    case 'proof': return `
      ${tag}${titleRow}
      <div class="floor-body">Links, demos, and case references for this project:</div>
      <div class="proof-links">
        ${proj.proof.map(p => `
          <a class="proof-link" href="${p.url}" style="color:${fa.color};border-color:rgba(${fa.rgb},0.25)" target="_blank">
            <div class="proof-dot" style="background:${fa.color};box-shadow:0 0 6px ${fa.color}"></div>
            ${p.label}
          </a>`).join('')}
      </div>
      <div class="tech-tags" style="margin-top:16px">
        ${proj.techStack.map(t => `<div class="tech-tag">${t}</div>`).join('')}
      </div>`;

    default: return '';
  }
}

function jumpToFloor(idx) {
  const el = document.getElementById(`floor-room-${idx}`);
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); state.activeFloor = idx; }
}

// ══════════════════════════════════════════
// NAVIGATION EVENTS
// ══════════════════════════════════════════
function initEvents() {

  // Take Flight
  document.getElementById('btn-takeoff').addEventListener('click', () => {
    setScene('flight'); flash();
    runFlightTransition(() => {
      setScene('city');
      if (cityAnimFrame === null) initCityMap();
    });
  });

  // Back to City
  document.getElementById('btn-back-city').addEventListener('click', () => { flash(); setScene('city'); });

  // Mobile building navigator drawer
  const drawerToggle = document.getElementById('building-drawer-toggle');
  const buildingPanel = document.querySelector('.bld-right-panel');
  if (drawerToggle && buildingPanel) {
    drawerToggle.addEventListener('click', () => {
      const open = buildingPanel.classList.toggle('drawer-open');
      drawerToggle.textContent = open ? 'CLOSE NAVIGATOR' : 'OPEN NAVIGATOR';
    });
  }

  // Project cycle
  document.getElementById('btn-prev-proj').addEventListener('click', () => {
    const projs = getProjectsFor(state.activeCategory);
    state.activeProjectIdx = (state.activeProjectIdx - 1 + projs.length) % projs.length;
    renderBuilding();
  });
  document.getElementById('btn-next-proj').addEventListener('click', () => {
    const projs = getProjectsFor(state.activeCategory);
    state.activeProjectIdx = (state.activeProjectIdx + 1) % projs.length;
    renderBuilding();
  });

  // Ping Pavao
  document.getElementById('ping-compact').addEventListener('click', () => {
    document.getElementById('ping-popup').classList.toggle('hidden');
    state.pingOpen = !state.pingOpen;
  });
  document.getElementById('pp-close').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('ping-popup').classList.add('hidden');
    state.pingOpen = false;
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (state.scene === 'building') {
      if (e.key === 'ArrowDown')  jumpToFloor(Math.min(state.activeFloor + 1, FLOOR_DEFS.length - 1));
      if (e.key === 'ArrowUp')    jumpToFloor(Math.max(state.activeFloor - 1, 0));
      if (e.key === 'Escape')     { flash(); setScene('city'); }
      if (e.key === 'ArrowRight') {
        const projs = getProjectsFor(state.activeCategory);
        state.activeProjectIdx = (state.activeProjectIdx + 1) % projs.length; renderBuilding();
      }
      if (e.key === 'ArrowLeft') {
        const projs = getProjectsFor(state.activeCategory);
        state.activeProjectIdx = (state.activeProjectIdx - 1 + projs.length) % projs.length; renderBuilding();
      }
    }
    if (state.scene === 'command' && e.key === 'Enter') document.getElementById('btn-takeoff').click();
  });
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildWave();
  initEvents();
  setScene('command');
});
