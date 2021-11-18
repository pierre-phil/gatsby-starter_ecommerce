import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import "./stream.scss"

export default function StreamPage() {
  return (
    <Layout>
      <Seo title="Stream" />
      <h1 className="title text-center uppercase italic">Stream</h1>
      <div className="container">
        <StaticImage
          src="../images/cover_front.png"
          alt=""
          className="front-cover container"
        />
      </div>
    </Layout>
  )
}
