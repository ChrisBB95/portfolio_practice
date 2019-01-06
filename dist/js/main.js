const menu = document.querySelector(".menu");
const menubtn = document.querySelector(".menu-btn");
const menunav = document.querySelector(".menu-nav");
const menubrand = document.querySelector(".menu-branding");
const navitems = document.querySelectorAll(".nav-item");

let showMenu = false;

menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("show");
    menubtn.classList.add("close");
    menunav.classList.add("show");
    menubrand.classList.add("show");
    navitems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menu.classList.remove("show");
    menubtn.classList.remove("close");
    menunav.classList.remove("show");
    menubrand.classList.remove("show");
    navitems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
