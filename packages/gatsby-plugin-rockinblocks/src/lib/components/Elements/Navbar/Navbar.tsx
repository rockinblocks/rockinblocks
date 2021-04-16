import React, { FC } from "react"
import { Link } from "gatsby"
import { Box, Col, Container, Row } from "../../Layout"
import styles from "./Navbar.scss"

export interface NavbarProps {
  appName?: string
  backgroundColor?: string
  color?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { appName, backgroundColor, color } = props

  return (
    <div className={styles["rd-navbar"]}>
      <Container display="flex">
        <Row>
          <Col
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Link to="/" className={styles["rd-navbar__brand"]}>
                <span>{appName}</span>
              </Link>
            </Box>
          </Col>
          <Col
            flex={1}
            flexDirection="row"
            display="flex"
            justifyContent="flex-end"
          >
            <div className={styles["rd-navbar__navigation-wrapper"]}>
              <ul className={styles["rd-navbar__navigation"]}>
                <li>
                  <Link
                    to="http://github.com/rockinblocks/rockindocs"
                    target="_blank"
                  >
                    <span>Get Started</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
