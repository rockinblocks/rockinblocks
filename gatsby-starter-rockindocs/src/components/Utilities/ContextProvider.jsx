import React from 'react'
import { ToastProvider } from '../../hooks/useToast'
import { ThemeProvider } from './Theme'
import { SettingsProvider } from './Settings'
import { BuilderProvider } from '../Builder'

const ContextProvider = ({ children }) => {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <ToastProvider>
          <BuilderProvider>
            {children}
          </BuilderProvider>
        </ToastProvider>
      </ThemeProvider>
    </SettingsProvider>
  )
}

export default ContextProvider
