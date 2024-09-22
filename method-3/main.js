  const container = document.querySelector('.scrolling-text');
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 10;
    container.scrollLeft = scrollAmount;
    if (scrollAmount >= container.scrollWidth) {
      scrollAmount = 0;
    }
  }, 20);
