---
layout: doc
title: "Pattern Definitions"
updated: 2017-01-27
category: getting-started
---

## Pattern Definitions

### Get the most bang for your buck

How do you leverage the most out of your CSS and minimise bloat? Which rules do we standardise and which do we override or extend? Lets first begin by exploring the concept behind object-oriented css design.

Each site can look completely different but they all share a similar pattern, most sites have a main navigation that either run vertically or horizontally, buttons of various sizes, a list of scrollable content, bands running across page to seperate content and etc.

Extracting these patterns out into a single purpose classes is what OOCSS is about. These classes don't necessarily represent specific types of content but rather the characteristic of how they are formatted. Zap defines these characteristics as a "Definition" and there are several set of definitions within each category, `/l-band.definition`, `/l-row.definition` etc. By predefining these pattern definitions we can minimize complexity of our class naming system.

### Extending and Overriding

The pattern definitions can be extended and overwritten to customize it's look or behavior. Rather than creating content or page specific classes such as `.header-nav-links` or `.book-categories-sidebar` Zap extends and overrides definitions using modifiers e.g. `.m-nav.-header`, `.m-nav.-book-categories` etc.

Modifiers are always prefixed with a single hyphen and must immediately follow the parent definition classname e.g. `m-list -horizontal -narrow`. This helps to differentiate between block level classes and modifiers.

Each definition comes with its own set of pre-built modifiers and definition independent variables to override the default behavior. For example, `.s-button -red -small` creates a button that's red and small in size.

If the look that we are wanting to achieve is outside of the standard modifying scope, we can extend the definition by creating your own modifier. For example, `.m-nav -book-categories` modifying class can be created to extend the default list pattern definition to allow for custom styling specific to its context. We can even combine extended modifiers with standard ones e.g. `.m-list -vertical -book-categories`.

### Tackling Specificity

Zap takes inspiration from the BEM (Block, Element, Modifiers) methodology. Incase you're unfamiliar with the term BEM it is essentially a class selector naming system developed by a Russian company called Yandex, it utilizes double underscores and hyphens to define parent, child and modifying selectors. Take a look at the example below:

```html
<ul class="movie-genres">
  <li class="movie-genres__genre">Horror</li>
  <li class="movie-genres__genre movie-genres__genre--favourite">Romance</li>
  <li class="movie-genres__genre">Drama</li>
  <li class="movie-genres__genre">Action</li>
</ul>
```
```css
.movie-genres {
  color: blue;
}
.movie-genres__genre {
  display: inline-block;
  list-style-type: circle;
  font-size: 1em;
}
.movie-genres__genre--favourite {
  color: red;
}
```

The above example is a demonstration of how you would write html and css using the BEM methodology. Any child elements are prefixed with the parent classname followed by double underscores. Modifiers are prefixed with double hyphens and always follow the parent or child classname that it applies to.

The most obvious benefit of using BEM is that it keeps your CSS flat, meaning every block, element or modifying class has a specificity level of 1. This helps to avoid any unintended style overrides and it also allows your CSS to render very fast.

Because every child element and modifying class are prefixed by the parent classname, BEM also makes identifying association clear and easy.

Although writing flat selectors allows us to eliminate the problem of specificity, writing selectors using the BEM style can be long and often considered "ugly". Instead of forcing selectors to be flat, Zap embraces the natural behavior of CSS class chaining but restricts the depth of specificity to avoid overriding problem. To avoid any specificity issues, the general rule of thumb (adopted from the SASS universe) is to never go deeper than two levels.

Most Zap definitions don't exceed a specificity level of 3. Take a look a the example below where we write the same example above but in Zap syntax.

```html
<ul class="m-list -movie-genres">
  <li class="m-list__item">Horror</li>
  <li class="m-list__item -favourite">Romance</li>
  <li class="m-list__item">Drama</li>
  <li class="m-list__item">Action</li>
</ul>
```

```css
.m-list {
  color: blue;
}
.m-list__item {
  display: inline-block;
  list-style-type: none;
  font-size: 1em;
}
.m-list.-movie-genres .m-list__item {
  list-style-type: circle;
}
.m-list.-movie-genres .-favourite {
  color: red;
}
```

As you can see, the HTML markup is shorter, simpler while keeping specificity to a minimum. If we translated the parent rule into plain spoken english it would be described as "This is a *list*, of *movie genres*". By specifying an abstract rule and giving it a generic name `.m-list` we have the flexibility to reuse this class in other places and minimise the chance of this rule being misinterpreted.

It is also important to note, that although Zap doesn't adopt BEM's double hyphen prefixing for modifiers, it does adopt the use of double underscores to define its child element.
