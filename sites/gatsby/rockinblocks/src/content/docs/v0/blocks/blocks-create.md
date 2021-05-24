---
title: 'Blocks: Create a Block'
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, tinacms, blocks, gatsby page builder'
path: /docs/v0/blocks/create
description: Understanding blocks and how they work with Gatsby and Tina CMS.
order: '4.1'
type: document
---

Let's work together to create a block called `HomeIntroduction`.

## Generate the block with Riff 🎸

**Rockin' Blocks** comes with `riff`, an early version of our CLI tool, to quickly generate a block. From the root of our workspace, we can run this basic command to quickly generate a working block:

```bash
# Run the command from the root of the workspace
# The block will be generated within blocks/src/components/Blocks

$ yarn riff --name=HomeIntroduction
```

You should see the following success message:

```bash
🎸🎶🤘 Successfully created HomeIntroduction! 🤘🎶🎸
Check your blocks/src/components/Blocks directory for you new block!
```