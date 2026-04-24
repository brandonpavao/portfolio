/* app.js — PAVAO PORTFOLIO SYSTEM */
'use strict';

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const IDENTITY = {
  name: 'Pavao', age: 20, location: 'Earth',
  education: 'B.S. Computer Science At Wilfrid Laurier University',
  mission: 'Design digital experiences that inspire and solve real world problems.',
  traits: ['Ambitious','Analytical','Persistent','Creative','Detail-Oriented'],
  hobbies: ['Sports','Cooking','3D & Digital Art','Gaming','Music','Fitness'],
};

const CATEGORIES = [
  { id:'garage', label:'Garage District', sub:'WEB DESIGN & INTERACTIVE', color:'#00e5ff', rgb:'0,229,255' },
  { id:'arcade', label:'Arcade Tower',    sub:'GAME DESIGN & PLAY',        color:'#ff2d78', rgb:'255,45,120' },
  { id:'fab',    label:'Fabrication Lab', sub:'3D & DIGITAL ART',          color:'#ff7c2a', rgb:'255,124,42' },
];

const PROJECTS = [
  // GARAGE
  { id:'p1', category:'garage',
    title:'Wilkerson Construction',
    summary:'Developed a client-facing website for a construction business, translating the Owner’s ideas into a clear, scroll-based experience. Managed the full process from concept to deployment, including domain setup and publishing. This project marked my first real-world implementation of a live website.',
    role:'Led end-to-end design and structure of the website, shaping the user experience, layout, and storytelling direction based on client input.',
    process:[
      {step:'01',text:'Gathered business goals, content, and visual preferences directly from the client.'},
      {step:'02',text:'Tested multiple layout and visual directions to refine clarity and usability.'},
      {step:'03',text:'Handled domain setup and platform transition from Wix to GoDaddy for greater flexibility.'},
      {step:'04',text:'Deployed the final site and supported initial rollout for customer-facing use.'},
    ],
    challenges:[
      {label:'PLATFORM LIMITATIONS',text:'Wix templates restricted layout control, requiring a shift to GoDaddy with custom embedding to achieve the desired structure.'},
      {label:'FIRST DEPLOYMENT',text:'Navigated domain purchasing, configuration, and publishing for the first time, managing unfamiliar setup steps end-to-end.'},
    ],
    skills:['UI Design','Client Communication','Information Architecture','Basic HTML','CSS','JavaScript'],
    techStack:['Wix','GoDaddy Website Builder','Domain Management'],
    metrics:[
      {val:'First',label:'Web Dev Deployment'},
      {val:'2',label:'Platform Transfers'},
      {val:'Months',label:'Client Iteration Cycle'}
    ],
    proof:[
      {label:'LIVE SITE',url:'https://wilkersonconstruction.ca'}
    ],
    techIcons:[]
  },

  { id:'p2', category:'garage',
    title:'Simply Green',
    summary:'Built a lightweight website for a service-based business focused on simplicity and clarity. Designed as a customer-facing entry point to showcase services and reviews without overwhelming users. This project introduced GitHub Pages deployment and reinforced core front-end fundamentals.',
    role:'Handled full design and development, translating a non-technical owner’s preference for simplicity into a clean, structured web experience.',
    process:[
      {step:'01',text:'Defined core goals around simplicity, customer trust, and easy navigation.'},
      {step:'02',text:'Created wireframes in Figma to validate layout and storytelling with the client.'},
      {step:'03',text:'Developed the site using HTML, CSS, and JavaScript with a focus on clarity and responsiveness.'},
      {step:'04',text:'Deployed using GitHub Pages and managed version control through Git commands.'},
    ],
    challenges:[
      {label:'SIMPLICITY CONSTRAINT',text:'Balancing minimal design with enough content to build trust required careful layout and content prioritization.'},
      {label:'GITHUB DEPLOYMENT',text:'Learned Git workflows, repository management, and GitHub Pages deployment through hands-on iteration.'},
    ],
    skills:['UI Design','Wireframing','HTML','CSS','JavaScript','Git','Client Communication'],
    techStack:['HTML5','CSS3','JavaScript','GitHub Pages'],
    metrics:[
      {val:'First',label:'GitHub Deployment'},
      {val:'3',label:'Core Pages Built'},
      {val:'Client',label:'Approved Design System'}
    ],
    proof:[
      {label:'LIVE SITE',url:'https://gardenspray.github.io/simplygreen'},
      {label:'GITHUB',url:'#'}
    ],
    techIcons:[]
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

  const WORLD = { cols: 15, rows: 12, cell: 150 };
  const CATEGORY_ICONS = { garage: '⬡', arcade: '⊞', fab: '◈' };
  const CATEGORY_NAME = { garage: 'GARAGE', arcade: 'ARCADE', fab: 'LAB' };
  const CATEGORY_PLURAL = { garage: 'GARAGES', arcade: 'ARCADES', fab: 'LABS' };
  const CATEGORY_SECONDARY = {
    garage: 'WEB DEV & INTERACTIVE',
    arcade: 'GAME DEV & PLAY',
    fab: '3D MODELS & SHOWCASING'
  };
  const CATEGORY_META = {
    garage: { platform: 'Web App', device: 'Desktop / Mobile', action: 'View Project' },
    arcade: { platform: 'Browser Game', device: 'Mobile / Desktop', action: 'Play / View' },
    fab: { platform: '3D Showcase', device: 'Desktop / WebGL', action: 'View Model' }
  };

  function ensureCitySampleProjects() {
    const sampleNames = {
      garage: ['NeoStore Commerce', 'Atlas Dashboard', 'Signal Landing', 'Client Portal'],
      arcade: ['Gridlock Tactics', 'Voidrun', 'Neon Maze', 'Pixel Arena'],
      fab: ['Mech Unit 7', 'Brutalist City Render', 'Holo Sculpture', 'Motion Lab']
    };

    CATEGORIES.forEach(cat => {
      const existing = PROJECTS.filter(p => p.category === cat.id);
      const base = existing[0] || PROJECTS[0];

      for (let i = existing.length; i < 4; i++) {
        PROJECTS.push({
          ...base,
          id: 'sample_' + cat.id + '_' + (i + 1),
          category: cat.id,
          title: sampleNames[cat.id][i],
          summary: 'Sample portfolio project used to populate the city map. Replace this with a real project when ready.',
          role: 'Project Owner',
          metrics: [
            { val: '0' + (i + 1), label: 'Sample' },
            { val: cat.label.split(' ')[0], label: 'Type' },
            { val: 'WIP', label: 'Status' }
          ],
          proof: [{ label: 'COMING SOON', url: '#' }]
        });
      }
    });
  }

  ensureCitySampleProjects();

  const PROJECT_GRID_POSITIONS = [
    { projectId: 'p1', gx: 2, gy: 3 },
    { projectId: 'p3', gx: 6, gy: 2 },
    { projectId: 'p5', gx: 10, gy: 4 },
    { projectId: 'p2', gx: 12, gy: 2 },
    { projectId: 'p4', gx: 3, gy: 7 },
    { projectId: 'p6', gx: 8, gy: 8 },
    { projectId: 'sample_garage_3', gx: 5, gy: 5 },
    { projectId: 'sample_arcade_3', gx: 13, gy: 7 },
    { projectId: 'sample_fab_3', gx: 1, gy: 9 },
    { projectId: 'sample_garage_4', gx: 9, gy: 1 },
    { projectId: 'sample_arcade_4', gx: 11, gy: 10 },
    { projectId: 'sample_fab_4', gx: 4, gy: 10 },
  ];

  const filterState = { garage: true, arcade: true, fab: true };
  let snapIndex = 0;
  let hoveredNodeId = null;
  let activeNodeId = null;
  let wheelLocked = false;
  let isDragging = false;
  let didDrag = false;
  let dragStart = { x: 0, y: 0 };
  let cameraStart = { x: 0, y: 0 };
  let pointer = { x: -9999, y: -9999 };
  let pointerInsideCanvas = false;
  let lastPointerMoveAt = performance.now();

  const cityCamera = { x: 0, y: 0, zoom: window.innerWidth < 720 ? 1.32 : 1.68 };
  const cityTargetCamera = { x: 0, y: 0, zoom: cityCamera.zoom };

  function getCategory(catId) {
    return CATEGORIES.find(c => c.id === catId);
  }

  function getProject(projectId) {
    return PROJECTS.find(p => p.id === projectId);
  }

  function worldPoint(gx, gy, ox = 0.5, oy = 0.5) {
    return { x: (gx + ox) * WORLD.cell, y: (gy + oy) * WORLD.cell };
  }

  function buildSnapSequence() {
    const rounds = Math.max(...CATEGORIES.map(c => PROJECTS.filter(p => p.category === c.id).length));
    const seq = [];

    for (let i = 0; i < rounds; i++) {
      CATEGORIES.forEach(cat => {
        if (!filterState[cat.id]) return;
        const projects = PROJECTS.filter(p => p.category === cat.id);
        if (projects[i]) seq.push(projects[i].id);
      });
    }

    return seq;
  }

  function getVisibleNodes() {
    return cityNodes.filter(n => filterState[n.category]);
  }

  function updateFilterHud() {
    const activeCats = Object.keys(filterState).filter(k => filterState[k]);
    document.querySelectorAll('.cfh-toggle').forEach(btn => {
      const isActive = filterState[btn.dataset.filter];
      btn.classList.toggle('active', isActive);
    });

    const status = document.getElementById('city-filter-status');
    if (status) {
      status.textContent = activeCats.length === 3
        ? 'ALL PROJECT TYPES ONLINE'
        : activeCats.map(k => CATEGORY_PLURAL[k]).join(' + ') + ' ONLINE';
    }
  }

  function snapToNode(projectId, snap = false) {
    const node = cityNodes.find(n => n.projectId === projectId);
    if (!node) return;

    activeNodeId = node.projectId;
    state.hoveredDistrict = node.category;
    state.activeCategory = node.category;

    cityTargetCamera.x = node.x;
    cityTargetCamera.y = node.y;
    cityTargetCamera.zoom = window.innerWidth < 720 ? 1.42 : 1.86;

    if (snap) {
      cityCamera.x = cityTargetCamera.x;
      cityCamera.y = cityTargetCamera.y;
      cityCamera.zoom = cityTargetCamera.zoom;
    }

    updateActiveTag();
  }

  function snapFromSequence(direction) {
    const seq = buildSnapSequence();
    if (!seq.length) return;

    const current = activeNodeId ? seq.indexOf(activeNodeId) : -1;
    snapIndex = current >= 0 ? current : snapIndex;
    snapIndex = (snapIndex + direction + seq.length) % seq.length;
    snapToNode(seq[snapIndex]);
  }

  function project(x, y) {
    return {
      x: (x - cityCamera.x) * cityCamera.zoom + canvas.width / 2,
      y: (y - cityCamera.y) * cityCamera.zoom + canvas.height / 2
    };
  }

  function unproject(x, y) {
    return {
      x: (x - canvas.width / 2) / cityCamera.zoom + cityCamera.x,
      y: (y - canvas.height / 2) / cityCamera.zoom + cityCamera.y
    };
  }

  function createCityData() {
    const data = [];

    for (let gy = 0; gy < WORLD.rows; gy++) {
      for (let gx = 0; gx < WORLD.cols; gx++) {
        if (Math.random() < 0.08) continue;

        const isReserved = PROJECT_GRID_POSITIONS.some(p => p.gx === gx && p.gy === gy);
        if (isReserved) continue;

        const isCoreRoad = gx === 4 || gx === 7 || gy === 3 || gy === 6;
        const bw = isCoreRoad ? rnd(42, 84) : rnd(50, 118);
        const bh = isCoreRoad ? rnd(42, 88) : rnd(56, 126);
        const ox = rnd(14, 122 - Math.min(bw, 116));
        const oy = rnd(14, 122 - Math.min(bh, 116));
        const height = rnd(2, 8);
        const lum = rnd(8, 19);
        const wins = [];

        for (let r = 0; r < Math.floor(bh / 12); r++) {
          for (let c = 0; c < Math.floor(bw / 12); c++) {
            if (Math.random() < 0.38) {
              wins.push({ c, r, type: Math.random() < 0.55 ? 'amber' : Math.random() < 0.82 ? 'cyan' : 'pink' });
            }
          }
        }

        data.push({ gx, gy, bw, bh, ox, oy, height, lum, wins, isProject: false });
      }
    }

    PROJECT_GRID_POSITIONS.forEach((p, i) => {
      const projectData = getProject(p.projectId);
      const cat = getCategory(projectData.category);
      const base = worldPoint(p.gx, p.gy, 0.5, 0.5);
      const node = {
        gx: p.gx,
        gy: p.gy,
        bw: 116,
        bh: 116,
        ox: 17,
        oy: 16,
        height: 10 + (i % 3),
        lum: 18,
        wins: [],
        isProject: true,
        projectId: projectData.id,
        category: projectData.category,
        projectTitle: projectData.title,
        x: base.x,
        y: base.y,
        color: cat.color,
        rgb: cat.rgb
      };

      data.push(node);
    });

    return data;
  }

  if (!cityMapData || !Array.isArray(cityMapData) || !cityMapData.some(b => b.isProject)) {
    cityMapData = createCityData();
  }

  const cityNodes = cityMapData.filter(b => b.isProject);

  function drawRoadGrid() {
    const W = canvas.width, H = canvas.height;
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.scale(cityCamera.zoom, cityCamera.zoom);
    ctx.translate(-cityCamera.x, -cityCamera.y);
    ctx.lineCap = 'round';

    for (let gx = 0; gx <= WORLD.cols; gx++) {
      const x = gx * WORLD.cell;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, WORLD.rows * WORLD.cell);
      ctx.strokeStyle = gx % 3 === 0 ? 'rgba(0,229,255,0.12)' : 'rgba(17,39,70,0.88)';
      ctx.lineWidth = gx % 3 === 0 ? 18 : 28;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, WORLD.rows * WORLD.cell);
      ctx.strokeStyle = 'rgba(0,229,255,0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let gy = 0; gy <= WORLD.rows; gy++) {
      const y = gy * WORLD.cell;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(WORLD.cols * WORLD.cell, y);
      ctx.strokeStyle = gy % 3 === 0 ? 'rgba(255,45,120,0.09)' : 'rgba(17,39,70,0.88)';
      ctx.lineWidth = gy % 3 === 0 ? 18 : 28;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(WORLD.cols * WORLD.cell, y);
      ctx.strokeStyle = 'rgba(0,229,255,0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let gx = 0; gx <= WORLD.cols; gx++) {
      for (let gy = 0; gy <= WORLD.rows; gy++) {
        ctx.beginPath();
        ctx.arc(gx * WORLD.cell, gy * WORLD.cell, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,229,255,0.18)';
        ctx.fill();
      }
    }

    ctx.restore();
  }

  function drawBuilding(b) {
    const base = worldPoint(b.gx, b.gy, 0, 0);
    const x = base.x + b.ox;
    const y = base.y + b.oy;
    const z = b.height * 5;
    const p = project(x, y);
    const bw = b.bw * cityCamera.zoom;
    const bh = b.bh * cityCamera.zoom;
    const rise = z * cityCamera.zoom;

    if (p.x + bw < -140 || p.x > canvas.width + 140 || p.y + bh < -140 || p.y - rise > canvas.height + 140) return;

    if (b.isProject) {
      const isVisible = filterState[b.category];
      const isActive = b.projectId === activeNodeId;
      const isHover = b.projectId === hoveredNodeId;
      const alpha = isVisible ? 1 : 0.12;
      const now = performance.now();
      const livePulse = (Math.sin(now / 180) + 1) / 2;
      const pulse = isActive ? 0.75 + livePulse * 0.5 : isHover ? 0.6 + livePulse * 0.35 : 0.34;

      ctx.save();
      ctx.globalAlpha = alpha;

      ctx.fillStyle = 'rgba(0,0,0,0.44)';
      ctx.fillRect(p.x + rise * 0.35, p.y + rise * 0.35, bw, bh);

      const body = ctx.createLinearGradient(p.x, p.y - rise, p.x + bw, p.y + bh);
      body.addColorStop(0, 'rgba(' + b.rgb + ',0.42)');
      body.addColorStop(0.55, 'rgba(8,22,42,0.98)');
      body.addColorStop(1, 'rgba(' + b.rgb + ',0.18)');
      ctx.fillStyle = body;
      ctx.fillRect(p.x, p.y - rise, bw, bh + rise);

      ctx.strokeStyle = 'rgba(' + b.rgb + ',' + (0.38 + pulse * 0.38) + ')';
      ctx.lineWidth = isActive ? 2.4 + livePulse * 1.1 : isHover ? 1.9 + livePulse * 0.8 : 1.1;
      ctx.strokeRect(p.x, p.y - rise, bw, bh + rise);

      const ringCount = isActive || isHover ? 6 : 3;
      for (let i = 0; i < ringCount; i++) {
        const pad = (10 + i * 13 + (isActive || isHover ? livePulse * 8 : 0)) * cityCamera.zoom;
        ctx.strokeStyle = 'rgba(' + b.rgb + ',' + ((0.24 - i * 0.03) * pulse) + ')';
        ctx.lineWidth = isActive || isHover ? 1.25 : 1;
        ctx.strokeRect(p.x - pad, p.y - rise - pad, bw + pad * 2, bh + rise + pad * 2);
      }

      for (let wy = p.y - rise + 14 * cityCamera.zoom; wy < p.y + bh - 8; wy += 16 * cityCamera.zoom) {
        for (let wx = p.x + 12 * cityCamera.zoom; wx < p.x + bw - 10; wx += 17 * cityCamera.zoom) {
          const checker = Math.sin(wx * 0.04 + wy * 0.02) > -0.25;
          if (checker) {
            ctx.fillStyle = Math.random() < 0.8 ? 'rgba(' + b.rgb + ',0.38)' : 'rgba(255,190,80,0.46)';
            ctx.fillRect(wx, wy, 5 * cityCamera.zoom, 7 * cityCamera.zoom);
          }
        }
      }

      const centerX = p.x + bw / 2;
      const topY = p.y - rise - 14 * cityCamera.zoom;
      ctx.beginPath();
      ctx.arc(centerX, topY, isActive ? 7 : isHover ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.shadowColor = b.color;
      ctx.shadowBlur = isActive ? 34 : isHover ? 24 : 11;
      ctx.fill();
      ctx.shadowBlur = 0;

      const projectNum = PROJECTS.filter(pj => pj.category === b.category).findIndex(pj => pj.id === b.projectId) + 1;
      const labelY = p.y - rise - 48 * cityCamera.zoom;
      const labelText = CATEGORY_NAME[b.category] + ' //' + projectNum;
      const titleText = b.projectTitle.toUpperCase();

      ctx.font = Math.max(9, 8 * cityCamera.zoom) + "px 'Share Tech Mono'";
      const labelWidth = Math.max(ctx.measureText(labelText).width, ctx.measureText(titleText).width * 0.72) + 22;
      ctx.fillStyle = 'rgba(3,9,18,' + (isVisible ? 0.78 : 0.28) + ')';
      ctx.strokeStyle = 'rgba(' + b.rgb + ',' + (isActive || isHover ? 0.7 : 0.32) + ')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(centerX - labelWidth / 2, labelY - 13, labelWidth, 32, 4);
      else ctx.rect(centerX - labelWidth / 2, labelY - 13, labelWidth, 32);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(232,244,255,' + (isVisible ? 0.84 : 0.28) + ')';
      ctx.fillText(labelText, centerX, labelY);
      ctx.font = Math.max(7, 6 * cityCamera.zoom) + "px 'Share Tech Mono'";
      ctx.fillStyle = 'rgba(' + b.rgb + ',' + (isVisible ? 0.74 : 0.24) + ')';
      ctx.fillText(titleText.slice(0, 24), centerX, labelY + 11);

      ctx.strokeStyle = 'rgba(' + b.rgb + ',' + (isActive || isHover ? 0.55 : 0.22) + ')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, labelY + 20);
      ctx.lineTo(centerX, topY + 8 * cityCamera.zoom);
      ctx.stroke();

      b.screenBox = {
        x: p.x, y: p.y - rise, w: bw, h: bh + rise,
        cx: centerX, cy: p.y - rise + (bh + rise) / 2,
        labelX: centerX, labelY: labelY,
        cardX: Math.min(canvas.width - 330, Math.max(18, centerX + 32 * cityCamera.zoom)),
        cardY: Math.min(canvas.height - 184, Math.max(92, labelY - 74))
      };
      ctx.restore();
      return;
    }

    const wall = ctx.createLinearGradient(p.x, p.y - rise, p.x + bw, p.y + bh);
    wall.addColorStop(0, 'hsl(215,28%,' + (b.lum + 8) + '%)');
    wall.addColorStop(1, 'hsl(220,35%,' + b.lum + '%)');

    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(p.x + rise * 0.25, p.y + rise * 0.25, bw, bh);
    ctx.fillStyle = wall;
    ctx.fillRect(p.x, p.y - rise, bw, bh + rise);
    ctx.fillStyle = 'hsl(215,22%,' + (b.lum + 10) + '%)';
    ctx.fillRect(p.x, p.y - rise, bw, Math.max(6, 10 * cityCamera.zoom));

    b.wins.forEach(w => {
      const wx = p.x + 9 * cityCamera.zoom + w.c * 12 * cityCamera.zoom;
      const wy = p.y - rise + 16 * cityCamera.zoom + w.r * 12 * cityCamera.zoom;
      if (wx > p.x + bw - 8 || wy > p.y + bh - 6) return;
      ctx.fillStyle = w.type === 'amber' ? 'rgba(255,184,48,0.42)' : w.type === 'cyan' ? 'rgba(0,229,255,0.30)' : 'rgba(255,45,120,0.26)';
      ctx.fillRect(wx, wy, 4 * cityCamera.zoom, 5 * cityCamera.zoom);
    });
  }

  function nearestVisibleNode(screenX, screenY) {
    let best = null;
    let bestDistance = Infinity;

    getVisibleNodes().forEach(n => {
      if (!n.screenBox) return;
      const box = n.screenBox;
      const inside = screenX >= box.x - 10 && screenX <= box.x + box.w + 10 && screenY >= box.y - 10 && screenY <= box.y + box.h + 10;
      const dx = screenX - box.cx;
      const dy = screenY - box.cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (inside || dist < 95) {
        if (dist < bestDistance) {
          best = n;
          bestDistance = dist;
        }
      }
    });

    return best;
  }

  function updateActiveTag() {
    const tag = document.getElementById('city-active-tag');
    if (!tag) return;
    tag.style.opacity = '0';
    tag.style.pointerEvents = 'none';
  }

  function drawHoverGui() {
    const node = cityNodes.find(n => n.projectId === hoveredNodeId);
    if (!node || !node.screenBox || !filterState[node.category]) return;

    const meta = CATEGORY_META[node.category];
    const projectData = getProject(node.projectId);
    if (!meta || !projectData) return;

    const SAMPLE_INFO = {
      garage: 'CONSTRUCTION QUOTE PLATFORM',
      arcade: 'RETRO WESTERN PLATFORMER',
      fab: 'INTERACTIVE 3D MODEL SHOWCASE'
    };

    const w = Math.min(430, Math.max(340, canvas.width * 0.28));
    const h = Math.min(392, Math.max(318, canvas.height * 0.46));
    const x = Math.max(18, canvas.width - w - 28);
    const y = Math.max(92, (canvas.height - h) / 2);
    const t = performance.now();
    const pulse = (Math.sin(t / 170) + 1) / 2;
    const sweep = ((t / 18) % h);

    ctx.save();
    ctx.globalAlpha = 0.98;
    ctx.fillStyle = 'rgba(3,9,18,0.90)';
    ctx.strokeStyle = 'rgba(' + node.rgb + ',' + (0.56 + pulse * 0.26) + ')';
    ctx.lineWidth = 1.45;
    ctx.shadowColor = node.color;
    ctx.shadowBlur = 18 + pulse * 16;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, 10);
    else ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    const grd = ctx.createLinearGradient(x, y, x + w, y + h);
    grd.addColorStop(0, 'rgba(' + node.rgb + ',0.10)');
    grd.addColorStop(0.44, 'rgba(255,255,255,0.018)');
    grd.addColorStop(1, 'rgba(' + node.rgb + ',0.035)');
    ctx.fillStyle = grd;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x + 1, y + 1, w - 2, h - 2, 10);
    else ctx.rect(x + 1, y + 1, w - 2, h - 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(' + node.rgb + ',0.54)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 22, y); ctx.lineTo(x, y); ctx.lineTo(x, y + 22);
    ctx.moveTo(x + w - 22, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + 22);
    ctx.moveTo(x, y + h - 22); ctx.lineTo(x, y + h); ctx.lineTo(x + 22, y + h);
    ctx.moveTo(x + w - 22, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - 22);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(' + node.rgb + ',0.18)';
    for (let yy = y + 34; yy < y + h - 20; yy += 18) {
      ctx.beginPath(); ctx.moveTo(x + 18, yy); ctx.lineTo(x + w - 18, yy); ctx.stroke();
    }

    ctx.fillStyle = 'rgba(' + node.rgb + ',0.13)';
    ctx.fillRect(x + 1, y + sweep, w - 2, 2);

    ctx.font = "9px 'Share Tech Mono'";
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(' + node.rgb + ',0.92)';
    ctx.fillText('/// LIVE PROJECT SCAN', x + 18, y + 24);
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(74,106,136,0.95)';
    ctx.fillText('LOCKED // HOVER TARGET', x + w - 18, y + 24);
    ctx.textAlign = 'left';

    ctx.font = "20px 'Orbitron'";
    ctx.fillStyle = 'rgba(232,244,255,0.96)';
    ctx.fillText(projectData.title.toUpperCase().slice(0, 28), x + 18, y + 58);

    ctx.font = "10px 'Share Tech Mono'";
    ctx.fillStyle = 'rgba(' + node.rgb + ',0.82)';
    ctx.fillText(CATEGORY_SECONDARY[node.category], x + 18, y + 78);

    ctx.strokeStyle = 'rgba(' + node.rgb + ',0.30)';
    ctx.beginPath(); ctx.moveTo(x + 18, y + 92); ctx.lineTo(x + w - 18, y + 92); ctx.stroke();

    function drawField(label, value, rowY, wide) {
      ctx.font = "9px 'Share Tech Mono'";
      ctx.fillStyle = 'rgba(74,106,136,0.96)';
      ctx.fillText(label, x + 18, rowY);
      ctx.font = wide ? "13px 'Share Tech Mono'" : "11px 'Share Tech Mono'";
      ctx.fillStyle = 'rgba(232,244,255,0.90)';
      ctx.fillText(String(value).toUpperCase().slice(0, wide ? 34 : 22), x + 118, rowY);
    }

    drawField('PROJECT INFO', SAMPLE_INFO[node.category] || 'PROJECT SAMPLE SUBCATEGORY', y + 122, true);
    drawField('PLATFORM', meta.platform, y + 150, false);
    drawField('DEVICE', meta.device, y + 176, false);
    drawField('QUICK LINK', meta.action, y + 202, false);

    ctx.strokeStyle = 'rgba(' + node.rgb + ',0.22)';
    ctx.beginPath(); ctx.moveTo(x + 18, y + 222); ctx.lineTo(x + w - 18, y + 222); ctx.stroke();

    const barBaseY = y + 250;
    const bars = [0.82, 0.64, 0.91, 0.72];
    const barLabels = ['VISUAL', 'UX', 'BUILD', 'DEPLOY'];
    bars.forEach((amount, i) => {
      const by = barBaseY + i * 24;
      ctx.font = "8px 'Share Tech Mono'";
      ctx.fillStyle = 'rgba(74,106,136,0.96)';
      ctx.fillText(barLabels[i], x + 18, by);
      ctx.strokeStyle = 'rgba(' + node.rgb + ',0.22)';
      ctx.strokeRect(x + 88, by - 8, w - 126, 8);
      ctx.fillStyle = 'rgba(' + node.rgb + ',' + (0.32 + pulse * 0.15) + ')';
      ctx.fillRect(x + 89, by - 7, (w - 128) * amount, 6);
    });

    const radarX = x + w - 58;
    const radarY = y + h - 46;
    ctx.strokeStyle = 'rgba(' + node.rgb + ',0.48)';
    ctx.beginPath();
    ctx.arc(radarX, radarY, 24, 0, Math.PI * 2);
    ctx.arc(radarX, radarY, 12, 0, Math.PI * 2);
    ctx.moveTo(radarX - 28, radarY); ctx.lineTo(radarX + 28, radarY);
    ctx.moveTo(radarX, radarY - 28); ctx.lineTo(radarX, radarY + 28);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(radarX + Math.cos(t / 230) * 15, radarY + Math.sin(t / 230) * 15, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + node.rgb + ',0.82)';
    ctx.fill();

    ctx.font = "8px 'Share Tech Mono'";
    ctx.fillStyle = 'rgba(74,106,136,0.88)';
    ctx.fillText('TARGET ID // ' + node.projectId.toUpperCase(), x + 18, y + h - 24);

    ctx.strokeStyle = 'rgba(' + node.rgb + ',0.34)';
    ctx.setLineDash([8, 7]);
    ctx.beginPath(); ctx.moveTo(x, y + h / 2); ctx.lineTo(node.screenBox.labelX, node.screenBox.labelY + 16); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function drawRadarCursor() {
    if (!pointerInsideCanvas || state.scene !== 'city') return;

    const t = performance.now();
    const idleMs = t - lastPointerMoveAt;
    const isIdle = idleMs > 720 && !isDragging;
    const pulse = (Math.sin(t / 210) + 1) / 2;
    const idlePulse = (Math.sin(t / 150) + 1) / 2;
    const r = (isIdle ? 20 : 18) + pulse * 4 + (isIdle ? idlePulse * 3 : 0);

    ctx.save();
    ctx.translate(pointer.x, pointer.y);
    ctx.strokeStyle = isIdle ? 'rgba(0,229,255,0.98)' : 'rgba(0,229,255,0.88)';
    ctx.lineWidth = isIdle ? 1.75 : 1.4;
    ctx.shadowColor = 'rgba(0,229,255,0.95)';
    ctx.shadowBlur = isIdle ? 22 : 12;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.strokeStyle = isIdle ? 'rgba(0,229,255,0.62)' : 'rgba(0,229,255,0.46)';
    ctx.beginPath();
    ctx.arc(0, 0, r + 8 + (isIdle ? idlePulse * 4 : 0), 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-r - 8, 0);
    ctx.lineTo(-r + 3, 0);
    ctx.moveTo(r - 3, 0);
    ctx.lineTo(r + 8, 0);
    ctx.moveTo(0, -r - 8);
    ctx.lineTo(0, -r + 3);
    ctx.moveTo(0, r - 3);
    ctx.lineTo(0, r + 8);
    ctx.stroke();

    ctx.fillStyle = 'rgba(0,229,255,0.8)';
    ctx.beginPath();
    ctx.arc(0, 0, 2.2, 0, Math.PI * 2);
    ctx.fill();

    if (hoveredNodeId) {
      const text = 'CLICK TO ENTER';
      const textY = -48 - pulse * 2;
      ctx.font = "11px 'Share Tech Mono'";
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(255,255,255,0.9)';
      ctx.shadowBlur = 14 + pulse * 8;
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.fillText(text, 0, textY);
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.34)';
      ctx.beginPath();
      ctx.moveTo(-38, textY + 8);
      ctx.lineTo(38, textY + 8);
      ctx.stroke();
    } else if (isIdle) {
      const text = 'SCROLL TO SNAP  ·  DRAG TO PAN';
      const textY = -46 - idlePulse * 3;
      ctx.font = "10px 'Share Tech Mono'";
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0,229,255,0.95)';
      ctx.shadowBlur = 12 + idlePulse * 10;
      ctx.fillStyle = 'rgba(200,246,255,' + (0.62 + idlePulse * 0.34) + ')';
      ctx.fillText(text, 0, textY);
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(0,229,255,' + (0.26 + idlePulse * 0.2) + ')';
      ctx.beginPath();
      ctx.moveTo(-46, textY + 8);
      ctx.lineTo(46, textY + 8);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawCity() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const W = canvas.width, H = canvas.height;

    if (!isDragging) {
      cityCamera.x += (cityTargetCamera.x - cityCamera.x) * 0.08;
      cityCamera.y += (cityTargetCamera.y - cityCamera.y) * 0.08;
      cityCamera.zoom += (cityTargetCamera.zoom - cityCamera.zoom) * 0.08;
    }

    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#020712');
    sky.addColorStop(0.55, '#061222');
    sky.addColorStop(1, '#030912');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    drawRoadGrid();

    [...cityMapData]
      .sort((a, b) => (a.gy + a.gx * 0.02) - (b.gy + b.gx * 0.02))
      .forEach(drawBuilding);

    const activeNode = cityNodes.find(n => n.projectId === activeNodeId);
    if (activeNode) {
      const scan = ctx.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, Math.max(W, H) * 0.55);
      scan.addColorStop(0, 'rgba(' + activeNode.rgb + ',0.08)');
      scan.addColorStop(0.55, 'rgba(0,0,0,0)');
      scan.addColorStop(1, 'rgba(0,0,0,0.72)');
      ctx.fillStyle = scan;
      ctx.fillRect(0, 0, W, H);
    }

    ctx.fillStyle = 'rgba(3,9,18,0.28)';
    ctx.fillRect(0, 0, W, 78);
    ctx.fillRect(0, H - 78, W, 78);

    updateActiveTag();

    if (pointerInsideCanvas && !isDragging) {
      const nodeUnderCursor = nearestVisibleNode(pointer.x, pointer.y);
      hoveredNodeId = nodeUnderCursor ? nodeUnderCursor.projectId : null;
    }

    drawHoverGui();
    drawRadarCursor();
    cityAnimFrame = requestAnimationFrame(drawCity);
  }

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    if (wheelLocked) return;
    wheelLocked = true;
    snapFromSequence(e.deltaY >= 0 ? 1 : -1);
    setTimeout(() => { wheelLocked = false; }, 520);
  }, { passive: false });

  canvas.addEventListener('mousedown', e => {
    isDragging = true;
    didDrag = false;
    dragStart = { x: e.clientX, y: e.clientY };
    cameraStart = { x: cityCamera.x, y: cityCamera.y };
    canvas.classList.add('dragging');
  });

  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    pointerInsideCanvas = true;
    lastPointerMoveAt = performance.now();

    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) didDrag = true;
      cityCamera.x = cameraStart.x - dx / cityCamera.zoom;
      cityCamera.y = cameraStart.y - dy / cityCamera.zoom;
      cityTargetCamera.x = cityCamera.x;
      cityTargetCamera.y = cityCamera.y;
      return;
    }

    const node = nearestVisibleNode(pointer.x, pointer.y);
    hoveredNodeId = node ? node.projectId : null;
    canvas.style.cursor = 'none';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.classList.remove('dragging');
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredNodeId = null;
    pointerInsideCanvas = false;
    if (!isDragging) canvas.style.cursor = 'none';
  });

  canvas.addEventListener('click', e => {
    if (didDrag) return;
    const rect = canvas.getBoundingClientRect();
    const node = nearestVisibleNode(e.clientX - rect.left, e.clientY - rect.top) || cityNodes.find(n => n.projectId === activeNodeId);
    if (node && filterState[node.category]) {
      enterProjectBuilding(node.projectId);
    }
  });

  const activeTag = document.getElementById('city-active-tag');
  if (activeTag) {
    activeTag.addEventListener('click', () => {
      if (activeNodeId) enterProjectBuilding(activeNodeId);
    });
  }

  document.querySelectorAll('.cfh-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      const activeCount = Object.values(filterState).filter(Boolean).length;
      if (filterState[key] && activeCount === 1) return;

      filterState[key] = !filterState[key];
      updateFilterHud();

      const seq = buildSnapSequence();
      if (!seq.includes(activeNodeId)) {
        snapIndex = 0;
        snapToNode(seq[0]);
      }
    });
  });

  window.addEventListener('resize', () => {
    cityTargetCamera.zoom = window.innerWidth < 720 ? 1.42 : 1.86;
    if (activeNodeId) snapToNode(activeNodeId, true);
  });

  updateFilterHud();
  const first = buildSnapSequence()[0];
  snapToNode(first, true);
  drawCity();
}

// ══════════════════════════════════════════
// BUILDING VIEW
// ══════════════════════════════════════════
function enterProjectBuilding(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const projects = PROJECTS.filter(p => p.category === project.category);
  state.activeCategory = project.category;
  state.activeProjectIdx = projects.findIndex(p => p.id === projectId);
  state.activeFloor = 0;
  renderBuilding();
  flash();
  setScene('building');
}

function enterBuilding(catId) {
  const project = PROJECTS.find(p => p.category === catId);
  if (project) enterProjectBuilding(project.id);
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
  // Static hero background uses bg.png. Skyline canvas remains in HTML as fallback only.
  initGlobe();
  initEvents();
  setScene('command');
});