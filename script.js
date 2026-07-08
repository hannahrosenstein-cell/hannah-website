const menu = document.querySelector("#mobile-menu");
const openButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".menu-close");
const menuLinks = menu.querySelectorAll("a");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  openButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);

  if (open) {
    closeButton.focus();
  } else if (document.activeElement === closeButton) {
    openButton.focus();
  }
}

openButton.addEventListener("click", () => setMenu(true));
closeButton.addEventListener("click", () => setMenu(false));
menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    setMenu(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720 && menu.classList.contains("is-open")) {
    setMenu(false);
  }
});
