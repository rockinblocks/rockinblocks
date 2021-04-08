import React, { FC } from "react"
import styles from "./Hero.scss"
import { ReactComponent as Vector } from "./Hero.svg"
import { Box, Col, Container, Row } from "../../Layout"
import { Button } from "../../Elements/Button"

export interface HeroProps {
  heading: string
  seoHeading: string
  subheading?: string
}

export const Hero: FC<HeroProps> = ({ heading, seoHeading, subheading }) => {
  return (
    <div className={styles["rd-hero"]}>
      <Container>
        <Row>
          <Col
            flex={60}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <h1 className={styles["rd-hero__seo-heading"]}>{seoHeading}</h1>
              <p className={styles["rd-hero__heading"]}>{heading}</p>
              <p className={styles["rd-hero__subheading"]}>{subheading}</p>
              <Button text="Start a Project" />
            </Box>
          </Col>

          <Col flex={40}>
            <div className={styles["rd-hero__image-wrapper"]}>
              <Vector />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
