---
layout: doc
title: "Structure and Organization"
updated: 2017-01-27
category: getting-started
---


## Structure and Organization

### Introduction

At it's core, Zap organizes your CSS files into 5 different folder categories. This structure system is an alternate adaptation of Jonathan Snook's SMACSS Methodology. It is important to note that the hierarchy of these categories are based on the principles of the Inverted Triangle css concept and reflects the level of specificity.  

```html
/base
/layout
/module
/single
/utility
```

### Base

The **Base folder** contains everything that is set at the beginning your project this includes CSS Normalize/Resets, HTML/body declarations, global pre-processor variables, mixins etc. Like laying down the foundation at a construction site, this is something we set once and expect to be stable enough to house our beautiful building. Treat this folder as the floor plan we base our project on.

### Layout

The **Layout folder** contains grids or anything related to positioning or containerizing of large content such as grids and wrappers.

### Module

The **Module folder** contains common repeating components that are made up of small child elements but are treated as a single entity. These include tables, cards, lists, forms and etc.

### Single

The **Single folder** contains small and singular components that are styled independent of its parent container such as buttons, headings, lines and etc.

### Utility

The **Utility folder** contains any useful single behavior components such as hiddens, floats and aligns etc.
