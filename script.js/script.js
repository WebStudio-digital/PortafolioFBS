
// =========================
// NAV SCROLL + REVEAL (UNIFICADO)
// =========================
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  // NAV
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

});


// =========================
// INTERSECTION OBSERVER (REVEAL + CARDS)
// =========================
const elements = document.querySelectorAll(".reveal, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => observer.observe(el));


// =========================
// CURSOR GLOW (OPTIMIZADO)
// =========================
const glow = document.querySelector(".cursor-glow");

if (glow) {
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glow.style.left = mouseX + "px";
    glow.style.top = mouseY + "px";
    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}


// =========================
// HAMBURGER MENU
// =========================
document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const nav = document.getElementById("navbar");

  if (!hamburger || !navLinks || !nav) return;

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });

});