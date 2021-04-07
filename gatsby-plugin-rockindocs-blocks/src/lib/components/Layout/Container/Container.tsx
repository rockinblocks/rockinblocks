import React from "react"
import styles from "./Container.scss"

export interface ContainerProps {
  children?: any
  display?: string
  flex?: number
  flexDirection?: any
  justifyContent?: string
}

export const Container: React.FC<
  ContainerProps & React.HTMLAttributes<HTMLDivElement>
> = props => {
  const { display, flex, flexDirection, justifyContent, children } = props
  const style = {
    display,
    flex,
    flexDirection,
    justifyContent,
  }
  return (
    <div className={styles["rd-container"]} style={{ ...style }} {...props}>
      {children}
    </div>
  )
}

export default Container
