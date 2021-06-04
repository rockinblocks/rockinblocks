import React, { createContext, useContext, useState } from "react"
import data from "./data.json"

const BackstageContext = createContext({})

export const useBackstage = () => {
  return useContext(BackstageContext)
}

export const useBackstageProvider = () => {
  const [isActive, setIsActive] = useState(true);

  return {
    isActive,
    setIsActive,
    ...data,
  }
}

export const BackstageProvider = ({ children }) => (
  <BackstageContext.Provider value={useBackstageProvider()}>
    {children}
  </BackstageContext.Provider>
)
