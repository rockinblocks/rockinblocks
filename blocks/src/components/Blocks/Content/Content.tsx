import React, { FC, CSSProperties } from "react";
import { Box, Col, Container, Row } from "../../Layout";
import { Button } from "../../Elements";
import { ReactComponent as Vector } from "./Content.svg";
import styles from "./Content.scss";

export interface IContentIntroProps {
  heading: string;
  subheading?: string;
}

export const ContentIntro: React.FC<IContentIntroProps> = ({
  heading,
  subheading,
}) => {
  return (
    <Box className={styles.content__intro}>
      <h3 className={styles.content__heading}>{heading}</h3>
      <p className={styles.content__subheading}>{subheading}</p>
    </Box>
  );
};

export interface IContentSectionProps {
  heading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
}

export const ContentSection: FC<
  IContentSectionProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = ({ heading, body, buttonText, buttonLink }): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <div>
        <h3 className={styles["content__section-heading"]}>{heading}</h3>
        <p className={styles["content__section-body"]}>{body}</p>
      </div>
      <div>
        <Button text={buttonText} to={buttonLink ?? null} />
      </div>
    </Box>
  );
};

export interface IContentProps {
  heading: string;
  subheading: string;
  sections: IContentSectionProps[];
}

export const Content: FC<
  IContentProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = props => {
  const { heading, subheading, sections } = props;
  return (
    <div className={styles.content}>
      <Container>
        <Row justifyContent="flex-end">
          <Col flex={2 / 3}>
            <ContentIntro {...{ heading, subheading }} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            flex={1}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <div style={{ padding: "1rem" }}>
              <Vector className={styles.content__vector} />
            </div>
          </Col>
          <Col flex={2}>
            {sections && (
              <Row className={ styles.content__sections }>
                {sections?.map((sectionProps: IContentSectionProps) => {
                  return (
                    <Col
                      key={Math.random().toString(36)}
                      className={styles.content__column}
                    >
                      <div className={styles.content__section}>
                        <ContentSection {...sectionProps} />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
