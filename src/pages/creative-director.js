import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const CreativeDirector = () => (
  <Layout>
    <div
      style={{
        margin: `50px 0 0 100px`,
        maxWidth: 960,
        fontSize: "15px",
        // display: "flex",
        // flexDirection: "column",
        fontStyle: "italic",
      }}
    >
      <p>DRAMA - Forever and a day</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default CreativeDirector
