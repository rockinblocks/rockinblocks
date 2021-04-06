import React from "react"
import styles from "./Row.scss"

export interface RowProps {
  children?: React.ReactNode
  display?: string
  flexDirecton?: string
  flexWrap?: string
  justifyContent?: string
  rowReverse?: string
}

export const Row = (props: RowProps): JSX.Element => {
  const { children, display, flexDirecton, justifyContent } = props
  const styleProps = {
    display,
    flexDirecton,
    justifyContent,
  }
  return (
    <div className={styles["rd-row"]} style={{ ...styleProps }}>
      {children}
    </div>
  )
}

export default Row
