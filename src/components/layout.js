import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SideNav from "./sidenav"
import "./layout.css"

const getHeaderSpacing = () => {
  if (typeof window !== `undefined` && window.innerWidth) {
    if (window.innerWidth < 720) {
      return "10px"
    }
  }

  return "20px 45px"
}

const getPadding = () => {
  if (typeof window !== `undefined` && window.innerWidth) {
    if (window.innerWidth < 720) {
      return "5px"
    }
  }

  return "30px"
}

const Layout = ({ children }) => {
  const padding = getPadding()
  return (
    <>
      <div
        style={{
          margin: getHeaderSpacing(),
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Header padding={padding} />
        <SideNav padding={padding} />
      </div>
      <div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 840,
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
