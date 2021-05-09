import React, { FC } from "react"
import styles from "./Hero.scss"
import { ReactComponent as Vector } from "./Hero.svg"
import { Box, Col, Container, Row } from "../../Layout"
import { Button } from "../../Elements/Button"

export interface IHeroProps {
  heading: string
  subheading?: string
  buttonText: string
  buttonLink?: string
  primaryColor?: string
}

export const Hero: FC<IHeroProps> = props => {
  const { heading, subheading, buttonText, buttonLink, primaryColor } = props
  return (
    <div className={styles["hero"]}>
      <Container>
        <Row>
          <Col className={styles["hero__col--content"]}>
            <Box className={styles["hero__inner"]}>
              <p className={styles["hero__heading"]}>{heading}</p>
              <h1 className={styles["hero__subheading"]}>{subheading}</h1>
              <Button
                backgroundColor={primaryColor}
                text={buttonText}
                to={buttonLink}
              />
            </Box>
          </Col>

          <Col className={styles["hero__col--image"]}>
            <div className={styles["hero__image-wrapper"]}>
              <Vector />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const HeroForm = {
  id: "rockin-docs-builder-hero",
  label: "Hero",
  key: "builder-hero",
  fields: [
    {
      label: "Hero Heading",
      name: "rawJson.heading",
      description: "Heading for the hero.",
      component: "text",
    },
    {
      label: "SEO Heading",
      name: "rawJson.seoHeading",
      description: "Heading for SEO. This will be set as the H1.",
      component: "text",
    },
    {
      label: "Hero Subheading",
      name: "rawJson.subheading",
      description: "Subheading for the hero.",
      component: "textarea",
    },
    {
      label: "Hero Button Text",
      name: "rawJson.buttonText",
      description: "Text for the hero button.",
      component: "text",
    },
    {
      label: "Hero Button Text",
      name: "rawJson.buttonLink",
      description: "URL for the hero button link.",
      component: "text",
    },
    {
      label: "Hero Image",
      name: "rawJson.image",
      description: "Image for the hero",
      component: "image",
    },
  ],
}
