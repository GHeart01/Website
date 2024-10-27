const typingTextElement = document.getElementById("typing-text") as HTMLElement;
const textToType = [
    "Hello,",
    "my name is Geralt",
];
let currentLine = 0;
let index = 0;

function typeText() {
    if (currentLine < textToType.length) {
        // Create a new h1 element for each line
        const h1Element = document.createElement("h1");
        h1Element.className = "welcome-text"; // Add class for styling

        function typeNextChar() {
            if (index < textToType[currentLine].length) {
                h1Element.innerHTML += textToType[currentLine].charAt(index);
                index++;
                setTimeout(typeNextChar, 100); // Adjust typing speed here (in milliseconds)
            } else {
                // Append the finished h1 element to the typing text container
                typingTextElement.appendChild(h1Element);
                currentLine++;
                index = 0;

                // Move to the next line after a short pause
                setTimeout(() => {
                    if (currentLine < textToType.length) {
                        typingTextElement.appendChild(document.createElement("br")); // Add a line break
                        typeText(); // Type the next line
                    }
                }, 500); // Pause before typing the next line
            }
        }

        typeNextChar(); // Start typing the first character
    }
}

// Start the typing effect when the window loads
window.onload = typeText;