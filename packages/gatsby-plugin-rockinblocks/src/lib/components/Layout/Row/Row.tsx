import React from "react"
import styles from "./Row.scss"

export interface RowProps {
  children?: React.ReactNode
  display?: string
  flexDirection?: any
  flexWrap?: string
  justifyContent?: string
  style?: React.CSSProperties | undefined
}

export const Row: React.FC<RowProps & React.HTMLAttributes<HTMLDivElement>> = (
  props
): JSX.Element => {
  const { children, display, flexDirection, justifyContent, style } = props
  const styleProps = {
    display,
    flexDirection,
    justifyContent,
    ...style,
  }
  return (
    <div className={styles["rd-row"]} style={{ ...styleProps }} {...props}>
      {children}
    </div>
  )
}

export default Row