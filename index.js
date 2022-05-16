const mobileMenu = document.querySelector("#mobile-menu");
const icon = document.querySelector("#mobile-menu i");
const navItems = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navItems.classList.toggle("active");
  if (icon.classList.contains("bi-list")) {
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x-circle");
  } else {
    icon.classList.add("bi-list");
    icon.classList.remove("bi-x-circle");
  }
});
