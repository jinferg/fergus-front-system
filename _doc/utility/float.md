---
layout: doc
title: "Float"
updated: 2017-01-27
category: utility
---

## Float

The Float Utility forces flow of content and can be applied on any block object.

<div class="u-dist-small">
	<div class="l-row">
		<div class="s-thumb u-float-none">
		  <img src="{{site.baseurl}}/assets/img/logo.png">
		</div>
	</div>
	<div class="l-row">
		<div class="s-thumb u-float-right">
		  <img src="{{site.baseurl}}/assets/img/logo.png">
		</div>
	</div>
	<div class="l-row u-space-after-medium">
		<div class="s-thumb u-float-left">
		  <img src="{{site.baseurl}}/assets/img/logo.png">
		</div>
	</div>
</div>

```html
<div class="s-thumb u-float-none">
  <img src="/assets/img/logo.png">
</div>
<div class="s-thumb u-float-right">
  <img src="/assets/img/logo.png">
</div>
<div class="s-thumb u-float-left">
  <img src="/assets/img/logo.png">
</div>
```

### Responsive Floats

You can assign device specific floats with the mobile `-m`, tablet `-t`, and desktop `-d` modifiers.

<div class="u-dist-small">
	<div class="l-row">
		<div class="s-thumb u-float-m-right">
		  <img src="{{site.baseurl}}/assets/img/logo.png">
		</div>
	</div>

	<div class="l-row">
		<div class="s-thumb u-float-t-right">
		  <img src="{{site.baseurl}}/assets/img/logo.png">
		</div>
	</div>

	<div class="l-row">
		<div class="s-thumb u-float-d-right">
		  <img src="{{site.baseurl}}/assets/img/logo.png">
		</div>
	</div>
</div>

```html
<div class="s-thumb u-float-m-right">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</div>

<div class="s-thumb u-float-t-right">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</div>

<div class="s-thumb u-float-d-right">
  <img src="{{site.baseurl}}/assets/img/logo.png">
</div>
```
