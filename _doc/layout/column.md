---
layout: doc
title: "Column"
updated: 2017-01-27
category: layout
---

## Column

The Column Layout defines the width of a container and is used in conjunction with the row definition. The default grid is divided up into 16 columns. Sixteen column grids provides maximum flexibility however if you're wanting a 3 column grid, this option is also available with the means of the `-w-1-3` modifier.

### Basic Column

The basic column syntax is `l-col` followed on with the width modifier. For example `l-col -w-6` would produce a six wide column.

<div class="l-row -narrow">
  <div class="l-col -w-8">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Eight Wide
    </div>
  </div>
  <div class="l-col -w-8">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Eight Wide
    </div>
  </div>
</div>

```html
<div class="l-row -narrow">
  <div class="l-col -w-8">
    Eight Wide
  </div>
  <div class="l-col -w-8">
    Eight Wide
  </div>
</div>
```

### Responsive Columns

Device specific column widths can be specified with the `-m`, `-t`, `-d` prefixed modifiers. For example:

<div class="l-row -grid -narrow">
  <div class="l-col -m-16 -t-6 -d-4">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Shrink Me
    </div>
  </div>
</div>

```html
<div class="l-row -grid -narrow">
  <div class="l-col -m-16 -t-6 -d-4">
    Shrink Me
  </div>
</div>
```

Produces a column that is four wide at desktop, six wide at tablet, and sixteen wide on mobile. Responsive widths are mobile first and inherit the smaller width if no larger has been specified.

For devices beyond desktop, large screen format modifier `-v` is also available.

### Push & Pulls

You can push and pull columns with the `-push` and `-pull` modifiers.

<div class="l-row -grid -narrow u-space-after-medium">
  <div class="l-col -w-6 -push-6">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Pushed Right 6
    </div>
  </div>
  <div class="l-col -w-3 -pull-3">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Pulled Left 3
    </div>
  </div>
</div>


```html
<div class="l-row -grid -narrow">
  <div class="l-col -w-6 -push-6">
    Pushed Right 6
  </div>
  <div class="l-col -w-3 -pull-3">
    Pulled Left 3
  </div>
</div>
```

You can specify responsive push and pulls with device prefixes.

<div class="l-row -grid -narrow u-space-after-medium">
  <div class="l-col -w-6 -push-m-1 -push-t-4 -push-d-6">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Shrink Me
    </div>
  </div>
</div>

```html
<div class="l-row -grid -narrow">
  <div class="l-col -w-6 -push-m-1 -push-t-2 -push-d-3">
    Shrink Me
  </div>
</div>
```

### Grid Specific Column

Columns are most commonly used in conjunction with the row layout. Column's display type can change depending on the parent row grid modifier. The default display type is a block however, if this is sitting inside a `l-row -table` the column becomes a table cell.


```html
<div class="l-row -grid">
  <div class="l-col -w-12">
    Block
  </div>
</div>
<div class="l-row -table">
  <div class="l-col -w-12">
    Cell
  </div>
</div>
<div class="l-row -flex">
  <div class="l-col -w-12">
    Flexbox
  </div>
</div>
```

You can also transform individual columns into a table cell or flexbox with the `-cell` and `-flex` modifiers. This is particular useful if you wish to gain the benefits of using table cell or flexbox without affecting nearby containers. Each of the display modifiers share the same vertical alignment modifiers as the row layout.

<div class="l-row -grid -narrow u-marg-bottom-small">
  <div class="l-col -w-4 -cell -top" style="height:300px">
    <div class="u-align-center u-fill-shade-heavy u-border-radius">
      Cell Top
    </div>
  </div>
  <div class="l-col -w-4 -cell -middle" style="height:300px">
    <div class="u-align-center u-fill-shade-heavy u-border-radius">
      Cell Middle
    </div>
  </div>
  <div class="l-col -w-4 -cell -bottom" style="height:300px">
    <div class="u-align-center u-fill-shade-heavy u-border-radius">
      Cell Bottom
    </div>
  </div>
</div>

<div class="l-row -flex -narrow" style="height:300px">
  <div class="l-col -w-4 -flex -top">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Flex Start
    </div>
  </div>
  <div class="l-col -w-4 -flex -middle">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Flex Center
    </div>
  </div>
  <div class="l-col -w-4 -flex -bottom">
    <div class="u-pad-tight u-align-center u-fill-shade-heavy u-border-radius">
      Flex End
    </div>
  </div>
</div>

```html
// Transforms Column into display: table-cell;
<div class="l-row -grid -narrow">
  <div class="l-col -w-4 -cell -top">
    Cell Top
  </div>
  <div class="l-col -w-4 -cell -middle">
    Cell Middle
  </div>
  <div class="l-col -w-4 -cell -bottom">
    Cell Bottom
  </div>
</div>
// Transforms Column into display: flex;
<div class="l-row -grid -narrow">
  <div class="l-col -w-4 -flex -top">
    Flex Start
  </div>
  <div class="l-col -w-4 -flex -middle">
    Flex Center
  </div>
  <div class="l-col -w-4 -flex -bottom">
    Flex End
  </div>
</div>
```

You can extend the functionality of the flex column with ``-flex-auto`` and ``-flex-none`` modifiers. This is particularly helpful when you wish to make the column widths completely flexible or inflexible.

```css
.-flex-auto {
  flex: auto; // equivalent of flex value of 1 1 auto;
}
.-flex-none {
  flex: none; // equivalent of flex value of 0 0 auto;
}
```

### Custom Column Sets

The column definition comes with looping mixins that can generate grids with custom column counts. You can use this mixin to generate 12 column and other fractional grids.

```css
// Generates Columns
.l-col-generate-columns(@count,  @prefix: w, @suffix: ~'', @i: 1) when (@i =< @count) {
  .l-col.-@{prefix}-@{i}@{suffix} {
    width: (@i * 100% / @count);
  }
  .l-col-generate-columns(@count,  @prefix, @suffix, (@i + 1));
}
.l-col-generate-columns(12); // 12 Column Set
```

Grid generation mixin takes in 3 parameters, the total column count ``@count``, namespace of column type ``@prefix`` (default w), and a suffix ``@suffix``. For example, to generate a 5 column fractional grid:

```css
.l-col-generate-columns(5,w,-5); // 5 Column Set
```

Generates

```css
.l-col.-w-1-5 { width: 20%; }
.l-col.-w-2-5 { width: 40%; }
.l-col.-w-3-5 { width: 60%; }
.l-col.-w-4-5 { width: 80%; }
.l-col.-w-5-5 { width: 100%; }
```
