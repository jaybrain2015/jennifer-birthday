// ========================================
// Confetti Animation
// ========================================

class ConfettiParticle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.w = Math.random() * 10 + 5;
        this.h = Math.random() * 5 + 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.velocityX = Math.random() * 4 - 2;
        this.velocityY = Math.random() * 3 + 2;
        this.color = this.randomColor();
        this.opacity = 1;
    }

    randomColor() {
        const colors = [
            '#667eea', '#764ba2', '#f093fb', '#f5576c',
            '#4facfe', '#00f2fe', '#fa709a', '#fee140',
            '#a8edea', '#fed6e3', '#fbc2eb', '#a6c1ee'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.rotation += this.rotationSpeed;

        if (this.y > this.canvas.height) {
            this.y = -10;
            this.x = Math.random() * this.canvas.width;
        }

        if (this.x < -10 || this.x > this.canvas.width + 10) {
            this.x = Math.random() * this.canvas.width;
        }
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        this.ctx.restore();
    }
}

class ConfettiEffect {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.isActive = false;
        this.animationFrame = null;

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start(particleCount = 150) {
        this.isActive = true;
        this.particles = [];

        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new ConfettiParticle(this.canvas));
        }

        this.animate();
    }

    stop() {
        this.isActive = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        this.particles = [];
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animate() {
        if (!this.isActive) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// Floating Hearts Animation
// ========================================

class HeartParticle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.size = Math.random() * 20 + 15;
        this.velocity = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.swing = Math.random() * 2 - 1;
        this.swingSpeed = Math.random() * 0.02 + 0.01;
        this.swingAmount = Math.random() * 30 + 20;
    }

    update() {
        this.y -= this.velocity;
        this.swing += this.swingSpeed;

        if (this.y < -50) {
            this.y = this.canvas.height + 50;
            this.x = Math.random() * this.canvas.width;
        }
    }

    draw() {
        this.ctx.save();
        this.ctx.globalAlpha = this.opacity;
        this.ctx.font = `${this.size}px Arial`;
        this.ctx.fillText('❤️', this.x + Math.sin(this.swing) * this.swingAmount, this.y);
        this.ctx.restore();
    }
}

class HeartsEffect {
    constructor() {
        this.canvas = document.getElementById('hearts-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.hearts = [];
        this.isActive = true;
        this.animationFrame = null;

        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Start automatically
        this.start();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start(heartCount = 15) {
        this.isActive = true;
        this.hearts = [];

        for (let i = 0; i < heartCount; i++) {
            this.hearts.push(new HeartParticle(this.canvas));
        }

        this.animate();
    }

    stop() {
        this.isActive = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }

    animate() {
        if (!this.isActive) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.hearts.forEach(heart => {
            heart.update();
            heart.draw();
        });

        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// Countdown Timer
// ========================================

class CountdownTimer {
    constructor() {
        this.daysEl = document.getElementById('days');
        this.hoursEl = document.getElementById('hours');
        this.minutesEl = document.getElementById('minutes');
        this.secondsEl = document.getElementById('seconds');

        // Set next birthday (Jan 14, 2027 - adjust this!)
        this.nextBirthday = new Date('2027-01-14T00:00:00');

        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const now = new Date();
        const diff = this.nextBirthday - now;

        if (diff < 0) {
            // Birthday has passed, set to next year
            this.nextBirthday.setFullYear(this.nextBirthday.getFullYear() + 1);
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        this.daysEl.textContent = String(days).padStart(3, '0');
        this.hoursEl.textContent = String(hours).padStart(2, '0');
        this.minutesEl.textContent = String(minutes).padStart(2, '0');
        this.secondsEl.textContent = String(seconds).padStart(2, '0');
    }
}

// ========================================
// Music Toggle
// ========================================

class MusicPlayer {
    constructor() {
        this.audio = document.getElementById('birthday-music');
        this.toggle = document.getElementById('music-toggle');
        this.status = this.toggle.querySelector('.music-status');
        this.isPlaying = false;

        this.toggle.addEventListener('click', () => this.toggleMusic());

        // Set start time to 53 seconds
        this.audio.currentTime = 53;

        // Attempt to play immediately
        this.attemptAutoPlay();

        // Add global listener for first interaction fallback
        this.boundHandleFirstInteraction = this.handleFirstInteraction.bind(this);
        document.addEventListener('click', this.boundHandleFirstInteraction);
        document.addEventListener('keydown', this.boundHandleFirstInteraction);
    }

    async attemptAutoPlay() {
        try {
            await this.play();
        } catch (error) {
            console.log('Autoplay prevented by browser policy, waiting for interaction');
        }
    }

    handleFirstInteraction() {
        if (!this.isPlaying) {
            this.play();
        }
        // Remove listeners after first attempt
        document.removeEventListener('click', this.boundHandleFirstInteraction);
        document.removeEventListener('keydown', this.boundHandleFirstInteraction);
    }

    toggleMusic() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        const playPromise = this.audio.play();

        if (playPromise !== undefined) {
            return playPromise.then(() => {
                this.isPlaying = true;
                this.toggle.classList.add('playing');
                this.status.textContent = 'Music On';
            }).catch(error => {
                console.log('Audio playback prevented:', error);
                this.status.textContent = 'Click to Play';
                throw error;
            });
        }
        return Promise.resolve();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.toggle.classList.remove('playing');
        this.status.textContent = 'Music Off';
    }
}



// ========================================
// Surprise Modal
// ========================================

class SurpriseModal {
    constructor(confettiEffect) {
        this.modal = document.getElementById('surprise-modal');
        this.button = document.getElementById('surprise-button');
        this.closeBtn = document.getElementById('close-modal');
        this.confetti = confettiEffect;

        if (this.button) {
            this.button.addEventListener('click', () => this.open());
        } else {
            console.error('Surprise button not found');
        }

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.close();
                }
            });
        }
    }

