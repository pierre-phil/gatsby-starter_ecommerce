import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import "./src/styles/reset.css"
import "./src/styles/variables.scss"
import "./src/styles/global.css"

import "@fontsource/zen-kaku-gothic-antique" // Defaults to weight 400.
import "@fontsource/oswald" // Defaults to weight 400.

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
