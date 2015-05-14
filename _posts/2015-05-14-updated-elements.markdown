---
layout: post
title:  "The new PolymerElements"
date:   2015-05-14 14:10:25
author: polymer-team
categories: announcements
excerpt: With the 0.8 and 0.9 releases, we've had to update the core and paper elements previously used with 0.5 to the new versions of the library. With this major breaking change, we've taken the opportunity to better organize these elements into more coherent "product lines," and have renamed the core elements to the iron elements.

---

With the release release of Polymer 0.8 and now 0.9, the team has been working hard to build up sets of utility and material design elements compatible with the new library. Here’s a quick update on where we are with this process:

## Still a work in progress

First off, we apologize for any messiness as we make this transition towards 1.0. It's a huge step forward for the library, but we recognize there's a bit of a skew with the library out and elements lagging behind.  We wanted to get the core library released as soon as possible and elements are coming along well - thank you for bearing with us and we should be out of the tunnel soon!

## New elements, new organization

We're opening up all 0.8+-compatible elements in the [PolymerElements organization](https://github.com/polymerelements) on Github - no longer directly in the Polymer organization. A couple reasons for this:

* We want to keep the Polymer organization focused specifically on the library itself and tooling around it, to make it cleaner and clearer.
* It’s important to explicitly keep the library and "things built with the Polymer library" separate. There is still unfortunately a lot of confusion around what Polymer is vs. what the elements are - this move will help make the distinction clearer.
* Our element sets will also have their own roadmaps and be versioned independently from the library - allowing for much greater flexibility and faster progress.

Though we’re leaving all the old 0.5-compatible elements in the Polymer organization for now, we’ll be deprecating them soon after we’ve reached parity with 0.8+-compatible elements.

If you're interested in staying on the bleeding-edge of element development this PolymerElements organization is the place to go. Feel free to submit issues and PR's on elements there as well, but do note that these elements are still very young and may be rough around the edges to start.  More elements are also being created in this organization daily - keep an eye out! To help in your tracking, [chuckh](https://github.com/chuckh) has created a [really neat tool](http://chuckh.github.io/road-to-polymer/) for following elements as they evolve - check it out!

Repo organization will be very similar to the way it was for 0.5, though we've worked to update all the tooling and documentation generation to be cleaner, simpler, more automated, and better looking. More on this soon.

## Introducing the "Iron" elements

We had lots of community feedback that the "core" element set was confusing: it was a bit of a grab-bag of layouts, UI widgets, and utility elements, it was called "core" but wasn't "core" to the library itself, and some material design-styled elements ended up in "core" rather than "paper." It also didn't leave us much flexibility to create new element sets - would the next element set then be "not core"? What makes these elements any more "core" than another set of elements, which might do the same things but in different ways? The “core” name neither accurately denoted what the elements were, nor did it accurately connote what the set was for.

Having UI elements inside of core also caused a lot of issues - they were sort of bland, but did express a kind of design opinion as they ended up being "poor-man's material design." It was unclear where the line was between a "core" UI element and "paper" UI element.

In trying to come up with a new name for “core” and a system for naming future element sets, one thing became clear: it's just really hard to try to give a directly descriptive name to these element sets. Any attempt at a literal name will inevitably be incorrect - whether too broad or too narrow - and only add to confusion.

The relative success of the "paper" element set name jumped out at us - it didn't attempt to directly describe the elements, but instead sort of communicated a feel for what the elements were, and quickly came to be associated in the community with the "material design"-inspired elements. We want to capture this same notion for naming future element sets, conveying a sense of “brand” without trying to be too literal. We also want to have a system that scales to lots of new names, so we can avoid bikeshedding on naming and focus on building great elements!

So after much consideration, we're proud to introduce the inspiration for our new system for naming future element sets: The Periodic Table of Elements.

Each element set that has a theme but isn't perfectly specific will be associated with a natural element. What used to be our "core" elements are now the "iron" elements - strong and stable utility and organizational elements: the solid foundation for applications. We imagine other sets evolving as well - perhaps “Neon” elements, bright and flashy, might provide special effects and nifty animations, or “Oxygen” elements, breathing life into your application, might provide data access. “Paper” will still be “paper” - yes, not quite an element, but this identity is so strong and their purpose so directly tied to the material design spec that they warrant a bit of a break. Elements that join with other API’s, such as the `firebase-element`, will be part of the “Molecules” product line, and will follow the naming convention `$APINAME-element`. You can find meta-repos that define these product lines in the PolymerElements organization.

With this change, all elements that express a design sensibility are for now part of the "paper" elements - this includes the old core-drawer-panel and core-toolbar, for example. Visually they have changed very little if at all from their core predecessors, and still can be used as high-quality general layout elements - you can absolutely use paper elements in your app even if you're not going all-in with the material design look-and-feel. With the brand-new styling and theming features officially shipped in 0.9, they are also much easier and cleaner to customize to your own app than ever before. We may build other product lines of UI elements in the future, but for now keeping everything in "paper" is the cleanest and simplest way to move forward.

We'll have a lot more on this in the near future as we build up more and more elements - keep an eye out for more element product lines along this theme, as well as a new way to browse the element sets!
