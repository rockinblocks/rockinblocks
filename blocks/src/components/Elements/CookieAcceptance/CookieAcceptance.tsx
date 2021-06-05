import React, { FC, useEffect, useState } from "react";
import { Alert } from "..";
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
		<>
			{!acceptedCookies && (
				<div className={styles.cookieAcceptance}>
					<div>
						<Alert
							text="This site uses cookies to improve the user experience for you and your users."
							type="info"
							link={{ text: "Accept Cookies", location: "/privacy-policy" }}
							onClick={() => handleAcceptedCookies()}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default CookieAcceptance;
