---
title: Fonts
date_created: '2020-04-12'
date_updated: '2020-04-12'
keywords: 'rockin blocks, fonts, docs, @fontsource yarn workspace'
path: /docs/v1/fonts
description: Adding fonts to Rockin' Blocks is a snap using FontSource.
type: document
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```typescript
import React, { FC, ReactNode } from "react"
import { Link } from "gatsby"
import styles from "./Button.scss"

export interface IButtonProps {
  text: string
  backgroundColor?: string
  textColor?: string
  to?: string
  onClick?: () => {}
}

export const Button: FC<IButtonProps> = props => {
  const { text, backgroundColor, textColor, to } = props

  const Wrapper: FC = ({ children }): JSX.Element => {
    if (to) {
      return (
        <Link className={styles["rd-button"]} to={to}>
          {children}
        </Link>
      )
    }
    return <span className={styles["rd-button"]}>{children}</span>
  }

  return (
    <Wrapper>
      <div
        className={styles["rd-button__inner"]}
        style={{ backgroundColor }}
        {...props}
      >
        <span
          className={styles["rd-button__text"]}
          style={{ color: textColor || "#ffffff" }}
        >
          {text}
        </span>
      </div>
    </Wrapper>
  )
}
```