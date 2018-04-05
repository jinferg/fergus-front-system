---
layout: doc
title: "Table"
updated: 2017-01-27
category: module
---

## Table

This is the basic table module, it should not be confused with the table layout. The table module does not affect layout and it is a standalone component suitable for displaying table related content and information.

### Basic Table

<table class="m-table">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>

```html

<table class="m-table">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

The table can be made to take up the full width with the ``-fluid`` modifier.

<table class="m-table -fluid">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>

```html
<table class="m-table -fluid">
  ...
</table>
```

### Clickable Cells

Simply add the modifier class ``-clickable`` to make rows or cells clickable.

<table class="m-table -fluid">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody class="-clickable">
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>

```html
<table class="m-table">
  <tbody class="-clickable">
    ...
  </tbody>
</table>
```

### Responsive Tables

Tables can respond to devices and display cells stacked with the `-resp` modifier.

<table class="m-table -fluid -resp">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>

```html
<table class="m-table -resp">
  ...
</table>
```

To preserve the header cell text, add the `data-label="Header"` data attribute.

<table class="m-table -fluid -resp">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
    </tr>
    <tr>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
    </tr>
    <tr>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
    </tr>
  </tbody>
</table>

```html
<table class="m-table -fluid -resp">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
    </tr>
    <tr>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
    </tr>
    <tr>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
      <td data-label="Head">Cell</td>
    </tr>
  </tbody>
</table>
```

If the table has no `thead` row then you can apply the modifier `-headless` to left align cells when it responds down to mobile.

<table class="m-table -fluid -resp -headless">
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>

```html
<table class="m-table -fluid -resp -headless">
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

You can also apply device specific responsive modifiers with the device suffixes.

<table class="m-table -fluid -resp-m -headless">
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>

```html
<table class="m-table -fluid -resp-m -headless">
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

### Variable Widths

Column widths can be made to take up maxium or minimum widths with the `-grow`, `-shrink` modifiers.

<table class="m-table -fluid -resp -headless">
  <tbody>
    <tr>
      <td class="-grow">
        Introduction to Outlook
      </td>
      <td class="-shrink">
        5 Modules
      </td>
      <td class="-shrink">
        <a href="#">Edit</a> <a href="#">Delete</a>
      </td>
    </tr>
  </tbody>
</table>


```html
<table class="m-table -fluid -resp -headless">
  <tbody>
    <tr>
      <td class="-grow">
        Introduction to Outlook
      </td>
      <td class="-shrink">
        5 Modules
      </td>
      <td class="-shrink">
        <a href="#">Edit</a> <a href="#">Delete</a>
      </td>
    </tr>
  </tbody>
</table>
```