---
layout: doc
title: "Hide"
updated: 2017-01-27
category: utility
---

## Hide

The Hide Utility is essentially a hidden class. It transforms the display property of an object to none.

```html
<div class="u-hide">
  ...
</div>
```

```css
.u-hide {
  display: none;
}
```

### Responsive Hidden

You can assign screen specific hide with the `-m`, `-t`, and `-d` modifiers.

```html
<div class="u-hide-m">
  // Hides on Mobile
</div>
<div class="u-hide-t">
  // Hides on Mobile
</div>
<div class="u-hide-d">
  // Hides on Mobile
</div>
```