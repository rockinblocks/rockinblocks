---
title: Create a block
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, tinacms, blocks, gatsby page builder'
path: /docs/v0.1.0/blocks/create
description: Understanding blocks and how they work with Gatsby and Tina CMS.
order: '4.1'
type: document
---

Let's work together to create a block called `HomeIntroduction`. This block is essentially going to be a basic call-to-action, with just a simple heading, a small paragraph of content, and a button that will link to our GitHub page at https://github.com/rockinblocks/rockinblocks.

## Generate the block with Riff 🎸

**Rockin' Blocks** comes with `riff`, an early version of our CLI tool, to quickly generate a block. From the root of our workspace, we can run this basic command to quickly generate a working block:

```bash
# Run the command from the root of the workspace
# The block will be generated within blocks/src/components/Blocks

$ yarn riff --name=HomeIntroduction
```

You should see the following success message:

```
🎸🎶🤘 Successfully created HomeIntroduction! 🤘🎶🎸
Check your src/components/Blocks directory for you new block!
```