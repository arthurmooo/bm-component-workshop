# Socle UI BM — clair

## Contrat visuel

- Une typographie Inter ; police configurable avec `--bm-font`.
- Texte courant 12 px, libellés 13 px, secondaire 11 px, métadonnées 10 px. Les graphes et illustrations peuvent conserver une échelle propre.
- Espacements 4 / 8 / 12 / 16 / 24 / 32 px.
- Arrondis 6 px pour les petits contrôles, 8 px pour les contrôles, 14 px pour les cartes, 18 px pour les grands panneaux. Les chips, avatars et illustrations conservent leur forme.
- Action principale graphite ; bleu informatif, vert terminé, ambre à vérifier, rouge erreur.
- Focus neutre visible au clavier. Pas de double cadre dans les champs composites.
- Transition de confirmation 140 ms, dépliement 240 ms ; préférence de mouvement réduit respectée.
- Les effets de survol soulignent l'élément concerné sans ajouter une nouvelle surface au graphique.

`src/design-system/tokens.css` est le contrat public. 50 feuilles existantes utilisent les couleurs sémantiques ; typographie, espacements récurrents et arrondis sont également mutualisés. Les palettes multiséries des graphiques, illustrations et miniatures de thème ne sont pas des couleurs de marque. Les valeurs spécifiques restantes ne sont pas toutes des tokens : ne pas affirmer que les 76 spécimens sont entièrement personnalisables.

## Consommer dans une démo React

Construire le paquet local : `npm run build:library` (aussi exécuté par `npm run build`).
Installer ce dossier comme dépendance locale du projet consommateur avec `npm install /chemin/vers/09-atelier-composants`.

```tsx
import {
  Card, CardHeader, Button, StatusBadge, Field,
  DataTable, DataRow,
} from 'bm-component-workshop';
import 'bm-component-workshop/style.css';

export function Dossier({name, onOpen}: {name: string; onOpen: () => void}) {
  return <div className="bm-ui">
    <Card>
      <CardHeader title={name} action={<StatusBadge status="review"/>}/>
      <Button variant="primary" onClick={onOpen}>Ouvrir le dossier</Button>
    </Card>
  </div>;
}
```

Les styles du socle sont livrés avec les fontes. Il n'est pas nécessaire d'importer `src/style.css`, `App.tsx` ou les scénarios de l'atelier. Les styles se chargent une seule fois au point d'entrée du produit. Les classes génériques historiques `.button` et `.menu-*` restent publiques : vérifier les collisions avec un design system déjà installé.

### Personnaliser une marque

Charger ces valeurs **après** le CSS de la bibliothèque. Les définir sur `:root` permet aux menus rendus dans un portail de recevoir la même identité.

```css
:root {
  --bm-font: Inter, sans-serif;
  --bm-action: #315e52;
  --bm-action-hover: #417565;
  --bm-on-action: #fff;
  --bm-accent: #337b69;
  --bm-accent-soft: #eaf4ef;
  --bm-accent-ink: #315e52;
}
```

Le logo et le nom appartiennent à la composition du produit, pas aux composants. Ne pas remplacer les couleurs de succès/erreur par la couleur de marque. Pas de thème sombre public pour le moment.

## API réutilisable

| Éléments | Données / actions |
|---|---|
| Button | Attributs natifs, `variant`, `small`, `onClick` |
| Card / CardHeader | Contenu libre, titre, description et action |
| Input / Field | Attributs natifs ; Field relie label, aide et erreur |
| MetricCard / EmptyState | Libellés, valeurs et actions fournis par le produit |
| AppSelect | `value`, `onValueChange`, enfants `option`, libellé accessible |
| AmountInput | `value`, `onValueChange`, attributs natifs ; normalisation française |
| DatePicker | Date ISO, `onValueChange`, attributs ARIA |
| DataTable / DataRow | Cellules fournies par le produit ; tri contrôlé optionnel |
| DropdownMenu… | Primitives Radix avec styles partagés |
| StatusBadge | `status`, libellé facultatif |
| AnimatedReveal | `open`, enfants préservés mais inertes au repli |
| ActionFeedback | État, icône et texte de confirmation |

Utiliser `className="numeric"` sur l'en-tête et les cellules numériques dans un conteneur `.bm-table-frame`. Cette classe suit la colonne lors de ses déplacements. Utiliser `data-sort-value` pour les montants formatés. Les tables métier conservent leurs colonnes, données, validations et règles de droits dans le produit consommateur.

## Limite de migration

Le paquet exporte les fondations, primitives et compositions génériques ci-dessus. Il n'exporte pas les 76 pages du catalogue comme si elles étaient des composants produit. Les fonctions `*Demo` conservent leurs scénarios, données fictives et parfois un stockage local. Leur extraction métier doit recevoir une API de données et de callbacks avant exposition publique. La consolidation des styles est appliquée dans l'atelier, mais ne transforme pas à elle seule un scénario en intégration métier.

## Preuve d'assemblage et maintien

`design-system.html` importe **le paquet construit et son CSS**, pas les sources internes de l'atelier. Il montre une composition avec changement de marque, métriques, tableau, recherche, filtres, état vide, formulaire, calendrier et confirmations. Accessible via « Socle UI · thème clair » dans l'atelier.

- `npm run build` : construit le paquet avec déclarations TypeScript, l'atelier et l'écran d'assemblage.
- `npm test` : tests métier existants, résolution de tous les tokens et absence de dépendance de l'API publique à l'atelier ou au stockage local.
- Pour une nouvelle primitive : l'exporter dans `src/design-system/index.ts`, réutiliser les tokens, vérifier clavier, vide, erreur, désactivation et mouvement réduit selon son comportement.
- Garder les scénarios et services hors de l'API publique. Vérifier l'écran indépendant après chaque changement partagé, puis les composants de l'atelier concernés.

## Parcours dossier réutilisable

`dossier-demo.html` assemble uniquement les exports de `bm-component-workshop` et sa feuille publique. Il partage la mise en page du showcase, sans CSS correctif de composant.

Nouveaux exports :
- `DetailDrawer` : `open`, `onClose`, `title`, `description`, `children`, `footer`. Dialogue modal natif, Échap, focus contenu et retour au déclencheur.
- `DocumentList` : `documents` avec `id`, `name`, `meta`, `content`. Aperçus dépliables.
- `PromptComposer` : `value`, `onChange`, `onSubmit`, `disabled`, libellés configurables. Pas de service appelé par le composant.
- `ExecutionJournal` : `steps` avec identifiant, libellé, détail et état (`pending`, `running`, `done`, `paused`, `failed`). Apparition progressive configurable ; contenu final via `children`. Le journal de l’atelier utilise ce même composant.
- `TextEditor` : texte contrôlé via `value` / `onChange`, `label`, `readOnly`. Édition de texte brut ; la mise en forme riche reste celle de l’éditeur de message de l’atelier.

Les états et la simulation sont dans `src/dossier-demo/`, hors bibliothèque. Trois dossiers disposent de pièces distinctes, pause/reprise, annulation, modification et validation. Les données restent en mémoire pendant la session et disparaissent au rechargement. Aucun fichier réel, appel IA ou envoi externe. Les autres compositions de l’atelier restent à extraire selon leur usage.
