var menuIconEle = document.querySelector(".menu-icon");
var menuEle = document.querySelector(".menu");
var menuParentEle = document.querySelector(".menu-container");
var menuOverlayEle = document.querySelector(".menu-overlay");
var radioBtn = document.querySelectorAll("input");

menuIconEle.addEventListener("click", function () {
  menuEle.className = "menu show";
  menuOverlayEle.className = "menu-overlay show";
});

menuOverlayEle.addEventListener("click", function () {
  menuEle.className = "menu";
  menuOverlayEle.className = "menu-overlay";
});

for (var i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener("click", handleClick)
}

function handleClick (event){
  if (event.target.value === "transform") {
    console.log("transform");
    menuParentEle.className = "menu-container transform-property";
  }
  else {
    console.log("position");
    menuParentEle.className = "menu-container position-property";
  }
}
