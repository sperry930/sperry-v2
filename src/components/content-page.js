import React from "react"

import Layout from "../components/layout"

const ContentPage = ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          maxWidth: 960,
          marginTop: "200px",
          fontSize: "15px",
          fontStyle: "italic",
        }}
      >
        <div>
          {data.map((project, index) => {
            return (
              <div key={index} style={{ margin: "50px" }}>
                <div style={{ margin: "50px 0 20px" }}>{project.title}</div>
                {project.content.map(image => {
                  console.warn(`image`, image)
                  return (
                    <img
                      key={image.name}
                      alt={image.name}
                      style={{ width: image.width, margin: "0" }}
                      src={"../" + image.name}
                    ></img>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ContentPage
