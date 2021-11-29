import * as React from "react"
import { Link } from "gatsby"
import { homeButton } from "./home-button.module.scss"
import { RiHome2Line as HomeLogo } from "react-icons/ri"

export function HomeButton() {
  return (
    <Link aria-label={`Accueil`} to="/" className={homeButton}>
      <HomeLogo size="26px" />
    </Link>
  )
}
