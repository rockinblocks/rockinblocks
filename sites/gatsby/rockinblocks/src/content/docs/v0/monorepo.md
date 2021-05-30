---
title: Monorepo
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: >-
	monorepo, yarn workspace monorepo, gatsby, starter, yarn workspace, open
	source yarn workspace
path: /docs/v0/monorepo
description: Getting set up with Rockin' Blocks is a breeze.
order: '3.0'
type: document
---
## Structure

### Blocks & Sites

The monorepo structure is really composed of four parts: your blocks, your sites, any plugins needed to link them together, and a storage directory. Each site within the workspace shares your block library and storage directory. This makes it easier to build, maintain, and document multiple projects with a single block library.

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
├── plugins
│   └── gatsby
│       ├── gatsby-config.js
│       └── package.json
├── sites
│	  └── gatsby
│		  └── rockinblocks
│			  └── src
│				  ├── content
│				  ├── images
│				  ├── pages
│				  └── styles
└── storage
    └── media
```
