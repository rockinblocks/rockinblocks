import React, { FC } from "react";
import { Link } from "gatsby";
import GitHubButton from "react-github-btn";
import { NavbarToggle } from "../NavbarToggle";
import { Box, Col, Container, Row } from "../../Layout";
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg";
import styles from "./Navbar.scss";

export interface INavbarProps {
  appName?: string;
}

export const Navbar: FC<INavbarProps> = props => {
  const { appName } = props;

  return (
    <div className={styles.navbar}>
      <Container display="flex">
        <Row>
          <Col
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Link to="/" className={styles.navbar__brand}>
                <span>
                  {Logo ? (
                    <Logo
                      data-rb="navbar-logo"
                      className={styles.navbar__logo}
                    />
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
              <ul className={styles.navbar__navigation}>
                <li>
                  <Link to="/docs/v0/introduction">
                    <span>Docs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <GitHubButton
                    href="https://github.com/rockinblocks/rockinblocks"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star rockinblocks/rockinblocks on GitHub"
                  >
                    Star
                  </GitHubButton>
                </li>
              </ul>
            </Box>
            <NavbarToggle />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
