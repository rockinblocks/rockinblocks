import React from "react"
import styles from "./Col.scss"

export interface IColProps {
  children?: any
  display?: string
  flex?: number | string
  flexDirection?: any
  justifyContent?: string
  style?: React.CSSProperties | undefined
}

export const Col: React.FC<
  IColProps & React.HTMLAttributes<HTMLDivElement>
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
    <div className={styles["col"]} style={{ ...styleProps }} {...props}>
      {children}
    </div>
  )
}

export default Col