import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.scss"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productsCount },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productsCount: distinct(field: title)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link
        key="All"
        className={navLink}
        to="/products/"
        activeClassName={activeLink}
      >
        {`Produits (${productsCount.length})`}
      </Link>
      {productsCount.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}/`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
