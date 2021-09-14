import React, { FC } from "react";
import ReactMarkdown from "markdown-to-jsx";
import { Box, Col, Container, Row } from "../../Layout";
import { Button } from "../../Elements/Button";
import styles from "./Hero.scss";
import { ReactComponent as Vector } from "./Hero.svg";

export interface IHeroProps {
  heading: string;
  subheading?: string;
  buttonText: string;
  buttonLink?: string;
  primaryColor?: string;
}

export const Hero: FC<IHeroProps> = props => {
  const { heading, subheading, buttonText, buttonLink, primaryColor } = props;
  return (
    <div className={styles.hero}>
      <Container>
        <Row>
          <Col flex={0.55}>
            <Box className={styles.hero__inner}>
              <p className={styles.hero__heading}>{heading}</p>
              <ReactMarkdown className={styles.hero__subheading}>
                {subheading ?? ""}
              </ReactMarkdown>
              <Button
                backgroundColor={primaryColor}
                text={buttonText}
                to={buttonLink}
              />
            </Box>
          </Col>

          <Col flex={0.45} flexDirection="column">
            <div className={styles["hero__image-wrapper"]}>
              <Vector />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const HeroBlock = {
  label: "Hero",
  key: "hero-block",
  defaultItem: {
    hero__heading: "Keep on rockin' in the free world!",
    hero__subheading: "Neil Young",
    hero__buttonText: "Start Rockin'",
    hero__buttonLink: "/get-started",
  },
  fields: [
    { name: "hero__heading", label: "Heading", component: "text" },
    { name: "hero__subheading", label: "Subheading", component: "markdown" },
    { name: "hero__buttonText", label: "Button Text", component: "text" },
    { name: "hero__buttonLink", label: "Button Link", component: "text" },
  ],
};
