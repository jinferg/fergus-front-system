---
layout: doc
title: "Button"
updated: 2017-01-27
category: single
---

## Button

### Basic Button

A standard button

<button class="s-btn">Button</button>

```html
<button class="s-btn">
  Button
</button>
```

### Sizes

Buttons have 3 different sizes ranging from `-small` to `-large`.

<div class="u-dist-small">
  <div>
    <button class="s-btn -xsmall">Button</button>
  </div>
	<div>
    <button class="s-btn -small">Button</button>
  </div>
	<div>
    <button class="s-btn">Button</button>
  </div>
	<div>
    <button class="s-btn -large">Button</button>
  </div>
  <div>
    <button class="s-btn -xlarge">Button</button>
  </div>
</div>

```html
<button class="s-btn -xsmall">Button</button>
<button class="s-btn -small">Button</button>
<button class="s-btn">Button</button>
<button class="s-btn -large">Button</button>
<button class="s-btn -xlarge">Button</button>
```

### Broad Buttons

Buttons can vary in width.

<div class="u-dist-small">
	<div>
    <button class="s-btn">Button</button>
  </div>
  <div>
    <button class="s-btn -broad">Button</button>
  </div>
  <div>
    <button class="s-btn -broader">Button</button>
  </div>
  <div>
    <button class="s-btn -broadest">Button</button>
  </div>
  <div>
    <button class="s-btn -fluid">Button</button>
  </div>
</div>

```html
<button class="s-btn">Default</button><br>
<button class="s-btn -broad">Broad</button><br>
<button class="s-btn -broader">Broader</button><br>
<button class="s-btn -broadest">Broadest</button><br>
<button class="s-btn -fluid">Fluid</button>
```

### Shapes

You can apply differently shaped corners to buttons with the `-sharp`, `-round` modifiers.

<div class="u-dist-small">
  <div>
    <button class="s-btn">Button</button>
  </div>
  <div>
    <button class="s-btn -sharp">Button</button>
  </div>
  <div>
    <button class="s-btn -round">Button</button>
  </div>
</div>


```html
<button class="s-btn">Default</button>
<button class="s-btn -sharp">Sharp</button>
<button class="s-btn -round">Round</button>
```

### Button Groups

Buttons can be joined to form a group.

<div class="s-btn-group">
  <button class="s-btn">1</button>
  <button class="s-btn">2</button>
  <button class="s-btn">3</button>
</div>

```html
<div class="s-btn-group">
  <button class="s-btn">1</button>
  <button class="s-btn">2</button>
  <button class="s-btn">3</button>
</div>
```

Groups can be vertical with the `-vertical` modifier or `-m-vertical`, `-t-vertical`, and `-d-vertical` for device specific verticality.

<div class="s-btn-group -vertical">
  <button class="s-btn">1</button>
  <button class="s-btn">2</button>
  <button class="s-btn">3</button>
</div>

```html
<div class="s-btn-group -vertical">
  <button class="s-btn">1</button>
  <button class="s-btn">2</button>
  <button class="s-btn">3</button>
</div>
```

### Colors

There are 8 colors available to choose from.

<div class="s-btn-group -vertical">
  <button class="s-btn -accent">Button</button>
  <button class="s-btn -red">Button</button>
  <button class="s-btn -orange">Button</button>
  <button class="s-btn -yellow">Button</button>
  <button class="s-btn -green">Button</button>
  <button class="s-btn -blue">Button</button>
  <button class="s-btn -purple">Button</button>
  <button class="s-btn -black">Button</button>
</div>

```html
<button class="s-btn -accent">Button</button>
<button class="s-btn -red">Button</button>
<button class="s-btn -orange">Button</button>
<button class="s-btn -yellow">Button</button>
<button class="s-btn -green">Button</button>
<button class="s-btn -blue">Button</button>
<button class="s-btn -purple">Button</button>
<button class="s-btn -black">Button</button>
```

### Outline Buttons

Empty buttons with outlines are also available using the ``-outline`` modifier.

<div class="s-btn-group -vertical">
  <button class="s-btn -outline -accent">Button</button>
  <button class="s-btn -outline -red">Button</button>
  <button class="s-btn -outline -orange">Button</button>
  <button class="s-btn -outline -yellow">Button</button>
  <button class="s-btn -outline -green">Button</button>
  <button class="s-btn -outline -blue">Button</button>
  <button class="s-btn -outline -purple">Button</button>
  <button class="s-btn -outline -black">Button</button>
</div>

```html
<button class="s-btn -outline -accent">Button</button>
<button class="s-btn -outline -red">Button</button>
<button class="s-btn -outline -orange">Button</button>
<button class="s-btn -outline -yellow">Button</button>
<button class="s-btn -outline -green">Button</button>
<button class="s-btn -outline -blue">Button</button>
<button class="s-btn -outline -purple">Button</button>
<button class="s-btn -outline -black">Button</button>
```
