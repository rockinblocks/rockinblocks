import React, { FC } from "react";
import { Link } from "gatsby";
import { Box, Col, Container, Row } from ".."
import styles from "./Footer.scss";

export const Footer: FC = (): JSX.Element => {
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
    </div>
  );
};

export default Footer;
