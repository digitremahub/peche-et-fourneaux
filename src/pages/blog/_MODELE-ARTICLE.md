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
# Le bloc "recipe" est optionnel : si un article n'a pas de recette,
# supprime tout le bloc "recipe:" et ses lignes en dessous.
# ============================================================================
layout: ../../layouts/BlogPost.astro
title: "Titre de l'article (ex: Le maquereau à la plume : technique et recette grillée)"
description: "Une phrase pour les moteurs de recherche et les réseaux sociaux."
date: 2026-01-01
species: "Nom de l'espèce (ex: Maquereau)"
technique: "Nom de la technique (ex: Pêche à la plume)"
excerpt: "Une phrase d'accroche affichée dans la liste des articles."
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
