/* app.js — PAVAO PORTFOLIO SYSTEM */
'use strict';

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const IDENTITY = {
  name: 'Pavao', age: 20, location: 'Earth',
  education: 'B.S. Computer Science — University of the People',
  mission: 'Design digital experiences that inspire and solve real world problems.',
  traits: ['Ambitious','Analytical','Persistent','Creative','Detail-Oriented','Future-Focused'],
  hobbies: ['Coding','UI / UX Design','3D & Digital Art','Gaming','Music Production','Fitness'],
};

const CATEGORIES = [
  { id:'garage', label:'Garage District', sub:'WEB DESIGN & INTERACTIVE', color:'#00e5ff', rgb:'0,229,255' },
  { id:'arcade', label:'Arcade Tower',    sub:'GAME DESIGN & PLAY',        color:'#ff2d78', rgb:'255,45,120' },
  { id:'fab',    label:'Fabrication Lab', sub:'3D & DIGITAL ART',          color:'#ff7c2a', rgb:'255,124,42' },
];

const PROJECTS = [
  // GARAGE
  { id:'p1', category:'garage',
    title:'NeoStore Commerce',
    summary:'Full-stack e-commerce platform for a fashion label — real-time inventory, cart persistence, custom CMS. Shipped to production in 6 weeks.',
    role:'Lead Developer',
    process:[
      {step:'01',text:'Mapped stakeholder requirements across inventory, checkout, and admin workflows.'},
      {step:'02',text:'Designed a component library in Figma with a strict 4pt grid and accessible contrast ratios.'},
      {step:'03',text:'Built API-first architecture with Next.js decoupled from Headless Shopify.'},
      {step:'04',text:'Implemented incremental static regeneration for sub-100ms load times across 2,000+ SKUs.'},
    ],
    challenges:[
      {label:'PERFORMANCE',text:'4K product photo delivery without quality loss — solved via AVIF pipeline + blur-up placeholders.'},
      {label:'REAL-TIME STOCK',text:'Race conditions on flash sales — resolved with optimistic locking in PostgreSQL.'},
    ],
    skills:['Next.js','TypeScript','Tailwind CSS','PostgreSQL','Shopify API','Vercel Edge','Figma'],
    techStack:['Next.js 14','TypeScript','Prisma ORM','Shopify Storefront API'],
    metrics:[{val:'94',label:'Perf Score'},{val:'2.8s',label:'LCP'},{val:'+34%',label:'Conversion'}],
    proof:[{label:'LIVE DEMO',url:'#'},{label:'GITHUB',url:'#'},{label:'CASE STUDY',url:'#'}],
    techIcons:[{icon:'⚛',name:'Next'},{icon:'TS',name:'Types'},{icon:'🛒',name:'Shopify'},{icon:'🐘',name:'PG'}],
  },
  { id:'p2', category:'garage',
    title:'Atlas Dashboard',
    summary:'SaaS data dashboard for logistics. Real-time fleet tracking, anomaly detection, 50k+ daily events via WebSocket.',
    role:'Frontend Architect',
    process:[
      {step:'01',text:'Conducted user interviews with 8 logistics coordinators to map critical decision flows.'},
      {step:'02',text:'Prototyped IA using card-sorting with 14 participants.'},
      {step:'03',text:'Built custom WebSocket event bus for live fleet positions at 10Hz.'},
      {step:'04',text:'Reusable D3 chart system with accessible color palettes and CSV/PDF export.'},
    ],
    challenges:[
      {label:'DATA VOLUME',text:'50k map markers without frame drops — canvas clustering with LOD switching.'},
      {label:'CONTEXT',text:'Macro + micro views needed simultaneously — pinnable drawer system.'},
    ],
    skills:['React','D3.js','WebSockets','Mapbox GL','Python','Redis','AWS'],
    techStack:['React 18','D3.js v7','Mapbox GL','Redis Pub/Sub','FastAPI'],
    metrics:[{val:'50k',label:'Events/Day'},{val:'10Hz',label:'Refresh'},{val:'99.8%',label:'Uptime'}],
    proof:[{label:'LIVE DEMO',url:'#'},{label:'GITHUB',url:'#'}],
    techIcons:[{icon:'⚛',name:'React'},{icon:'D3',name:'D3.js'},{icon:'🗺',name:'Mapbox'},{icon:'⚡',name:'Redis'}],
  },
  // ARCADE
  { id:'p3', category:'arcade',
    title:'Gridlock Tactics',
    summary:'Browser-based turn-based strategy game. 12-level campaign, procedural map gen, AI opponent via minimax alpha-beta pruning.',
    role:'Solo Developer & Designer',
    process:[
      {step:'01',text:'Designed core game loop on paper before writing any code.'},
      {step:'02',text:'Canvas 2D tile renderer optimized for 60fps on mid-range mobile.'},
      {step:'03',text:'Procedural map generation with BSP tree room placement.'},
      {step:'04',text:'AI difficulty tuned through 200+ playtests with ELO-style scaler.'},
    ],
    challenges:[
      {label:'AI BALANCE',text:'Early AI extremes fixed with bounded lookahead depth scaling per difficulty tier.'},
      {label:'PERFORMANCE',text:'Fog-of-war overdraw fixed via dirty-rect rendering and frustum culling.'},
    ],
    skills:['Vanilla JS','Canvas 2D','Game AI','Procedural Gen','Web Audio API'],
    techStack:['Vanilla JS','HTML5 Canvas','Web Audio API','Webpack'],
    metrics:[{val:'12',label:'Levels'},{val:'60fps',label:'Target'},{val:'4.8★',label:'Rating'}],
    proof:[{label:'PLAY GAME',url:'#'},{label:'SOURCE CODE',url:'#'},{label:'DEV LOG',url:'#'}],
    techIcons:[{icon:'JS',name:'Vanilla'},{icon:'🎮',name:'Canvas'},{icon:'🤖',name:'AI'},{icon:'🔊',name:'Audio'}],
  },
  { id:'p4', category:'arcade',
    title:'Voidrun',
    summary:'Procedurally generated endless runner with rhythm mechanics. Obstacles sync to adaptive soundtrack. Built in 48 hours for a game jam.',
    role:'Developer + Sound Designer',
    process:[
      {step:'01',text:'Scoped vertical slice in first 4 hours — one mechanic, one level, one loop.'},
      {step:'02',text:'Beat-mapping via Web Audio Analyser API frequency data.'},
      {step:'03',text:'Obstacle generation tuned to musical phrase boundaries.'},
      {step:'04',text:'Post-jam: CRT shader, screen shake, global leaderboard.'},
    ],
    challenges:[
      {label:'AUDIO SYNC',text:'Web Audio latency desync fixed with predictive offset calibration.'},
      {label:'JAM SCOPE',text:'Feature creep at hour 20 — hard cut to essentials, shipped tight core loop.'},
    ],
    skills:['JavaScript','Web Audio API','Canvas 2D','GLSL Shaders','Node.js'],
    techStack:['Vanilla JS','Web Audio API','WebGL','Socket.io'],
    metrics:[{val:'48h',label:'Build Time'},{val:'#3',label:'Jam Rank'},{val:'1.2k',label:'Players'}],
    proof:[{label:'PLAY GAME',url:'#'},{label:'SOURCE CODE',url:'#'}],
    techIcons:[{icon:'JS',name:'JS'},{icon:'🔊',name:'Audio'},{icon:'▦',name:'WebGL'},{icon:'⚡',name:'Socket'}],
  },
  // FAB
  { id:'p5', category:'fab',
    title:'Mech Unit 7',
    summary:'Hard-surface mechanical character modeled & rigged in Blender. PBR materials, animated combat cycles, real-time Three.js export.',
    role:'Lead 3D Artist',
    process:[
      {step:'01',text:'200+ reference photos, concept sketches for silhouette design.'},
      {step:'02',text:'Blockout + proportion pass before committing to detail.'},
      {step:'03',text:'Retopology to 24k tris. Normal baking from 2.1M poly sculpt.'},
      {step:'04',text:'62-bone rig with hydraulic FK/IK blend for procedural secondary motion.'},
    ],
    challenges:[
      {label:'POLY BUDGET',text:'24k tris for mobile WebGL — trim sheets and tiling materials for complexity.'},
      {label:'ANIMATION',text:'Hydraulic piston constraints solved with drivers and custom bone constraints.'},
    ],
    skills:['Blender','Substance Painter','Three.js','GLSL','PBR Pipeline','Retopology'],
    techStack:['Blender 4.0','Substance Painter','Three.js r160','glTF 2.0'],
    metrics:[{val:'24k',label:'Triangles'},{val:'4K',label:'Textures'},{val:'62',label:'Bones'}],
    proof:[{label:'VIEW MODEL',url:'#'},{label:'ARTSTATION',url:'#'},{label:'PROCESS',url:'#'}],
    techIcons:[{icon:'🟠',name:'Blender'},{icon:'🎨',name:'Subst.'},{icon:'▲',name:'Three'},{icon:'✦',name:'glTF'}],
  },
  { id:'p6', category:'fab',
    title:'Brutalist City Render',
    summary:'12-piece architectural visualization series. Brutalist megastructures in speculative futures. Exhibited digitally — 3,400 visitors.',
    role:'Artist & Creative Director',
    process:[
      {step:'01',text:'Research: Chandigarh, La Muralla Roja, Soviet constructivism as anchors.'},
      {step:'02',text:'Massing models via Blender Geometry Nodes for fast parametric iteration.'},
      {step:'03',text:'HDRI pipeline with custom area lights for dramatic directional contrast.'},
      {step:'04',text:'Post-processing in Darktable: grain, CA, vignette, per-piece color grading.'},
    ],
    challenges:[
      {label:'RENDER TIME',text:'4–8h CPU render per scene — adaptive sampling + denoising → 45min.'},
      {label:'COHESION',text:'12 diverse scenes unified via strict upfront lighting + palette system.'},
    ],
    skills:['Blender Cycles','Geometry Nodes','HDRI Lighting','Color Grading','Darktable'],
    techStack:['Blender 4.1','Cycles X','Darktable 4.6','Geometry Nodes'],
    metrics:[{val:'12',label:'Renders'},{val:'3.4k',label:'Views'},{val:'8K',label:'Res'}],
    proof:[{label:'GALLERY',url:'#'},{label:'ARTSTATION',url:'#'}],
    techIcons:[{icon:'🟠',name:'Blender'},{icon:'☀',name:'Cycles'},{icon:'📷',name:'Darkroom'},{icon:'⬡',name:'Nodes'}],
  },
];

