---
layout: doc
title: "Space"
updated: 2017-01-27
category: utility
---

## Distribution

The Dist Utility takes advantage of the Sam Pickering's Labotomized Owl to vertically distribute child elements and set margins based on vertical rhythm scale values.

### Spacing Child Elements

You can space out multiple child elements evenly with spaces that range from `u-dist-small` to `u-dist-large`.

<div class="u-dist-small">
	<div class="u-pad-tight u-fill-shade u-border-radius"></div>
	<div class="u-pad-tight u-fill-shade u-border-radius"></div>
	<div class="u-pad-tight u-fill-shade u-border-radius"></div>
</div>

```html
<div class="u-dist-small">
  ...
</div>
```

### Min Max Sizes

The `-xsmall` and `-xlarge` modifiers are also available to further increase the range the sizes.

```html
<div class="u-dist-xsmall">
  ...
</div>
<div class="u-dist-xlarge">
  ...
</div>
```

### Responsive Distribution

Distribution utility supports the `-m`, `-t`, and `-d` prefixes to apply screen device specific spacing.

```html
<div class="u-dist-m-small">
  ...
</div>
```
