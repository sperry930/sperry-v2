import React from "react"

import ContentPage from "../components/content-page"
import CONTENT_MAP from "../../CONTENT_MAP"

const CREATIVE_DIRECTOR_CONTENT = CONTENT_MAP["creative-director"].projects

const CreativeDirector = () => <ContentPage data={CREATIVE_DIRECTOR_CONTENT} />

export default CreativeDirector
