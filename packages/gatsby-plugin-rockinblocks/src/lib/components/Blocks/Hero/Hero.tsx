import React, { FC } from "react"
import styles from "./Hero.scss"
import { ReactComponent as Vector } from "./Hero.svg"
import { Box, Col, Container, Row } from "../../Layout"
import { Button } from "../../Elements/Button"

export interface IHeroProps {
  heading: string
  seoHeading: string
  subheading?: string
  buttonText: string
  buttonLink?: string
  primaryColor?: string
}

export const Hero: FC<IHeroProps> = props => {
  const {
    heading,
    seoHeading,
    subheading,
    buttonText,
    buttonLink,
    primaryColor,
  } = props
  return (
    <div className={styles["rd-hero"]}>
      <Container>
        <Row>
          <Col className={styles["rd-hero__col--content"]}>
            <Box className={styles["rd-hero__inner"]}>
              <p className={styles["rd-hero__heading"]}>{heading}</p>
              <h1 className={styles["rd-hero__subheading"]}>{subheading}</h1>
              <Button
                backgroundColor={primaryColor}
                text={buttonText}
                to={buttonLink}
              />
            </Box>
          </Col>

          <Col className={styles["rd-hero__col--image"]}>
            <div className={styles["rd-hero__image-wrapper"]}>
              <Vector />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
