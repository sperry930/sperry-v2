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
              <div key={index} style={{ margin: "50px 0px" }}>
                <div style={{ margin: "50px 0 20px" }}>{project.title}</div>
                {project.content.map(image => {
                  console.warn(`image`, image)
                  return (
                    <img
                      key={image.name}
                      alt={image.name}
                      style={{
                        width: `calc(${image.width} - 10px)`,
                        margin: "0 5px",
                      }}
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
