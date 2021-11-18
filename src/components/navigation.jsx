import { Link } from "gatsby"
import * as React from "react"
import {
  navStyle,
  navLink,
  activeLink,
  logoContainer,
} from "./navigation.module.scss"

export function Navigation({ className }) {
  return (
    <nav className={[navStyle, className].join(" ")}>
      <div className={logoContainer}>
        <Link
          className={navLink}
          to={`/products/cle-usb-yuli/`}
          activeClassName={activeLink}
          title="Acheter"
        >
          Acheter
        </Link>
        <Link
          className={navLink}
          to={`/stream/`}
          activeClassName={activeLink}
          title="Stream"
        >
          Stream
        </Link>
      </div>
    </nav>
  )
}
