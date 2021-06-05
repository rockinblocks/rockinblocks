import React, { FC, useEffect, useState } from "react";
import { Link } from "gatsby";
import { Box, Col, Container, Row } from "..";
import { Alert } from "../../Elements"
import styles from "./Footer.scss";

export const Footer: FC = (): JSX.Element => {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  const handleAcceptedCookies = () => {
    window.localStorage.setItem('rockinblocks_cookies', String(new Date().getTime()) );
    setAcceptedCookies(true);
  }

  useEffect(() => {
    const accepted = window.localStorage.getItem('rockinblocks_cookies');
    console.log({
      accepted
    })
    if (!accepted) {
      setAcceptedCookies(false);
    }
  }, [])

  return (
    <div>
      <div className={styles.footer}>
        <Container>
          <Row>
            <Col>
              <Box display="flex" justifyContent="flex-end">
                <Box>
                  <Link className={styles.footer__link} to="/sitemap.xml">
                    Sitemap
                  </Link>
                </Box>
                <Box>
                  <Link className={styles.footer__link} to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
      {!acceptedCookies &&
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <Alert
            text="This site uses cookies to improve the Rockin' Blocks user experience."
            type="info"
            link={{ text: "Accept Cookies", location: "/privacy-policy" }}
            onClick={() => handleAcceptedCookies}
          />
        </div>
      }
    </div>
  );
};

export default Footer;
