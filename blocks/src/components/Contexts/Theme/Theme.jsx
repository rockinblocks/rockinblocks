import React, { createContext, useContext } from 'react'
import data from "./data.json"

const ThemeContext = createContext({})

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeProvider = () => {
  return {
    ...data,
  }
}

export const ThemeProvider = ({ children })=> (
  <ThemeContext.Provider value={useThemeProvider()}>
      {children}
  </ThemeContext.Provider>
)
