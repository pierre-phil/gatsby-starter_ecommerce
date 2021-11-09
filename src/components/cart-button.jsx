import * as React from "react"
import { Link } from "gatsby"
import CartIcon from "../icons/cart"

import "./cart-button.scss"

export function CartButton({ quantity }) {
  return (
    <Link
      aria-label={`Panier d'achat avec ${quantity} produits`}
      to="/cart"
      className="cart-button"
    >
      <CartIcon />
      {quantity > 0 && <div className="badge">{quantity}</div>}
    </Link>
  )
}
