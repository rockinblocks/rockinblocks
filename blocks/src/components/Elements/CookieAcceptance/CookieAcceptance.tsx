import React, { FC, useEffect, useState } from "react";
import { Box, Container } from "../..";
import styles from "./CookieAcceptance.scss";

export const CookieAcceptance: FC = (): JSX.Element => {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  const handleAcceptedCookies = () => {
    window.localStorage.setItem("rockinblocks_cookies", String(Date.now()));
    setAcceptedCookies(true);
  };

  useEffect(() => {
    const accepted = window.localStorage.getItem("rockinblocks_cookies");
    if (!accepted) {
      setAcceptedCookies(false);
    }
  }, []);

  return (
    <div className={styles.cookieAcceptance}>
      {!acceptedCookies && (
        <Box className={styles.cookieAcceptance__alert}>
          <Container display="flex" justifyContent="space-between">
            <Box display="flex" flexDirection="column" justifyContent="center">
              This site uses cookies to improve the user experiences for you and
              your users.
            </Box>
            <Box>
              <span
                className={styles.cookieAcceptance__link}
                onClick={() => {
                  handleAcceptedCookies();
                }}
              >
                Accept Cookies
              </span>
            </Box>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default CookieAcceptance;
