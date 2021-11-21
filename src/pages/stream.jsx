import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import { BsSpotify as SpotifyIcon } from "react-icons/bs"
import { FaDeezer as DeezerIcon } from "react-icons/fa"
import { AiFillApple as AppleIcon } from "react-icons/ai"
import { AiFillAmazonSquare as AmazonIcon } from "react-icons/ai"
import { SiTidal as TidalIcon } from "react-icons/si"
import { SiYoutubemusic as YoutubeMusicIcon } from "react-icons/si"
import { AiFillYoutube as YoutubeIcon } from "react-icons/ai"
import { AiFillHeart as HeartIcon } from "react-icons/ai"

import "./stream.scss"

export default function StreamPage({ data }) {
  const images = data.allFile.nodes

  const imagesTitles = ["Yuli front cover", "Yuli back cover"]

  // ~ isOpen
  const [isOpen, setIsOpen] = React.useState(false)

  // ~ indexes
  const [index, setIndex] = React.useState(0)
  const prevIndex = (index + images.length - 1) % images.length
  const nextIndex = (index + images.length + 1) % images.length

  // ~ full image urls
  // ce sont les url utilisés par Lightbox pour afficher les images en plein écran
  const mainSrc = images[index].childImageSharp.fullSize.images.fallback.src
  const nextSrc = images[nextIndex].childImageSharp.fullSize.images.fallback.src
  const prevSrc = images[prevIndex].childImageSharp.fullSize.images.fallback.src

  // ~ thumbnails urls
  // ce sont les urls utilisés par Lightbox pour afficher un thumbnail pendant que l'image se charge
  const mainSrcThumbnail =
    images[index].childImageSharp.thumbnail.images.fallback.src
  const nextSrcThumbnail =
    images[nextIndex].childImageSharp.thumbnail.images.fallback.src
  const prevSrcThumbnail =
    images[prevIndex].childImageSharp.thumbnail.images.fallback.src

  // ~ image counter
  // affiche la position de l'image / le nombre total d'images dans la barre supérieure
  const imageCounter = `${index + 1} / ${images.length}`

  return (
    <Layout>
      <Seo title="Stream" />
      <h1 className="title text-center uppercase italic">Stream</h1>
      <div className="container">
        <StaticImage
          src="../images/cover_front.png"
          alt=""
          className="front-cover container"
          onClick={() => setIsOpen(true)}
        />
      </div>
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
          imageTitle={imagesTitles[index]}
          // imageCaption={imagesCaptions[index]}
          nextLabel="Image suivante"
          prevLabel="Image précédente"
          zoomInLabel="Zoomer"
          zoomOutLabel="Dézoomer"
          closeLabel="Fermer"
          imageLoadErrorMessage="L'image sera disponible prochainement."
          toolbarButtons={[imageCounter]}
        />
      )}

      <div className="container streaming-links_container">
        <div className="streaming-link">
          <a
            href="https://www.spotify.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SpotifyIcon className="streaming-icon" /> Spotify
          </a>
        </div>
        <div className="streaming-link">
          <a
            href="https://www.deezer.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <DeezerIcon className="streaming-icon" /> Deezer
          </a>
        </div>
        <div className="streaming-link">
          <a
            href="https://www.apple.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AppleIcon className="streaming-icon" /> Apple Music
          </a>
        </div>
        <div className="streaming-link">
          <a
            href="https://www.amazon.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AmazonIcon className="streaming-icon" /> Amazon Music
          </a>
        </div>
        <div className="streaming-link">
          <a
            href="https://www.tidal.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TidalIcon className="streaming-icon" /> Tidal
          </a>
        </div>
        <div className="streaming-link">
          <a
            href="https://www.youtube.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <YoutubeMusicIcon className="streaming-icon" /> YouTube Music
          </a>
        </div>
        <div className="streaming-link">
          <a
            href="https://www.youtube.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <YoutubeIcon className="streaming-icon" /> YouTube
          </a>
        </div>
        <div className="streaming-link">
          <Link to="/products/cle-usb-yuli#versions-digitales">
            <HeartIcon className="streaming-icon" />
            Téléchargement
          </Link>
        </div>
      </div>
      <div className="album-credits container">
        <ul>
          <li>
            <p>Music</p>
            <a
              href="https://www.instagram.com/ozenkawa/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @OZENKAWA
            </a>
          </li>
          <li>
            <p>Lyrics</p>
            <a
              href="https://www.instagram.com/semsacha/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @SACHA
            </a>
          </li>
          <li>
            <p>Guitars, keyboards & drums</p>
            <a
              href="https://www.instagram.com/ozenkawa/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @OZENKAWA
            </a>
          </li>
          <li>
            <p>Vocals</p>
            <a
              href="https://www.instagram.com/semsacha/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @SACHA
            </a>
          </li>
          <li>
            <p>Violin</p>
            <a
              href="https://www.instagram.com/camille_philippon_art/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @camille_philippon_art
            </a>
          </li>
          <li>
            <p>Recording, mix & mastering</p>
            <a
              href="https://www.instagram.com/bbmaj7/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @Jean-Étienne Loose
            </a>{" "}
            & Geoffroy Dauptain at{" "}
            <a
              href="https://www.studiotonehouse.fr/home"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @Tone House Studio
            </a>
          </li>
          <li>
            <p>Picture</p>
            <a
              href="https://www.instagram.com/camille_philippon_art/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @camille_philippon_art
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query albumCoversQuery {
    allFile {
      nodes {
        name
        childImageSharp {
          fullSize: gatsbyImageData
          thumbnail: gatsbyImageData(width: 250, placeholder: BLURRED)
        }
      }
    }
  }
`
