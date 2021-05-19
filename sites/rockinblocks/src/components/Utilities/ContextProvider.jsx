import React from 'react'
import { ThemeProvider } from './Theme'
import { SettingsProvider } from './Settings'
import { BuilderProvider } from '../Builder'

export const ContextProvider = ({ children }) => {
  return (
    <SettingsProvider>
      <ThemeProvider>
          <BuilderProvider>
            {children}
          </BuilderProvider>
      </ThemeProvider>
    </SettingsProvider>
  )
}

export default ContextProvider
