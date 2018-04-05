---
layout: doc
title: "Themes"
updated: 2017-01-27
category: getting-started
---

## Theming Framework

Zap doesn't require you to stick to a strict set of components, you have the freedom of overriding, extending or even creating your components. There are numerous ways you can apply custom styling to Zap:

#### Overrides

The first and easiest way is to override the existing local definition variables. The list of available local definition variables sit at the top of each definition.

```css
@max-width: 1600px;
@radius: 4px;
@default-color: #555;
```

#### Extensions

Another way to to customize each component is to extend any of the existing properties or create modifier extensions.

```css

.s-button {
	.-custom-extension {
		...
	}
}

```

#### Custom Component

Lastly, if you wish to create your own entirely new component you can either create your own custom component prefixed with the appropriate category:

```css
.m-custom-module-component {
	...
}
.s-custom-single-component {
	...
}
```

If its temporary, or your rule doesn't sit in any of the existing categories you can simply create a Zap component and prefix it with the letter z e.g. `z-hero-banner`

Zap components are custom standalone css rules that sit at the end of all your css as a last resort or final state. This is particularly useful if you wish to quickly fix or test but it is recommended you create only a minimal set of zap components as this approach isn't as scalable as the previous examples. Treat Zap components as a band-aid approach.

```css
.z-completly-standalone-custom-component {
	...
}
```

### Filenaming Definitions

Lets say you wish you create a new component that belong inside the module category. It is highly recommended you name this definition with a single word rather than using a hyphenated descriptive approach.

```css
/module/m-custom.definition
/module/m-banner.definition
```

You can then write hyphenated descriptive class rules inside each parent definition css file.

```css
.m-custom-banner {
	...
}
.m-custom-sidebar {
	...
}
``` 

This is a simple, but an important approach to follow as it provides a way for you to easily group common keywords together.