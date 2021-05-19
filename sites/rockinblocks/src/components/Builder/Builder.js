import React, { createContext, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'gatsby-tinacms-json'
import { formConfig } from './formConfig'

const BuilderContext = createContext({})

export const useBuilder = () => {
  return useContext(BuilderContext);
}

export const useBuilderProvider = () => {
  const data = useStaticQuery(graphql`
    query {
      builderJson {
        rawJson
        fileRelativePath
      }
    }
  `)

  const [editableData, form] = useJsonForm(data.builderJson, formConfig)
  usePlugin(form)

  return {
    ...editableData,
    form
  }
}

export const BuilderProvider = ({ children })=> (
  <BuilderContext.Provider value={useBuilderProvider()}>
      {children}
  </BuilderContext.Provider>
)
