---
layout: doc
title: "Wrapper"
updated: 2017-01-27
category: layout
---

## Wrapper

The wrapper layout `l-wrap` is a basic page wrapping layout that has a set maximum width and is centered when the browser window exceeds this maximum. It can be used anywhere you require a container with a set maximum width.

```html
<div class="l-wrap">
  ...
</div>
```

### Removing Padding

By default the wrapper component applies padding for the left and right margins, but this can be disabled using the `-flush` class modifier.

```html
<div class="l-wrap -flush">
  ...
</div>
```

You can also apply device specific flush modifiers with the device suffixes.

```html
<div class="l-wrap -project -d-flush">
  ...
</div>
```
The above example removes padding for mobile and desktop.
