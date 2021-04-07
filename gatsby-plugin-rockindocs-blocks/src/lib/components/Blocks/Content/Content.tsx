import React, { FC } from "react"
import styles from "./Content.scss"
import { ReactComponent as Vector } from "./Content.svg"
import { Button } from "../../Elements/Button"
import { Box, Col, Container, Row } from "../../Layout"

export interface ContentProps {
  heading: string
  subheading?: string
}

export interface ContentHeadingProps {
  heading: string
  subheading?: string
}

export const ContentHeading: React.FC<ContentHeadingProps> = ({
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
export interface ContentSectionProps {
  id: number
  heading: string
  body: string
  buttonText: string
  buttonLink: string
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  heading,
  body,
  buttonText,
}) => {
  return (
    <Box className={styles["rd-content__section"]}>
      <div>
        <h3 className={styles["rd-content__section-heading"]}>{heading}</h3>
        <p className={styles["rd-content__section-body"]}>{body}</p>
      </div>
      <div>
        <Button text={buttonText} />
      </div>
    </Box>
  )
}

export const Content: FC<ContentProps> = props => {
  const sections: ContentSectionProps[] = [
    {
      heading: "Sed ut perspiciatis",
      body:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Lorem ipsum dolor",
      body:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Nemo enim ipsam",
      body:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Tempor incididunt",
      body:
        "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
  ]
  const { heading, subheading } = props
  return (
    <div className={styles["rd-content"]}>
      <Container>
        <ContentHeading {...{ heading, subheading }} />
      </Container>
      <Container>
        <Row>
          <Col
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ overflow: "hidden" }}
          >
            <Vector className={styles["rd-content__vector"]} />
          </Col>
          <Col flex={2}>
            {sections && (
              <Row
                display="flex"
                style={{ flexWrap: "wrap", backgroundColor: "transparent" }}
              >
                {sections.map((sectionProps, index) => {
                  return (
                    <Col key={index} flex="1 0 50%" display="flex">
                      <ContentSection {...sectionProps} />
                    </Col>
                  )
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
