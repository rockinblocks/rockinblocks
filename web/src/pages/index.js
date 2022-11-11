import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@rockinblocks/rockinblocks"

const IndexPage = () => (
  <Layout>
    <div className="container mx-auto py-16">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <div className="my-auto">
              <h1 className="text-slate-500 uppercase">
                The Best Gatsby TailwindCSS Starter
              </h1>
              <p className="text-5xl lg:text-8xl font-bold mb-4">
                Create + Maintain
              </p>
              <p className="text-3xl lg:text-2xl font-semibold text-slate-500 max-w-2xl mb-6">
                Manage your apps, documentation, blog, components, and content in
                the same Git repository.
              </p>
              <p className="text-xl text-slate-500 max-w-xl mb-8 leading-normal">
                Use the power of Rockin' Blocks to create a fully-customizable
                experience for your next web application. Powered by Gatsby and
                TailwindCSS, Rockin' Blocks components will save you time and money,
                allowing you to focus on the core of your application.
              </p>
            </div>
          </div>
          <Button />
        </div>
        <div className="flex-1 text-center">
          <StaticImage
            className="lg:max-w-2xl"
            src="../images/music.jpeg"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
