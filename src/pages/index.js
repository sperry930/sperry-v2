import React from "react"

import ContentPage from "../components/content-page"
import CONTENT_MAP from "../../CONTENT_MAP"

const DIRECTOR_CONTENT = CONTENT_MAP.director.projects

const Director = () => <ContentPage data={DIRECTOR_CONTENT} />

export default Director
