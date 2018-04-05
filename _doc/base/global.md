---
layout: doc
title: "Global"
updated: 2017-01-27
category: base
---

## Global

The base global contains all the default styling for all elements such as body, p, h1, etc. To override or extend any of these values modify the `b-global.definition` file.

### Type Rhythm

All font sizing are handled using the rem unit and the base font size is set to 62.5% solution to allow for easy rem conversion.

```css
html {
	width: 100%;
	height: 100%;
	font-size: 62.5%;
}
body {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background: @background;
	font-family: @font-family, sans-serif;
	font-size: @font-size;
	font-weight: @regular;
	line-height: @line-height;
	color: @default-color;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
*, *:before, *:after {
	box-sizing: inherit;
}
::-moz-selection {
  background: fade(@brand-color, 20%);
}
::selection {
  background: fade(@brand-color, 20%); // background color of selected text
}
```

```css
// Headings
// ------------------------------

h1 {
	font-size: @h1;
	line-height: 6.4rem;
	margin-top: @line-height * 3;
	margin-bottom: @line-height;
}
h2 {
	font-size: @h2;
	line-height: 4.8rem;
	margin-top: @line-height * 3;
	margin-bottom: @line-height;
}
h3 {
	font-size: @h3;
	line-height: 3.2rem;
	margin-top: @line-height * 2;
	margin-bottom: @line-height;
}
h4 {
	font-size: @h4;
	line-height: 2.7rem;
	margin-top: @line-height;
	margin-bottom: @line-height;
}
h5 {
	font-size: @h5;
	line-height: 2.4rem;
	margin-top: @line-height;
	margin-bottom: @line-height;
}
h6 {
	font-size: @h6;
	line-height: 1.9rem;
	margin-top: @line-height;
	margin-bottom: @line-height;
}
```
