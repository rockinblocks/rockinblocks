import React, { FC } from "react"
import { ContentIntro } from "./ContentIntro"
import { ContentSection, ContentSectionProps } from "./ContentSection"
import { Col, Container, Row } from "../../Layout"
import { ReactComponent as Vector } from "./Content.svg"
import styles from "./Content.scss"

export interface ContentProps {
  heading: string
  subheading: string
  sections: ContentSectionProps[]
}

export const Content: FC<ContentProps> = props => {
  const { heading, subheading, sections } = props
  return (
    <div className={styles["rd-content"]}>
      <Container>
        <ContentIntro {...{ heading, subheading }} />
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
                {sections?.map((sectionProps: ContentSectionProps) => {
                  return (
                    <Col
                      // TO-DO Better indexing throughout
                      key={Math.random().toString(36).substring(7)}
                      flex="1 0 50%"
                      display="flex"
                    >
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
