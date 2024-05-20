$("#site-landing").polygonizr();

$("#site-landing").on("contextmenu", function (event) {
  event.stopPropagation(); // Allow the event to bubble up to the browser
});
