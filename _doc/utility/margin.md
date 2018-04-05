---
layout: doc
title: "Space"
updated: 2017-01-27
category: utility
---

## Margin

Similar to the padding utility the margin utility manipulates the margin property of an element.

```html
<div class="u-marg-bottom">
  ...
</div>
```

### Sizes

Margin ranges from `-small` to  `-large`.

```html
<div class="u-marg-small">
  ...
</div>
<div class="u-marg">
  ...
</div>
<div class="u-marg-large">
  ...
</div>
```

### Min Max Sizes

The `-xsmall` and `-xlarge` modifiers are also available to further increase the range the sizes.

```html
<div class="u-marg-xsmall">
  ...
</div>
<div class="u-marg-xlarge">
  ...
</div>
```

### Directional Margin

You can specify single sided margin with directional modifiers.

```html
<div class="u-marg-left-large">
  ...
</div>
```

### Viewport Based Sizes

The margin utility also supports viewport based sizing ranging from 1 to 20 vh/vw respectively. Directional margin must be applied for viewport based padding function.

```html
<div class="u-marg-top-10vh">
  ...
</div>
<div class="u-marg-right-15vw">
  ...
</div>
```

### Responsive Margin

You can assign screen specific margins with the mobile `-m`, tablet `-t`, and desktop `-d` prefixed modifiers.

```html
<div class="u-marg-m-left-large">
  ...
</div>
```
