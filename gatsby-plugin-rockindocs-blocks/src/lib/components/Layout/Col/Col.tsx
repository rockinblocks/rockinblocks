import React from "react"

export interface ColProps {
  children?: any
  display?: string
  flex?: number
  justifyContent?: string
}

export const Col = ({ display, flex, justifyContent, children }: ColProps) => {
  const style = {
    display,
    flex,
    justifyContent,
  }
  return <div style={{ ...style }}>{children}</div>
}

export default Col
