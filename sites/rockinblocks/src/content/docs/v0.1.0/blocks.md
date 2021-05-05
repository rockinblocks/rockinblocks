---
title: Blocks
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, tinacms, blocks, gatsby page builder'
path: /docs/v0.1.0/blocks
description: Understanding blocks and how they work with Gatsby and Tina CMS.
order: '3.1'
type: document
---
## Generate a block with Riff 🎸

**Rockin' Blocks** comes with `riff`, an early version of our CLI tool, to quickly generate a block. As of right now, `riff` needs to be run from within the `gatsby-plugin-rockinblocks` directory

```bash
# From within gatsby-plugin-rockinblocks

yarn riff --name=TestimonialSection
```

You should see the following success message (as of version 0.1.0):

![riff CLI success message](/images/successful-riff.png)

## Developing your blocks in isolation within Storybook

**These commands should be run from the root of your workspace, not within the individual packages.** While you can run commands from within each package, it does get a little cumbersome bouncing from folder to folder, so we have provided some helper commands that can be run from the root of your workspace.

```bash
# Develop your blocks in Storybook
# This should open Storybook on http://localhost:6006

$ yarn blocks:sb
```

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