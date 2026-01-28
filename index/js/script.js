// Ocultar header al bajar y mostrar al subir
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  lastScroll = currentScroll;
});

// Slider automático del hero
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3500);
}
