import React, { createContext, useContext, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'gatsby-tinacms-json'
import { formConfig } from './formConfig'

const ThemeContext = createContext({})

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeProvider = () => {
  const data = useStaticQuery(graphql`
    query {
      themeJson {
        primaryColor
        rawJson
        fileRelativePath
      }
    }
  `)

  const [editableData, form] = useJsonForm(data.themeJson, formConfig)
  usePlugin(form)

  return {
    ...editableData,
  }
}

export const ThemeProvider = ({ children })=> (
  <ThemeContext.Provider value={useThemeProvider()}>
      {children}
  </ThemeContext.Provider>
)
