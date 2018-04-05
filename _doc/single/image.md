---
layout: doc
title: "Image"
updated: 2017-01-27
category: single
---

## Image

The Single Image class `s-img` is image specific class that modifies its display property. The `<img>` tag is an inline element however this can be overwritten with the `s-img` class to apply block or inline-block properties.

<div class="s-thumb -large">
  <img src="{{site.baseurl}}/assets/img/logo.png" class="s-img">
</div>

```html
<img src="/assets/img/logo.png" class="s-img">
```

### Display Properties

Applying `s-img` class transforms the img tag to be a block element by default. However, this can be overwritten to be inline-block with the `-inline` modifier.

```html
<img src="/assets/img/logo.png" class="s-img -inline">
```

### Shapes

Image classes can have various shapes

<div class="u-dist-small">
  <div style="width: 100px; height: 100px;">
    <img src="{{site.baseurl}}/assets/img/logo.png" class="s-img">
  </div>

  <div style="width: 100px; height: 100px;">
    <img src="{{site.baseurl}}/assets/img/logo.png" class="s-img -radius">
  </div>

  <div style="width: 100px; height: 100px;">
    <img src="{{site.baseurl}}/assets/img/logo.png" class="s-img -round">
  </div>
</div>

```html
<img src="/assets/img/logo.png" class="s-img">
<img src="/assets/img/logo.png" class="s-img -radius">
<img src="/assets/img/logo.png" class="s-img -round">
```
