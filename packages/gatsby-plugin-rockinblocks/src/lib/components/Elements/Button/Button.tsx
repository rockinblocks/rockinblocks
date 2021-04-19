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
