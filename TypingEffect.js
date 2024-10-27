var typingTextElement = document.getElementById("typing-text");
var textToType = [
    "Hello,",
    "my name is Geralt",
];
var currentLine = 0;
var index = 0;
function typeText() {
    if (currentLine < textToType.length) {
        if (index < textToType[currentLine].length) {
            typingTextElement.innerHTML += textToType[currentLine].charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here (in milliseconds)
        }
        else {
            // Move to the next line after a short pause
            currentLine++;
            index = 0;
            setTimeout(function () {
                typingTextElement.innerHTML += "<br>"; // Add a line break
                typeText();
            }, 500); // Pause before typing the next line
        }
    }
}
// Start the typing effect when the window loads
window.onload = typeText;
