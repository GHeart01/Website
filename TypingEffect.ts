class TypingEffect {
    element: HTMLElement;
    textArray: string[];
    delay: number;
    index: number;
    isDeleting: boolean;
  
    constructor(elementId: string, textArray: string, delay = 2000) {
      this.element = document.getElementById(elementId)!;
      this.textArray = textArray;
      this.delay = delay;
      this.index = 0;
      this.isDeleting = false;
      this.startTyping();
    }
  
    type(): void {
      const current = this.index % this.textArray.length;
      const fullText = this.textArray[current];
  
      this.element.innerHTML = this.isDeleting
        ? fullText.substring(0, this.element.innerHTML.length - 1)
        : fullText.substring(0, this.element.innerHTML.length + 1);
  
      let typeSpeed = 150;
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      if (!this.isDeleting && this.element.innerHTML === fullText) {
        typeSpeed = this.delay;
        this.isDeleting = true;
      } else if (this.isDeleting && this.element.innerHTML === "") {
        this.isDeleting = false;
        this.index++;
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  
    startTyping(): void {
      this.type();
    }
  }
  
  // Usage
  document.addEventListener("DOMContentLoaded", () => {
    new TypingEffect("typing-text", ["Hello, My name is Geralt"]);
  });