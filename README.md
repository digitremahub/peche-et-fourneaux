# Gino Fish & Cook

Site vitrine + blog : techniques de pêche et recettes de cuisinier, espèce par espèce, plus une page de vente pour le guide numérique *"Du poisson pêché à l'assiette"*.

Construit avec [Astro](https://astro.build) — génère des pages statiques (HTML), donc rapide à charger, gratuit à héberger, et sans base de données à gérer.

## 🚀 Mettre le site en ligne (une seule fois)

1. Crée un compte gratuit sur [vercel.com](https://vercel.com) avec ton compte GitHub.
2. Clique sur **"Add New… → Project"**, choisis ce dépôt GitHub.
3. Vercel détecte automatiquement Astro — laisse les réglages par défaut, clique sur **Deploy**.
4. Ton site est en ligne en 1 à 2 minutes, sur une adresse du type `ginofishandcook.vercel.app`.

Après ça, **chaque fois que tu modifies un fichier et que tu le pousses sur GitHub (`git push`), le site se met à jour automatiquement.** Tu n'as jamais besoin de refaire cette étape.

(Netlify fonctionne aussi de la même façon si tu préfères.)

## ✍️ Ajouter un nouvel article de blog

C'est l'opération que tu feras le plus souvent, et elle ne demande aucune compétence en code :

1. Va dans le dossier `src/pages/blog/`.
2. Duplique le fichier **`_MODELE-ARTICLE.md`** (clic droit → dupliquer, ou copier-coller).
3. Renomme ta copie avec l'adresse que tu veux pour la page, par exemple `maquereau-peche-a-la-plume.md`.
   - Pas d'espaces, pas d'accents, uniquement des minuscules et des tirets.
   - Le nom du fichier devient l'adresse de la page : `/blog/maquereau-peche-a-la-plume/`.
4. Ouvre le fichier et remplis les champs entre les `---` du haut (titre, date, espèce, technique, recette...).
5. Écris ton article en dessous, en Markdown (voir l'aide-mémoire plus bas).
6. Enregistre, commit, push. Le site republie automatiquement l'article en 1-2 minutes.

Tu peux faire tout ça **directement depuis le site web de GitHub** (bouton "Add file" ou l'icône crayon sur un fichier existant), sans installer quoi que ce soit sur ton ordinateur si tu préfères.

Le fichier `_MODELE-ARTICLE.md` (avec le tiret bas `_`) n'apparaît jamais sur le site public : c'est un modèle à copier, pas une vraie page.

### Aide-mémoire Markdown

```
## Titre de section
### Sous-titre

Texte normal en paragraphe.

- Liste à puces
- Deuxième élément

1. Liste numérotée
2. Deuxième étape

**Texte en gras**   *Texte en italique*

> Une citation ou un encart "astuce"
```

## 🧰 Ajouter le matériel affilié (kit par poisson)

Chaque article peut afficher un encadré "matériel conseillé" avec des liens d'affiliation, entre la
technique de pêche et la recette. Pour l'activer sur un article :

1. Inscris-toi aux programmes d'affiliation pertinents (gratuits) :
   - [Pêcheur.com via Kwanko](https://affi.io/m/pecheur-com) — le plus gros catalogue pêche en France.
   - [Décathlon / Caperlan via Rakuten Advertising](https://www.decathlon.fr/lp/i/affiliation) — jusqu'à 15% de commission.
   - [Amazon Partenaires](https://partenaires.amazon.fr/) — en solution de repli si un produit n'est pas chez les deux premiers.
2. Une fois accepté, génère ton lien d'affilié pour chaque produit que tu recommandes.
3. Dans le fichier de l'article, remplis le bloc `materiel:` (voir `_MODELE-ARTICLE.md`) avec 3-4 produits
   et colle ton lien dans le champ `link:`.
4. Enregistre, commit, push.

L'encadré affiche automatiquement la mention "Liens affiliés" — c'est une obligation légale en France, ne
la retire pas. Pas besoin de matériel sur *chaque* article dès le départ : ajoute le bloc au fur et à
mesure que tu es accepté sur les programmes d'affiliation.

## 🛒 Brancher le bouton d'achat de l'ebook (Gumroad / Payhip)

1. Crée ton produit sur [Gumroad](https://gumroad.com) ou [Payhip](https://payhip.com) (gratuit pour démarrer, ils prennent une commission sur les ventes).
2. Récupère le lien "Acheter" de ton produit.
3. Ouvre `src/pages/guide/index.astro`, tout en haut du fichier, remplace :
   ```js
   const BUY_LINK = "#";
   ```
   par ton lien, par exemple :
   ```js
   const BUY_LINK = "https://gumroad.com/l/ton-guide";
   ```
4. Enregistre, commit, push.

Tous les boutons "Je veux le guide" de la page utilisent automatiquement ce même lien.

## 🎨 Changer les couleurs

Toutes les couleurs du site sont regroupées en haut du fichier `src/styles/global.css` (section `:root`). Change un code couleur (ex: `--color-wood-dark: #6d4626;`) et toutes les pages du site sont mises à jour.

## ⚖️ Avant de vendre en ligne

La page `/mentions-legales/` contient un modèle à compléter (statut, SIRET, etc.) — c'est une obligation légale en France pour un site marchand, même pour un produit numérique. Pense aussi à ajouter des CGV (conditions générales de vente) : Gumroad et Payhip proposent souvent un modèle prêt à l'emploi dans leurs réglages.

## 💻 Travailler en local (optionnel)

Si tu veux prévisualiser le site sur ton ordinateur avant de le mettre en ligne :

```bash
npm install
npm run dev
```

Puis ouvre `http://localhost:4321` dans ton navigateur. Pas obligatoire : tu peux aussi tout faire depuis le site web de GitHub + Vercel, sans rien installer.

## 📁 Structure du projet

```
src/
  components/     → petits blocs réutilisables (en-tête, pied de page, illustrations SVG)
  layouts/        → gabarits de page (structure commune)
  pages/
    index.astro       → page d'accueil
    guide/index.astro → page de vente de l'ebook
    blog/
      index.astro          → liste des articles
      _MODELE-ARTICLE.md   → modèle à copier pour un nouvel article
      *.md                 → les articles eux-mêmes
  styles/global.css → couleurs, polices, styles de tout le site
public/
  favicon.svg     → icône du site
```

## Prochaines étapes suggérées

- Écrire 4-5 articles de plus pour lancer le blog avec un peu de contenu.
- Finaliser le guide numérique (PDF) et le mettre en vente sur Gumroad/Payhip.
- Compléter les mentions légales et ajouter des CGV avant la première vente.
- S'inscrire aux programmes d'affiliation (Pêcheur.com, Décathlon/Caperlan, Amazon) et remplir le bloc
  `materiel:` des articles au fur et à mesure des acceptations.
