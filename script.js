// ==========================================
// NAVIGATION & SCROLL EFFECTS
// ==========================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// PARTICLE SYSTEM
// ==========================================

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    drawParticle(particle) {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        this.ctx.fill();
    }

    updateParticle(particle) {
        // Mouse interaction
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius && this.mouse.x !== null) {
            const force = (this.mouse.radius - distance) / this.mouse.radius;
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * force * 0.2;
            particle.vy -= Math.sin(angle) * force * 0.2;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundary check
        if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.3;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            this.updateParticle(particle);
            this.drawParticle(particle);
        });

        this.connectParticles();

        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
}

// ==========================================
// ANIMATED GRADIENT BACKGROUND
// ==========================================

class GradientAnimator {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        if (!this.element) return;

        this.colors = [
            { r: 59, g: 130, b: 246 },   // primary-color
            { r: 139, g: 92, b: 246 },   // secondary-color
            { r: 245, g: 158, b: 11 }    // accent-color
        ];
        this.currentColorIndex = 0;
        this.nextColorIndex = 1;
        this.progress = 0;

        this.animate();
    }

    lerp(start, end, progress) {
        return start + (end - start) * progress;
    }

    animate() {
        this.progress += 0.002;

        if (this.progress >= 1) {
            this.progress = 0;
            this.currentColorIndex = this.nextColorIndex;
            this.nextColorIndex = (this.nextColorIndex + 1) % this.colors.length;
        }

        const current = this.colors[this.currentColorIndex];
        const next = this.colors[this.nextColorIndex];

        const r = Math.round(this.lerp(current.r, next.r, this.progress));
        const g = Math.round(this.lerp(current.g, next.g, this.progress));
        const b = Math.round(this.lerp(current.b, next.b, this.progress));

        this.element.style.background = `radial-gradient(circle at 20% 50%, rgba(${r}, ${g}, ${b}, 0.15) 0%, transparent 50%),
                                          radial-gradient(circle at 80% 80%, rgba(${next.r}, ${next.g}, ${next.b}, 0.15) 0%, transparent 50%)`;

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.stat-card, .timeline-item, .project-card, .skill-category, .achievement-card, .contact-card'
    );

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// ==========================================
// CURSOR TRAIL EFFECT
// ==========================================

class CursorTrail {
    constructor() {
        this.dots = [];
        this.maxDots = 20;
        this.mousePos = { x: 0, y: 0 };

        this.createDots();
        this.setupEventListeners();
        this.animate();
    }

    createDots() {
        for (let i = 0; i < this.maxDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: fixed;
                width: ${10 - i * 0.3}px;
                height: ${10 - i * 0.3}px;
                border-radius: 50%;
                background: rgba(59, 130, 246, ${0.5 - i * 0.025});
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.2s ease-out;
            `;
            document.body.appendChild(dot);
            this.dots.push({
                element: dot,
                x: 0,
                y: 0
            });
        }
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });
    }

    animate() {
        let targetX = this.mousePos.x;
        let targetY = this.mousePos.y;

        this.dots.forEach((dot, index) => {
            dot.x += (targetX - dot.x) * 0.3;
            dot.y += (targetY - dot.y) * 0.3;

            dot.element.style.left = `${dot.x}px`;
            dot.element.style.top = `${dot.y}px`;

            targetX = dot.x;
            targetY = dot.y;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// 3D TILT EFFECT FOR CARDS
// ==========================================

class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.project-card, .achievement-card, .stat-card');
        this.setupCards();
    }

    setupCards() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// ==========================================
// TYPING EFFECT FOR HERO
// ==========================================

class TypingEffect {
    constructor(element, texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;

        if (this.element) {
            this.type();
        }
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            delay = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            delay = 500;
        }

        setTimeout(() => this.type(), delay);
    }
}

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.animated = new Set();
        this.setupObserver();
    }

    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animateCounter(entry.target);
                    this.animated.add(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const number = parseInt(text.replace(/\D/g, ''));
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = hasPlus ? `${number}+` : number;
                clearInterval(timer);
            } else {
                element.textContent = hasPlus ? `${Math.floor(current)}+` : Math.floor(current);
            }
        }, duration / steps);
    }
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// PARALLAX EFFECT
// ==========================================

class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('.parallax-element');
        this.setupParallax();
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            this.elements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// ==========================================
// INITIALIZE EVERYTHING
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem('particle-canvas');

    // Initialize gradient animator
    new GradientAnimator('gradient-bg');

    // Initialize cursor trail (disabled on mobile)
    if (window.innerWidth > 768) {
        new CursorTrail();
    }

    // Initialize 3D tilt effect
    new TiltEffect();

    // Initialize typing effect for subtitle
    const subtitleElement = document.querySelector('.typing-text');
    if (subtitleElement) {
        new TypingEffect(subtitleElement, [
            'AI/ML Enthusiast',
            'Full-Stack Developer',
            'Hackathon Winner',
            'Problem Solver'
        ]);
    }

    // Initialize counter animations
    new CounterAnimation();

    // Initialize parallax
    new ParallaxEffect();

    // Add reveal animation to hero content
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Reduce animations on low-performance devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-normal', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
}

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

console.log('%c👋 Hey there! Welcome to my portfolio!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with vanilla JavaScript, no frameworks needed!', 'color: #8b5cf6; font-size: 14px;');
