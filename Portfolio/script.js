// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-triggered animations (fade-in & slide-up)
  const observerOptions = { threshold: 0.2 };
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    revealOnScroll.observe(el);
  });

  // 2. Typewriter effect for header name (id="typewriter")
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const text = "Ian";
    let index = 0;
    const speed = 1000; // milliseconds between each character

    typeEl.textContent = ''; // start empty

    function type() {
      if (index < text.length) {
        typeEl.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }

    type();
  }
});

  const typeEl = document.getElementById('intro');
  if (typeEl) {
    const text = "Graphic";
    let index = 0;
    const speed = 500; // milliseconds between each character

    typeEl.textContent = ''; // start empty

    function type() {
      if (index < text.length) {
        typeEl.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }

    type();
  }