import React from "react"
import styles from "./Col.scss"

export interface ColProps {
  children?: any
  display?: string
  flex?: number | string
  flexDirection?: any
  justifyContent?: string
}

export const Col: React.FC<ColProps & React.HTMLAttributes<HTMLDivElement>> = ({
  display,
  flex,
  flexDirection,
  justifyContent,
  children,
}) => {
  const style = {
    display,
    flex,
    flexDirection,
    justifyContent,
  }
  return (
    <div className={styles["rd-col"]} style={{ ...style }}>
      {children}
    </div>
  )
}

export default Col
