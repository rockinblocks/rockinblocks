---
title: 'Blocks: Structure'
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, tinacms, blocks, gatsby page builder'
path: /docs/v0/blocks/structure
description: Understanding blocks and how they work with Gatsby and Tina CMS.
order: '4.2'
type: document
---

The `riff` command creates a working block within the `blocks/src/components/Blocks` directory of your workspace. A block is not simply a single file, but a directory of files that work together to make up your component.

```bash
# blocks/src/components/Blocks

── HomeIntroduction
   ├── HomeIntroduction.scss
   ├── HomeIntroduction.stories.tsx
   ├── HomeIntroduction.test.tsx
   ├── HomeIntroduction.tsx
   └── index.ts
```