import React from "react"

export interface BoxProps {
  children?: React.ReactNode
  display?: string
  flex?: number
  justifyContent?: string
  padding?: string
  margin?: string
}

export const Box = ({
  children,
  display,
  flex,
  justifyContent,
  padding,
  margin,
}: BoxProps) => {
  const style = {
    display,
    flex,
    justifyContent,
    padding,
    margin,
  }
  return <div style={{ ...style }}>{children}</div>
}

export default Box
