import React from "react"

export interface ColProps {
  children?: any
  display?: string
  flex?: string
  justifyContent?: string
}

export const Col = ({ display, flex, justifyContent, children }: ColProps) => {
  const style = {
    display,
    flex,
    justifyContent,
  }
  return (
    <div className="rd-col" {...style}>
      {children}
    </div>
  )
}

export default Col
