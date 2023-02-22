---
title: Installation
dateCreated: '2020-04-12'
dateUpdated: '2020-04-12'
keywords: 'rockin blocks installation, gatsby page builder'
path: /docs/v0/installation/
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

[https://github.com/rockinblocks/rockinblocks](https://github.com/rockinblocks/rockinblocks)

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

### Hoist your blocks

When working within a monorepo, there are many folders, and it's easily to find yourself spending a little too much time navigating your file explorer in your editor. To hoist your blocks up to the top of the workspace, you can run:

```bash
# This will symlink your blocks into the root of your workspace for easy access
# You can delete this folder at any time without affecting the core library

$ yarn blocks:hoist
```

### Build your CLI tool (Optional)

If you don't want to use the CLI tool, you can skip this step.

**Rockin' Blocks** ships with a simple CLI tool to generate new blocks called **Riff**. It's shipped with the monorepo, so you'll need to build the tool to use it.

```bash
# This will create the /dist directory in the CLI package

$ yarn workspace @rockinblocks/cli build

# You may need to make the CLI file executable

$ chmod +x ./dist/cli.js
```

### Start the Gatsby site

After you build your blocks library, you Gatsby site should build just fine for development.

```bash
# The Gatsby site will be available on http://localhost:8787

$ yarn web:dev
```

Your **Rockin' Blocks** project should be up and running!