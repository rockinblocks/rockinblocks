---
title: Installation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'rockin blocks installation, gatsby page builder'
path: /docs/v0.1.0/installation
description: Getting set up with Rockin' Blocks is a breeze.
order: '2.0'
type: document
---
## Create a new project

### Using Gatsby CLI

The quickest way to get started is to use the [Gatsby CLI tool](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

```bash
$ gatsby new fresh-rockinblocks https://github.com/rockinblocks/rockinblocks
```

### Use the GitHub repository

```bash
# Clone down the Yarn workspace a new project folder
# We will call our app rb-demo-app

$ git clone https://github.com/rockinblocks/rockinblocks.git rb-demo-app

# Change into your new project directory
# Unhook from our Git remote, and initialize your own Git

$ cd rb-demo-app && rm -rf ./.git && git init

```


## Workspace

**Rockin' Blocks** provides a working [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) out of the box. It is a [monorepo](https://www.atlassian.com/git/tutorials/monorepos) where you can develop your block library, your documentation, and your Gatsby project together in the same spot. If you haven't used a Yarn workspace before, no worries: **Rockin' Blocks** should work right away without any configuration.

### Install everything with Yarn

Because we are leveraging Yarn workspaces, **Rockin' Blocks** does require you to use Yarn as your package manager, at least for now.

```bash
# Install your dependencies with Yarn
# This will install your dependencies for each package in the workspace

$ yarn install
```

This will install all dependencies throughout the workspace to Gatsby, your block library, and our CLI tool, `riff`, as well.

### Build your blocks library

You will need to build your blocks library for the first time before starting your Gatsby site.

```bash
# This will create the /dist directory in the blocks package

$ yarn blocks:build
```

### Start the Gatsby site

After you build your blocks library, you Gatsby site should build just fine for development.

```bash
# The Gatsby site will be available on http://localhost:8787

$ yarn web:dev
```

Your **Rockin' Blocks** project should be up and running!

[Next: Examining the monorepo](/docs/v0.1.0/monorepo)