const FLOOR_DEFS = [
  {num:'F1', key:'overview',   label:'OVERVIEW',    tag:'PROJECT_OVERVIEW'},
  {num:'F2', key:'process',    label:'PROCESS',     tag:'BUILD_PROCESS'},
  {num:'F3', key:'challenges', label:'CHALLENGES',  tag:'CONSTRAINTS'},
  {num:'F4', key:'skills',     label:'SKILLS',      tag:'TECH_STACK'},
  {num:'F5', key:'proof',      label:'PROOF',       tag:'DELIVERABLES'},
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let state = {
  scene: 'command',     // command | flight | city | building
  activeCategory: null,
  activeProjectIdx: 0,
  activeFloor: 0,
  hoveredDistrict: null,
  pingOpen: false,
};

// District screen positions for city map (set after canvas draw)
let districtPositions = {};

// ══════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════
function rnd(a,b) { return Math.floor(Math.random()*(b-a+1))+a; }
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

// ══════════════════════════════════════════
// TIMERS
// ══════════════════════════════════════════
let startTime = Date.now();
function formatTimer(ms) {
  const s = Math.floor(ms/1000);
  const h = String(Math.floor(s/3600)).padStart(2,'0');
  const m = String(Math.floor((s%3600)/60)).padStart(2,'0');
  const sec = String(s%60).padStart(2,'0');
  return `[ ${h}:${m}:${sec} ]`;
}
setInterval(() => {
  const t = formatTimer(Date.now() - startTime);
  ['cmd-timer','city-timer','bld-timer'].forEach(id => {
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
    const h = rnd(4, 24);
    b.style.height = h + 'px';
    b.style.setProperty('--dur', (0.4 + Math.random() * 0.8) + 's');
    b.style.setProperty('--del', (Math.random() * 0.8) + 's');
    el.appendChild(b);
  }
}

// ══════════════════════════════════════════
// SKYLINE CANVAS (command room background)
// ══════════════════════════════════════════
function initSkyline() {
  const canvas = document.getElementById('skyline-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function draw() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const W = canvas.width, H = canvas.height;

    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#020810');
    sky.addColorStop(0.6, '#04111f');
    sky.addColorStop(1, '#061828');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // Stars
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * W, y = Math.random() * H * 0.6;
      const r = Math.random() * 1 + 0.3;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.5+0.1})`;
      ctx.fill();
    }

    // Buildings - 3 depth layers
    [
      {count:28, hMin:60, hMax:180, wMin:18, wMax:55, alpha:0.25, yBase:H},
      {count:20, hMin:80, hMax:260, wMin:22, wMax:70, alpha:0.5,  yBase:H},
      {count:14, hMin:100,hMax:300, wMin:28, wMax:80, alpha:0.75, yBase:H},
    ].forEach(layer => {
      let x = 0;
      for (let i = 0; i < layer.count; i++) {
        const w = rnd(layer.wMin, layer.wMax);
        const h = rnd(layer.hMin, layer.hMax);
        const lum = rnd(8, 18);
        ctx.fillStyle = `hsla(215,28%,${lum}%,${layer.alpha})`;
        ctx.fillRect(x, H - h, w, h);
        // Windows
        for (let wy = H - h + 8; wy < H - 6; wy += rnd(14,20)) {
          for (let wx = x + 4; wx < x + w - 6; wx += rnd(9,14)) {
            if (Math.random() < 0.4) {
              const t = Math.random();
              ctx.fillStyle = t < 0.5
                ? `rgba(255,200,80,${Math.random()*0.6+0.2})`
                : t < 0.75
                  ? `rgba(0,229,255,${Math.random()*0.4+0.1})`
                  : `rgba(255,255,255,${Math.random()*0.2+0.05})`;
              ctx.fillRect(wx, wy, rnd(3,6), rnd(4,7));
            }
          }
        }
        x += w + rnd(2,8);
        if (x > W) break;
      }
    });

    // Ground glow
    const grd = ctx.createLinearGradient(0, H-80, 0, H);
    grd.addColorStop(0, 'transparent');
    grd.addColorStop(1, 'rgba(0,229,255,0.04)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, H-80, W, 80);
  }

  draw();
  window.addEventListener('resize', draw);
}

// ══════════════════════════════════════════
// GLOBE CANVAS (command room hologram)
// ══════════════════════════════════════════
function initGlobe() {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let angle = 0;

  function drawGlobe() {
    const W = canvas.width, H = canvas.height;
    const cx = W/2, cy = H/2, r = W/2 - 4;
    ctx.clearRect(0, 0, W, H);

    // Sphere gradient
    const grad = ctx.createRadialGradient(cx-r*0.3, cy-r*0.3, r*0.1, cx, cy, r);
    grad.addColorStop(0, 'rgba(0,80,120,0.6)');
    grad.addColorStop(0.6, 'rgba(0,30,60,0.8)');
    grad.addColorStop(1, 'rgba(0,10,30,0.95)');
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.fillStyle = grad; ctx.fill();

    // Latitude lines
    ctx.strokeStyle = 'rgba(0,229,255,0.2)'; ctx.lineWidth = 0.5;
    for (let lat = -80; lat <= 80; lat += 20) {
      const y = cy + r * Math.sin(lat * Math.PI/180);
      const rLat = r * Math.cos(lat * Math.PI/180);
      ctx.beginPath(); ctx.ellipse(cx, y, rLat, rLat*0.18, 0, 0, Math.PI*2);
      ctx.stroke();
    }

    // Longitude lines (rotating)
    for (let lng = 0; lng < 360; lng += 30) {
      const a = (lng + angle) * Math.PI/180;
      ctx.beginPath();
      for (let lat2 = -90; lat2 <= 90; lat2 += 3) {
        const cosLat = Math.cos(lat2 * Math.PI/180);
        const x2 = cx + r * Math.cos(a) * cosLat;
        const y2 = cy + r * Math.sin(lat2 * Math.PI/180);
        if (lat2 === -90) ctx.moveTo(x2, y2); else ctx.lineTo(x2, y2);
      }
      ctx.strokeStyle = 'rgba(0,229,255,0.15)'; ctx.lineWidth = 0.5; ctx.stroke();
    }

    // Continents (simplified dots)
    const continentPoints = [
      [-0.2,0.1],[0,0.05],[0.15,-0.1],[0.25,0.15],[-0.3,-0.1],[-0.15,0.25],
      [0.35,0],[-0.1,-0.2],[0.1,0.3],[-0.25,0.35],[0.3,-0.2],[0.05,-0.3],
      [-0.4,0.1],[0.2,0.4],[-0.2,-0.35],[0.4,0.15],[0.1,-0.15],[-0.35,-0.25],
    ];
    const aRad = angle * Math.PI/180;
    continentPoints.forEach(([lx, ly]) => {
      const rx = cx + r * (lx * Math.cos(aRad*0.3) + 0.15);
      const ry = cy + r * ly;
      if (rx > cx - r && rx < cx + r) {
        ctx.beginPath(); ctx.arc(rx, ry, rnd(3,7), 0, Math.PI*2);
        ctx.fillStyle = 'rgba(0,160,180,0.35)'; ctx.fill();
      }
    });

    // Equator highlight
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r*0.18, 0, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(0,229,255,0.4)'; ctx.lineWidth = 1; ctx.stroke();

    // Outer ring glow
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(0,229,255,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();

    // Clip circle
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.clip();

    angle += 0.25;
    requestAnimationFrame(drawGlobe);
  }
  drawGlobe();
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

    // City grid zoom effect
    const scale = 1 + progress * 3;
    const gridSize = 80;
    ctx.save();
    ctx.translate(W/2, H/2);
    ctx.scale(scale, scale);
    ctx.translate(-W/2, -H/2);
    ctx.globalAlpha = Math.max(0, 1 - progress * 1.5);

    ctx.strokeStyle = 'rgba(0,229,255,0.15)'; ctx.lineWidth = 1;
    for (let x = -W; x < W*2; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, -H); ctx.lineTo(x, H*2); ctx.stroke();
    }
    for (let y = -H; y < H*2; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(-W, y); ctx.lineTo(W*2, y); ctx.stroke();
    }
    ctx.restore();

    // Speed lines
    ctx.globalAlpha = progress;
    for (let i = 0; i < 40; i++) {
      const angle = (i/40) * Math.PI * 2;
      const len = 50 + progress * 200;
      const startR = 20 + progress * 60;
      ctx.beginPath();
      ctx.moveTo(W/2 + Math.cos(angle)*startR, H/2 + Math.sin(angle)*startR);
      ctx.lineTo(W/2 + Math.cos(angle)*(startR+len), H/2 + Math.sin(angle)*(startR+len));
      ctx.strokeStyle = `rgba(0,229,255,${0.3 - progress*0.2})`;
      ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.globalAlpha = 1;

    progress += 0.018;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      onComplete();
    }
  }
  tick();
}

// ══════════════════════════════════════════
// CITY MAP CANVAS
// ══════════════════════════════════════════
let cityMapData = null;
let cityScrollOffset = 0;
let cityTargetScroll = 0;
let cityAnimFrame = null;
const DISTRICT_GRID_POSITIONS = [
  { cat:'garage', gx:2, gy:4 },
  { cat:'arcade', gx:5, gy:3 },
  { cat:'fab',    gx:8, gy:5 },
];

function initCityMap() {
  const canvas = document.getElementById('city-map-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Pre-generate block data
  if (!cityMapData) {
    cityMapData = [];
    const COLS = 12, ROWS = 10;
    for (let gy = 0; gy < ROWS; gy++) {
      for (let gx = 0; gx < COLS; gx++) {
        if (Math.random() < 0.06) continue;
        const bw = rnd(28, 80);
        const bh = rnd(28, 80);
        const ox = rnd(4, 110 - bw - 4);
        const oy = rnd(4, 110 - bh - 4);
        const lum = rnd(10, 20);
        const wins = [];
        const wCols = Math.floor(bw/10), wRows = Math.floor(bh/10);
        for (let r = 0; r < wRows; r++) {
          for (let c = 0; c < wCols; c++) {
            if (Math.random() < 0.4) {
              wins.push({c, r, type: Math.random() < 0.5 ? 'amber' : Math.random() < 0.5 ? 'cyan' : 'white'});
            }
          }
        }
        cityMapData.push({gx, gy, bw, bh, ox, oy, lum, wins, isDistrict: false, districtCat: null});
      }
    }
    // Mark district buildings
    DISTRICT_GRID_POSITIONS.forEach(dp => {
      const existing = cityMapData.find(b => b.gx === dp.gx && b.gy === dp.gy);
      if (existing) {
        existing.isDistrict = true; existing.districtCat = dp.cat;
        existing.bw = 70; existing.bh = 70; existing.ox = 22; existing.oy = 22;
      } else {
        cityMapData.push({gx:dp.gx, gy:dp.gy, bw:70, bh:70, ox:22, oy:22, lum:18, wins:[], isDistrict:true, districtCat:dp.cat});
      }
    });
  }

  function getCellSize() {
    return Math.min(window.innerWidth / 13, window.innerHeight / 11, 100);
  }

  function drawCity(scrollY) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const W = canvas.width, H = canvas.height;
    const cellSize = getCellSize();
    const totalGridH = cellSize * 10;
    const totalGridW = cellSize * 12;
    const startX = (W - totalGridW) / 2;
    const startY = (H - totalGridH) / 2 + scrollY;

    ctx.fillStyle = '#030912'; ctx.fillRect(0,0,W,H);

    // Road grid
    ctx.strokeStyle = 'rgba(15,35,60,0.9)'; ctx.lineWidth = cellSize * 0.3;
    for (let gx = 0; gx <= 12; gx++) {
      ctx.beginPath(); ctx.moveTo(startX+gx*cellSize, 0); ctx.lineTo(startX+gx*cellSize, H);
      ctx.stroke();
    }
    for (let gy = 0; gy <= 10; gy++) {
      ctx.beginPath(); ctx.moveTo(0, startY+gy*cellSize); ctx.lineTo(W, startY+gy*cellSize);
      ctx.stroke();
    }

    // Road center lines
    ctx.strokeStyle = 'rgba(0,229,255,0.06)'; ctx.lineWidth = 1;
    for (let gx = 0; gx <= 12; gx++) {
      ctx.beginPath(); ctx.moveTo(startX+gx*cellSize, 0); ctx.lineTo(startX+gx*cellSize, H);
      ctx.stroke();
    }
    for (let gy = 0; gy <= 10; gy++) {
      ctx.beginPath(); ctx.moveTo(0, startY+gy*cellSize); ctx.lineTo(W, startY+gy*cellSize);
      ctx.stroke();
    }

    // Intersection dots
    for (let gx = 0; gx <= 12; gx++) {
      for (let gy = 0; gy <= 10; gy++) {
        ctx.beginPath(); ctx.arc(startX+gx*cellSize, startY+gy*cellSize, 2, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(0,229,255,0.12)'; ctx.fill();
      }
    }

    // Buildings
    cityMapData.forEach(b => {
      const bx = startX + b.gx * cellSize + b.ox * (cellSize/110);
      const by = startY + b.gy * cellSize + b.oy * (cellSize/110);
      const bw2 = b.bw * (cellSize/110);
      const bh2 = b.bh * (cellSize/110);

      if (b.isDistrict) {
        const cat = CATEGORIES.find(c => c.id === b.districtCat);
        const isActive = state.hoveredDistrict === b.districtCat;
        const alpha = isActive ? 1.0 : 0.7;

        // Shadow
        ctx.fillStyle = `rgba(0,0,0,0.4)`;
        ctx.fillRect(bx+4, by+4, bw2, bh2);

        // Main body
        ctx.fillStyle = `rgba(${cat.rgb},0.12)`;
        ctx.fillRect(bx, by, bw2, bh2);

        // Outer glow rings (concentric)
        for (let ring = 0; ring < 4; ring++) {
          const expand = (ring+1) * (cellSize * 0.06);
          ctx.strokeStyle = `rgba(${cat.rgb},${(0.6 - ring*0.13) * alpha})`;
          ctx.lineWidth = isActive ? 2 - ring*0.3 : 1.5 - ring*0.25;
          ctx.strokeRect(bx - expand, by - expand, bw2 + expand*2, bh2 + expand*2);
        }

        // Center dot
        ctx.beginPath(); ctx.arc(bx+bw2/2, by+bh2/2, isActive?5:3, 0, Math.PI*2);
        ctx.fillStyle = cat.color; ctx.fill();
        if (isActive) {
          ctx.beginPath(); ctx.arc(bx+bw2/2, by+bh2/2, 10, 0, Math.PI*2);
          ctx.strokeStyle = cat.color; ctx.lineWidth = 1; ctx.globalAlpha=0.4; ctx.stroke();
          ctx.globalAlpha=1;
        }

        // Line from center to label
        ctx.beginPath();
        ctx.moveTo(bx+bw2/2, by - 4);
        ctx.lineTo(bx+bw2/2, by - 24);
        ctx.strokeStyle = `rgba(${cat.rgb},0.5)`; ctx.lineWidth = 1; ctx.stroke();

        // Store screen position for tag labels
        districtPositions[b.districtCat] = {
          x: bx + bw2/2,
          y: by - 28,
        };

      } else {
        // Normal building
        ctx.fillStyle = `rgba(0,0,0,0.3)`;
        ctx.fillRect(bx+2, by+2, bw2, bh2);
        ctx.fillStyle = `hsl(215,${rnd(16,26)}%,${b.lum}%)`;
        ctx.fillRect(bx, by, bw2, bh2);

        // Rooftop
        ctx.fillStyle = `hsl(215,20%,${b.lum+5}%)`;
        ctx.fillRect(bx+1, by+1, bw2-2, bh2-2);

        // Windows
        b.wins.forEach(w => {
          const wx = bx + 2 + w.c * (bw2/Math.floor(b.bw/10));
          const wy = by + 2 + w.r * (bh2/Math.floor(b.bh/10));
          if (wx+4>bx+bw2-2||wy+4>by+bh2-2) return;
          ctx.fillStyle = w.type==='amber'
            ? `rgba(255,200,80,${Math.random()*0.4+0.2})`
            : w.type==='cyan'
              ? `rgba(0,229,255,${Math.random()*0.3+0.1})`
              : `rgba(255,255,255,0.1)`;
          ctx.fillRect(wx, wy, 3, 3);
        });
      }
    });

    // Vignette
    const vig = ctx.createRadialGradient(W/2,H/2,H*0.2,W/2,H/2,H*0.7);
    vig.addColorStop(0,'transparent');
    vig.addColorStop(1,'rgba(3,9,18,0.75)');
    ctx.fillStyle = vig; ctx.fillRect(0,0,W,H);

    // Update label positions
    updateDistrictLabels();
  }

  // Animated draw loop
  function cityLoop() {
    // Smooth scroll interpolation
    cityScrollOffset += (cityTargetScroll - cityScrollOffset) * 0.1;
    drawCity(cityScrollOffset);
    cityAnimFrame = requestAnimationFrame(cityLoop);
  }

  // Position district tag HTML elements
  function updateDistrictLabels() {
    Object.entries(districtPositions).forEach(([catId, pos]) => {
      const tag = document.getElementById('tag-' + catId);
      if (!tag) return;
      tag.style.left = pos.x + 'px';
      tag.style.top = pos.y + 'px';
    });
  }

  cityLoop();

  // Scroll to navigate buildings
  let activeDistIdx = -1;
  const ORDERED_DISTS = ['garage', 'arcade', 'fab'];
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    if (e.deltaY > 30) {
      activeDistIdx = Math.min(activeDistIdx+1, ORDERED_DISTS.length-1);
    } else if (e.deltaY < -30) {
      activeDistIdx = Math.max(activeDistIdx-1, 0);
    }
    state.hoveredDistrict = ORDERED_DISTS[activeDistIdx];
    updateTagStyles();

    // Auto-scroll so active building is centered
    const cellSize = getCellSize();
    const dp = DISTRICT_GRID_POSITIONS.find(d => d.cat === state.hoveredDistrict);
    if (dp) {
      const totalGridH = cellSize * 10;
      const targetCenterY = cellSize * (dp.gy + 0.5);
      const viewCenter = window.innerHeight / 2;
      cityTargetScroll = -(targetCenterY - (totalGridH/2)) * 0.4;
    }
  }, {passive:false});

  // Hover district on mouse
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    let found = null;
    Object.entries(districtPositions).forEach(([catId, pos]) => {
      if (Math.abs(mx-pos.x) < 55 && Math.abs(my-pos.y) < 55) found = catId;
    });
    state.hoveredDistrict = found;
    updateTagStyles();
    canvas.style.cursor = found ? 'pointer' : 'crosshair';
  });

  canvas.addEventListener('click', e => {
    if (state.hoveredDistrict) enterBuilding(state.hoveredDistrict);
  });

  // District tag clicks
  document.querySelectorAll('.district-tag').forEach(tag => {
    tag.addEventListener('click', () => enterBuilding(tag.dataset.cat));
    tag.addEventListener('mouseenter', () => { state.hoveredDistrict = tag.dataset.cat; updateTagStyles(); });
    tag.addEventListener('mouseleave', () => { state.hoveredDistrict = null; updateTagStyles(); });
  });

  function updateTagStyles() {
    document.querySelectorAll('.district-tag').forEach(tag => {
      const active = tag.dataset.cat === state.hoveredDistrict;
      tag.classList.toggle('inactive', !active && state.hoveredDistrict !== null);
      tag.classList.toggle('pulsing', active);
    });
  }

  window.addEventListener('resize', () => drawCity(cityScrollOffset));
}

// ══════════════════════════════════════════
// BUILDING VIEW
// ══════════════════════════════════════════
function enterBuilding(catId) {
  state.activeCategory = catId;
  state.activeProjectIdx = 0;
  state.activeFloor = 0;
  renderBuilding();
  flash();
  setScene('building');
}

function renderBuilding() {
  const cat = CATEGORIES.find(c => c.id === state.activeCategory);
  const projects = PROJECTS.filter(p => p.category === state.activeCategory);
  const project = projects[state.activeProjectIdx];

  // Header subtitle
  document.getElementById('bld-subtitle').textContent = `${cat.label.toUpperCase()} · ${cat.sub}`;
  document.getElementById('bld-subtitle').style.color = cat.color;

  // Project counter
  document.getElementById('proj-cycle-label').textContent = `${state.activeProjectIdx+1} / ${projects.length}`;

  // Right nav panel
  const brpFloors = document.getElementById('brp-floors');
  brpFloors.innerHTML = '';

  // Category nav dots at top
  const catNav = document.createElement('div');
  catNav.style.cssText = 'margin-bottom:16px;display:flex;flex-direction:column;gap:4px;';
  CATEGORIES.forEach(c => {
    const item = document.createElement('div');
    item.className = 'brp-floor-item' + (c.id === state.activeCategory ? ' active' : '');
    item.style.setProperty('--cyan', c.color);
    if (c.id === state.activeCategory) {
      item.style.borderColor = `rgba(${c.rgb},0.2)`;
      item.style.background = `rgba(${c.rgb},0.06)`;
      item.style.color = c.color;
    }
    item.innerHTML = `
      <div class="brp-dot" ${c.id===state.activeCategory?`style="background:${c.color};box-shadow:0 0 8px ${c.color}"`:''} ></div>
      <span style="font-family:'Orbitron',monospace;font-size:10px;letter-spacing:1px">${c.label}</span>`;
    item.addEventListener('click', () => { state.activeCategory = c.id; state.activeProjectIdx=0; renderBuilding(); });
    catNav.appendChild(item);
  });
  brpFloors.appendChild(catNav);

  const divider = document.createElement('div');
  divider.className = 'blp-divider'; divider.style.margin = '8px 0 12px';
  brpFloors.appendChild(divider);

  // Floor list
  const floorLabel = document.createElement('div');
  floorLabel.className = 'brp-label'; floorLabel.textContent = 'FLOORS';
  brpFloors.appendChild(floorLabel);

  FLOOR_DEFS.forEach((f, fi) => {
    const item = document.createElement('div');
    item.className = 'brp-floor-item' + (state.activeFloor === fi ? ' active' : '');
    item.innerHTML = `
      <div class="brp-dot"></div>
      <span class="brp-floor-num">${f.num}</span>
      <span class="brp-floor-name">${f.label}</span>`;
    item.addEventListener('click', () => jumpToFloor(fi));
    brpFloors.appendChild(item);
  });

  // Render floors
  renderFloors(project, cat);
}

function renderFloors(project, cat) {
  const container = document.getElementById('floors-scroll');
  container.innerHTML = '';

  const floorAccents = [
    {color:'#00e5ff', rgb:'0,229,255'},
    {color:'#4fc3f7', rgb:'79,195,247'},
    {color:'#ff7c2a', rgb:'255,124,42'},
    {color:'#b39ddb', rgb:'179,157,219'},
    {color:'#69f0ae', rgb:'105,240,174'},
  ];

  FLOOR_DEFS.forEach((fd, fi) => {
    const fa = floorAccents[fi];
    const floor = document.createElement('div');
    floor.className = 'floor-room';
    floor.id = `floor-room-${fi}`;
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
      <div class="floor-content" id="fc-${fi}"></div>
    `;
    container.appendChild(floor);

    // Fill content
    const fc = floor.querySelector(`#fc-${fi}`);
    fc.innerHTML = buildFloorContent(fd.key, project, fd, fa, cat);
  });

  // Scroll observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.floor);
        state.activeFloor = idx;
        // Update floor nav
        document.querySelectorAll('#brp-floors .brp-floor-item').forEach((el, i) => {
          // Only floor items (skip category items at top — approximate)
          el.classList.remove('active');
        });
        const floorItems = document.querySelectorAll('#brp-floors .brp-floor-item');
        // floor items start after category items (3) + divider label = index 4+
        const fli = floorItems[CATEGORIES.length + 2 + idx]; // +2 for divider+label
        if (fli) fli.classList.add('active');
      }
    });
  }, { root: container, threshold: 0.5 });
  container.querySelectorAll('.floor-room').forEach(f => observer.observe(f));
}

