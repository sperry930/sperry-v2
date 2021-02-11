import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        padding: `50px 0 0 100px`,
        maxWidth: 960,
        fontSize: "15px",
        fontStyle: "italic",
      }}
    >
      <p>DRAMA - Forever and a day</p>
      <div style={{}}>
        <Image slug="beats-1" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
