import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillPlayFill as PlayIcon } from "react-icons/bs"

import "./index.scss"

export default function IndexPage() {
  return (
    <Layout>
      <section className="container">
        <div className="story_text justify center-block shorten-text">
          <h2 className="title text-center uppercase italic">À propos</h2>
          <p>
            L'album que vous vous apprêtez à découvrir est le fruit d'une
            collaboration entre trois artistes :{" "}
            <a
              href="https://www.instagram.com/ozenkawa/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @OZENKAWA
            </a>{" "}
            (compositeur),{" "}
            <a
              href="https://www.instagram.com/semsacha/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @SACHA
            </a>{" "}
            (chanteur),{" "}
            <a
              href="https://www.instagram.com/camille_philippon_art/"
              rel="noopener noreferrer"
              target="_blank"
              className="insta-link"
            >
              @camille_philippon_art
            </a>{" "}
            (peintre et violoniste).
          </p>
          <StaticImage
            src="../images/yuli2.png"
            alt="Portrait picture of Sacha, Camille Philippon and Ozenkawa"
          />
          <p>
            10 morceaux à l'ambiance onirique, aux sonorités rythmées et
            aériennes, mêlant une écriture poétique à une construction musicale
            audacieuse, émaillés de phrases de violon et de riffs de guitares et
            liés entre eux par d'omniprésentes nappes de synthétiseurs
            analogiques.
          </p>
          <StaticImage
            src="../images/yuli32.png"
            alt="Ozenkawa, Camille Philippon and Sacha singing around a mic in the studio"
          />
          <p>
            Sortis tout d'abord sous forme d'un EP 6 titres, les morceaux
            enregistrés au fil des années dans un studio des Yvelines revoient
            le jour en décembre 2021 sous la forme d'un album 10 titres avec 3
            inédits et un remix, ainsi qu'une édition physique limitée à
            découvrir sur ce site.
          </p>
          <StaticImage
            src="../images/grand_rivage.jpg"
            alt="Camille Philippon, Sacha and Ozenkawa on stage"
          />
          <p>
            Une invitation au voyage pour un album qui, par son processus de
            création et son univers, apparaît comme une parenthèse joyeuse et
            spontanée dans le paysage musical.
          </p>
          <div className="text-center">
            <Link to="/stream/" className="CTA">
              <div className="flex flex-center">
                <PlayIcon /> Écouter
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
