import React from "react"

import Layout from "../components/layout"

const getContentMarginTop = () => {
  if (typeof window !== `undefined` && window.innerWidth) {
    if (window.innerWidth < 800) {
      return "50px"
    }

    if (window.innerWidth > 800 && window.innerWidth < 960) {
      return "100px"
    }
  }

  return "150px"
}

const MyVideo = ({ video }) => {
  return (
    <video
      key={video.name}
      name={video.name}
      alt={video.name}
      style={{
        width: `calc(${video.width} - 10px)`,
        margin: "0 5px",
      }}
      src={"../" + video.name}
      preload="auto"
      autoPlay
      playsInline
      muted
      loop
    ></video>
  )
}

const MyImage = ({ image }) => {
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
}

/* 
<div style="padding:61.36% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/329862491" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/329862491">Omar Apollo | Years To Come (dir. Scott Perry)</a> from <a href="https://vimeo.com/patrickgolan">Patrick Golan</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
*/
const MyEmbed = ({ embed }) => {
  if (embed.width === "100%") {
    return (
      <div
        style={{
          padding: "61.36% 0 0 0",
          position: "relative",
          width: `calc(${embed.width} - 10px)`,
          margin: "0 5px",
          display: "inline-block",
          background: "black",
        }}
      >
        <iframe
          key={embed.name}
          title={embed.name}
          src={embed.name}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            marginBottom: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    )
  }

  return (
    <div
      style={{
        padding: "36.68% 0 0 0",
        position: "relative",
        width: `calc(${embed.width} - 10px)`,
        margin: "0 5px",
        display: "inline-block",
        background: "black",
      }}
    >
      <iframe
        key={embed.name}
        src={embed.name}
        title={embed.name}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{
          marginBottom: 0,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  )
}

const ContentPage = ({ data }) => {
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
                {project.content.map((imageOrVideo, index) => {
                  if (imageOrVideo.type === "embed") {
                    return <MyEmbed key={index} embed={imageOrVideo} />
                  }

                  if (imageOrVideo.type === "video") {
                    return <MyVideo key={index} video={imageOrVideo} />
                  }

                  return <MyImage key={index} image={imageOrVideo} />
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
