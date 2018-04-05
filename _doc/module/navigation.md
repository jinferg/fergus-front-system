---
layout: doc
title: "Navigation"
updated: 2017-01-27
category: module
---

## Navigation

The nav module provides you with a standard responsive navigation bar.

### Basic Navigation

<nav class="m-nav" role="navigation">
  <a href="#" class="m-nav__item u-hide-m u-hide-t is-active">
    A
  </a>
  <a href="#" class="m-nav__item">
    B
  </a>
  <a href="#" class="m-nav__item">
    C
  </a>

  <div class="m-nav__group -right">
    <a href="#" class="m-nav__item">
      D
    </a>
    <a href="#" class="m-nav__item">
      E
    </a>
  </div>
</nav>

```html
<nav class="m-nav" role="navigation">
  <div class="m-nav__group">
    <a href="#" class="m-nav__item u-hide-m u-hide-t is-active">
      A
    </a>
    <a href="#" class="m-nav__item">
      B
    </a>
    <a href="#" class="m-nav__item">
      C
    </a>
  </div>

  <div class="m-nav__group -right">
    <a href="#" class="m-nav__item">
      D
    </a>
    <a href="#" class="m-nav__item">
      E
    </a>
  </div>
</nav>
```
