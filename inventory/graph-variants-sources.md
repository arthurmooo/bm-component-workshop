# Variantes graphiques supplémentaires — 15 septembre 2026

Implémentation : src/components/charts-variants.tsx/css, intégrée à ChartsExtra et ChartsDemo.
Données explicitement fictives. Pas de dépendance ajoutée.

| Variante | Source inspectée | Construction retenue |
| --- | --- | --- |
| Pixels | ../01-dashboards/spark-pixel-halftone.jpg | Grille de carrés, séries empilées noir/gris, un carré par dossier |
| Miroir | ../06-bookmarks-x-20260915/media/2094890583265251405/01.jpg | Entrées positives/sorties négatives, même zéro et même échelle |
| Répartition | ../06-bookmarks-x-20260915/media/2095606711453429966/01.jpg | 100 segments multicolores, légende isolable, nombre/pourcentage |
| Nuage | ../04-collecte-locale-20260915/frames/local-video-06-3.jpg | Comparables deux groupes, propre offre en bleu, coordonnées quantitatives |
| Modèles | ../06-bookmarks-x-20260915/media/2065117631796154769/04.jpg | Icône/nom puis score à dix segments, modèles fictifs |
| Catégories | ../01-dashboards/shadcn-all-analytics.jpeg | Icônes dans cartouches sombres au sommet de barres |
| Objectif | ../01-dashboards/shadcn-all-analytics.jpeg | Courbe avec cible pointillée + liste pays sur fond proportionnel |
| Canaux | ../06-bookmarks-x-20260915/media/2093034489010401419/03.jpg | Barres colorées, reste hachuré, repère vertical en bout |
| Livraisons | ../01-dashboards/shipnova-team-performance.png | Identité, décompte, progression et icône véhicule au bout |

Supervision : AgentSupervisionDemo dans agent-supervision.tsx/css.
Source : ../06-bookmarks-x-20260915/media/2096914349403128128/01-frames/005.57s.jpg.
Éventail de cinq agents, compteurs et détail repliable. Reprise/fin simulées uniquement.

Vérification code : TypeScript. Validation navigateur à effectuer par root.

## Financier et statistique

- FinancialChartsDemo : src/components/financial-charts.tsx, fixture pure financial-model.mjs.
- StatisticalChartsDemo : src/components/statistical-charts.tsx.
- CSS commun : specialist-charts.css.
- Source Spectrum : ../06-bookmarks-x-20260915/media/2098784334383915025/01-frames-contact.jpg, frame pleine 027.04s.jpg examinée (carnet).
  - 000.00s / 009.01s / 063.10s : chandeliers et volumes.
  - 027.04s : carnet et profondeur cumulative.
  - 036.06s : aires empilées.
  - 054.09s : composition barres + courbe, axes explicités dans l’adaptation.
- Source Lieflat : ../06-bookmarks-x-20260915/media/2094719194302706136/01-frames-contact.jpg, frame pleine 040.02s.jpg examinée (arbre/deux panneaux).
  - 013.34s / 046.69s : distribution jitter et radial.
  - 033.35s : bulles par année et produit, aire proportionnelle au volume, noyau des escalades, pointillé bêta.
  - 040.02s : arbre de capacités et panneaux de dépenses/inscriptions.

Vérification : TypeScript + trois tests financial.test.mjs vérifiant extrêmes OHLC, cumul et immutabilité des ordres.
