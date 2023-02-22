---
title: 'Docs: Create a Document'
dateCreated: '2020-04-12'
dateUpdated: '2020-04-12'
keywords: 'gatsby, blocks, gatsby page builder'
path: /docs/v0/documentation/create/
description: Understanding blocks and how they work with Gatsby and TinaCMS.
order: '8.1'
type: document
---

## Create a document with TinaCMS

**Rockin' Blocks** comes equipped with [TinaCMS](https://tina.io), which makes it a snap to create a new documentation in Markdown. **TinaCMS** will only show when `NODE_ENV` is _not_ production.

### Spin up your Gatsby app

```shell
# From the workspace root

$ yarn web:dev

# From /sites/gatsby/rockinblocks

$ yarn develop
```

### Create your document

Documentation pages can be created through the TinaCMS sidebar while visiting **any** documentation page during local development. Create a new document by simply pressing the plus sign icon located in the top-right corner of the TinaCMS sidebar.

Below you can see the **Create Document** modal used to create new documentation Markdown files:

<img src="//rockinblocks.s3-us-west-2.amazonaws.com/media/screenshot-create-document.png" width="768">

To learn more about each of these fields, you can see a detailed description [here](/documentation).

### Edit your document

#### Edit with TinaCMS

After creating your document, simply visit the URL of the new documentation page you created. For example, if you create a document with a **path** of `/docs/v0/introduction`, simply visit that page in your browser to see your new document. 

