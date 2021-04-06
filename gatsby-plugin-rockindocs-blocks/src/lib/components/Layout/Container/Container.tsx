import React from "react"
import clsx from "clsx"
import styles from "./Container.scss"

export interface ContainerProps {
  children?: any
  wrap?: string
  column?: string
  columnReverse?: string
  rowReverse?: string
  padded?: boolean
  paddedSm?: boolean
}

export const Container = ({
  children,
  wrap,
  column,
  columnReverse,
  rowReverse,
  padded,
  paddedSm,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        styles["rd-container"],
        `
          ${wrap ? "wrap" : ""}
          ${column ? "column" : ""}
          ${columnReverse ? "column-reverse" : ""}
          ${rowReverse ? "row-reverse" : ""}
          ${padded ? "padded" : ""}
          ${paddedSm ? "padded-sm" : ""}
        `
      )}
    >
      {children}
    </div>
  )
}

export default Container
