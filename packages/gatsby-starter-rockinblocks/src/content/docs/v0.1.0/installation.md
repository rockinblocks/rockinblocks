---
title: Installation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'rockin blocks installation, gatsby page builder'
path: /docs/v0.1.0/installation
description: Getting set up with Rockin' Blocks is a breeze.
type: document
---

## Dependencies

### Node 15

Currently we build **Rockin' Blocks** using Node 15 to support the M1 chip in newer Macs, though you _should_ be able to use 14 you're not on the new chip. I know this might be a pain, so I do recommend installing `brew` and subsequently `nvm` to switch to Node 15.

### Yarn

Yarn is currently required in order to use **Rockin' Blocks**, which leverages Yarn workspaces to create an easy-to-use environment that houses all of your Javascript applications in one place.

[Lerna support is potentially on the horizon](https://github.com/rockinblocks/rockinblocks/issues/27), though at this time the primary focus is support for Yarn workspaces.

## Using the monorepo

To get the most out of **Rockin' Blocks**, you should clone down the monorepo, which is a [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) where you can develop your block library, your documentation, and your Gatsby project together in the same spot. If you haven't used a Yarn workspace before, no worries: **Rockin' Blocks** should work right away without any configuration.

```bash
# Clone down the Yarn workspace a new project folder
# We will call our app rb-demo-app

$ git clone https://github.com/rockinblocks/rockinblocks.git rb-demo-app

# Change into your new project directory
# Unhook from our Git remote, and initialize your own Git

$ cd rb-demo-app && rm -rf ./.git && git init

```

### Install everything with Yarn

Because we are leveraging Yarn workspaces, **Rockin' Blocks** does require you to use Yarn as your package manager, at least for now.

```bash
# Install your dependencies with Yarn
# This will install your dependencies for each package in the workspace

$ yarn install
```

This will install all dependencies throughout the workspace to Gatsby, your block library, and our CLI tool, `riff`, as well.

