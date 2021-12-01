import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import isEqual from "lodash.isequal"
import { getSrc } from "gatsby-plugin-image"
import { StoreContext } from "../../context/store-context"
import { AddToCart } from "../../components/add-to-cart"
import { NumericInput } from "../../components/numeric-input"
import { formatPrice } from "../../utils/format-price"
import { Seo } from "../../components/seo"
import Gallery from "../../components/Gallery/Gallery"

import { BsZoomIn as ZoomIcon } from "react-icons/bs"

import Countdown from "react-countdown"

import "./product-page.scss"

export default function Product({ data: { product } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    totalInventory,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value
    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1

  // Countdown
  const Completionist = () => <span></span>

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
          La promotion prend fin dans {days} jours {hours} heures {minutes}{" "}
          minutes
        </span>
      )
    }
  }

  return (
    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <h1 className="title text-center uppercase italic">
        Version physique limitée
      </h1>
      <div className="product_container">
        <div className="product_box">
          {/* Images */}
          {hasImages && (
            <div className="product-image_wrapper">
              <div
                className="front-cover_container"
                role="group"
                aria-label="gallery"
                aria-describedby="instructions"
              >
                <Gallery galleryImages={images} />
                <ZoomIcon className="zoom-icon" color="grey" size="20px" />
              </div>
              {hasMultipleImages && (
                <div className="scroll-for-more" id="instructions">
                  <span aria-hidden="true">←</span> scroll for more{" "}
                  <span aria-hidden="true">→</span>
                </div>
              )}
            </div>
          )}
          {!hasImages && (
            <span className="no-image">Pas d'image disponible</span>
          )}
          <div>
            <h2 className="product_title">{title}</h2>
            <p className="product_description">{description}</p>
            <p className="price_value">
              <span>{price}</span>
              <span>10€</span>
            </p>

            <p className="stock_left">
              Il reste <span>{totalInventory}</span> exemplaires en stock.
            </p>

            {/* options */}
            <fieldset className="options_wrapper">
              {hasVariants &&
                options.map(({ id, name, values }, index) => (
                  <>
                    <p className="options-title">{name} :</p>
                    <div className="select-variant" key={id}>
                      <select
                        aria-label="Variants"
                        onChange={(event) => handleOptionChange(index, event)}
                      >
                        {values.map((value) => (
                          <option value={value} key={`${name}-${value}`}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ))}
            </fieldset>
            <div className="add-to-cart_style">
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 3))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="3"
              />
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>

            {quantity === 3 && (
              <p className="subline">
                Nous limitons à 3 produits par commande 🥰
              </p>
            )}
            <div className="countdown">
              <p>Frais de port : 1,20€</p>
              <Countdown date="2022-01-01T00:00:00" renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
      <h2
        className="title text-center uppercase italic"
        id="versions-digitales"
      >
        Versions digitales
      </h2>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      totalInventory
      productSlug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        altText
        id
        fullSize: gatsbyImageData
        thumbnail: gatsbyImageData(width: 250, placeholder: BLURRED)
        squareThumbnail: gatsbyImageData(
          aspectRatio: 1
          width: 200
          placeholder: BLURRED
          layout: CONSTRAINED
        )
        cover: gatsbyImageData(placeholder: BLURRED)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
  }
`
