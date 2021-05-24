import React, { FC } from "react";
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
              <p className={styles.hero__subheading}>{subheading}</p>
              <Button
                backgroundColor={primaryColor}
                text={buttonText}
                to={buttonLink}
              />
            </Box>
          </Col>

          <Col flex={0.45}>
            <div className={styles["hero__image-wrapper"]}>
              <Vector />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
