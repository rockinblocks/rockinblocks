// 1. import `usePlugin` & `useJsonForm`
import React from 'react'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'gatsby-tinacms-json'
import { graphql } from 'gatsby'

export default function Page(props) {

  const [data, form] = useJsonForm(props.data.pagesJson, {
    fields: [
      {
        label: 'Path',
        name: 'rawJson.path',
        description: 'Path for the page',
        component: 'text',
      },
      {
        label: 'Hero Copy',
        name: 'rawJson.hero_copy',
        description: 'Hero copy for the main block',
        component: 'text',
      }
    ],
  })

  usePlugin(form)

  return (
    <section>
      <div>
        <h2>{data.hero_copy}</h2>
      </div>
    </section>
  )
}
 
export const pageQuery = graphql`
  query ($path: String!) {
    pagesJson(path: { eq: $path }) {
      id
      hero_copy
      path
      rawJson
      fileRelativePath
    }
  }
`