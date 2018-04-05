---
layout: doc
title: "Row"
updated: 2017-01-27
category: layout
---


## Row

The Row Layout contains columns and creates horizontal sections within the page. There are various modifiers that transform how the rows child elements behave and are displayed. The row layout can be initialized with the class name `l-row`.

### Basic Row

Standalone row class `.l-row` assigns self clearing block properties to the element and can be used anywhere where vertical separation of content is necessary.

```html
<div class="l-row">
  First Block
</div>
<div class="l-row">
  Second Block
</div>
```

### Grid

Child elements are floated left to allow for a basic grid system.

<div class="l-row">
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Block
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade u-border-radius">
      Block
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Block
    </div>
  </div>
</div>


```html
<div class="l-row">
  <div class="l-col -w-4">
    Block
  </div>
  <div class="l-col -w-4">
    Block
  </div>
  <div class="l-col -w-4">
    Block
  </div>
</div>
```

### Gutters

Gutters between columns can be added by assigning ``-tight``, ``-narrow``, ``-wide`` modifiers.

<div class="l-row -tight u-marg-bottom-small">
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Tight
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Tight
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Tight
    </div>
  </div>
</div>

<div class="l-row -narrow u-marg-bottom-small">
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Narrow
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Narrow
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Narrow
    </div>
  </div>
</div>

<div class="l-row -wide">
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Wide
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Wide
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Wide
    </div>
  </div>
</div>

```html
<div class="l-row -narrow">
  <div class="l-col -w-4">
    Narrow Gap
  </div>
  <div class="l-col -w-4">
    Narrow Gap
  </div>
  <div class="l-col -w-4">
    Narrow Gap
  </div>
</div>
```

### Table Grid

When assigning the table modifier ``.l-row -table`` the row display property becomes ``display: table`` and child elements become ``display: table-cell``. This allows us to easily create table grids. The benefit of using table grids is the ability to vertically align content and for child elements to fill the height of its parent.

<div class="l-row -table -fluid">
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Cell
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade u-border-radius">
      Cell
    </div>
  </div>
  <div class="l-col -w-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Cell
    </div>
  </div>
</div>

```html
<div class="l-row -table">
  <div class="l-col -w-4">
    Cell
  </div>
  <div class="l-col -w-4">
    Cell
  </div>
  <div class="l-col -w-4">
    Cell
  </div>
</div>
```

By default the table grid will have a collapsed width with top vertical alignment. You can apply the following modifiers to change these behaviors. Assigning the ``-fluid`` class to the table grid will make the grid 100% width and flexible.


```html
<div class="l-row -table -fluid">
  <div class="l-col -w-4">
    Cell
  </div>
  <div class="l-col -w-4">
    Cell
  </div>
  <div class="l-col -w-4">
    Cell
  </div>
</div>
```

### Table Vertical Alignment

You can override the default top vertical alignment with ``-middle`` and ``-bottom`` classes.

<div class="l-row -table -middle">
  <div class="l-col -w-4 u-pad-x-small" style="height: 200px">
    <span class="s-thumb -round -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
  <div class="l-col -w-4 u-pad-x-small" style="height: 200px">
    <span class="s-thumb -round -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
  <div class="l-col -w-4 u-pad-x-small" style="height: 200px">
    <span class="s-thumb -round -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
</div>

```html
<div class="l-row -table -middle">
  ...
</div>
```

<div class="l-row -table -bottom">
  <div class="l-col -w-4 u-pad-x-small" style="height: 200px">
    <span class="s-thumb -round -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
  <div class="l-col -w-4 u-pad-x-small" style="height: 200px">
    <span class="s-thumb -round -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
  <div class="l-col -w-4 u-pad-x-small" style="height: 200px">
    <span class="s-thumb -round -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
</div>

```html
<div class="l-row -table -bottom">
  ...
</div>
```

### Responsive Tables

Table grids can automatically stack child cells specific to screen size. For example, `-m-stack` stacks for mobile, `-t-stack` for tablet and `-d-stack` for desktop.

<div class="l-row -table -m-stack">
  <div class="l-col -w-4 u-pad-tight">
    <span class="s-thumb -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
  <div class="l-col -w-4 u-pad-tight">
    <span class="s-thumb -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
  <div class="l-col -w-4 u-pad-tight">
    <span class="s-thumb -large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
    </span>
  </div>
</div>

```html
<div class="l-row -table -m-stack">
  ...
</div>
```

### Flex Grid

Assigning the `-flex` modifier transforms your grid into a flexbox based grid system. Flex grids offers all the benefits of flexbox such as direction, order, grow and more.

<div class="l-row -flex">
  <div class="l-col -w-8 u-pad-y-large u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
  </div>
  <div class="l-col -w-8 u-pad-y-large u-pad-tight u-align-center u-fill-shade u-border-radius">
  </div>
</div>

```html
<div class="l-row -flex">
  ...
</div>
```
