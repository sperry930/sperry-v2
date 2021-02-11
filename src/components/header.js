import { Link } from "gatsby"
import React from "react"

const Header = ({}) => (
  <header
    style={{
      position: `fixed`,
    }}
  >
    <div
      style={{
        margin: `0px 0 0 80px`,
        maxWidth: 960,
      }}
    >
      <div style={{ margin: 0, fontSize: "24px", textTransform: "uppercase" }}>
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
    </div>
  </header>
)

export default Header
