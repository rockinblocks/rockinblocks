---
title: Monorepo
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'monorepo, gatsby, starter'
path: /docs/v0.1.0/monorepo
description: Getting set up with Rockin' Blocks is a breeze.
order: '3.0'
type: document
---
## Structure

### Blocks & Sites

The monorepo structure is really composed of two parts: your blocks and your sites. Each site within the workspace shares your block library. This makes it easier to build, maintain, and document multiple projects with a single block library.

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

[Next: Blocks](/docs/v0.1.0/blocks)
