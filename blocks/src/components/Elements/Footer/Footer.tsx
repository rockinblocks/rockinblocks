import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Box } from '../../Layout/Box';
import styles from './Footer.scss';

export const Footer: FC = (): JSX.Element => {
	return (
		<Box className={styles.footer}>
			<Box display="flex">
			</Box>
			<Box display="flex">
				<Link className={styles.footer__link} to="/sitemap.xml">
          Sitemap
				</Link>
			</Box>
		</Box>
	);
};

export default Footer;
