---
layout: doc
title: "Show"
updated: 2017-01-27
category: utility
---

## Show

Similarly to the Hide Utility the Show Utility does the opposite and reveals elements with a block display property. This is particularly useful for menu or hamburger icons that are only visible on a mobile screen.


```html
<div class="u-show">
  ...
</div>
```

```css
.u-show {
  display: block;
}
```

### Responsive Show

Assign screen specific show property with the `-m`, `-t`, `-d` modifiers.


```html
<div class="u-show-m">
  ...
</div>
```