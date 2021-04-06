import React, { FC } from "react"
import { Box, Col, Container, Row } from "../../Layout"
import styles from "./Navbar.scss"

export interface NavbarProps {
  appName?: string
  backgroundColor?: string
  textColor?: string
}

export const Navbar: FC<NavbarProps> = ({ appName }) => {
  const navigation = [
    {
      text: "Get Started",
      path: "/get-started",
    },
    {
      text: "Docs",
      path: "/docs",
    },
  ]

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
              <span className={styles["rd-navbar__app-name"]}>{appName}</span>
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
                  <span>Get Started</span>
                </li>
                <li>
                  <span>Docs</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
