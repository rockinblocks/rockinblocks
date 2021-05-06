import React from "react"
import styles from "./Content.scss"
import { Box } from "../../Layout"

export interface ContentIntroProps {
  heading: string
  subheading?: string
}

export const ContentIntro: React.FC<ContentIntroProps> = ({
  heading,
  subheading,
}) => {
  return (
    <Box className={styles["content__intro"]}>
      <h3 className={styles["content__heading"]}>{heading}</h3>
      <p className={styles["content__subheading"]}>{subheading}</p>
    </Box>
  )
}
