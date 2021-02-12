import { Link } from "gatsby"
import React from "react"

import "@fontsource/open-sans"

const Header = () => (
  <header>
    <div
      style={{
        position: "fixed",
        top: "50px",
        left: "75px",
        margin: 0,
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: "bold",
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
