var link_burger = document.querySelector(".page-header__logo-link--burger");
var main_nav = document.querySelector(".main-nav");
var menu_header = document.querySelector(".menu-header");
var hidden = document.querySelector(".hidden-devices");
var link_cross = document.querySelector(".page-header__logo-link--closed");
var main_nav_items = document.querySelector(".main-nav__items");

link_burger.addEventListener("click", function (event) {
  event.preventDefault();
  main_nav.classList.remove("hidden-devices");
  link_cross.classList.remove("hidden-devices");
  link_burger.classList.add("hidden-devices");
  menu_header.classList.add ("menu-header--active");
});

link_cross.addEventListener("click", function (cross) {
  cross.preventDefault();
  main_nav.classList.add("hidden-devices");
  menu_header.classList.remove("menu-header--active");
  link_burger.classList.remove("hidden-devices");
  link_cross.classList.add("hidden-devices");
});
//
// main_nav_items.addEventListener("click", function (menuClick) {
//   menuClick.preventDefault();
//   main_nav_items.classList.add("main-nav__items--active");
// });
//