    open() {
        if (this.modal) {
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Try to start confetti, but don't break if it fails
            if (this.confetti) {
                try {
                    this.confetti.start();
                } catch (e) {
                    console.error('Failed to start confetti:', e);
                }
            }
        }
    }

    close() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';

            if (this.confetti) {
                try {
                    this.confetti.stop();
                } catch (e) {
                    console.error('Failed to stop confetti:', e);
                }
            }
        }
    }
}

// ========================================
// Photo Lightbox
// ========================================

class PhotoLightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxVideo = document.getElementById('lightbox-video');
        this.videoExitBtn = document.getElementById('video-exit-btn');
        this.closeBtn = document.getElementById('lightbox-close');
        this.prevBtn = document.getElementById('lightbox-prev');
        this.nextBtn = document.getElementById('lightbox-next');
        this.photoCards = document.querySelectorAll('.photo-card');
        this.currentIndex = 0;

        this.mediaItems = Array.from(this.photoCards).map(card => {
            const img = card.querySelector('img.birthday-photo');
            const video = card.querySelector('video.birthday-photo');

            if (img) {
                return { type: 'image', src: img.src };
            } else if (video) {
                // Get source from the source tag if present, or src attribute
                const source = video.querySelector('source');
                return { type: 'video', src: source ? source.src : video.src };
            }
            return null;
        }).filter(item => item !== null);

        this.init();
    }

    init() {
        this.photoCards.forEach((card, index) => {
            // Remove controls from thumbnail videos to prevent inline playback
            const video = card.querySelector('video');
            if (video) {
                video.removeAttribute('controls');
                video.style.pointerEvents = 'none'; // Ensure click goes to card
            }

            card.addEventListener('click', (e) => {
                console.log('Card clicked:', index);
                e.preventDefault(); // Prevent any default behavior
                this.open(index);
            });
        });

        this.closeBtn.addEventListener('click', () => this.close());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        if (this.videoExitBtn) {
            this.videoExitBtn.addEventListener('click', () => this.close());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
            if (e.key === 'Escape') this.close();
        });
    }

    open(index) {
        this.currentIndex = index;
        this.updateLightboxContent();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    updateLightboxContent() {
        const item = this.mediaItems[this.currentIndex];

        // Stop any playing video
        this.lightboxVideo.pause();

        if (item.type === 'image') {
            this.lightboxImage.src = item.src;
            this.lightboxImage.style.display = 'block';
            this.lightboxVideo.style.display = 'none';
            if (this.videoExitBtn) this.videoExitBtn.style.display = 'none';
        } else {
            this.lightboxVideo.src = item.src;
            this.lightboxImage.style.display = 'none';
            this.lightboxVideo.style.display = 'block';
            if (this.videoExitBtn) this.videoExitBtn.style.display = 'block';

            // Ensure mobile playback attributes
            this.lightboxVideo.setAttribute('playsinline', '');
            this.lightboxVideo.setAttribute('webkit-playsinline', '');

            // Auto-play video when opened
            console.log('Playing video:', item.src);
            this.lightboxVideo.play().catch(e => console.error('Auto-play failed:', e));
        }
    }

    close() {
        this.lightbox.classList.remove('active');
        this.lightboxVideo.pause(); // Stop video when closing
        document.body.style.overflow = '';
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
        this.updateLightboxContent();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
        this.updateLightboxContent();
    }
}

