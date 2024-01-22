document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("check");
  var navMenu = document.querySelector(".nav_menu");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      navMenu.style.left = "0";
    } else {
      navMenu.style.left = "-100%";
    }
  });
});
