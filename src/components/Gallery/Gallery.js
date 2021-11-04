import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import "./gallery.scss"

// ~ docs : https://github.com/frontend-collective/react-image-lightbox

export default function Gallery({ galleryImages }) {
  // ~ incoming data
  //   console.log("galleryImages :", galleryImages)

  // ~ show only 9 first images
  const [usePartialGallery, setUsePartialGallery] = useState(true)

  function partialGallery(galleryImages) {
    if (usePartialGallery === true) {
      galleryImages = galleryImages.slice(0, 9)
      // console.log("galleryImages :", galleryImages)
      return galleryImages
    } else {
      return galleryImages
    }
  }

  // ~ isOpen
  const [isOpen, setIsOpen] = useState(false)

  // ~ indexes
  const [index, setIndex] = useState(0)
  const prevIndex = (index + galleryImages.length - 1) % galleryImages.length
  const nextIndex = (index + galleryImages.length + 1) % galleryImages.length

  // ~ full image urls
  // ce sont les url utilisés par Lightbox pour afficher les images en plein écran
  const mainSrc = galleryImages[index].fullSize.images.fallback.src
  const nextSrc = galleryImages[nextIndex].fullSize.images.fallback.src
  const prevSrc = galleryImages[prevIndex].fullSize.images.fallback.src

  // ~ thumbnails urls
  // ce sont les urls utilisés par Lightbox pour afficher un thumbnail pendant que l'image se charge
  const mainSrcThumbnail = galleryImages[index].thumbnail.images.fallback.src
  const nextSrcThumbnail =
    galleryImages[nextIndex].thumbnail.images.fallback.src
  const prevSrcThumbnail =
    galleryImages[prevIndex].thumbnail.images.fallback.src

  // ~ image counter
  // affiche la position de l'image / le nombre total d'images dans la barre supérieure
  const imageCounter = `${index + 1} / ${galleryImages.length}`

  return (
    <div className="gallery-container">
      {/* Gallery cover */}
      <div className="gallery-cover_container">
        <GatsbyImage
          image={galleryImages[index].cover}
          alt={galleryImages[index].altText}
          className="gallery-cover"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid">
        {partialGallery(galleryImages).map((el, index) => {
          return (
            <div className="gallery-grid-image_container" key={el.id}>
              <button
                onClick={() => {
                  setIsOpen(true)
                  setIndex(galleryImages.indexOf(el))
                }}
              >
                <GatsbyImage
                  image={el.squareThumbnail}
                  alt={el.altText}
                  title={el.altText}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="gallery-grid-image"
                />
              </button>
            </div>
          )
        })}
      </div>
      {/* Gallery expand button */}
      {galleryImages.length > 9 && (
        <div className="expand-button_container">
          <div className="expand-button_decoration">
            <hr />
          </div>
          <button
            onClick={() => setUsePartialGallery(!usePartialGallery)}
            className="expand-button"
          >
            {usePartialGallery
              ? `See more (${galleryImages.length - 9}) ↓`
              : `Hide ↑`}
          </button>
          <div className="expand-button_decoration">
            <hr />
          </div>
        </div>
      )}
      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={mainSrc || ""}
          nextSrc={nextSrc || ""}
          prevSrc={prevSrc || ""}
          mainSrcThumbnail={mainSrcThumbnail || ""}
          nextSrcThumbnail={nextSrcThumbnail || ""}
          prevSrcThumbnail={prevSrcThumbnail || ""}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={galleryImages[index].altText}
          imageCaption={galleryImages[index].altText}
          nextLabel="Image suivante"
          prevLabel="Image précédente"
          zoomInLabel="Zoomer"
          zoomOutLabel="Dézoomer"
          closeLabel="Fermer"
          imageLoadErrorMessage="L'image sera disponible prochainement."
          toolbarButtons={[imageCounter]}
        />
      )}
    </div>
  )
}
