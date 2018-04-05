---
layout: doc
title: "Flag Object"
updated: 2017-01-27
category: module
---

## Flag Object

The classic media object by Nicole Sullivan is useful when you wish to represent any small module of content that typically has an image/thumbnail on the left and title/name on the right. A common pattern in many social networking sites.

Express uses the flex layout property to produce the media object. This is quite similar to CSS Wizardry's approach of the flag object.

### Basic Flag Object

<ul class="m-flag">
  <li class="m-flag__item -narrow">
    <span class="s-thumb -round">
      <img src="{{site.baseurl}}/assets/img/logo.png">
    </span>
  </li>
  <li class="m-flag__item">
    <h4 class="s-head">Flag Object</h4>
  </li>
</ul>

```html
<ul class="m-flag">
  <li class="m-flag__item">
    Image
  </li>
  <li class="m-flag__item">
    Text
  </li>
</ul>
```

### Spacing

The media object accepts 3 spacing modifiers, `-tight`, `-narrow`, and `-wide`.

<div class="u-dist-left">
  <ul class="m-flag">
    <li class="m-flag__item -tight">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item">
      <h4 class="s-head">Tight</h4>
    </li>
  </ul>
  <ul class="m-flag">
    <li class="m-flag__item -narrow">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item">
      <h4 class="s-head">Narrow</h4>
    </li>
  </ul>
  <ul class="m-flag">
    <li class="m-flag__item -wide">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item">
      <h4 class="s-head">Wide</h4>
    </li>
  </ul>
</div>

```html
<ul class="m-flag">
  <li class="m-flag__item -tight">
    ...
  </li>
  <li class="m-flag__item">
    ...
  </li>
</ul>
<ul class="m-flag">
  <li class="m-flag__item -narrow">
    ...
  </li>
  <li class="m-flag__item">
    ...
  </li>
</ul>
<ul class="m-flag">
  <li class="m-flag__item -tight">
    ...
  </li>
  <li class="m-flag__item">
    ...
  </li>
</ul>
```

It can also be fluid.

<ul class="m-flag -fluid">
    <li class="m-flag__item -wide">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item u-align-right"><h4 class="s-head">Fluid</h4></li>
</ul>

```html
<ul class="m-flag -fluid">
 ...
</ul>
```

Vertical Alignment

Similar to the table grids, we can control the vertical alignment of the item content with the `-top`, and `-bottom` modifiers. Note, the media object's vertical alignment is set to middle by default.

<div class="u-dist-left">
  <ul class="m-flag">
    <li class="m-flag__item -tight">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item -top">
      <h4 class="s-head">Top</h4>
    </li>
  </ul>
  <ul class="m-flag">
    <li class="m-flag__item -tight">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item">
      <h4 class="s-head">Default</h4>
    </li>
  </ul>
  <ul class="m-flag">
    <li class="m-flag__item -tight">
      <span class="s-thumb -round">
        <img src="{{site.baseurl}}/assets/img/logo.png">
      </span>
    </li>
    <li class="m-flag__item -bottom">
      <h4 class="s-head">Bottom</h4>
    </li>
  </ul>
</div>

```html
<ul class="m-flag">
  <li class="m-flag__item">
    ...
  </li>
  <li class="m-flag__item -top">
    ...
  </li>
</ul>
<ul class="m-flag">
  <li class="m-flag__item">
    ...
  </li>
  <li class="m-flag__item">
    ...
  </li>
</ul>
<ul class="m-flag">
  <li class="m-flag__item">
    ...
  </li>
  <li class="m-flag__item -bottom">
    ...
  </li>
</ul>
```
