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
const typingTextElement = document.getElementById("typing-text");
const linesToType = Array.from(typingTextElement.children); // Fetch all child elements (h1 tags)
let currentLine = 0; // Track the current line being typed
let index = 0; // Track the current character index

// Clear the content initially
typingTextElement.innerHTML = "";

function typeText() {
    if (currentLine < linesToType.length) {
        // Get the current line's innerHTML
        const lineHTML = linesToType[currentLine].innerHTML; // Raw HTML content
        const h1Element = document.createElement("h1");
        h1Element.className = "welcome-text";
        typingTextElement.appendChild(h1Element);

        // Separate tags and text
        const fragments = parseHTML(lineHTML);

        function typeNextChar() {
            if (index < fragments.visibleText.length) {
                h1Element.innerHTML = assembleHTML(fragments, index); // Assemble up to the current index
                index++;
                setTimeout(typeNextChar, 100); // Adjust typing speed here (in milliseconds)
            } else {
                // Move to the next line after a short pause
                currentLine++;
                index = 0;

                // Add a line break if there's another line to type
                if (currentLine < linesToType.length) {
                    typingTextElement.appendChild(document.createElement("br"));
                }

                setTimeout(typeText, 300); // Pause before typing the next line
            }
        }

        typeNextChar(); // Start typing the first character
    }
}

// Utility to parse raw HTML into visible text and tags
function parseHTML(html) {
    const visibleText = []; // Array of visible characters
    const tags = []; // Array of HTML tags with their positions

    let insideTag = false;
    let currentTag = '';
    let position = 0;

    for (let char of html) {
        if (char === '<') {
            insideTag = true;
            currentTag = char;
        } else if (char === '>') {
            insideTag = false;
            currentTag += char;
            tags.push({ tag: currentTag, position });
        } else if (insideTag) {
            currentTag += char;
        } else {
            visibleText.push(char); // Collect visible text
            position++;
        }
    }

    return { visibleText, tags };
}

// Utility to assemble HTML up to the current index
function assembleHTML(fragments, currentIndex) {
    const { visibleText, tags } = fragments;
    let result = '';
    let visibleCharIndex = 0;

    for (let i = 0; i < visibleText.length; i++) {
        // Add any tags that match the current position
        for (const tag of tags) {
            if (tag.position === visibleCharIndex) {
                result += tag.tag; // Add the tag to the result
            }
        }

        // Add the next visible character up to the current index
        if (i <= currentIndex) {
            result += visibleText[i];
            visibleCharIndex++;
        }
    }

    // Close any unclosed tags
    for (const tag of tags) {
        if (tag.position >= visibleCharIndex) {
            result += tag.tag; // Add remaining tags at the end
        }
    }

    return result;
}

// Start the typing effect when the window loads
window.onload = typeText;
