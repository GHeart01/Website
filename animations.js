//header 
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navOverlay = document.querySelector(".nav-overlay");

    menuToggle.addEventListener("click", () => {
        navOverlay.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Fade-in header animation
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 2s';
        header.style.opacity = '1';
    }, 500);

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
// Select the element where the text will be displayed
const typingTextElement = document.getElementById("typing-text");
const textToType = [
    "Hello,",
    "my name is Geralt", // Just the text without span
];
let currentLine = 0; // Track the current line being typed
let index = 0; // Track the current character index

function typeText() {
    if (currentLine < textToType.length) {
        // Create a new h1 element for each line
        const h1Element = document.createElement("h1");
        h1Element.className = "welcome-text"; // Add class for styling
        typingTextElement.appendChild(h1Element); // Append the h1 element to the typing text container

        function typeNextChar() {
            if (index < textToType[currentLine].length) {
                // If it's the line with the name, add span for the name
                if (currentLine === 1 && index === 11) { // At the position where "Geralt" starts
                    h1Element.innerHTML += "<span style='color: #0FA4AF;'>"; // Start span for name
                }

                h1Element.innerHTML += textToType[currentLine].charAt(index);
                index++;

                // If it's the end of the name, close the span
                if (currentLine === 1 && index === 18) { // After "Geralt"
                    h1Element.innerHTML += "</span>"; // End span for name
                }

                setTimeout(typeNextChar, 100); // Adjust typing speed here (in milliseconds)
            } else {
                // Move to the next line after a short pause
                currentLine++;
                index = 0;

                // Add a line break if there's another line to type
                if (currentLine < textToType.length) {
                    typingTextElement.appendChild(document.createElement("br")); // Add a line break
                }

                // Pause before typing the next line
                setTimeout(typeText, 500); // Start typing the next line
            }
        }

        typeNextChar(); // Start typing the first character
    }
}

// Start the typing effect when the window loads
window.onload = typeText; 