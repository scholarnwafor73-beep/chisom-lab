// 1. STARFIELD PARTICLE ENGINE
const canvas = document.getElementById('starfieldCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 65;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = Math.random() > 0.5 ? '#f59e0b' : '#06b6d4';
        this.alpha = Math.random() * 0.7 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// 2. INTERACTIVE PROVERB FADER
const proverbs = [
    '"Egwu ma mma, a naa n\'uba." — Music brings beauty to life.',
    '"Oganiru na-amalite n\'uche." — Innovation starts in the mind.',
    '"Nka na Uzụ." — Craft, technology, and artistic creation.',
    '"Chisom-Lab: Where future code meets living culture."'
];
let proverbIndex = 0;
const proverbDisplay = document.getElementById('proverbDisplay');

setInterval(() => {
    proverbDisplay.style.opacity = '0';
    setTimeout(() => {
        proverbIndex = (proverbIndex + 1) % proverbs.length;
        proverbDisplay.textContent = proverbs[proverbIndex];
        proverbDisplay.style.opacity = '1';
    }, 800);
}, 5000);

// 3. VINYL PLAYER TOGGLE
const playBtn = document.getElementById('playAudioBtn');
const vinyl = document.getElementById('vinylRecord');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        vinyl.style.animationPlayState = 'running';
        playBtn.textContent = 'PAUSE ARCHIVE';
        playBtn.style.background = 'linear-gradient(135deg, #06b6d4, #a855f7)';
        playBtn.style.color = '#ffffff';
    } else {
        vinyl.style.animationPlayState = 'paused';
        playBtn.textContent = 'PLAY ARCHIVE';
        playBtn.style.background = 'linear-gradient(135deg, var(--gold-glow), var(--gold-light))';
        playBtn.style.color = '#000000';
    }
});
