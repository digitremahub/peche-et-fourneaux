---
# ============================================================================
# MODÈLE D'ARTICLE — ne pas supprimer ce fichier.
#
# Comment publier un nouvel article :
# 1. Fais une copie de ce fichier dans le même dossier (src/pages/blog/).
# 2. Renomme la copie avec l'adresse de la page, en minuscules et tirets,
#    par exemple : maquereau-peche-a-la-plume.md
#    (le nom du fichier = l'adresse de la page, ex : /blog/maquereau-peche-a-la-plume/)
# 3. Remplis les champs ci-dessous (entre les ---).
# 4. Écris ton article en Markdown en dessous de la ligne --- finale.
# 5. Enregistre, commit, push : le site se republie automatiquement.
#
# Les blocs "materiel" et "recipe" sont optionnels : si un article n'a pas
# de matériel affilié ou pas de recette, supprime le bloc concerné en entier.
#
# Pour le bloc "materiel" (kit matériel affilié) :
# - "link" : ton lien d'affiliation (Pêcheur.com via Kwanko, Décathlon via
#   Rakuten Advertising, Amazon Partenaires...). Remplace "#" par ce lien.
# - "partenaire" est optionnel, juste affiché en petit à côté du produit.
# - Pas besoin de mettre un produit dans chaque catégorie : 3-4 suffisent.
# ============================================================================
layout: ../../layouts/BlogPost.astro
title: "Titre de l'article (ex: Le maquereau à la plume : technique et recette grillée)"
description: "Une phrase pour les moteurs de recherche et les réseaux sociaux."
date: 2026-01-01
species: "Nom de l'espèce (ex: Maquereau)"
technique: "Nom de la technique (ex: Pêche à la plume)"
# Zones où pêcher cette espèce, affichées automatiquement sur la page /carte/.
# Choisis parmi : manche, atlantique-nord, atlantique-sud, mediterranee, eaux-douces
# (une ou plusieurs zones, ou supprime la ligne si tu ne sais pas encore).
zones: ["manche", "atlantique-nord"]
excerpt: "Une phrase d'accroche affichée dans la liste des articles."
materiel:
  - name: "Nom du produit 1 (ex: Canne à plumes 4 m)"
    note: "Pourquoi ce produit précisément (une phrase)."
    partenaire: "Nom du partenaire (ex: Décathlon, Pêcheur.com...)"
    link: "#"
  - name: "Nom du produit 2"
    note: "Pourquoi ce produit précisément."
    partenaire: "Nom du partenaire"
    link: "#"
recipe:
  name: "Nom du plat"
  servings: 4
  prepTime: "15 min"
  cookTime: "10 min"
  difficulty: "Facile"
  ingredients:
    - "Ingrédient 1"
    - "Ingrédient 2"
    - "Ingrédient 3"
  steps:
    - "Étape 1"
    - "Étape 2"
    - "Étape 3"
---

## La pêche

Écris ici la partie technique de pêche : où, quand, avec quel matériel.

## De l'eau à la cuisine

Écris ici la transition : comment reconnaître un poisson frais, comment le conserver.

Le reste du texte (astuces, anecdotes...) peut suivre ici. La recette structurée
(ingrédients / étapes) s'affichera automatiquement en bas de l'article grâce
au bloc "recipe" rempli plus haut.
