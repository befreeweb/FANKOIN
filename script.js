// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.problem-card, .feature-item, .roadmap-phase, .stat-card, .cta-stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for floating orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-orb, .bg-orb, .cta-orb');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Dynamic particle generation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #ec4899;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        animation: particleFloat 4s ease-out forwards;
    `;
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        10% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
        }
        90% {
            opacity: 1;
            transform: translateY(-${window.innerHeight + 100}px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-${window.innerHeight + 100}px) scale(0);
        }
    }
`;
document.head.appendChild(particleStyle);

// Generate particles periodically
setInterval(createParticle, 2000);

// Button hover effects
document.querySelectorAll('.btn-primary, .btn-secondary, .launch-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Card hover effects with 3D tilt
document.querySelectorAll('.stat-card, .problem-card, .feature-item, .cta-stat').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 500);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Add glitch effect to gradient text
document.querySelectorAll('.gradient-text').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        this.style.animation = 'gradientShift 0.5s ease, glitch 0.5s ease';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.animation = 'gradientShift 4s ease infinite';
    });
});

// Add glitch animation CSS
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-2px); }
        40% { transform: translateX(2px); }
        60% { transform: translateX(-1px); }
        80% { transform: translateX(1px); }
    }
`;
document.head.appendChild(glitchStyle);

// Smooth reveal animation for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(section);
});

// Add revealed class styles
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(revealStyle);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Activate special effects
        document.body.style.animation = 'rainbow 2s ease infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
        
        // Show special message
        const message = document.createElement('div');
        message.textContent = '🎉 FANKOIN POWER ACTIVATED! 🚀';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ec4899, #a855f7);
            color: white;
            padding: 20px 40px;
            border-radius: 20px;
            font-size: 24px;
            font-weight: bold;
            z-index: 10000;
            animation: bounce 1s ease infinite;
        `;
        
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
        
        konamiCode = [];
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Slideshow functionality
let currentSlide = 1;
let totalSlides = 8;
let isPlaying = true;
let slideInterval;
let progressInterval;
let progress = 0;

// Initialize slideshow
function initSlideshow() {
    startSlideshow();
    updateSlideCounter();
    
    // Event listeners
    document.getElementById('prevBtn').addEventListener('click', previousSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    
    // Indicator clicks
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index + 1));
    });
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') previousSlide();
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        }
        if (e.key === 'Escape') togglePlayPause();
    });
}

function startSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    if (progressInterval) clearInterval(progressInterval);
    
    progress = 0;
    
    slideInterval = setInterval(() => {
        nextSlide();
    }, 8000);
    
    progressInterval = setInterval(() => {
        progress += 0.125; // 8000ms / 100 = 80, 100/80 = 1.25, but we want smoother so /10 = 0.125
        if (progress >= 100) {
            progress = 0;
        }
        document.getElementById('progressBar').style.width = progress + '%';
    }, 10);
}

function stopSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    if (progressInterval) clearInterval(progressInterval);
}

function nextSlide() {
    currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
    progress = 0;
}

function previousSlide() {
    currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
    progress = 0;
}

function goToSlide(slideNum) {
    currentSlide = slideNum;
    showSlide(currentSlide);
    progress = 0;
}

function showSlide(slideNum) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const targetSlide = document.querySelector(`[data-slide="${slideNum}"]`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index + 1 === slideNum);
    });
    
    updateSlideCounter();
}

function togglePlayPause() {
    const btn = document.getElementById('playPauseBtn');
    if (isPlaying) {
        stopSlideshow();
        btn.textContent = '▶️ Play';
        isPlaying = false;
    } else {
        startSlideshow();
        btn.textContent = '⏸️ Pause';
        isPlaying = true;
    }
}

function updateSlideCounter() {
    document.getElementById('currentSlideNum').textContent = currentSlide;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.slideshow-section')) {
        initSlideshow();
    }
});

// Pause slideshow when user scrolls away from section
let slideshowSection = null;

window.addEventListener('scroll', () => {
    if (!slideshowSection) {
        slideshowSection = document.querySelector('.slideshow-section');
    }
    
    if (slideshowSection) {
        const rect = slideshowSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible && isPlaying) {
            stopSlideshow();
        } else if (isVisible && isPlaying && !slideInterval) {
            startSlideshow();
        }
    }
});