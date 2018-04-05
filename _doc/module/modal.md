---
layout: doc
title: "Modal"
updated: 2017-01-27
category: module
---

## Modal

The list module ``m-list`` represents any list related objects such as navigations, category lists etc.

```html
<div class="m-modal">
	<div class="m-modal__content">
    ...
	</div>
  <div class="m-modal__overlay">
    ...
  </div>
</div>

```

```javascript
$('.m-modal').zapModal();
```

### Spacing

There are 3 modifiers that vary the spacing between list items `-tight`, `-narrow`, and `-wide`. These spaces are based on the vertical rhythm variables.

<div class="l-row -grid">
  <div class="l-col -w-4">
    <ul class="m-list -tight">
      <li class="m-list__item">Tight List</li>
      <li class="m-list__item">List Item</li>
      <li class="m-list__item">List Item</li>
      <li class="m-list__item">List Item</li>
    </ul>
  </div>
  <div class="l-col -w-4">
    <ul class="m-list -narrow">
      <li class="m-list__item">Narrow List</li>
      <li class="m-list__item">List Item</li>
      <li class="m-list__item">List Item</li>
      <li class="m-list__item">List Item</li>
    </ul>
  </div>
  <div class="l-col -w-4">
    <ul class="m-list -wide">
      <li class="m-list__item">Wide List</li>
      <li class="m-list__item">List Item</li>
      <li class="m-list__item">List Item</li>
      <li class="m-list__item">List Item</li>
    </ul>
  </div>
</div>

```html
<ul class="m-list -tight">
  <li class="m-list__item">Tight List</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
</ul>
<ul class="m-list -narrow">
  <li class="m-list__item">Narrow List</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
</ul>
<ul class="m-list -wide">
  <li class="m-list__item">Wide List</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
</ul>
```

### Direction

List items run vertically by default but can be horizontal using the ``-inline`` modifier.

<ul class="m-list -inline -narrow">
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
</ul>

```html
<ul class="m-list -inline -narrow">
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
  <li class="m-list__item">List Item</li>
</ul>
```
