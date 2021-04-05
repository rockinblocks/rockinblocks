import React, { FC } from "react"
import "./Hero.scss"
import svg from "./Hero.svg"
import { Col, Container, Row } from "../../Layout"
import { Button } from "../../Elements/Button"

export interface HeroProps {
  heading: string
  seoHeading: string
  subheading?: string
}

export const Hero: FC<HeroProps> = ({ heading, seoHeading, subheading }) => {
  return (
    <div className="rd-hero">
      <Container>
        <Row>
          <Col>
            <div className="rd-hero__content-wrapper">
              <h1 className="rd-hero__seo-heading">{seoHeading}</h1>
              <p className="rd-hero__heading">{heading}</p>
              <p className="rd-hero__subheading">{subheading}</p>
              <Button text="Start a Project" />
            </div>
          </Col>

          <div className="rd-hero__column">
            <div className="rd-hero__image-wrapper">
              <img className="rd-hero__vector" src={svg} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
