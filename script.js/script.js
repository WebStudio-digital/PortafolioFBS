const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const nav = document.getElementById("navbar");

    if (!hamburger || !navLinks || !nav) return;

    // abrir / cerrar hamburguesa
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    // cerrar al click en links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });

    // cerrar al click afuera
    document.addEventListener("click", (e) => {
        const isInsideNav = nav.contains(e.target);

        if (!isInsideNav) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("open");
        }
    });

});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      card.classList.add("active");
    }
  });
});