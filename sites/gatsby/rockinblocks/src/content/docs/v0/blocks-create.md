---
title: 'Blocks: Create a Block'
date_created: '2020-05-31'
date_updated: '2020-05-31'
keywords: 'gatsby, blocks, gatsby page builder'
path: /docs/v0/blocks/create
description: Understanding blocks and how they work with Gatsby and TinaCMS.
order: '5.1'
type: document
---

Let's work together to create a block called `CallToAction`.

## Generate the block with Riff 🎸

**Rockin' Blocks** comes with `riff`, an early version of our CLI tool, to quickly generate a block. From the root of our workspace, we can run this basic command to quickly generate a working block:

```bash
# Run the command from the root of the workspace
# The block will be generated within blocks/src/components/Blocks

$ yarn riff --name=CallToAction
```

You should see the following success message:

```
🎸🎶🤘 Successfully created CallToAction! 🤘🎶🎸
Check your blocks/src/components/Blocks directory for you new block!
```

## Export the block from the library

In this release, it is required that you manually export the new block and any necessary type declarations from the block library to make them accessible to any of your projects. This can be done by simply adding the exports to `blocks/src/components/index.ts`:

```typescript
// blocks/src/components/index.ts
...

export { CallToAction } from "./Elements/CallToAction"
export type { ICallToActionProps } from "./Elements/CallToAction"; // You may not have a prop interface

...

```

## Build the blocks library

After the new block is added, build the block library to create the new `dist` folder, and start your web app again to pick up the new changes.

```bash
# Option #1: Build from the workspace root

$ yarn blocks:build

# Option #2: Build from the block library root at blocks/
# This has a faster dev option that does not run tests

$ yarn build:dev
```

## Start your app

Your new block has been created, it's being exported from the block library, and you have created a new build of your block library. All that's left is starting your app:

```bash
# Start from the workspace root

$ yarn web:dev
```