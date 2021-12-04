import * as React from "react"
import { Link } from "gatsby"

import {
  footerStyle,
  copyright,
  links,
  footerNavList,
  footerNavListItem,
} from "./footer.module.scss"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <hr />
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <Link>Conditions générales de vente et d'utilisation</Link>{" "}
          </li>
          <li className={footerNavListItem}>
            <Link>Politique de confidentialité</Link>{" "}
          </li>
          <li className={footerNavListItem}>
            <Link>Retours et remboursements</Link>{" "}
          </li>
          <li className={footerNavListItem}>
            <Link>Cookies</Link>{" "}
          </li>
          <li className={footerNavListItem}>
            <Link to="/mentions-legales/">Mentions légales</Link>{" "}
          </li>
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; Urule {new Date().getFullYear()}
      </div>
    </footer>
  )
}
