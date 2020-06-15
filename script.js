//Toggle header

const mobileMenu = document.querySelector(".mobile-menu");
let header = document.querySelector("header");

mobileMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});
