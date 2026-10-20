// ==========================================
// EASY DATA ARRAYS (CHISOM'S CONTENT LISTS)
// ==========================================

const myMandalaImages = [
    { src: "mandala1.jpg", caption: "Floral Geometry Vol. I — Hand Sketch" }
];

const myProjectsAndSkills = [
    { title: "Aegis AI Inspector", tag: "AI Security & Tech", link: "https://scholarnwafor73-beep.github.io/Aegis-ai-inspector-/" },
    { title: "Luxe Multi-Studio", tag: "Creative Studio Architecture", link: "https://scholarnwafor73-beep.github.io/luxe-multi-studio/" },
    { title: "Luxe Multi-Pitch", tag: "Luxury Pitch Deck Framework", link: "https://scholarnwafor73-beep.github.io/luxe-multi-pitch/" },
    { title: "Chisom-Lab Portfolio", tag: "Live Web Architecture", link: "https://scholarnwafor73-beep.github.io/chisom-lab/" },
    { title: "HTML5, CSS3 & JavaScript", tag: "Frontend Skill Stack", link: "#" }
];

const myCertificates = [
    { title: "Responsive Web Design", tag: "freeCodeCamp Certified", link: "#" },
    { title: "AI Security & Tech Fundamentals", tag: "IBM Verified Professional", link: "#" },
    { title: "Frontend Engineering Mastery", tag: "Coursera Specialization", link: "#" },
    { title: "Additional Online Coursework", tag: "Specialized Training & More", link: "#" }
];

const myCreativeArts = [
    { title: "Original Song Performance", tag: "Vocals & Composition", link: "#" },
    { title: "Church Worship Cover", tag: "Live Vocal Session", link: "#" }
];

const myCodingProcess = [
    { title: "Building Chisom-Lab Live", tag: "HTML/CSS/JS Time-Lapse", link: "#" },
    { title: "Canvas Particle Engine Build", tag: "JavaScript Logic Session", link: "#" }
];

// ==========================================
// AUDIO & VINYL PLAYER LOGIC (AUTOPLAY OJA - NO LOOP)
// ==========================================
const playBtn = document.getElementById('playBtn');
const culturalAudio = document.getElementById('culturalAudio');
const vinylDisc = document.getElementById('vinylDisc');

window.addEventListener('load', () => {
    culturalAudio.play().then(() => {
        vinylDisc.classList.add('spinning');
        playBtn.textContent = 'PLAY AGAIN';
        activeMode = 'sprinklers';
        updateModeButtons();
    }).catch(err => {
        console.log("Autoplay restricted by browser policy; waiting for user interaction.", err);
        playBtn.textContent = 'PLAY ARCHIVE';
    });
});

playBtn.addEventListener('click', async () => {
    try {
        culturalAudio.currentTime = 0; 
        await culturalAudio.play();
        vinylDisc.classList.add('spinning');
        playBtn.textContent = 'PLAYING...';
        activeMode = 'sprinklers'; 
        updateModeButtons();
    } catch (err) {
        console.warn("Playback failed:", err);
        playBtn.textContent = 'TAP AGAIN TO PLAY';
    }
});

culturalAudio.addEventListener('ended', () => {
    vinylDisc.classList.remove('spinning');
    playBtn.textContent = 'PLAY AGAIN';
});

// ==========================================
// IGBO PROVERB ROTATOR
// ==========================================
const proverbs = [
    '"Egwu ma mma, a naa n\'uba." — Sound & culture woven into code.',
    '"Onye qba qsa ma aqa ya." — Wisdom begins with understanding your roots.',
    '"Nku di na mba na-ereere mba nsi." — Diversity builds extraordinary art.',
    '"Awa ma efe, a na-akpq ya Odogwu." — Greatness is recognized by its movement.'
];

let proverbIndex = 0;
const proverbBox = document.getElementById('proverb-box');

setInterval(() => {
    proverbBox.style.opacity = '0';
    setTimeout(() => {
        proverbIndex = (proverbIndex + 1) % proverbs.length;
        proverbBox.textContent = proverbs[proverbIndex];
        proverbBox.style.opacity = '1';
    }, 400);
}, 6000);

// ==========================================
// MODAL POPUP SYSTEM (STRICT TAP CONTROL)
// ==========================================
const modals = {
    mandala: { btn: document.getElementById('openMandalaBtn'), modal: document.getElementById('mandalaModal'), close: document.getElementById('closeMandala') },
    lab: { btn: document.getElementById('openLabBtn'), modal: document.getElementById('labModal'), close: document.getElementById('closeLab') },
    certs: { btn: document.getElementById('openCertsBtn'), modal: document.getElementById('certsModal'), close: document.getElementById('closeCerts') },
    arts: { btn: document.getElementById('openArtsBtn'), modal: document.getElementById('artsModal'), close: document.getElementById('closeArts') },
    process: { btn: document.getElementById('openProcessBtn'), modal: document.getElementById('processModal'), close: document.getElementById('closeProcess') }
};

