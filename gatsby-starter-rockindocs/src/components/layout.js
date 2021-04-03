/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '@layout/Header/Header'
import Footer from '@layout/Footer/Footer'
import Container from '@layout/Container/Container'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-wrapper">
          <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
