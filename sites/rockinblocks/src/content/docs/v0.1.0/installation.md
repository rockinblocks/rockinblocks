---
title: Installation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'rockin blocks installation, gatsby page builder'
path: /docs/v0.1.0/installation
description: Getting set up with Rockin' Blocks is a breeze.
order: '1.1'
type: document
---
## Create a new project using Gatsby CLI

The quickest way to get started is to use the [Gatsby CLI tool](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

```bash
$ gatsby new fresh-rockinblocks https://github.com/rockinblocks/rockinblocks
```

## Create a new project from the repo

```bash
# Clone down the Yarn workspace a new project folder
# We will call our app rb-demo-app

$ git clone https://github.com/rockinblocks/rockinblocks.git rb-demo-app

# Change into your new project directory
# Unhook from our Git remote, and initialize your own Git

$ cd rb-demo-app && rm -rf ./.git && git init

```


## Using the monorepo

**Rockin' Blocks** provides a working monorepo out of the box, which is a [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) where you can develop your block library, your documentation, and your Gatsby project together in the same spot. If you haven't used a Yarn workspace before, no worries: **Rockin' Blocks** should work right away without any configuration.

### Install everything with Yarn

Because we are leveraging Yarn workspaces, **Rockin' Blocks** does require you to use Yarn as your package manager, at least for now.

```bash
# Install your dependencies with Yarn
# This will install your dependencies for each package in the workspace

$ yarn install
```

This will install all dependencies throughout the workspace to Gatsby, your block library, and our CLI tool, `riff`, as well.

