import React from "react"

import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <div class="Info-window">
      <div class="Info-content">
        <div class="Info-column">
          <h2>
            About <span class="Info-hidden">Scott Perry</span>
          </h2>
          <p>
            Scott is a Director and DP living in Brooklyn, NY. He currently
            serves the Creative Director for the video department at The FADER
          </p>
          <h2>Contact</h2>
          <p>
            <a href="scott@sperry.work">scott@sperry.work</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/s_p_e_r_r_y"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://vimeo.com/sperrystuff"
              target="_blank"
              rel="noreferrer"
            >
              Vimeo
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
