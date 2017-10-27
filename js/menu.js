var link_burger = document.querySelector(".page-header__logo-link--burger");
var logo_link = document.querySelector(".page-header__logo-link");
var icon_cross = document.querySelector(".page-header__icon-closed");
var main_nav = document.querySelector(".main-nav");
var menu_header = document.querySelector(".menu-header");
var hidden = document.querySelector(".hidden-devices");
var link_cross = document.querySelector(".page-header__logo-link--closed");
link_burger.addEventListener("click", function (event) {
  event.preventDefault();
  main_nav.classList.remove("hidden-devices");
  link_cross.remove("hidden-devices");
  link_burger.classList.add("hidden-devices");
  menu_header.classList.add ("menu-header--active");
  link_cross.classList.remove("hidden-devices");
});

