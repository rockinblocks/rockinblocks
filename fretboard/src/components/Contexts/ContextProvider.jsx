import React from "react";
import { ThemeProvider } from "./Theme/Theme";
import { SettingsProvider } from "./Settings/Settings";
import { BackstageProvider } from "./Backstage/Backstage";

export const ContextProvider = ({ children }) => {
	return (
		<BackstageProvider>
			<SettingsProvider>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</SettingsProvider>
		</BackstageProvider>
	);
};

export default ContextProvider;
