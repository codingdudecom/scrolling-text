  $(document).ready(
    function loop() {
      $('.scrolling-text').css({scrollLeft:0});
      $('.scrolling-text').animate({ scrollLeft: "+=1000" }, 10000, 'linear', loop);
  });
