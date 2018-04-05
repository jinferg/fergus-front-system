---
layout: doc
title: "Tab"
updated: 2017-01-27
category: module
---

## Tab

Tab is a javascript component that allows for hiding and showing of set number of content.

<div id="js-tab-1" class="m-tab">
  <ul class="m-tab-list">
    <li class="m-tab-list__item is-active">Option 1</li>
    <li class="m-tab-list__item">Option 2</li>
  </ul>
  <div class="m-tab-container">
    <div>
      <p>Tab Content 1</p>
    </div>
    <div>
      <p>Tab Content 2</p>
    </div>
  </div>
</div>

```html
<div class="m-tab">
  <ul class="m-tab-list">
    <li class="m-tab-list__item is-active">Option 1</li>
    <li class="m-tab-list__item">Option 2</li>
  </ul>
  <div class="m-tab-container">
    <div>
      <p>Tab Content 1</p>
    </div>
    <div>
      <p>Tab Content 2</p>
    </div>
  </div>
</div>
```

### Basic Usage

Initializing the tab.

```javascript
  $('#js-tab').zapTab();
```

By default all tabs are responsive and transform into accordion style menu on mobile and tablet devices.

### Non Responsive Tabs

If you wish to preserve the tab style without transforming to an accordion apply the `-only` modifier.

<div id="js-tab-2" class="m-tab -only">
  <ul class="m-tab-list">
    <li class="m-tab-list__item is-active">Option 1</li>
    <li class="m-tab-list__item">Option 2</li>
  </ul>
  <div class="m-tab-container">
    <div>
      <p>Tab Content 1</p>
    </div>
    <div>
      <p>Tab Content 2</p>
    </div>
  </div>
</div>

```html
<div class="m-tab -only">
  ...
</div>
```

### Options

```javascript
$('#js-tab').zapTab({
  type: 'default',          // Types: default, vertical, accordion           
  width: 'auto',            // auto or any custom width
  fit: true,                // 100% fits in a container
  closed: false,            // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
  activate: function() {},  // Callback function, gets called if tab is switched
});
```
<script>
  $(document).ready(function () {
    $('#js-tab-1').zapTab({
      type: 'default', //Types: default, vertical, accordion           
      width: 'auto', //auto or any custom width
      fit: true,   // 100% fits in a container
      closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
      activate: function() {},  // Callback function, gets called if tab is switched
    });

    $('#js-tab-2').zapTab();
  });
</script>
