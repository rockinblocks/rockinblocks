/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../components/Layout/Header/Header"
import { useBackstage } from "../components/Utilities/Backstage"

const Layout = ({ children }) => {
  const { appName, appVersion, gtmID } = useBackstage;

  useEffect(() => {
    console.log({
      appName,
      appVersion,
      gtmID,
    })
  },[]);

  return (
    <>
      <Header />
      <div className="layout-wrapper">
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
