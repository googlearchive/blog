---
layout: post
title:  "platform.js ⇒ webcomponents.js"
date:   2014-10-16 15:31:00
categories: announcements
author: polymer-team
excerpt: "We wanted to give developers an early heads up for a pretty big change coming down the line: the `platform.js` file that contains the Web Components polyfills will be renamed to `webcomponents.js` and transferred to WebComponents.org."

---

We wanted to give developers an early heads up for a pretty big change coming down the line: the `platform.js` file that contains the Web Components polyfills will be renamed to `webcomponents.js` and transferred to [WebComponents.org](http://webcomponents.org/polyfills/).

The Polymer team has been doing a lot of work to make a clean separation between where the Web Components polyfills end and the Polymer library begins. On Chrome and Opera, the `webcomponents.js` layer is no longer needed at all — everything Polymer needs to function is baked natively into Chrome 36+ and Opera 23+.

### What exactly is happening?

* The `platform.js` file and repository will be renamed to `webcomponents.js`.
* The `polymer` library and all the `core-*` and `paper-*` elements maintained by the Polymer team will be updated to reference this `webcomponents.js` file.
* The new bower dependency for the polyfills will be `webcomponents/webcomponentsjs`.

### When will this happen?

This change will be officially tagged as 0.5.0 and released with the next Polymer release, targeted for the beginning of November.

### What do I need to do?

If you’re not living on the `master` branch, you’re fine for now. Note that we use the `master` branches as the wild-west - all official changes will be tagged as releases.

If you’re using `master`, you’ll begin seeing deprecation warnings if trying to reference the old `platform.js`.

Whether or not you are on master, to stay up-to-date when the release occurs you'll need to:

* Change all the references in your code from `platform.js` to `webcomponents.js`. For example, every `<script src="/components/platform/platform.js”>` should change to `<script src="/components/webcomponentsjs/webcomponents.js">`
* Change your bower dependency from `"platform": "polymer/platform#^0.4.2"` to `"webcomponentsjs": "webcomponents/webcomponentsjs#^0.5.0"`.
* Run `bower update` to update your elements to the latest version.

### Why are you making this change?

As more and more libraries are using the Web Components polyfills, `webcomponents.js` as a name is clearer all around: it makes it clearer what the polyfills do, and makes it clearer what it is being used for as a dependency. We’re committed to continue making the polyfills as useful and accessible to the Web Components community as possible - the name change was a clear stepping stone along this path.

The Polymer library is in Developer Preview and purposefully future-facing - we’re focused on making responsible long-term choices that set Polymer and Web Components on a promising path and shedding technical debt as early as we can. The road to a better web is fraught with hard decisions and breaking leaps, and we’re only just beginning our journey - but we’re confident that not being afraid to trade short-term hurdles for long term gains and being radically transparent about how these decisions are made will mean an order of magnitude better experience and health of the ecosystem in the long run.

We’ll make sure to highlight this again when the actual release happens - we wanted to give everyone a heads-up that it was coming down the line.

As usual, please feel free to Tweet us [@polymer](https://twitter.com/polymer) to let us know your thoughts or about any project you’ve been working on using Polymer, join the [polymer-dev mailing list](https://groups.google.com/forum/#!forum/polymer-dev), and contribute to the [Github](https://github.com/polymer) with pull requests and issues. Feel free to check out the new [webcomponents.js repo](https://github.com/webcomponents/webcomponentsjs) and the main [polymer library repo](https://github.com/polymer/polymer).
