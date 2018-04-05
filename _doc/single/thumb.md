---
layout: doc
title: "Thumb"
updated: 2017-01-27
category: single
---

## Thumbnails

The thumbnail single is useful for components that represent profile images, icons, previews and etc. Not to be confused with the image single component, thumbnails have set sizes and act as a container.

```html
<span class="s-thumb -large">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</span>
```

### Sizes

Thumbnails have 3 sizes.

<div class="u-dist-left-small">
  <span class="s-thumb -small">
    <img src="{{site.baseurl}}/assets/img/logo.png">
  </span>
  <span class="s-thumb ">
    <img src="{{site.baseurl}}/assets/img/logo.png">
  </span>
  <span class="s-thumb -large">
    <img src="{{site.baseurl}}/assets/img/logo.png">
  </span>
</div>

```html
<span class="s-thumb -small">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</span>
<span class="s-thumb ">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</span>
<span class="s-thumb -large">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</span>
```

### Shapes

By default the thumbnail single applies a border radius to the child image but this can be overwritten to apply various shapes

<div class="u-dist-left-small">
  <span class="s-thumb -large -sharp">
    <img src="{{site.baseurl}}/assets/img/logo.png">
  </span>
  <span class="s-thumb -large -round">
    <img src="{{site.baseurl}}/assets/img/logo.png">
  </span>
</div>

```html
<span class="s-thumb -large -sharp">
  <img src="/assets/img/logo.png">
</span>
<span class="s-thumb -large -round">
  <img src="/assets/img/logo.png">
</span>
```
