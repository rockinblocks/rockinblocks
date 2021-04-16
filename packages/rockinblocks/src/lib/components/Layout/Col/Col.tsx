import React from "react"
import styles from "./Col.scss"

export interface ColProps {
  children?: any
  display?: string
  flex?: number | string
  flexDirection?: any
  justifyContent?: string
  style?: React.CSSProperties | undefined
}

export const Col: React.FC<
  ColProps & React.HTMLAttributes<HTMLDivElement>
> = props => {
  const {
    display,
    flex,
    flexDirection,
    justifyContent,
    children,
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
    <div className={styles["rd-col"]} style={{ ...styleProps }} {...props}>
      {children}
    </div>
  )
}

export default Col
