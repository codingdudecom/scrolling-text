const canvas = document.getElementById('scrollingCanvas');
  const ctx = canvas.getContext('2d');
  const text = "Scrolling Text Example";
  let x = canvas.width;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, 30);
    x -= 2; // Adjust speed of scrolling here
    if (x < -ctx.measureText(text).width) {
      x = canvas.width; // Reset position when text is out of view
    }
    requestAnimationFrame(draw);
  }

  draw();
