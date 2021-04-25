import React from "react"
import styles from "./Content.scss"
import { Button } from "../../Elements/Button"
import { Box } from "../../Layout"

export interface ContentSectionProps {
  heading: string
  body: string
  buttonText: string
  buttonLink: string
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  heading,
  body,
  buttonText,
  buttonLink,
}): JSX.Element => {
  return (
    <Box className={styles["content__section"]}>
      <div>
        <h3 className={styles["content__section-heading"]}>{heading}</h3>
        <p className={styles["content__section-body"]}>{body}</p>
      </div>
      <div>
        <Button text={buttonText} link={buttonLink ?? null} />
      </div>
    </Box>
  )
}
