import React, { FC, useEffect, useState } from "react"
import { Alert } from ".."
import styles from "./CookieAcceptance.scss"

export const CookieAcceptance: FC = (): JSX.Element => {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  const handleAcceptedCookies = () => {
    window.localStorage.setItem("rockinblocks_cookies", String(Date.now()));
    setAcceptedCookies(true);
  };

  useEffect(() => {
    const accepted = window.localStorage.getItem("rockinblocks_cookies");
    console.log({
      accepted,
    });
    if (!accepted) {
      setAcceptedCookies(false);
    }
  }, []);

  return (
    <div className={styles.cookieAcceptance}>
      {!acceptedCookies && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <Alert
            text="This site uses cookies to improve the user experience for you and your users."
            type="info"
            link={{ text: "Accept Cookies", location: "/privacy-policy" }}
            onClick={() => handleAcceptedCookies}
          />
        </div>
      )}
    </div>
  )
}

export default CookieAcceptance
