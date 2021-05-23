import React from 'react';
import { Navbar } from '../Navbar';

export const Header: React.FC = (): JSX.Element => {
	return (
		<header>
			<div className="header">
				<Navbar/>
			</div>
		</header>
	);
};

export const HeaderForm = {
	id: 'rockin-docs-header',
	label: 'Header',
	fields: [
		{
			label: 'App Name',
			name: 'rawJson.appName',
			description: 'Name of the app',
			component: 'text'
		}
	]
};

export default Header;
