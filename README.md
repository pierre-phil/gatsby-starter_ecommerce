**Ce repo provient initialement de https://github.com/gatsbyjs/gatsby-starter-shopify**

**Cette branche présente les produits triés selon leur `type`.**

# Observation sur la prop `pageContext` passée lors de la création de pages

Je ne comprenais pas d'où venait la prop `pageContext: { title }` dans le composant `ProductTypeIndex`. En fait elle est passée automatiquement à ce composant vu qu'il se trouve dans le dossier `{ShopifyProduct.title}`, qui est une route créée implicitement par l'API `file system`. La valeur de `ShopifyProduct.title` est passée à `pageContext` automatiquement.

![img](../home/pierre/Documents/projets/ozenkawa_sacha_boutique/observation_pageContext_images/1.png)

Ainsi, le fait que la route créée soit basée sur la valeur de `title`, cette valeur est passée automatiquement au composant enfant de cette route, à savoir ici `ProductTypeIndex` `({ShopifyProduct.title}/index.jsx)`. On parle bien de la **valeur** de `title` : ce n'est pas juste "title" qui est passé au composant mais bien sa valeur, dans le cas présent `Clé USB Yuli` ou `Affiche Yuli`

![img](../home/pierre/Documents/projets/ozenkawa_sacha_boutique/observation_pageContext_images/2.png)

On voit bien que `id` et `title` sont les deux champs automatiquement passés aux composants enfants de la page créée depuis le champ GraphQL, comme indiqué dans la [doc de Gatsby](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)

![img](../home/pierre/Documents/projets/ozenkawa_sacha_boutique/observation_pageContext_images/3.png)

On a accès à cette variable directement dans le code source

![img](../home/pierre/Documents/projets/ozenkawa_sacha_boutique/observation_pageContext_images/4.png)

Et on peut l'utiliser pour trier les produits dans la query GraphQL

![img](../home/pierre/Documents/projets/ozenkawa_sacha_boutique/observation_pageContext_images/5.png)

# Comment modifier le tri des produits sur le site

- [1] renommer le dossier `src/pages/products/{{ShopifyProduct.$VALEUR}`. Ce dossier correspond à la route qui renvoie vers le composant `ProductTypeIndex` (`index.js`) qui répertorie les produits selon leur type (le type étant la variable qu'on choisit d'utiliser ici et mise à disposisition par GraphQL).

- [2] modifier dans `product-card.jsx` le champ `slug: gatsbyPath($VALEUR)` qui correspond au lien qui englobe toute la fiche produit et qui envoie vers le composant `Product` `({ShopifyProduct.handle})`. Désormais, le clic sur un produit renverra vers la route nouvellement créée et donc vers le fichier `{ShopifyProduct.handle}`.

- [3] dans le fichier `/src/pages/products/{ShopifyProduct.$VALEUR}/index.jsx`, modifier la variable passée à la prop `pageContext` : en effet, on reçoit désormais une nouvelle variable fournie grâce au nom du fichier qu'on a défini au point 1 (voir premier paragraphe de ce `readme`). On ne peut utiliser que cette variable qui est automatiquement passée à `pageContext` par l'API `file system`.

- [4] [5] utiliser la variable `pageContext` nouvellement disponible pour filtrer les résultats de la query `GraphQL`.
