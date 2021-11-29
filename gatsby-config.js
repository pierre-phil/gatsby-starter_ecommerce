require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "OZENKAWA & SACHA • Stream & achat en ligne",
    siteTitleDefault: "OZENKAWA & SACHA",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "fr",
    siteDescription:
      "L'album unique, né de la collaboration entre OZENKAWA et SACHA est disponible ! Écoutez et achetez une version physique directement en ligne.",
    siteImage: "/default-og-image.jpg",
    twitter: "@OZENKAWA",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-sass`,
  ].filter(Boolean),
}
