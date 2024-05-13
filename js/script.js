// Glowing effect
var glower = $(".code-logo");
window.setInterval(function () {
  glower.toggleClass("active");
}, 1000);

// Back to top button
var $button = $.backToTop();

const navbarbg = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbarbg.classList.add("navbar-scrolled");
    let scrollY = window.scrollY;
  } else {
    navbarbg.classList.remove("navbar-scrolled");
  }
});
