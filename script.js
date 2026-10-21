// ==========================================
// CHISOM'S CUSTOM DATA ARRAYS 
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
// AUDIO & VINYL PLAYER LOGIC 
// ==========================================
const playBtn = document.getElementById('playBtn');
const culturalAudio = document.getElementById('culturalAudio');
const vinylDisc = document.getElementById('vinylDisc');

let isPlaying = false;

function triggerAudioPlay() {
    culturalAudio.currentTime = 0;
    culturalAudio.play().then(() => {
        isPlaying = true;
        vinylDisc.classList.add('spinning');
        playBtn.textContent = 'PLAYING AUDIO...';
    }).catch(err => {
        console.log("Autoplay waiting for user touch:", err);
        playBtn.textContent = 'PLAY ARCHIVE';
    });
}

window.addEventListener('DOMContentLoaded', () => {
    triggerAudioPlay();
});

window.addEventListener('pointerdown', () => {
    if (!isPlaying) {
        triggerAudioPlay();
    }
}, { once: true });

playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerAudioPlay();
});

culturalAudio.addEventListener('ended', () => {
    isPlaying = false;
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
// MODAL POPUP SYSTEM
// ==========================================
const modals = {
    mandala: { btn: document.getElementById('openMandalaBtn'), modal: document.getElementById('mandalaModal'), close: document.getElementById('closeMandala') },
    lab: { btn: document.getElementById('openLabBtn'), modal: document.getElementById('labModal'), close: document.getElementById('closeLab') },
    certs: { btn: document.getElementById('openCertsBtn'), modal: document.getElementById('certsModal'), close: document.getElementById('closeCerts') },
    arts: { btn: document.getElementById('openArtsBtn'), modal: document.getElementById('artsModal'), close: document.getElementById('closeArts') },
    process: { btn: document.getElementById('openProcessBtn'), modal: document.getElementById('processModal'), close: document.getElementById('closeProcess') }
};

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

document.getElementById('projectsList').innerHTML = myProjectsAndSkills.map(item => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${item.title}</div>
            <div class="project-item-tag">${item.tag}</div>
        </div>
        <a href="${item.link}" target="_blank" class="project-link-btn">View</a>
    </div>
`).join('');

document.getElementById('certsList').innerHTML = myCertificates.map(cert => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${cert.title}</div>
            <div class="project-item-tag">${cert.tag}</div>
        </div>
        <a href="${cert.link}" target="_blank" class="project-link-btn">Verify</a>
    </div>
`).join('');

document.getElementById('artsList').innerHTML = myCreativeArts.map(art => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${art.title}</div>
            <div class="project-item-tag">${art.tag}</div>
        </div>
        <a href="${art.link}" target="_blank" class="project-link-btn">Watch</a>
    </div>
`).join('');

document.getElementById('processList').innerHTML = myCodingProcess.map(proc => `
    <div class="project-item">
        <div>
            <div class="project-item-title">${proc.title}</div>
            <div class="project-item-tag">${proc.tag}</div>
        </div>
        <a href="${proc.link}" target="_blank" class="project-link-btn">Watch</a>
    </div>
`).join('');

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
// CLEAN STAR DUST CANVAS ENGINE
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

const stars = Array.from({ length: 60 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.5 + 0.4,
    speed: Math.random() * 0.25 + 0.08,
    opacity: Math.random(),
    color: colors[Math.floor(Math.random() * colors.length)]
}));

function animate() {
    ctx.clearRect(0, 0, width, height);

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

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
}

animate();
