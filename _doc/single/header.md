---
layout: doc
title: "Header"
updated: 2017-01-27
category: single
---

## Header

By default, the header single range in size that step up using the modular scale with space before and after set based on vertical rhythm. Apply the class `s-head` to apply this single.

```html
<h6 class="s-head">H6 Typography</h6>
<h5 class="s-head">H5 Typography</h5>
<h4 class="s-head">H4 Typography</h4>
<h3 class="s-head">H3 Typography</h3>
<h2 class="s-head">H2 Typography</h2>
<h1 class="s-head">H1 Typography</h1>
```

### Weights

You can change the weight of any single header element with the ``-light``, ``-regular``, ``-medium``, ``-semi-bold``, and ``-bold`` modifiers.

```html
<h1 class="s-head -light">Light Typography</h1>
<h1 class="s-headegular">Regular Typography</h1>
<h1 class="s-head -medium">Medium Typography</h1>
<h1 class="s-head -semi-bold">Semi-Bold Typography</h1>
<h1 class="s-head -bold">Bold Typography</h1>
```

### Spacing

The vertical rhythm can be overwritten using the ``-tight``, ``-narrow``, ``-wide`` modifiers.

<div class="z-demo-box"></div>
<h5 class="s-head">Standard Spacing</h5>
<div class="z-demo-box"></div>
<h5 class="s-head -tight">Tight Spacing</h5>
<div class="z-demo-box"></div>
<h5 class="s-head -narrow">Narrow Spacing</h5>
<div class="z-demo-box"></div>
<h5 class="s-head -wide">Wide Spacing</h5>
<div class="z-demo-box"></div>

```html
<h1 class="s-head">Standard Spacing</h1>
<h1 class="s-head -tight">Tight Spacing</h1>
<h1 class="s-head -narrow">Narrow Spacing</h1>
<h1 class="s-head -wide">Wide Spacing</h1>
```

### Ruled Headers

Headers can have a line underneath with the `-ruled` modifier.

```html
<h1 class="s-headuled">Ruled Heading</h1>
```

### Resets

By default the `s-head` applies an automatic margin to the top and bottom but this can be reset with the `-r` modifier.

```html
<h1 class="s-head -wide">Standard Spacing</h1>
```