// Render Mandalas
document.getElementById('mandalaGallery').innerHTML = myMandalaImages.map(img => `
    <div class="mandala-img-card">
        <img src="${img.src}" alt="${img.caption}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="mandala-placeholder-box" style="display:none;">
            <span>🎨</span>
            <strong>Mandala Sketch Ready</strong>
            <p>Upload <code>mandala1.jpg</code> to GitHub to showcase your original artwork here.</p>
        </div>
        <div class="mandala-caption">${img.caption}</div>
    </div>
`).join('');

// Render Projects
document.getElementById('projectsList').innerHTML = myProjectsAndSkills.map(item => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${item.title}</div>
            <div class="project-item-tag">${item.tag}</div>
        </div>
        <a href="${item.link}" target="_blank" class="project-link-btn">View</a>
    </div>
`).join('');

// Render Certificates
document.getElementById('certsList').innerHTML = myCertificates.map(cert => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${cert.title}</div>
            <div class="project-item-tag">${cert.tag}</div>
        </div>
        <a href="${cert.link}" target="_blank" class="project-link-btn">Verify</a>
    </div>
`).join('');

// Render Creative Arts
document.getElementById('artsList').innerHTML = myCreativeArts.map(art => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${art.title}</div>
            <div class="project-item-tag">${art.tag}</div>
        </div>
        <a href="${art.link}" target="_blank" class="project-link-btn">Watch</a>
    </div>
`).join('');

// Render Coding Process
document.getElementById('processList').innerHTML = myCodingProcess.map(proc => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${proc.title}</div>
            <div class="project-item-tag">${proc.tag}</div>
        </div>
        <a href="${proc.link}" target="_blank" class="project-link-btn">Watch</a>
    </div>
`).join('');

// Bind Modal Events Safely
Object.values(modals).forEach(m => {
    if (m.btn && m.modal && m.close) {
        m.btn.addEventListener('click', () => m.modal.classList.add('active'));
        m.close.addEventListener('click', () => m.modal.classList.remove('active'));
    }
});

window.addEventListener('click', (e) => {
    Object.values(modals).forEach(m => {
        if (m.modal && e.target === m.modal) m.modal.classList.remove('active');
    });
});

// ==========================================
// ANIMATION CANVAS ENGINE
// ==========================================
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height;
function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const colors = ['#00f0ff', '#ff007f', '#ffd700', '#ffffff', '#7000ff'];
let activeMode = 'stars';

const modeStarsBtn = document.getElementById('modeStars');
const modeSprinklersBtn = document.getElementById('modeSprinklers');

function updateModeButtons() {
    if (activeMode === 'stars') {
        modeStarsBtn.classList.add('active');
        modeSprinklersBtn.classList.remove('active');
    } else {
        modeSprinklersBtn.classList.add('active');
        modeStarsBtn.classList.remove('active');
    }
}

modeStarsBtn.addEventListener('click', () => { activeMode = 'stars'; updateModeButtons(); });
modeSprinklersBtn.addEventListener('click', () => { activeMode = 'sprinklers'; updateModeButtons(); });

const stars = Array.from({ length: 50 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.5 + 0.4,
    speed: Math.random() * 0.25 + 0.08,
    opacity: Math.random(),
    color: colors[Math.floor(Math.random() * colors.length)]
}));

let sprinklers = [];

function createSprinklerBurst(x, y) {
    for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        sprinklers.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1,
            radius: Math.random() * 2.5 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: Math.random() * 0.02 + 0.015
        });
    }
}

window.addEventListener('pointerdown', (e) => {
    createSprinklerBurst(e.clientX, e.clientY);
});

function animate() {
    ctx.clearRect(0, 0, width, height);

    if (activeMode === 'stars') {
        stars.forEach(star => {
            star.y -= star.speed;
            if (star.y < 0) star.y = height;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = star.opacity;
            ctx.shadowBlur = 8;
            ctx.shadowColor = star.color;
            ctx.fill();
        });
    } else {
        if (Math.random() < 0.25) {
            createSprinklerBurst(Math.random() * width, Math.random() * height * 0.7);
        }
    }

    for (let i = sprinklers.length - 1; i >= 0; i--) {
        let p = sprinklers[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
            sprinklers.splice(i, 1);
            continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
    }

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
}

animate();
