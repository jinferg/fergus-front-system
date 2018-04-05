---
layout: doc
title: "Frame"
updated: 2017-01-27
category: layout
---

## Frames

When building the various view regions of an application sometimes we need require the mix of both flexible and absolute regions. For example, the navigation may be fixed but the content may require to flow and etc.

The frame layout component allows us to define these regions to provide us with flexible control. By default the frame layout comes with 3 regions but this can be extended to handle any number of fixed regions.

```css
.l-frame {
	&__nav {
		...
	}
	&__sidebar {
		...
	}
	&__content {
		...
	}
}
```
