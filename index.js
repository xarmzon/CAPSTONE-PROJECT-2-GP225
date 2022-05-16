const mobileMenu = document.querySelector("#mobile-menu");
const icon = document.querySelector("#mobile-menu i");
const navItems = document.querySelector("nav ul");
const form = document.forms[0];
const alertBox = document.querySelector("div.alert");
const inputs = document.querySelectorAll("form input.form-control");
const errors = [];
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

inputs.forEach((item, i) => {
  item.addEventListener("blur", (e) => {
    console.log(e.target.name);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(form);
  alertBox.classList.remove("d-none");
  alertBox.innerHTML = "<p>Error</p>";
});
