---
title: Workflow
dateCreated: '2020-04-12'
dateUpdated: '2020-04-12'
keywords: 'rockin blocks installation, gatsby page builder'
path: /docs/v0/workflow/
description: Getting set up with Rockin' Blocks is a breeze.
order: '4.0'
type: document
---
## Building a new version of your blocks package

Because we are leveraging Yarn workspaces, each time you build your **Rockin' Blocks** library, your Gatsby installation will automatically see the newest version of your blocks package, without going through the trouble of having to cut a new release.

```bash
# Build your blocks library
# The changes will automatically get picked up in your Gatsby site

$ yarn blocks:build
```

## Seeing your blocks in your Gatsby site

While building out a block, Storybook is typically the fastest way to work, but sometimes you want to be sure that Gatsby is properly pulling in your blocks package and everything looks okay. This is achieved by starting your Gatsby development server, and then building your blocks library. 

**Please note that changes made while developing in Storybook will not be seen in your Gatsby application until you build your blocks library.** This is because the `dist`, which is created during the build, is what is distributed within the NPM package, and subsequently to your Gatsby site.

```bash
# Start your Gatsby development site
# This should spin up on port http://localhost:8787

$ yarn web:dev

# Build your blocks library
# The changes will automatically get picked up in your Gatsby site

$ yarn blocks:build
```