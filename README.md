# Scrolling Text
5 different methods for coding scrolling text with plain HTML, HTML &amp; CSS and finally HTML + CSS + JS

You can see here a fully working [scrolling text](https://www.psd-dude.com/scrolling-text/) generator made with simple JS. If you want a technical description of what these methods can do for you, check out my article [here](https://www.coding-dude.com/wp/css/scrolling-text-using-html/)

## Plain HTML Scrolling Text

Simply add a tag around the text to create a scrolling effect. This tag offers a few interesting parameters among which:

- direction — can be: left, right, up, or down
- scrollamount - the speed of the scroll text
- loop — how many times should the scrolling repeat

***NOTE:*** The is a deprecated HTML tag, so I’d recommend restrain in using it for modern web projects.


## Animated Scrolling Text with CSS

Define a CSS animation called scroll that animates the translateX property.

```css
@keyframes scroll {
 0% { transform: translateX(100%); }
 100% { transform: translateX(-100%); }
}
```

Then apply that animation to your text element:

```css
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
