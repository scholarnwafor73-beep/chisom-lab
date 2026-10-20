// --- BULLETPROOF AUDIO & VINYL PLAYER ---
const playBtn = document.getElementById('playBtn');
const culturalAudio = document.getElementById('culturalAudio');
const vinylDisc = document.getElementById('vinylDisc');

playBtn.addEventListener('click', async () => {
    try {
        if (culturalAudio.paused) {
            await culturalAudio.play();
            vinylDisc.classList.add('spinning');
            playBtn.textContent = 'PAUSE ARCHIVE';
        } else {
            culturalAudio.pause();
            vinylDisc.classList.remove('spinning');
            playBtn.textContent = 'PLAY ARCHIVE';
        }
    } catch (err) {
        console.error("Playback restriction error:", err);
        playBtn.textContent = 'TAP TO RETRY';
    }
});

// Clean automatic state reset when audio ends naturally
culturalAudio.addEventListener('ended', () => {
    culturalAudio.currentTime = 0;
    vinylDisc.classList.remove('spinning');
    playBtn.textContent = 'PLAY ARCHIVE';
});

// --- IGBO PROVERB ROTATOR ---
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

// --- OPTIMIZED STARFIELD CANVAS ANIMATION ---
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

const stars = Array.from({ length: 50 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.4 + 0.4,
    speed: Math.random() * 0.25 + 0.08,
    opacity: Math.random()
}));

function animateStars() {
    ctx.clearRect(0, 0, width, height);
    
    stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${star.opacity})`;
        ctx.fill();
    });
    
    requestAnimationFrame(animateStars);
}

animateStars();