// ========================================
// Initialize Application
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    // Initialize all components with error handling
    let confetti;
    try {
        confetti = new ConfettiEffect();
    } catch (e) { console.error('Confetti init failed', e); }

    try {
        new HeartsEffect();
    } catch (e) { console.error('Hearts init failed', e); }

    try {
        new CountdownTimer();
    } catch (e) { console.error('Countdown init failed', e); }

    try {
        new MusicPlayer();
    } catch (e) { console.error('Music init failed', e); }

    try {
        new SurpriseModal(confetti);
    } catch (e) { console.error('Surprise init failed', e); }

    try {
        new PhotoLightbox();
    } catch (e) { console.error('Lightbox init failed', e); }

    // Add subtle confetti on page load
    setTimeout(() => {
        confetti.start(50);
        setTimeout(() => confetti.stop(), 5000);
    }, 1000);

    // Add scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with reveal classes
    document.querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });

    // Safety net: Force reveal all elements after 3 seconds if they haven't been revealed
    // This prevents "invisible content" issues if the observer fails or script crashes
    setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-right').forEach(el => {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
        });
    }, 3000);

    // Initialize 3D Tilt Effect
    initTiltEffect();

    // Initialize Parallax Effect
    initParallaxEffect();
});

// ========================================
// 3D Tilt Effect
// ========================================

function initTiltEffect() {
    const cards = document.querySelectorAll('.photo-card, .appreciation-card, .friend-wish-card, .message-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleHover);
        card.addEventListener('mouseleave', resetHover);
    });
}

function handleHover(e) {
    const card = this;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // Center of card is (0,0)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    // Apply transformation
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Update shadow for depth
    const shadowX = (x - centerX) / 10;
    const shadowY = (y - centerY) / 10;
    card.style.boxShadow = `${-shadowX}px ${-shadowY}px 30px rgba(0,0,0,0.3)`;
}

function resetHover() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    this.style.boxShadow = '';
}

// ========================================
// Parallax Effect
// ========================================

function initParallaxEffect() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.4;

        // Only apply if hero is in view
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ========================================
// Keyboard Accessibility
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('surprise-modal');
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ========================================
// Heart Generation on Message Card Hover
// ========================================

const messageCard = document.getElementById('message-card');
let heartInterval;

if (messageCard) {
    messageCard.addEventListener('mouseenter', () => {
        const container = messageCard.querySelector('.hearts-container');

        // Generate hearts continuously while hovering
        heartInterval = setInterval(() => {
            createHeart(container);
        }, 150); // Create a heart every 150ms
    });

    messageCard.addEventListener('mouseleave', () => {
        clearInterval(heartInterval);
    });
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';

    // Random heart emoji variations
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💞', '💓'];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '0';

    // Random slight horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    heart.style.setProperty('--drift', drift + 'px');

    container.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// ========================================
// Carousel Functionality
// ========================================

class Carousel {
    constructor() {
        this.carousel = document.getElementById('carousel');
        if (!this.carousel) return;

        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('carouselPrev');
        this.nextBtn = document.getElementById('carouselNext');
        this.currentIndex = 0;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        // Arrow click events
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) this.next();
            if (touchEndX - touchStartX > 50) this.prev();
        });

        // Auto-play
        this.startAutoPlay();

        // Pause auto-play on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goToSlide(index) {
        // Remove active class from current slide
        this.slides[this.currentIndex].classList.remove('active');
        this.indicators[this.currentIndex].classList.remove('active');

        // Pause current video if playing
        const currentVideo = this.slides[this.currentIndex].querySelector('video');
        if (currentVideo) currentVideo.pause();

        // Set new index
        this.currentIndex = index;

        // Add active class to new slide
        this.slides[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');

        // Auto-play video if it's a video slide
        const newVideo = this.slides[this.currentIndex].querySelector('video');
        if (newVideo) newVideo.play();
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 5000); // Change slide every 5 seconds
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel();
});
