---
layout: post
title:  "&lt;template is=\"auto-binding\"&gt; is=awesome"
date:   2014-09-11 12:00:00
categories: howto
author: jeffy
---

If you've [created](http://www.polymer-project.org/docs/start/creatingelements.html) your own Polymer element, chances are you're a fan of the extra goodies that the [`<template>`](http://www.polymer-project.org/docs/polymer/databinding-advanced.html) tag offers within an element's definition. Variable interpolation with `{%raw%}{{}}{%endraw%}`, event binding via on-*event* attributes, and conditional and repeated templates all provide a powerful, consistent way to work declaratively with the DOM. But what if you're not creating your own elements, and instead writing a web application that makes use of Polymer elements? You don't have to resort to using alternative libraries for templating or setting up traditional [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener) bindings. We've taught the [HTML5 `<template>` tag](http://www.html5rocks.com/en/tutorials/webcomponents/template/) new tricks by extending it as a custom element, referred to as `<template is="auto-binding">`.

Here's an example which illustrates the power of `<template is="auto-binding">`.

Your web app wants to use a pre-existing Polymer element, `<number-element>`, which is defined as

    {%raw%}<polymer-element name="number-element" attributes="number odd">
      <template>
        I'm number {{number}}. Click me!
      </template>
      <script>
        Polymer({
          number: 0,
          odd: false,
          numberChanged: function() {
            this.odd = this.number % 2 == 1 ? true : false;
          }
        });
      </script>
    </polymer-element>{%endraw%}

The goal of the web app is to create a few `<number-element>`s on the main page, hook up an event handler to each that's triggered when they're clicked on, and display a special message for the `<number-element>`s that are odd.

    {%raw%}<template id="page-template" is="auto-binding">
      <h1>&lt;template is="auto-binding"&gt; Demo</h1>
      <template if="{{lastClicked != null}}">
        <p>You last clicked on {{lastClicked}}.</p>
      </template>
      <template repeat="{{number in numbers}}">
        <p>
          <number-element number="{{number}}"
                          odd="{{isNumberOdd[number]}}"
                          on-click="{{handleClick}}">
          </number-element>
          <template if="{{isNumberOdd[number]}}">
            (By the way, I'm odd.)
          </template>
        </p>
      </template>
    </template>
    
    <script>
      var template = document.querySelector('#page-template');
      template.isNumberOdd = {};
      template.numbers = [0, 1, 2, 3];
      template.handleClick = function(e) {
        template.lastClicked = e.target.number;
      };
    </script>{%endraw%}

You can try out a live version of this code [on JSBin](http://jsbin.com/vucob/edit).

There's a lot of concepts illustrated here, so let's break them down one at a time by examining snippets of the larger example.

    <template id="page-template" is="auto-binding">

This is defines an auto-binding template, providing access to Polymer's powerful templating extensions from outside of a Polymer element definition. Note that only the top-level `<template>` needs to have the `is="auto-binding"` attribute set; other `<template>` elements that are children of the top-level `<template is="auto-binding">` can make use of all the special functionality without also specifying `is="auto-binding"`.

    {%raw%}<template if="{{lastClicked != null}}">
    ...
    <template repeat="{{number in numbers}}">{%endraw%}

These are references to what appear to be undefined variables, `lastClicked` and `numbers`. Don't worry; they refer to properties on the `<template is="auto-binding">` instance, and we'll be setting them later on when the page's JavaScript is executed.

    {%raw%}<number-element number="{{number}}"
                    odd="{{isNumberOdd[number]}}"
                    on-click="{{handleClick}}">
    </number-element>{%endraw%}

Here, we define a `<number-element>` within a `<template repeat>` loop, and set its `number` attribute to the current value of the loop iterator.

The page needs to keep track of the odd attribute of each new `<number-element>`, in order to trigger the conditional "`(By the way, I'm odd.)`" message. While your first instinct might be to assign that attribute to a simple variable, along the lines of `{%raw%}odd="{{isOdd}}"{%endraw%}`, this will not end up doing the right thing. Because `isOdd` would be treated as a single property on the main page template, each time through the repeat loop the value would be overwritten. When it's referred to in the conditional template later on in the loop, the last value it was set to would be used for all instances. Instead, the code assigns the published value of the odd attribute to an uniquely keyed object property of the page template, `isNumberOdd`. This establishes a mapping between each distinct `number` and the corresponding `odd` attribute value.

You'll also notice an `on-click` event handler attribute associated with each `<number-element>`. The handler itself is defined as a property of the page template later on. When someone clicks on the element, the handler will receive a reference to the element in `e.target`.

Let's move on to the page's JavaScript.

    var template = document.querySelector('#page-template');
    template.isNumberOdd = {};
    template.numbers = [0, 1, 2, 3];

We obtain a reference to the auto-binding template and set a few properties on it, which will be reflected in the template's contents when it is automatically added to the DOM.

The `isNumberOdd` object property is used within the page template to keep track of which numbers are odd, as described earlier. The `numbers` is the array that's looped over via `{%raw%}<template repeat="{{number in numbers}}">{%endraw%}`.

    template.handleClick = function(e) {
      template.lastClicked = e.target.number;
    };

Finally, that's the definition of the `handleClick` function; within the handler, `e.target` will refer to the underlying element which was clicked on, and we can read its published properties, like `e.target.number`.

That's a lot to process, and hopefully you've learned something about how `<template is="auto-binding">` can make using Polymer elements as pleasant as creating them.

By the way, even if you're not using Polymer elements in your web app, `<template is="auto-binding">` can still come in handy—it's available to any page that includes the [Polymer platform libraries](http://www.polymer-project.org/resources/faq.html#is-the-code-hosted-on-a-cdn). `<template is="auto-binding">` allows any page to use efficient, [`Object.observe()`](http://www.html5rocks.com/en/tutorials/es7/observe/)-based variable substitution and primitives for conditional and repeated templates. If you're shopping around for a client-side JavaScript templating library, `<template is="auto-binding">` deserves serious consideration.

