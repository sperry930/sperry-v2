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
                {project.content.map(imageOrVideo => {
                  if (imageOrVideo.type === "video") {
                    return (
                      <video
                        key={imageOrVideo.name}
                        alt={imageOrVideo.name}
                        style={{
                          width: `calc(${imageOrVideo.width} - 10px)`,
                          margin: "0 5px",
                        }}
                        src={"../" + imageOrVideo.name}
                        preload="auto"
                        autoPlay
                        playsInline
                        muted
                        loop
                      ></video>
                    )
                  }
                  return (
                    <img
                      key={imageOrVideo.name}
                      alt={imageOrVideo.name}
                      style={{
                        width: `calc(${imageOrVideo.width} - 10px)`,
                        margin: "0 5px",
                      }}
                      src={"../" + imageOrVideo.name}
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
