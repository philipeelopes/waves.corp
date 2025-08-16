const messages = [
  "Cada segundo conta diante das mudanças climáticas..."
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenMessages = 1500;
const typingElement = document.getElementById("typing");

function type() {
  const currentMessage = messages[messageIndex];

  if (!isDeleting && charIndex <= currentMessage.length) {
    typingElement.textContent = currentMessage.substring(0, charIndex++);
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    typingElement.textContent = currentMessage.substring(0, charIndex--);
    setTimeout(type, erasingSpeed);
  } else {
    if (!isDeleting) {
      if (messageIndex < messages.length - 1) {
        isDeleting = true;
        setTimeout(type, delayBetweenMessages);
      } else {
        // Última frase -> espera 1s e inicia animação de rasgar
        setTimeout(() => {
          document.body.classList.add("rasgando");

          // Depois da animação, remove preloader e mostra conteúdo
          setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.querySelector(".preloader-top").style.display = "none";
            document.querySelector(".preloader-bottom").style.display = "none";
            document.body.classList.add("showContent");
            document.body.style.overflow = "auto";
          }, 2200); // tempo do rasgo (2s)
        }, 1000); // espera 1s antes do rasgo
      }
    } else {
      isDeleting = false;
      messageIndex++;
      setTimeout(type, typingSpeed);
    }
  }
}

// inicia o typing
document.addEventListener("DOMContentLoaded", type);

