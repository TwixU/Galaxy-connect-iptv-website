// Reveal animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-fade-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right, .reveal-scale');

    const revealOnScroll = () => {
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Reveal when element is 10% visible in viewport
            if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
                element.classList.add('reveal-visible');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll, { passive: true });
});
