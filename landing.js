// ========================================
// Cinematic Landing Page Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enterButton');
    const curtainLeft = document.getElementById('curtainLeft');
    const curtainRight = document.getElementById('curtainRight');
    const landingPage = document.getElementById('landingPage');

    // Auto-open curtains on page load (after 2 seconds)
    setTimeout(() => {
        openCurtains();
    }, 2000);

    // Enter button click handler
    enterButton.addEventListener('click', () => {
        enterCelebration();
    });

    // Scroll to reveal effect
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                openCurtains();
            }
        }, 100);
    });

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        const landingImage = document.querySelector('.landing-image');
        if (landingImage) {
            landingImage.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Floating circles animation
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach((circle, index) => {
        const randomDuration = 15 + (index * 5);
        const randomDelay = index * 3;
        circle.style.animationDuration = `${randomDuration}s`;
        circle.style.animationDelay = `${randomDelay}s`;
    });
});

// ========================================
// Curtain Functions
// ========================================

function openCurtains() {
    const curtainLeft = document.getElementById('curtainLeft');
    const curtainRight = document.getElementById('curtainRight');

    if (curtainLeft && curtainRight) {
        curtainLeft.classList.add('open');
        curtainRight.classList.add('open');
    }
}

function closeCurtains() {
    const curtainLeft = document.getElementById('curtainLeft');
    const curtainRight = document.getElementById('curtainRight');

    if (curtainLeft && curtainRight) {
        curtainLeft.classList.remove('open');
        curtainRight.classList.remove('open');
    }
}

// ========================================
// Enter Celebration
// ========================================

function enterCelebration() {
    const landingPage = document.getElementById('landingPage');
    const enterButton = document.getElementById('enterButton');

    // Disable button
    enterButton.style.pointerEvents = 'none';
    enterButton.style.opacity = '0.5';

    // Close curtains
    closeCurtains();

    // Fade out landing page
    setTimeout(() => {
        landingPage.style.transition = 'opacity 1s ease-out';
        landingPage.style.opacity = '0';
    }, 1500);

    // Redirect to main birthday page
    setTimeout(() => {
        window.location.href = 'birthday.html';
    }, 2500);
}

// ========================================
// Sparkle Effects
// ========================================

function createSparkles() {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach((sparkle, index) => {
        const randomDelay = Math.random() * 4;
        sparkle.style.animationDelay = `${randomDelay}s`;
    });
}

createSparkles();

// ========================================
// Scroll Indicator Hide on Scroll
// ========================================

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const currentScroll = window.scrollY;

    if (currentScroll > 50 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
    }

    lastScroll = currentScroll;
});

// ========================================
// Preload Main Page
// ========================================

// Preload main birthday page for smooth transition
const link = document.createElement('link');
link.rel = 'prefetch';
link.href = 'birthday.html';
document.head.appendChild(link);
