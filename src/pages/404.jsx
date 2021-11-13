import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./404.module.scss"

export default function NotFoundPage() {
  return (
    <Layout>
      <div className={container}>
        <h1 className={heading}>Page inexistante</h1>
        <p className={paragraph}>Désolé, la page n'existe pas.</p>
      </div>
    </Layout>
  )
}
