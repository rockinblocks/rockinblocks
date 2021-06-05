import React, { FC } from "react";
import { Link } from "gatsby";
import { GitHubButton } from "../GitHubButton";
import { Box, Col, Container, Row } from "../../Layout";
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg";
import { ReactComponent as Monogram } from "../../../assets/rockinblocks-no-mark.svg";
import styles from "./Navbar.scss";

export interface INavbarProps {
  appName?: string;
}

export const Navbar: FC<INavbarProps> = props => {
  const { appName } = props;

  return (
    <div className={styles.navbar}>
      <Container display="flex">
        <Row flexDirection="row">
          <Col display="flex" flexDirection="column" justifyContent="center">
            <Link to="/" className={styles.navbar__brand}>
              <span>
                {Logo ? (
                  <>
                    <Logo
                      data-rb="navbar-logo"
                      className={styles.navbar__logo}
                    />
                    <Box display="inline-flex" style={{ width: "2.5rem" }}>
                      <Monogram
                        data-rb="navbar-monogram"
                        className={styles.navbar__monogram}
                      />
                    </Box>
                  </>
                ) : (
                  <span>{appName}</span>
                )}
              </span>
            </Link>
          </Col>
          <Col flexDirection="row" display="flex" justifyContent="flex-end">
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
                  <GitHubButton />
                </li>
              </ul>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
