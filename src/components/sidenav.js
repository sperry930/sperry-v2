import { Link } from "gatsby"
import React from "react"

const SideNav = () => (
  <div
    style={{
      position: `fixed`,
      margin: `80px 0 0 80px`,
      maxWidth: 960,
      fontSize: "15px",
      display: "flex",
      flexDirection: "column",
      fontStyle: "italic",
    }}
  >
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      Director
    </Link>
    <br />
    <Link
      to="/creative-director/"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      Creative Director
    </Link>
    <br />
    <Link
      to="/contact/"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      Contact
    </Link>
  </div>
)

export default SideNav
