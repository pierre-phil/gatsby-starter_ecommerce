import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"

import "./navigation.scss"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav className="nav-style nav">
      <Link
        key="All"
        className="nav-link"
        to="/products/"
        activeClassName="active-link"
      >
        All products
      </Link>
      {productTypes.map((name) => (
        <Link
          key={name}
          className="nav-link"
          to={`/products/${slugify(name)}`}
          activeClassName="active-link"
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
