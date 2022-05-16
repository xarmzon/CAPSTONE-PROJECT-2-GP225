const mobileMenu = document.querySelector("#mobile-menu");
const navItems = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
