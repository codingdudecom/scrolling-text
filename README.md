# Scrolling Text
5 different methods for coding scrolling text with plain HTML, HTML &amp; CSS and finally HTML + CSS + JS

You can see here a fully working [scrolling text](https://www.psd-dude.com/scrolling-text/) generator made with simple JS. If you want a technical description of what these methods can do for you, check out my article [here](https://www.coding-dude.com/wp/css/scrolling-text-using-html/)

## Method 1 - Plain HTML Scrolling Text

Simply add a tag around the text to create a scrolling effect. This tag offers a few interesting parameters among which:

- direction — can be: left, right, up, or down
- scrollamount - the speed of the scroll text
- loop — how many times should the scrolling repeat

***NOTE:*** The is a deprecated HTML tag, so I’d recommend restrain in using it for modern web projects.


## Method 2 - Animated Scrolling Text with CSS

Define a CSS animation called scroll that animates the translateX property.

```css
@keyframes scroll {
 0% { transform: translateX(100%); }
 100% { transform: translateX(-100%); }
}
```

Then apply that animation to your text element:

```html
<div class="scrolling-text">Scrolling Text</div>
```

by adding this CSS:

```css
.scrolling-text {
width: 100%;
overflow: hidden;
white-space: nowrap;
box-sizing: border-box;
animation: scroll 10s linear infinite;
}
```

Changing from translateX to translateY will give you a vertical scrolling text. Switching 0% and 100% around will give you the reverse scrolling text direction. And in the .scrolling-text CSS class if you change the 10s duration of the animation you change the speed of the scrolling text.


## Method 3 - HTML + CSS + JavaScript Scrolling Text

HTML code:

```html
<div class="scrolling-text">
Scrolling Text Scrolling Text Scrolling Text
</div>
```

CSS code:

```css
.scrolling-text {
width: 30vw;
white-space: nowrap;
overflow: hidden;
box-sizing: border-box;
font-size:clamp(16px,50dvh,220px);
white-space:nowrap;
margin: 0 auto;
}
```

JavaScript code:

```js
const container = document.querySelector('.scrolling-text');
let scrollAmount = 0;

setInterval(() => {
 scrollAmount += 10;
 container.scrollLeft = scrollAmount;
 if (scrollAmount >= container.scrollWidth) {
  scrollAmount = 0;
 }
}, 20);
```

This is my most “unelegant” solution for making scrolling text. Basically it’s cramming a text in a container with scroll and changes the scrolling of the container programmatically. When the scroll amount goes over the container amount it resets.


## Method 4 - Scroll Text with jQuery

```js
(document).ready(
 function loop() {
  $('.scrolling-text').css({scrollLeft:0});
  $('.scrolling-text').animate({ scrollLeft: "+=1000" }, 10000, 'linear', loop);
 }
);
```

Use the `animate()` jQuery function to animate the scrollLeft property and this will create a scrolling text effect.

In my view jQuery is a bit of an overkill in this situation, and it only makes sense if you already use jQuery in your project.

Of course, `animate()` can also be used for animating the translateX or translateY properties as seen above.

## Method 5 - Scrolling Text with Canvas HTML5

This is my favorite method. Especially because it’s so flexible and offers so many possibilities, like for example exporting the scrolling text as GIF or even video. You can see this in action by going the the Scrolling Text generator on PSDDude where you can create your own customized scrolling text images and videos.

The HTML code is straight forwards:

```html
<canvas id="scrollingCanvas" width="300" height="50"></canvas>
```

and the JS is where the magic happens:

```js
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
```

Using a loop with `requestAnimationFrame()` calling the function `draw()` is actually the way HTML5 games implement their graphics drawing. This is a cool way for creating smooth scrolling text.

You get the size on screen of the text using the `measureText()` context method. This allows creating a seamless scrolling text by resetting the text position when it reaches the end position.


## A Few Scrolling Text Ideas

[LED Scrolling Text GIF](https://www.psd-dude.com/scrolling-text/#m0uqu9rk):

![LED Scrolling Text](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*d2YWlLTImlda4sLMj7OJAw.gif)

[Star Wars Opening Crawl Scrolling Text Generator](https://www.psd-dude.com/scrolling-text/#m0ur6r1y):

[![Scrolling Text](https://img.youtube.com/vi/RkRJeGlwCQI/0.jpg)](https://www.youtube.com/watch?v=RkRJeGlwCQI)

[Stock Market Scrolling Text](https://www.psd-dude.com/scrolling-text/#m0sd5fsu):

![Stock Market Scrolling Text](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Z7umTkUdp3ZS5CPk2RQdfA.gif)

[Weather Scrolling Text](https://www.psd-dude.com/scrolling-text/#m0sfzqcm):

![Weather Scrolling Text](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-8WQXpIOxMQNurj4d_u3iQ.gif)

These were created with the [scrolling text gif and video generator](https://www.psd-dude.com/scrolling-text/) on [PSDDude](https://www.psd-dude.com/).

