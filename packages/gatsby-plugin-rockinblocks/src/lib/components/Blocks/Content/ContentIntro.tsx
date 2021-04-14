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
    <Box className={styles["rd-content__intro"]}>
      <h3 className={styles["rd-content__heading"]}>{heading}</h3>
      <p className={styles["rd-content__subheading"]}>{subheading}</p>
    </Box>
  )
}
