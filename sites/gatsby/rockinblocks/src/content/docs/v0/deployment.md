---
title: Deployment
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'gatsby, blocks, gatsby page builder'
path: /docs/v0/deployment
description: Understanding blocks and how they work with Gatsby and TinaCMS.
order: '9.0'
type: document
---

## AWS Amplify

[AWS Amplify](https://aws.amazon.com/amplify/) makes it very easy to set up CI/CD with your application. Currently, **Rockin' Blocks** provides support for AWS Amplify out of the box:

```yaml
# amplify.yml in the workspace root

version: 1
frontend:
    phases:
      preBuild:
        commands:
          - nvm install 15
          - yarn install
          - yarn blocks:build
      build:
        commands:
          - yarn web:build
    artifacts:
      baseDirectory: sites/gatsby/rockinblocks/public
      files:
        - "**/*"
    appRoot: /
```

Review the [documentation from Amazon](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) on how to configure your application's build settings.