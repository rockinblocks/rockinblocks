---
title: Using the monorepo
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'monorepo, gatsby, starter'
path: /docs/v0.1.0/monorepo
description: Getting set up with Rockin' Blocks is a breeze.
order: '2.1'
type: document
---

**Rockin' Blocks** provides a working monorepo out of the box, which is a [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) where you can develop your block library, your documentation, and your Gatsby projects together in the same spot. If you haven't used a Yarn workspace before, no worries: **Rockin' Blocks** should work right away without any configuration.

### Workspace structure

```
├── packages
│   ├── gatsby-plugin-rockinblocks
│   ├── gatsby-starter-rockinblocks
│   └── riff
```



### Install everything with Yarn

Because we are leveraging Yarn workspaces, **Rockin' Blocks** does require you to use Yarn as your package manager, at least for now.

```bash
# Install your dependencies with Yarn
# This will install your dependencies for each package in the workspace

$ yarn install
```

This will install all dependencies throughout the workspace to Gatsby, your block library, and our CLI tool, `riff`, as well.

