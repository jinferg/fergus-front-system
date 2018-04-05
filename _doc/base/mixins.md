---
layout: doc
title: "Mixin"
updated: 2017-01-27
category: base
---

## Mixins

Any global mixins used throughout your project gets put in here. Zap comes prebuilt with the box, card and fill mixins which help generate various solid fill containers for the build components such as buttons, tables etc. Standardising solid fill styles used for various buttons, containers, navigation etc allow designers and developers to keep their style variations to a minimum and maintain consistency.

```css
.box(@box-color: @white) {
	background-color: @box-color;
	box-shadow: inset 0px -1px 0px 0px darken(@box-color, 10%);
}

.card(@card-color: @white) {
	background-color: @card-color;
	border-radius: @radius;
	box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
}

.fill(@card-color: @white) {
	background-color: @card-color;
}
```
