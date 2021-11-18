import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BsSpotify as SpotifyIcon } from "react-icons/bs"
import { FaDeezer as DeezerIcon } from "react-icons/fa"
import { AiFillApple as AppleIcon } from "react-icons/ai"
import { AiFillAmazonSquare as AmazonIcon } from "react-icons/ai"
import { SiTidal as TidalIcon } from "react-icons/si"
import { SiYoutubemusic as YoutubeMusicIcon } from "react-icons/si"
import { AiFillYoutube as YoutubeIcon } from "react-icons/ai"
import { AiFillHeart as HeartIcon } from "react-icons/ai"

import "./stream.scss"

export default function StreamPage() {
  return (
    <Layout>
      <Seo title="Stream" />
      <h1 className="title text-center uppercase italic">Stream</h1>
      <div className="container">
        <StaticImage
          src="../images/cover_front.png"
          alt=""
          className="front-cover container"
        />
      </div>
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
    </Layout>
  )
}
