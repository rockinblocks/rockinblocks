import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Box } from '../../Layout/Box';
import styles from './Footer.scss';

export const Footer: FC = (): JSX.Element => {
	return (
		<Box className={styles.footer}>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
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
		</Box>
	);
};

export default Footer;
