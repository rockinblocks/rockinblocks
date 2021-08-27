---
title: Documentation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, blocks, gatsby page builder'
path: /docs/v0/documentation
description: Understanding blocks and how they work with Gatsby and TinaCMS.
order: '8.0'
type: document
---

## Real-time editing

As of Rockin' Blocks version 0.2.0, Markdown files can be both created and edited in real-time using [TinaCMS](https://tina.io). Additionally, **Rockin' Blocks** leverages Tina's very useful Git CMS support for Gatsby that allows developers, and even non-developers, to have a unique code-free editing experience while still adhering to modern code best practices.

### TinaCMS makes writing and maintaining documentation a breeze:

- Create a new documentation document through the TinaCMS sidebar
- Edit the document through the TinaCMS sidebar, and see changes in real time in the browser.
- Saving the document creates a Git commit under the hood, which provides versioned content editing even from non-devs

## Markdown support

**Rockin' Blocks** provides support Markdown out of the box. Each Markdown file contains what Gatsby calls **frontmatter**, which is basically a data object used to tell **Rockin' Blocks** a little bit about the document:

```
---
title: Documentation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, blocks, gatsby page builder'
path: /docs/v0/blocks
description: Understanding blocks and how they work with Gatsby and TinaCMS.
order: '4.0'
type: document
---

```

| Parameter      | Type     | Description                                    |
| :------------- | :------- | :--------------------------------------------- |
| `title`        | `string` | Title of your document                         |
| `date_created` | `string` | Date created in YYYY-MM-DD format              |
| `date_updated` | `string` | Date updated in YYYY-MM-DD format              |
| `keywords`     | `string` | For SEO. Should be comma-spaced list           |
| `path`         | `string` | Path of the document, e.g. /docs/v1/buttons    |
| `description`  | `string` | For SEO. A description of the document         |
| `order`        | `string` | Order to be displayed in sidebar, e.g. `'1.3'` |
| `type`         | `string` | Should be `document` for documentation         |
