import React from "react"
import { ThemeProvider } from "./Theme/Theme"
import { SettingsProvider } from "./Settings/Settings"
import { TinaProvider, TinaCMS } from "tinacms"

export const ContextProvider = ({ children }) => {
  return (
    <SettingsProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SettingsProvider>
  )
}

export default ContextProvider
