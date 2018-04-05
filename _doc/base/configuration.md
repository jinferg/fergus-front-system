---
layout: doc
title: "Configuration"
updated: 2017-01-27
category: base
---
## Configuration

The base configuration contains all the global variables that setup your project. These include, max widths, body colors, nav height and etc. To override or extend any of these variables, modify the b-config.definition file. All global variables can be used freely throughout your project without restriction.

```css
// Defaults
// ------------------------------

@max-width: 1440px;
@radius: 4px;
@background: #ecf1f7;
@default-columns: 16;
@border: 1px solid #e4e4e4;
```

```css
// Typography
// ------------------------------

@font-family: 'Open Sans', sans-serif;
@font-size: 1.4rem; // html sets font-size to 62.5% which makes calculating rems easy 1.4rem = 14px etc
@light: 300;
@regular: 400;
@medium: 600;
@semi-bold: 600;
@bold: 700;
@line-height: 2.4rem; // 24px
```

```css
// Colors
// ------------------------------

// Default
@red: #FF4C24;
@orange: #FF7C52;
@yellow: #FFB019;
@green: #00D24B;
@blue: #36A2FF;
@purple: #5273FF;
@black: #000000;
@white: #fff;

// Special
@default-color: #304C73;
@brand-color: #304C73;
@accent-color: #ff7676;
@link-color: @accent-color;
@midnight-color: #2A2A2A;
@input-color: darken(@white, 4%);
@shade-light: darken(@background, 5%);
@shade: darken(@background, 10%);
@shade-heavy: darken(@background, 15%);

```

For a full list, refer to `/base/l-config.definition`.

### Responsive Breakpoints

There are 3 breakpoints variables `@mobile`, `@tablet`, `@desktop` available to be used to create easy screen specific styling.

To use the screen specific variables, use the following syntax:

```css
.z-your-class
  @media @mobile {
   // Your CSS
  }
}
```

### Font Scaling

Type scale variables ranging from `@h1` to `@h6` are available for font scaling. Appropropriate line-height variables for each scale can be accessed through the '@h1-height' to '@h2-height'.

```css
// Typography Scale
// ------------------------------

@h1: 4.8rem;
@h2: 3.6rem;
@h3: 2.4rem;
@h4: 2rem;
@h5: 1.8rem;
@h6: 1.4rem;

@h1-height: 6.4rem;
@h2-height: 4.8rem;
@h3-height: 3.2rem;
@h4-height: 2.7rem;
@h5-height: 2.4rem;
@h6-height: 1.9rem;
```

### Element Spacing with Vertical Rhythms

For padding or any margin related spacing vertical rhythm variables (vr) ranging from ``@vr0`` to ``@vr6`` allows for consistent multiplied values of the line-height. This helps to achieve a consistent and predictable vertical spacing of elements throughout your page.

```css
// Vertical Rhythm
// ------------------------------
// Unit Scale for Padding, Margin etc

@vr0: @line-height / 2;
@vr0: @line-height * 1;
@vr1: @line-height * 2;
@vr2: @line-height * 3;
@vr3: @line-height * 4;
@vr4: @line-height * 5;
@vr5: @line-height * 6;
@vr6: @line-height * 7;
```
