/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================= TYPING EFFECT ================= */

const words = ["Web Developer.", "Developer.", "Freelancer."];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const changingText = document.getElementById("changing-text");

function typeEffect() {
  if (!changingText) return;

  const currentWord = words[wordIndex];

  // typing vs deleting
  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  changingText.textContent = currentWord.substring(0, letterIndex);

  // speeds
  let speed = isDeleting ? 60 : 120;

  // pause when word is fully typed
  if (!isDeleting && letterIndex === currentWord.length) {
    speed = 900; // pause at end
    isDeleting = true;
  }

  // move to next word after deleting
  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300; // pause before typing next word
  }

  setTimeout(typeEffect, speed);
}

typeEffect();