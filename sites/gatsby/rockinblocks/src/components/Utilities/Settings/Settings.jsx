import React, { createContext, useContext } from "react"
import data from "./data.json"

const SettingsContext = createContext({})

export const useSettings = () => {
  return useContext(SettingsContext)
}

export const useSettingsProvider = () => {
  return {
    ...data,
  }
}

export const SettingsProvider = ({ children }) => (
  <SettingsContext.Provider value={useSettingsProvider()}>
    {children}
  </SettingsContext.Provider>
)
