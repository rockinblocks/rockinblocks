import React from "react"

export interface ColProps {
  children?: any
  display?: string
  flex?: number
  flexDirection?: any
  justifyContent?: string
}

export const Col = ({
  display,
  flex,
  flexDirection,
  justifyContent,
  children,
}: ColProps) => {
  const style = {
    display,
    flex,
    flexDirection,
    justifyContent,
  }
  return <div style={{ ...style }}>{children}</div>
}

export default Col
