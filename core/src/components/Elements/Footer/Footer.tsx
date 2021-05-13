import React, { FC } from "react";
import Link from "gatsby-link";
import styles from "./Footer.scss";
import { Box } from "../../Layout/Box";

export const Footer: FC = (): JSX.Element => {
  return (
    <Box className={styles.footer}>
      <Box display="flex" justifyContent="center">
      </Box>
      <Box display="flex" justifyContent="center">
        <Link className={styles.footer__link} to="/sitemap.xml">
          Sitemap
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
