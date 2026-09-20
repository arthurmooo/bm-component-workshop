# BM Atelier — collection 01

76 entrées interactives : fondations, menus, filtres, drawers, tableaux, Kanban, graphiques, formulaires, documents et interactions IA. Plusieurs entrées proposent des variantes distinctes. La page `coverage.html` relie les versions disponibles à l’audit des références.

## Consulter

Version publique : https://arthurmooo.github.io/bm-component-workshop/

Serveur de références existant : http://127.0.0.1:8766/09-atelier-composants/dist/index.html

Depuis ce dossier :

```sh
npm ci
npm run build
npm run dev
```

Développement : http://127.0.0.1:8767 . `dist/` est autonome et peut être servi par un serveur statique. Les fontes et références sont locales. `npm run build` régénère aussi la page de couverture (Python 3 requis).

## Réutilisation

Le socle public est `src/design-system/index.ts`, construit dans `lib/` avec CSS et types TypeScript. Voir [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) pour les APIs, la personnalisation de marque et les limites de migration.

`design-system.html` vérifie l'assemblage depuis le paquet construit, sans styles de l'atelier. Les fonctions `*Demo` restent des scénarios et ne font pas partie de cette API publique.

La primitive de dropdown est adaptée du registre shadcn/ui New York (Radix). Code original conservé sous reference-inspection/shadcn-dropdown-menu.original.tsx, licence sous LICENSE-shadcn.txt. Autres primitives Radix : popover, toggle-group. Motion gère les transitions et Lucide les icônes. Les adaptations graphiques et composants composés sont locaux. Aucune prétention à avoir importé une bibliothèque complète shadcn.

## Notes et validation

Retours stockés dans le navigateur sous `bm-component-workshop:v1`, par composant. Export JSON disponible. Le statut Validé n'est attribué que par une action utilisateur. Il peut être annulé. Toutes les données de démonstration sont fictives. Aucun fichier n'est envoyé au serveur : le transfert est simulé et le téléchargement produit un CSV local de 240 lignes fictives (14 222 octets).

## Vérification

`npm test` : contrôles ciblés sur tri, déplacements, resize, formulaires, import, règles, simulation et graphiques.
`npm run build` : TypeScript strict puis Vite.
Voir REVIEW.md pour les preuves navigateur, les corrections et les limites.

## Périmètre de réutilisation

Les primitives contrôlées ont une API de props. Les compositions `*Demo` sont des spécimens interactifs à données fictives : leur adaptation à des données produit reste à faire après validation visuelle. La présence dans l’atelier ne signifie pas validation esthétique, ni certification de couverture intégrale des 335 médias collectés. Les audits distinguent les sources effectivement inspectées et les limites.
