import { Link } from "gatsby"
import React from "react"

import "@fontsource/open-sans"

const Header = ({ padding }) => (
  <header>
    <div
      style={{
        textAlign: "center",
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: "bold",
        padding,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        Scott Perry
      </Link>
    </div>
  </header>
)

export default Header
