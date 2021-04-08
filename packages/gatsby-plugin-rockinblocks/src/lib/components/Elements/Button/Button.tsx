import React, { FC, ReactNode } from "react"
import { Link } from "gatsby"
import styles from "./Button.scss"

export interface ButtonProps {
  text: string
  backgroundColor?: string
  textColor?: string
  link?: string
  onClick?: () => {}
}

export const Button: FC<ButtonProps> = props => {
  const { text, backgroundColor, textColor, link } = props

  const Wrapper: FC = ({ children }): JSX.Element => {
    if (link) {
      return (
        <Link className={styles["rd-button"]} to={link}>
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
        {/* <span
        className={styles["rd-button__text"]}
        style={{ color: textColor || "#ffffff" }}
        >
        {text}
      </span> */}
      </div>
    </Wrapper>
  )
}
