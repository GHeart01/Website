var TypingEffect = /** @class */ (function () {
    function TypingEffect(elementId, textArray, delay) {
        if (delay === void 0) { delay = 2000; }
        this.element = document.getElementById(elementId);
        this.textArray = textArray;
        this.delay = delay;
        this.index = 0;
        this.isDeleting = false;
        this.startTyping();
    }
    TypingEffect.prototype.type = function () {
        var _this = this;
        var current = this.index % this.textArray.length;
        var fullText = this.textArray[current];
        this.element.innerHTML = this.isDeleting
            ? fullText.substring(0, this.element.innerHTML.length - 1)
            : fullText.substring(0, this.element.innerHTML.length + 1);
        var typeSpeed = 150;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.element.innerHTML === fullText) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.element.innerHTML === "") {
            this.isDeleting = false;
            this.index++;
            typeSpeed = 500;
        }
        setTimeout(function () { return _this.type(); }, typeSpeed);
    };
    TypingEffect.prototype.startTyping = function () {
        this.type();
    };
    return TypingEffect;
}());
// Usage
document.addEventListener("DOMContentLoaded", function () {
    new TypingEffect("typing-text", ["Hello, My name is Geralt"]);
});
