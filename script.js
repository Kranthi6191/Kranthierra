document.addEventListener('DOMContentLoaded', function() {
    // Fade-in for main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Initial opacity is set to 0 in CSS for 'main'
        setTimeout(() => {
            mainContent.classList.add('loaded');
        }, 50); // Small delay before adding class, adjust as needed
    }

    // Update copyright year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
