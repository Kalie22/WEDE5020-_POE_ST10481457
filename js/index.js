// index.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scroll for buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Fade-in animation for sections on scroll
    const faders = document.querySelectorAll('.content, .hero-content');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Dynamic greeting based on time
    const heroHeader = document.querySelector('.hero h1');
    const hour = new Date().getHours();
    let greeting = "Welcome to MOOKA Solutions";

    if (hour < 12) greeting = "Good Morning! Welcome to MOOKA Solutions";
    else if (hour < 18) greeting = "Good Afternoon! Welcome to MOOKA Solutions";
    else greeting = "Good Evening! Welcome to MOOKA Solutions";

    if (heroHeader) heroHeader.textContent = greeting;
});
