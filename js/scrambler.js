$(document).ready(function () {
  $(function () {
    $(".title").scrambler({
      speed: 100,
      duration: 3000,
      reveal: 200,
      total_iterations: 0,
      interval: -1,
    });
  });

  $(function () {
    $(".sub-title").scrambler({
      effect: "typing",
      speed: 100,
      duration: 3000,
      reveal: 100,
      total_iterations: 0,
    });
  });
});
