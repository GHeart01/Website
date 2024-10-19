document.addEventListener('DOMContentLoaded', function () {
    // Add animation to the header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 2s';
        header.style.opacity = '1';
    }, 500);

    // Add animation to buttons (expand on hover)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.3s';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Add animation to images (fade in on load)
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.opacity = '0';
        image.style.transition = 'opacity 1s ease-in-out';
        image.addEventListener('load', () => {
            image.style.opacity = '1';
        });
    });

    // Add animation for scroll (fade elements into view)
    const fadeInElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
        fadeInElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
});