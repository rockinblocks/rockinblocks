import React from "react"
import styles from "./Box.scss"

export interface BoxProps {
  children?: React.ReactNode
  display?: string
  flex?: number | string
  justifyContent?: string
  padding?: string
  margin?: string
  style?: React.CSSProperties | undefined
}

export const Box: React.FC<BoxProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  display,
  flex,
  justifyContent,
  padding,
  margin,
  style,
}): JSX.Element => {
  const styleProps = {
    display,
    flex,
    justifyContent,
    padding,
    margin,
    ...style,
  }
  return (
    <div className={styles["rd-box"]} style={{ ...styleProps }}>
      {children}
    </div>
  )
}

export default Box
