var menuIconEle = document.querySelector('.menu-icon');
var menuEle = document.querySelector('.menu');
var menuOverlayEle = document.querySelector('.menu-overlay');

menuIconEle.addEventListener("click", function () {
  if (menuEle.className === "menu show") {
    menuEle.className = "menu";
    menuOverlayEle.className = "menu-overlay";
  }
  else {
    menuEle.className = "menu show";
    menuOverlayEle.className = "menu-overlay show";
  }
});

menuOverlayEle.addEventListener("click", function () {
  if (menuEle.className === "menu show") {
    menuEle.className = "menu";
    menuOverlayEle.className = "menu-overlay";
  }
});
