---
layout: post
title:  "Site Updates and Changes: On the road to Polymer 0.8"
date:   2015-03-10 12:21:00
categories: updates
author: polymer-team
excerpt: We're updating the Polymer site a bit as 0.8 is nearing release.

---

As many have already noticed, over the last day or so we've been updating the [Polymer site](https://www.polymer-project.org) to prepare for the upcoming 0.8 release. Some old links have broken in the process - we apologize for any troubles!

The 0.8 release is a big step towards a 1.0: we're rolling out changes to the site to create a place to show 0.8 documentation, to enable better support for versioning, and generally to create a more stable home that will be able to grow with the library.

## What to expect with the site for 0.8

0.8 will be a new baseline for feedback - it will be hot out of the oven, but able to stand on its own. Consider it an "alpha" release - rough around the edges but generally whole, with the express purpose of getting feedback on the core API changes. Note that only a few of the elements with 0.5 have been migrated to 0.8 so far.

With this in mind, we're working to accompany the release with a baseline of documentation to help early-adopters get started - expect the documentation to grow significantly as the features bake. The site itself for the time being will continue to be built based on 0.5 - we want to get 0.8 out for wide feedback as soon as possible, so having some documentation ready and starting to create 0.8-compatible elements has taken a priority over updating the site infrastructure to 0.8.

We're also setting up the ability to version the documentation on the site - you'll notice that [https://www.polymer-project.org/](https://www.polymer-project.org/) currently takes you to https://www.polymer-project.org/0.5/ (the latest stable version). 0.8 will be transitional for the site as it is for the library and we'll be growing into this new versioning feature, but expect more and more firm structure like this to emerge.

With regards to elements - we're working on major updates to the elements built by the Polymer team (you can see some progress in Github branches), including a better way of showcasing the element sets than we currently have on the site. We'll keep the 0.5 elements the same as they are currently on the site. For 0.8, we plan on keeping compatible elements on Github for now as they're being built, and are working on new and improved ways to demo elements and generate and view their documentation.

## What should you do now?

### Update hotlinked URL's

Many have found it helpful to be able to hotlink to the Polymer library hosted on the Polymer site, to lower development-time overhead and to be able to easily create jsbin-like examples. With the new site versioning model, URL's will be of the form:

`https://www.polymer-project.org/{version}/...`

We certainly don't recommend relying on hotlinking for anything production. This new versioning should help hotlinking for development, and help clarify any jsbin examples with an explicit version number.

### Make sure to pin your `bower.json` versions

The 0.8 release will be a significant breaking change, so make sure you pin the version of the library you request in your `bower.json` file, so that `bower update` won't break your project. Also make sure to explicitly pin element versions, as we may release 0.8-compatible versions of elements in their current repository when they're ready.

For example, to pin to `0.5.5`:


    "dependencies": {
      "polymer": "polymer/polymer#^0.5.5",
      "paper-button" "polymer/paper-button#^0.5.5"
    }

It's an exciting time for Polymer - we're really eager to get 0.8 properly released, get feedback on its new form, and start the journey to 1.0!
