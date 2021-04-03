import React, { createContext, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'gatsby-tinacms-json'
import { formConfig } from './formConfig'

const SettingsContext = createContext({})

export const useSettings = () => {
  return useContext(SettingsContext);
}

export const useSettingsProvider = () => {
  const data = useStaticQuery(graphql`
    query {
      settingsJson {
        appName
        rawJson
        fileRelativePath
      }
    }
  `)

  const [editableData, form] = useJsonForm(data.settingsJson, formConfig)
  usePlugin(form)

  return {
    ...editableData,
  }
}

export const SettingsProvider = ({ children })=> (
  <SettingsContext.Provider value={useSettingsProvider()}>
      {children}
  </SettingsContext.Provider>
)
