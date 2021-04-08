import React from "react"
import styles from "./Box.scss"

export interface BoxProps {
  children?: React.ReactNode
  display?: string
  flex?: number | string
  flexDirection?: any
  justifyContent?: string
  style?: React.CSSProperties | undefined
}

export const Box: React.FC<BoxProps & React.HTMLAttributes<HTMLDivElement>> = (
  props
): JSX.Element => {
  const {
    children,
    display,
    flex,
    flexDirection,
    justifyContent,
    style,
  } = props

  const styleProps = {
    display,
    flex,
    flexDirection,
    justifyContent,
    ...style,
  }

  return (
    <div className={styles["rd-box"]} style={{ ...styleProps }} {...props}>
      {children}
    </div>
  )
}

export default Box
