import { Link } from "gatsby"
import React from "react"

function getStyleForPath(activePath, tabType) {
  if (activePath === "/" && tabType === "director") {
    return "black"
  }

  if (activePath === "/creative-director/" && tabType === "creative-director") {
    return "black"
  }

  if (activePath === "/contact/" && tabType === "contact") {
    return "black"
  }

  return "darkgrey"
}

const SideNav = ({ padding }) => {
  let activePath = "/"
  if (
    typeof window !== "undefined" &&
    window.location &&
    window.location.pathname
  ) {
    activePath = window.location.pathname
  }

  return (
    <div
      style={{
        fontSize: "15px",
        display: "flex",
        flexDirection: "row",
        fontStyle: "italic",
        textAlign: "center",
      }}
    >
      <Link
        to="/"
        style={{
          padding,
          color: getStyleForPath(activePath, "director"),
          textDecoration: `none`,
        }}
      >
        Director
      </Link>
      <Link
        to="/creative-director/"
        style={{
          padding,
          color: getStyleForPath(activePath, "creative-director"),
          textDecoration: `none`,
        }}
      >
        Creative Director
      </Link>
      <Link
        to="/contact/"
        style={{
          padding,
          color: getStyleForPath(activePath, "contact"),
          textDecoration: `none`,
        }}
      >
        Contact
      </Link>
    </div>
  )
}

export default SideNav
