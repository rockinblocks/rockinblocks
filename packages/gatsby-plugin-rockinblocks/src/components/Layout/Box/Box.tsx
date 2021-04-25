import React from "react"
import styles from "./Box.scss"

export interface IBoxProps {
  children?: React.ReactNode
  display?: string
  flex?: number | string
  flexDirection?: any
  justifyContent?: string
  style?: React.CSSProperties | undefined
}

export const Box: React.FC<IBoxProps & React.HTMLAttributes<HTMLDivElement>> = (
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
    <div className={styles["box"]} style={{ ...styleProps }} {...props}>
      {children}
    </div>
  )
}

export default Box
