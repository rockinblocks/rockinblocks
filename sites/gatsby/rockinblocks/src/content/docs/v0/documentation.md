---
title: Documentation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, tinacms, blocks, gatsby page builder'
path: /docs/v0/documentation
description: Understanding blocks and how they work with Gatsby and Tina CMS.
order: '8.0'
type: document
---

## Markdown support

**Rockin' Blocks** provides support Markdown out of the box. Simply add a new Markdown file to your site's `src/content/docs` directory. There is a small amount of "frontmatter" used to tell Rockin' Blocks a little bit about the document:

```
---
title: Documentation
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, tinacms, blocks, gatsby page builder'
path: /docs/v0/blocks
description: Understanding blocks and how they work with Gatsby and Tina CMS.
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