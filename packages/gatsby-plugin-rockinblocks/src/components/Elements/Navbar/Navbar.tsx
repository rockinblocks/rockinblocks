import React, { FC } from "react"
import { Link } from "gatsby"
import { NavbarToggle } from "../NavbarToggle"
import { Box, Col, Container, Row } from "../../Layout"
import styles from "./Navbar.scss"
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg"
import { ReactComponent as LogoMobile } from "../../../assets/rockinblocks-no-mark.svg"
import { ReactComponent as IconGitHub } from "../../../assets/icon-github.svg"

export interface INavbarProps {
  appName?: string
}

export const Navbar: FC<INavbarProps> = props => {
  const { appName } = props

  return (
    <div className={styles["navbar"]}>
      <Container display="flex">
        <Row>
          <Col
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Link to="/" className={styles["navbar__brand"]}>
                <span>
                  {Logo ? (
                    <>
                      <Logo
                        data-rb="navbar-logo"
                        className={styles["navbar__logo"]}
                      />
                    </>
                  ) : (
                    <span>{appName}</span>
                  )}
                </span>
              </Link>
            </Box>
          </Col>
          <Col
            flex={1}
            flexDirection="row"
            display="flex"
            justifyContent="flex-end"
          >
            <Box
              className={styles["navbar__navigation-wrapper"]}
              flexDirection="column"
              justifyContent="center"
            >
              <ul className={styles["navbar__navigation"]}>
                <li>
                  <Link to="/docs" target="_blank">
                    <span>Docs</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="http://github.com/rockinblocks/rockindocs"
                    target="_blank"
                    rel="noreferrer"
                    data-rb="navbar-github-anchor"
                  >
                    <div className={styles["navbar__github"]}>
                      <IconGitHub />
                    </div>
                  </a>
                </li>
              </ul>
            </Box>
            <NavbarToggle />
          </Col>
        </Row>
      </Container>
    </div>
  )
}