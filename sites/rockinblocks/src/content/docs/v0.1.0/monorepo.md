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

## Yarn workspace

**Rockin' Blocks** provides a working monorepo out of the box, which is a [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) where you can develop your block library, your documentation, and your Gatsby projects together in the same spot. If you haven't used a Yarn workspace before, no worries: **Rockin' Blocks** should work right away without any configuration.

## Structure

The monorepo structure is really composed of two parts: your blocks and your sites. Each of your sites within the workspace shares the block library, making it easier to build, maintain, and document multiple projects that share similar features and branding.

**Rockin' Blocks** currently ships with `riff`, as well, a simple CLI tool to help developers quickly create blocks from the command line. Using Riff is totally optional and is really provided to make developers' lives easier.

```
├── package.json
├── packages
│   ├── gatsby-plugin-rockinblocks
│   │   ├── package.json
│   │   └── src
│   │       ├── components
│   │       │   ├── Blocks
│   │       │   ├── Elements
│   │       │   ├── Layout
│   │       │   └── Pages
│   │       ├── content
│   │       ├── images
│   │       ├── pages
│   │       └── styles
│   └── riff
│       └── package.json
└── sites
    └── rockinblocks
        └── src
            ├── components
            │   ├── Builder
            │   ├── Layout
            │   └── Utilities
            ├── content
            ├── images
            ├── pages
            └── styles
    
```

[Blocks](/docs/v0.1.0/blocks)
