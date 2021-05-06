---
title: Using the monorepo
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'monorepo, gatsby, starter'
path: /docs/v0.1.0/monorepo
description: Getting set up with Rockin' Blocks is a breeze.
order: '3.1'
type: document
---

## Yarn workspace

**Rockin' Blocks** provides a working monorepo out of the box 🔊. In addition to providing a maintained and supported Gatsby [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) that works, you can develop your block library, your documentation, __and__ your Gatsby projects together in the same spot. If you haven't used a Yarn workspace before, no worries: **Rockin' Blocks** should work right away without any configuration.

## Structure

### Blocks, CLI, & Sites

The monorepo structure is really composed of three parts: your blocks, the CLI, and your sites. Each site within the workspace shares your block library. This makes it easier to build, maintain, and document multiple projects with a single block library.

```
├── blocks
│   ├── package.json
│   └── src
│       ├── components
│       │   ├── Blocks
│       │   ├── Elements
│       │   ├── Layout
│       │   └── Pages
│       ├── content
│       ├── images
│       ├── pages
│       └── styles
└── cli
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

### Riff

**Rockin' Blocks** currently ships with `riff`, as well, a simple CLI tool to help developers quickly create blocks from the command line. Using Riff is totally optional and is really provided to make developers' lives easier. Our rudimentary CLI allows you to quickly generate a block, but really is in place for extending and creating your own CLI commands. 

[Next: Blocks](/docs/v0.1.0/blocks)
