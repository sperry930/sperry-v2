/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SideNav from "./sidenav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <SideNav />
      </div>
      <div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
