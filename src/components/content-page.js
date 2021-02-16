import React from "react"

import Layout from "../components/layout"

const getContentMarginTop = () => {
  if (window && window.innerWidth) {
    if (window.innerWidth < 800) {
      return "50px"
    }

    if (window.innerWidth > 800 && window.innerWidth < 960) {
      return "100px"
    }
  }

  return "150px"
}

const ContentPage = ({ data }) => {
  console.warn(`getContentMarginTop()`, getContentMarginTop())
  return (
    <Layout>
      <div
        style={{
          marginTop: getContentMarginTop(),
          fontSize: "15px",
          fontStyle: "italic",
        }}
      >
        <div>
          {data.map((project, index) => {
            return (
              <div key={index} style={{ margin: "50px 0px" }}>
                <div style={{ margin: "50px 5px 20px" }}>{project.title}</div>
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

/*
                      <iframe src="https://player.vimeo.com/video/329862491" width="640" height="393" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

*/
