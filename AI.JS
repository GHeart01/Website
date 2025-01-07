//header 


document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Button animations on hover
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

    // Highlight current page link
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentUrl = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');
        if (linkUrl === currentUrl) {
            link.classList.add('current-page');
        }
    });

    // Scroll fade-in animation
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
