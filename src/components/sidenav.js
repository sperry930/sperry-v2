import { Link } from "gatsby"
import React from "react"

const SideNav = () => (
  <div
    style={{
      position: "fixed",
      top: "95px",
      left: "75px",
      fontSize: "15px",
      display: "flex",
      flexDirection: "column",
      fontStyle: "italic",
    }}
  >
    <Link
      to="/"
      style={{
        marginBottom: "15px",
        color: `black`,
        textDecoration: `none`,
      }}
    >
      Director
    </Link>
    <Link
      to="/creative-director/"
      style={{
        marginBottom: "15px",
        color: `black`,
        textDecoration: `none`,
      }}
    >
      Creative Director
    </Link>
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
