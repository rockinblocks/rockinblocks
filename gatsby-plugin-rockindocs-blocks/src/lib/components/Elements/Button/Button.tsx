import React, { FC } from "react"
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

  return (
    <div className={styles["rd-button"]} style={{ backgroundColor }} {...props}>
      <span
        className={styles["rd-button__text"]}
        style={{ color: textColor || "#ffffff" }}
      >
        {text}
      </span>
    </div>
  )
}
