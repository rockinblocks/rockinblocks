import React, { FC } from "react"
import styles from "./Content.scss"
import { Button } from "../../Elements/Button"
import { Box, Col, Container, Row } from "../../Layout"

export interface ContentProps {
  heading: string
  subheading?: string
}

export interface ContentSection {
  heading: string
  body: string
  buttonText: string
  buttonLink: string
}

export const Content: FC<ContentProps> = ({ heading, subheading }) => {
  const sections: ContentSection[] = [
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

  return (
    <div className={styles["rd-content"]}>
      <Container>
        <Box>
          <h2>{heading}</h2>
        </Box>
      </Container>
      <Container>
        {sections && (
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {sections.map(
              ({ heading: sectionHeading, body, buttonLink, buttonText }) => {
                return (
                  <Box flex="1 0 50%">
                    <h3 className={styles["rd-content__heading"]}>
                      {sectionHeading}
                    </h3>
                    <p className={styles["rd-content__body"]}>{body}</p>
                    <Button text={buttonText} />
                  </Box>
                )
              }
            )}
          </Box>
        )}
      </Container>
    </div>
  )
}
