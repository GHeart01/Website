var typingTextElement = document.getElementById("typing-text");
var textToType = [
    "Hello,",
    "my name is Geralt",
];
var currentLine = 0;
var index = 0;
function typeText() {
    if (currentLine < textToType.length) {
        // Create a new h1 element for each line
        var h1Element_1 = document.createElement("h1");
        h1Element_1.className = "welcome-text"; // Add class for styling
        function typeNextChar() {
            if (index < textToType[currentLine].length) {
                h1Element_1.innerHTML += textToType[currentLine].charAt(index);
                index++;
                setTimeout(typeNextChar, 100); // Adjust typing speed here (in milliseconds)
            }
            else {
                // Append the finished h1 element to the typing text container
                typingTextElement.appendChild(h1Element_1);
                currentLine++;
                index = 0;
                // Move to the next line after a short pause
                setTimeout(function () {
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
