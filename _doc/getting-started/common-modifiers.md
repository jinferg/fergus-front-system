---
layout: doc
title: "Common Modifiers"
updated: 2017-01-27
category: getting-started
---

## Scaling Metrics

If you take a look at some of the definitions that comes pre-packaged with Zap you will see the variables `@vr` to define various padding sizes. This is to ensure all our elements are consistently sized and spaced, Zap handles vertical spacing using vertical rhythm based on line-height.

The Modular Scale variable `@ms` handles all font size related scaling while Vertical Rhythm `@vr` handles all general spacing such as padding and margins. There are a range of 8 scale variables available for each type, these range from `@ms-1` to `@ms6`.

For various definition dependent sizing such as button sizes, column gap sizes etc, Zap provides 2 types class modifiers. For generic component sizing such as buttons and thumbnail sizes Zap uses the following modifiers to define sizes:

```html
-xsmall
-small
-medium
-large
-xlarge
```

For sizing related to margin spacing, column gap widths etc Zap uses the following modifiers:

```html
-tight
-narrow
-wide
```

Although these scales can be modified and extended in anyway possible, by design it is not recommended that you go beyond the existing set of scales. The Zap methodology was deliberately designed this way in order to maintain simplicity for both designers and developers. The less number of options are available the more consistent and simple your project visual outcome will become.

## Responsive Modifiers

All responsive components has the `-m`, `-t`, `-d` prefixed modifiers to make it device specific (mobile, tablet, desktop).

```html
<div class="l-wrap -project -t-flush">
  ...
</div>
```

This applies padding only on desktop, and removes padding for mobile and tablet. Certain components include the `-v` (tv) modifier to provide further device specificity beyond desktop.