function buildFloorContent(key, project, fd, fa, cat) {
  const tag = `<div class="floor-section-tag">${fd.tag}</div>`;
  const titleRow = `<div class="floor-title-row">
    <div class="floor-title" style="color:${fa.color};text-shadow:0 0 25px rgba(${fa.rgb},0.4)">${fd.label}</div>
    <div class="floor-title-line" style="background:linear-gradient(90deg,${fa.color},transparent)"></div>
  </div>`;

  switch(key) {
    case 'overview': return `
      ${tag}${titleRow}
      <div class="metrics-row">
        ${project.metrics.map(m => `<div class="metric-item">
          <div class="metric-val" style="color:${fa.color}">${m.val}</div>
          <div class="metric-lbl">${m.label}</div>
        </div>`).join('')}
      </div>
      <div class="floor-body">${project.summary}</div>
      <div class="tech-tags" style="margin-top:12px">
        ${project.techStack.map(t => `<div class="tech-tag">${t}</div>`).join('')}
      </div>
      <div style="margin-top:10px;font-family:'Share Tech Mono',monospace;font-size:9px;color:var(--text-dim);letter-spacing:1px;">ROLE // ${project.role}</div>`;

    case 'process': return `
      ${tag}${titleRow}
      <div class="process-steps">
        ${project.process.map(s => `<div class="step-item">
          <div class="step-num">${s.step}</div>
          <div class="step-text">${s.text}</div>
        </div>`).join('')}
      </div>
      <div class="process-flow">
        ${['RESEARCH','PLAN','DESIGN','BUILD','TEST','REFINE'].map(n => `
          <div class="flow-node"><div class="flow-icon">◎</div>${n}</div>
          ${n!=='REFINE'?'<span class="flow-arrow">›</span>':''}
        `).join('')}
      </div>`;

    case 'challenges': return `
      ${tag}${titleRow}
      <div class="challenge-list">
        ${project.challenges.map(c => `<div class="challenge-item">
          <div class="challenge-label">${c.label}</div>
          <div class="challenge-text">${c.text}</div>
        </div>`).join('')}
      </div>`;

    case 'skills': return `
      ${tag}${titleRow}
      <div class="skills-section">
        <div class="tech-stack-label">TECH STACK</div>
        <div class="tech-icons">
          ${project.techIcons.map(t => `<div class="tech-icon-chip">
            <span>${t.icon}</span>${t.name}
          </div>`).join('')}
        </div>
        <div class="skills-chips">
          ${project.skills.map(s => `<div class="skill-chip"
            style="color:${fa.color};border-color:rgba(${fa.rgb},0.25)">
            <span style="position:absolute;left:0;top:0;bottom:0;width:2px;background:${fa.color}"></span>
            ${s}</div>`).join('')}
        </div>
      </div>`;

    case 'proof': return `
      ${tag}${titleRow}
      <div class="floor-body">Links, demos, and case references for this project:</div>
      <div class="proof-links">
        ${project.proof.map(p => `<a class="proof-link" href="${p.url}"
          style="color:${fa.color};border-color:rgba(${fa.rgb},0.25)" target="_blank">
          <div class="proof-dot" style="background:${fa.color};box-shadow:0 0 6px ${fa.color}"></div>
          ${p.label}
        </a>`).join('')}
      </div>
      <div class="tech-tags" style="margin-top:16px">
        ${project.techStack.map(t => `<div class="tech-tag">${t}</div>`).join('')}
      </div>`;

    default: return '';
  }
}

