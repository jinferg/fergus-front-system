---
layout: doc
title: "Naming Rules"
updated: 2017-01-27
category: getting-started
---

## Naming Rules

Zap ensures every CSS is carefully accounted for by prefixing each class with the letter of class category it belongs under, if its a grid we write `.l-grid` for "Layout Grid", and if its a button then `.s-button` for "Single Button".

Doing so allows us to cleanly namespace each class name and also provides us with information on it's level of specificity. Lets compare these two examples below to demonstrate this concept:

### No Namespacing

```html
<div class="some-class">
  <div class="some-class">
    <div class="some-class__child">
      <div class="some-class"></div>
    <div>
  </div>
</div>
```

### Expressive Namespacing

```html
<div class="l-some-class">
  <div class="m-some-class">
    <div class="m-some-class__child">
      <div class="s-some-class"></div>
    <div>
  </div>
</div>
```

Namespacing provides us with additional information about what it does without having to interpret the class name.
