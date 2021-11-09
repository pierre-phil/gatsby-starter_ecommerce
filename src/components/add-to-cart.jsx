import * as React from "react"
import { StoreContext } from "../context/store-context"

import "./add-to-cart.scss"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <button
      type="submit"
      className="add-to-cart"
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Ajouter" : "Indisponible"}
    </button>
  )
}
