---
layout: doc
title: "Padding"
updated: 2017-01-27
category: utility
---

## Padding

The padding utility allows us to quickly and easily apply padding to containers based on vertical rhythm scale values.

<div class="u-fill-shade-heavy u-pad">
  <div class="u-fill-shade u-pad-tight">
  </div>
</div>

```html
<div class="u-pad">
  ...
</div>
```

### Sizes

Padding ranges from `-small` to  `-large`.

```html
<div class="u-pad-tight">
  ...
</div>
<div class="u-pad">
  ...
</div>
<div class="u-pad-wide">
  ...
</div>
```

### Min Max Sizes

The `-xsmall` and `-xlarge` modifiers are also available to further increase the range the sizes.

```html
<div class="u-pad-xsmall">
  ...
</div>
<div class="u-pad-xwide">
  ...
</div>
```

### Directional Padding

You can specify single sided padding with directional modifiers.

```html
<div class="u-pad-left-large">
  ...
</div>
```

You can also specify horizontal or vertical padding with the `-x` and `-y` prefixed modifiers.

```html
<div class="u-pad-x-large">
  ...
</div>
```


### Viewport Based Sizes

The padding utility also supports viewport based sizing ranging from 1 to 20 vh/vw respectively. Directional padding must be applied for viewport based padding function.

```html
<div class="u-pad-top-10vh">
  ...
</div>
<div class="u-pad-right-15vh">
  ...
</div>
```

### Responsive Padding

You can assign screen specific padding with the mobile `-m`, tablet `-t`, and desktop `-d` prefixed modifiers.

```html
<div class="u-pad-m-left-large">
  ...
</div>
```
