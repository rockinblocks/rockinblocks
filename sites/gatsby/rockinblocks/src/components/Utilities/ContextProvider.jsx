import React from "react";
import { ThemeProvider } from "./Theme/Theme.jsx";
import { SettingsProvider } from "./Settings/Settings.jsx";

export const ContextProvider = ({ children }) => {
	return (
		<SettingsProvider>
			<ThemeProvider>
				{children}
			</ThemeProvider>
		</SettingsProvider>
	);
};

export default ContextProvider;