function jumpToFloor(idx) {
  const el = document.getElementById(`floor-room-${idx}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    state.activeFloor = idx;
  }
}

// ══════════════════════════════════════════
// NAVIGATION EVENTS
// ══════════════════════════════════════════
function initEvents() {
  // TAKE FLIGHT
  document.getElementById('btn-takeoff').addEventListener('click', () => {
    setScene('flight');
    flash();
    runFlightTransition(() => {
      setScene('city');
      if (cityAnimFrame === null) initCityMap();
    });
  });

  // BACK TO CITY
  document.getElementById('btn-back-city').addEventListener('click', () => {
    flash();
    setScene('city');
  });

  // Project cycle
  document.getElementById('btn-prev-proj').addEventListener('click', () => {
    const projects = PROJECTS.filter(p => p.category === state.activeCategory);
    state.activeProjectIdx = (state.activeProjectIdx - 1 + projects.length) % projects.length;
    renderBuilding();
  });
  document.getElementById('btn-next-proj').addEventListener('click', () => {
    const projects = PROJECTS.filter(p => p.category === state.activeCategory);
    state.activeProjectIdx = (state.activeProjectIdx + 1) % projects.length;
    renderBuilding();
  });

  // PING PAVAO
  document.getElementById('ping-compact').addEventListener('click', () => {
    const popup = document.getElementById('ping-popup');
    popup.classList.toggle('hidden');
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
      if (e.key === 'ArrowDown') jumpToFloor(Math.min(state.activeFloor+1, 4));
      if (e.key === 'ArrowUp')   jumpToFloor(Math.max(state.activeFloor-1, 0));
      if (e.key === 'Escape')    { flash(); setScene('city'); }
      if (e.key === 'ArrowRight') {
        const p = PROJECTS.filter(p=>p.category===state.activeCategory);
        state.activeProjectIdx = (state.activeProjectIdx+1)%p.length;
        renderBuilding();
      }
      if (e.key === 'ArrowLeft') {
        const p = PROJECTS.filter(p=>p.category===state.activeCategory);
        state.activeProjectIdx = (state.activeProjectIdx-1+p.length)%p.length;
        renderBuilding();
      }
    }
    if (state.scene === 'command' && e.key === 'Enter') {
      document.getElementById('btn-takeoff').click();
    }
  });
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildWave();
  initSkyline();
  initGlobe();
  initEvents();
  setScene('command');
});
