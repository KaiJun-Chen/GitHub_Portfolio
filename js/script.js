// Glowing effect
var glower = $(".icon");
window.setInterval(function () {
  glower.toggleClass("active");
}, 1000);

// Back to top button
var $button = $.backToTop();

// Change navbar background on scroll
const navbarbg = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbarbg.classList.add("navbar-scrolled");
    // let scrollY = window.scrollY;
  } else {
    navbarbg.classList.remove("navbar-scrolled");
  }
});

// Scroll fade in animation left side
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-l");
    }
    // else {
    //   entry.target.classList.remove("show-l");
    // }
  });
});

const hiddenElement = document.querySelectorAll(".hidden-l");
hiddenElement.forEach((el) => observer.observe(el));

// Scroll fade in animation icon left side
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-r");
    }
    // else {
    //   entry.target.classList.remove("show-r");
    // }
  });
});

const hiddenElement2 = document.querySelectorAll(".hidden-r");
hiddenElement2.forEach((el) => observer2.observe(el));
