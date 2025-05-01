// Your original script.js content will go here
// If you had any JavaScript for animations or interactivity, it will be included here.
// If your original script.js was empty, this file will also be empty.

// Example of a simple JavaScript animation (you can replace this):
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = 0;
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.5s ease-in-out';
            mainContent.style.opacity = 1;
        }, 150);
    }
});
