import React from "react"
import styles from "./Row.scss"

export interface RowProps {
  children?: any
  wrap?: string
  column?: string
  columnReverse?: string
  rowReverse?: string
  padded?: boolean
  paddedSm?: boolean
}

export const Row = ({ children }) => {
  return <div className={styles["rd-row"]}>{children}</div>
}

export default Row
