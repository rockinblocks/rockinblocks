---
title: 'Blocks: Structure'
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, blocks, gatsby page builder'
path: /docs/v0/blocks/structure
description: Understanding blocks and how they work with Gatsby and TinaCMS.
order: '5.2'
type: document
---

[Riff](/docs/v0/blocks/create) will craft a working block within the `blocks/src/components/Blocks` directory of your workspace. A block is not a single file, but a directory of files that work together to make up your component.

```
# blocks/src/components/Blocks

CallToAction
├── CallToAction.scss         // SCSS Module
├── CallToAction.stories.tsx  // Storybook stories
├── CallToAction.test.tsx     // Jest/Enzyme tests
├── CallToAction.tsx          // Component file
└── index.ts                  // Index file
```



