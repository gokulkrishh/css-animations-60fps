var menuIconEle = document.querySelector(".menu-icon");
var menuEle = document.querySelector(".menu");
var menuOverlayEle = document.querySelector(".menu-overlay");

menuIconEle.addEventListener("click", function () {
  menuEle.className = "menu show";
  menuOverlayEle.className = "menu-overlay show";
});

menuOverlayEle.addEventListener("click", function () {
  menuEle.className = "menu";
  menuOverlayEle.className = "menu-overlay";
});
