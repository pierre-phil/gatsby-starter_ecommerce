import * as React from "react"
import { spinner } from "./progress.module.scss"

export function Spinner(props) {
  return <span role="progressbar" className={spinner} {...props} />
}
