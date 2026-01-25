document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Update Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger Animation
            const spans = mobileBtn.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 3. SAFE ANIMATIONS
    // We check if the browser supports 'IntersectionObserver'
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, { threshold: 0.1 });

        // Select elements to animate
        const elementsToAnimate = document.querySelectorAll('.post-card, .blog-container, .split-image, .split-content, .verse-highlight');
        
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll'); // Only add hidden class if JS works!
            observer.observe(el);
        });
    }
});
