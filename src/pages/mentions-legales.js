import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"

import { Seo } from "../components/seo"

export default function MentionsLegales() {
  const siteUrl = "www.yuli.stream"
  return (
    <Layout>
      <Seo title="Mentions légales" />
      <section className="container">
        <h1 className="title text-center uppercase italic">Mentions légales</h1>
        <div className="shorten-text center-block justify">
          {/* Mentions légales
          -------------------------------------------------- */}
          <div id="introduction">
            {/* Introduction */}
            <p>
              En vous connectant sur ce site, vous acceptez sans réserves les
              présentes modalités. Aussi, conformément à l’article n°6 de la Loi
              n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie
              numérique, les responsables du présent site internet{" "}
              <i>{siteUrl}</i> sont :
            </p>
          </div>
          <div id="editeur">
            {/* Éditeur du site */}
            <h2 className="title text-center uppercase italic">
              Éditeur du site
            </h2>
            <div>
              <ul>
                <li>
                  Éditeur<p>Pierre Philippon</p>
                </li>
                <li>
                  Développeur<p>Pierre Philippon</p>
                </li>
                <li>
                  Responsable de la publication<p>Pierre Philippon</p>
                </li>
                <li>
                  Forme juridique<p>Entreprise Individuelle</p>
                </li>
                <li>
                  Siège social<p>Adresse fournie sur demande</p>
                </li>
                <li>
                  SIRET<p>80754872200014</p>
                </li>
                <li>
                  Email de contact
                  <p>
                    <a
                      href="mailto:pierre@urule.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link_style"
                    >
                      pierre@urule.fr
                    </a>
                  </p>
                </li>
                <li>
                  Téléphone
                  <p>
                    <a
                      href="tel:33637102262"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link_style"
                    >
                      +33 6 37 10 22 62
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div id="hebergeur">
            {/* Hébergeur du site */}
            <h2 className="title text-center uppercase italic">
              Hébergeur du site
            </h2>
            <div>
              <ul>
                <li>
                  Hébergeur<p>Netlify Inc.</p>
                </li>
                <li>
                  Siège social
                  <p>
                    2325 3rd Street, Suite 215, San Francisco, California 94107,
                    États-Unis
                  </p>
                </li>
                <li>
                  Site web
                  <p>
                    <a
                      href="wwww.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link_style"
                    >
                      www.netlify.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div id="conditions">
            {/* Conditions d'utilisation */}
            <h2 className="title text-center uppercase italic">
              Conditions d’utilisation
            </h2>
            <p>
              Ce site <i>{siteUrl}</i> est proposé en différents langages web.
              Pour un meilleur confort d'utilisation et un graphisme plus
              agréable, nous vous recommandons de recourir à des navigateurs
              modernes comme Google Chrome, Firefox ou Safari.
            </p>
            <p>
              Les mentions légales ont été générées sur le site{" "}
              <a
                title="générateur de mentions légales pour site internet gratuit"
                href="http://www.generateur-de-mentions-legales.com"
                rel="noopener noreferrer"
                target="_blank"
                className="legal-link_style"
              >
                Générateur de mentions légales
              </a>
              , offert par{" "}
              <a
                title="imprimerie paris, imprimeur paris"
                href="http://welye.com"
                rel="noopener noreferrer"
                target="_blank"
                className="legal-link_style"
              >
                Welye
              </a>
              .
            </p>
            <p>
              L'<b>éditeur</b> du site met en oeuvre tous les moyens dont il
              dispose pour assurer une information fiable et une mise à jour
              rapide de ses sites internet. Toutefois, des erreurs ou omissions
              peuvent survenir. L'internaute devra donc s'assurer de
              l'exactitude des informations auprès de l'<b>éditeur</b> du site,
              et signaler toutes modifications qu'il jugerait utile. L'
              <b>éditeur</b> du site n'est en aucun cas responsable de
              l'utilisation faite de ces informations, et de tout préjudice
              direct ou indirect pouvant en découler.
            </p>
          </div>
          <div id="cookies">
            {/* Cookies */}
            <h2 className="title text-center uppercase italic">Cookies</h2>
            <p>
              Le site <i>{siteUrl}</i> peut être amené à vous demander
              l’acceptation de cookies pour des besoins de statistiques et
              d'affichage. Un cookie est une information déposée sur votre
              disque dur par le serveur du site que vous visitez. Il contient
              plusieurs données qui sont stockées sur votre ordinateur dans un
              simple fichier texte auquel un serveur accède pour lire et
              enregistrer des informations.
            </p>
            <p>
              Nous offrons aux utilisateurs de notre site <i>{siteUrl}</i> la
              possibilité d'accepter ou de refuser l'utilisation de cookies lors
              de leur première visite sur le site via une bannière de
              consentement affichée en bas de chaque page. Ce choix est
              sauvegardé pour une durée de 90 jours. Certaines parties de ce
              site ne peuvent être fonctionnelles sans l’acceptation de cookies.
              Vous pouvez en savoir plus sur le traitement des données
              collectées par ce site dans notre{" "}
              <Link
                to="/politique-de-confidentialite/"
                className="legal-link_style"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div id="liens">
            {/* Liens hypertexte */}
            <h2 className="title text-center uppercase italic">
              Liens hypertexte
            </h2>
            <p>
              Les sites internet peuvent offrir des liens vers d’autres sites
              internet ou d’autres ressources disponibles sur Internet. L'
              <b>éditeur</b> du site ne dispose d'aucun moyen pour contrôler les
              sites en connexion avec ses sites internet. L'<b>éditeur</b> ne
              répond pas de la disponibilité de tels sites et sources externes,
              ni ne la garantit. Il ne peut être tenu pour responsable de tout
              dommage, de quelque nature que ce soit, résultant du contenu de
              ces sites ou sources externes, et notamment des informations,
              produits ou services qu’ils proposent, ou de tout usage qui peut
              être fait de ces éléments. Les risques liés à cette utilisation
              incombent pleinement à l'internaute, qui doit se conformer à leurs
              conditions d'utilisation.
            </p>
            <p>
              Les utilisateurs, les abonnés et les visiteurs des sites internet
              ne peuvent mettre en place un hyperlien en direction de ce site
              sans l'autorisation expresse et préalable de l'<b>éditeur</b>.
            </p>
            <p>
              Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre
              en place un hyperlien en direction d’un des sites internet de l'
              <b>éditeur</b>, il lui appartiendra d'adresser un email afin de
              formuler sa demande. L'<b>éditeur</b> se réserve le droit
              d’accepter ou de refuser un hyperlien sans avoir à en justifier sa
              décision.
            </p>
          </div>
          <div id="services">
            {/* Services fournis */}
            <h2 className="title text-center uppercase italic">
              Services fournis
            </h2>
            <p>
              L'ensemble des activités de la société et ses informations sont
              présentés sur le site <i>{siteUrl}</i> et sur la page des{" "}
              <Link to="/conditions/" className="legal-link_style">
                conditions générales de vente
              </Link>
              .
            </p>
            <p>
              L'<b>éditeur</b> s’efforce de fournir sur le site <i>{siteUrl}</i>{" "}
              des informations aussi précises que possible. Les renseignements
              figurant sur le site <i>{siteUrl}</i> ne sont pas exhaustifs et
              les photos non contractuelles. Ils sont donnés sous réserve de
              modifications ayant été apportées depuis leur mise en ligne. Par
              ailleurs, toutes les informations indiquées sur le site{" "}
              <i>{siteUrl}</i> sont données à titre indicatif, et sont
              susceptibles de changer ou d’évoluer sans préavis.
            </p>
          </div>
          <div id="donnees">
            {/* Données */}
            <h2 className="title text-center uppercase italic">
              Limitation contractuelle sur les données
            </h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que
              possible et le site est mis à jour à différentes périodes de
              l’année, mais peut toutefois contenir des inexactitudes ou des
              omissions. Si vous constatez une lacune, erreur ou ce qui parait
              être un dysfonctionnement, merci de bien vouloir le signaler par
              email à l’adresse{" "}
              <a
                href="mailto:pierre@urule.fr"
                rel="noopener noreferrer"
                className="legal-link_style"
              >
                pierre@urule.fr
              </a>
              , en décrivant le problème de la manière la plus précise possible
              (page posant problème, type d’ordinateur et de navigateur utilisé,
              …).
            </p>
            <p>
              Tout contenu téléchargé se fait aux risques et périls de
              l'utilisateur et sous sa seule responsabilité. En conséquence, l'
              <b>éditeur</b> ne saurait être tenu responsable d'un quelconque
              dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque
              perte de données consécutives au téléchargement. De plus,
              l’utilisateur du site s’engage à accéder au site en utilisant un
              matériel récent, ne contenant pas de virus et avec un navigateur
              de dernière génération mis-à-jour.
            </p>
          </div>
          <div id="propriete-intellectuelle">
            {/* Propriété intellectuelle */}
            <h2 className="title text-center uppercase italic">
              Propriété intellectuelle
            </h2>
            <p>
              Tout le contenu présent sur le site <i>{siteUrl}</i>, incluant, de
              façon non limitative, les graphismes, images, textes, vidéos,
              animations, sons, logos, gifs et icônes ainsi que leur mise en
              forme sont la propriété exclusive de la société à l'exception des
              marques, logos ou contenus appartenant à d'autres sociétés
              partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation,
              retransmission ou publication, même partielle, de ces différents
              éléments est strictement interdite sans l'accord exprès par écrit
              de l'<b>éditeur</b>. Cette représentation ou reproduction, par
              quelque procédé que ce soit, constitue une contrefaçon sanctionnée
              par les articles L.335-2 et suivants du Code de la propriété
              intellectuelle. Le non-respect de cette interdiction constitue une
              contrefaçon pouvant engager la responsabilité civile et pénale du
              contrefacteur. En outre, les propriétaires des contenus copiés
              pourraient intenter une action en justice à votre encontre.
            </p>
          </div>
          <div id="credits-images">
            {/* Crédits des images */}
            <h2 className="title text-center uppercase italic">
              Crédits des images
            </h2>
            <p>
              Les images de d'arrière plan des bannières de haut de page sont
              gracieusement mises à disposition sur{" "}
              <a
                href="https://www.pexels.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="legal-link_style"
              >
                Pexels
              </a>{" "}
              par les créateurs suivants :
            </p>
            <ul>
              <li className="text-gray">
                Page d'accueil :{" "}
                <a
                  href="https://www.instagram.com/martinpechy/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="legal-link_style"
                >
                  Martin Péchy
                </a>
              </li>
              <li className="text-gray">
                Web :{" "}
                <a
                  href="https://instagram.com/nickoloui/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="legal-link_style"
                >
                  Nick Demou
                </a>
              </li>
              <li className="text-gray">
                Vidéo :{" "}
                <a
                  href="https://www.instagram.com/kalvisuals/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="legal-link_style"
                >
                  Kyle Loftus
                </a>
              </li>
              <li className="text-gray">
                Photo :{" "}
                <a
                  href="https://www.instagram.com/marcelochagasfotografia/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="legal-link_style"
                >
                  Marcelo Chagas
                </a>
              </li>
              <li className="text-gray">
                Stratégie :{" "}
                <a
                  href="https://www.instagram.com/nothingahead/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="legal-link_style"
                >
                  Nothing Ahead
                </a>
              </li>
              <li className="text-gray">
                Blog :{" "}
                <a
                  href="https://www.pexels.com/@anniroenkae"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="legal-link_style"
                >
                  Anni Roenkae
                </a>
              </li>
            </ul>
          </div>
          <div id="declaration-cnil">
            {/* Déclaration à la CNIL */}
            <h2 className="title text-center uppercase italic">
              Déclaration à la CNIL
            </h2>
            <p>
              Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi
              2004-801 du 6 août 2004 relative à la protection des personnes
              physiques à l'égard des traitements de données à caractère
              personnel) relative à l'informatique, aux fichiers et aux
              libertés, ce site n'a pas fait l'objet d'une déclaration auprès de
              la Commission nationale de l'informatique et des libertés (
              <a
                href="http://www.cnil.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-link_style"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </div>
          <div id="litiges">
            {/* Litiges */}
            <h2 className="title text-center uppercase italic">Litiges</h2>
            <p>
              Les présentes conditions du site <i>{siteUrl}</i> sont régies par
              les lois françaises et toute contestation ou litiges qui
              pourraient naître de l'interprétation ou de l'exécution de
              celles-ci seront de la compétence exclusive des tribunaux dont
              dépend le siège social de la société. La langue de référence, pour
              le règlement de contentieux éventuels, est le français.
            </p>
            <h2 className="title text-center uppercase italic">
              Données personnelles
            </h2>
            <p>
              De manière générale, vous n’êtes pas tenu de nous communiquer vos
              données personnelles lorsque vous visitez notre site Internet{" "}
              <i>{siteUrl}</i>.
            </p>
            <p>
              Cependant, ce principe comporte certaines exceptions. En effet,
              pour certains services proposés par notre site, vous pouvez être
              amené à nous communiquer certaines données telles que : votre nom,
              votre adresse électronique et votre numéro de téléphone. Tel est
              le cas lorsque vous remplissez le formulaire qui vous est proposé
              en ligne, dans la rubrique « contact ». Dans tous les cas, vous
              pouvez refuser de fournir vos données personnelles. Dans ce cas,
              vous ne pourrez pas utiliser les services du site, notamment celui
              de solliciter des renseignements sur notre société, ou de recevoir
              les lettres d’information.
            </p>
            <p>
              Enfin, nous pouvons collecter de manière automatique certaines
              informations vous concernant lors d’une simple navigation sur
              notre site Internet, notamment : des informations concernant
              l’utilisation de notre site, comme les zones que vous visitez et
              les services auxquels vous accédez, votre adresse IP, le type de
              votre navigateur, vos temps d'accès. De telles informations sont
              utilisées exclusivement à des fins de statistiques internes, de
              manière à améliorer la qualité des services qui vous sont
              proposés. Les bases de données sont protégées par les dispositions
              de la loi du 1er juillet 1998 transposant la directive 96/9 du 11
              mars 1996 relative à la protection juridique des bases de données.
              Vous pouvez en savoir plus sur le traitement des données
              collectées par ce site dans notre{" "}
              <Link
                to="/politique-de-confidentialite/"
                className="legal-link_style"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
          {/* End of Mentions légales
          -------------------------------------------------- */}
          <Link to="/" className="CTA">
            Accueil
          </Link>
        </div>
      </section>
    </Layout>
  )
}
