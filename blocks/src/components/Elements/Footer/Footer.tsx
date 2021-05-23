import React, { FC } from "react";
import { Link } from "gatsby";
import styles from "./Footer.scss";

export const Footer: FC = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Link className={styles.footer__link} to="/sitemap.xml">
            Sitemap
          </Link>
        </div>
        <div>
          <Link className={styles.footer__link} to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
