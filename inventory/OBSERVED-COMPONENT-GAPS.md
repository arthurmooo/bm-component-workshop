# Décomposition visuelle — état de travail

## Preuve disponible

72 images ou frames ont été réellement ouvertes et examinées. Les chemins et composants visibles sont consignés dans `observed-components.json`, reliés par chemin exact à `reference-matrix.json`. Les 22 familles de l’analyse08 sont représentées, plus des sources connexes et un premier lot A–M exploratoire. Deux sources animées ont seulement été revues sur une frame. Les dropdowns supplémentaires n’ont pas été réinspectés dans ce lot.

**Ce n’est pas une couverture exhaustive des251médias métier ni un PASS esthétique.** Un composant cité dans un fichier de code peut être une adaptation partielle. Les références du catalogue exploratoire ne sont pas automatiquement des choix validés par Arthur.

## Écarts distincts repérés et transmis

| Composition / primitive | Source exacte dans le corpus | État à cet audit |
|---|---|---|
| Champs destinataires avec pills portrait supprimables, Cc/Bcc, bouton envoi scindé | `06-bookmarks-x-20260915/media/2095040379968262189/01.jpg` | Transmis à root |
| Graphe de dépendances branché, chemin actif, zoom/fit, inspecteur | `06-bookmarks-x-20260915/media/2097699922871013794/01.jpg` | Le workflow linéaire ne suffit pas ; transmis |
| Workflow If/Else et panneau outputs typés | `06-bookmarks-x-20260915/media/2084947115751403729/01.jpg` | Transmis |
| Carte erreur récupérable avec logs dépliables et bouton réparer | `06-bookmarks-x-20260915/media/2060625519771815985/01.png` | Transmis |
| Cartes radio avec titre, description, icône | `06-bookmarks-x-20260915/media/2095112501403025821/01.jpg` | Transmis |
| Date-strip horizontal, navigation, multi-assignees | `06-bookmarks-x-20260915/media/2095732566968119645/01.jpg` | Transmis |
| Facture avec lignes, sous-total, taxe et total | `04-collecte-locale-20260915/images/local-009.jpeg` | Transmis |
| Carte idée avec vote, commentaires et progression | `06-bookmarks-x-20260915/media/2082009734274543627/01.jpg` | Transmis ; référence exploratoire |
| Accordions comptes, pièces jointes contrat/facture, bloc onglets timeline/audit/commentaires | `06-bookmarks-x-20260915/media/2092271113594081308/01.jpg` | Approbation actuelle partielle ; transmis |
| Carte de modèle CSV à télécharger | `04-collecte-locale-20260915/images/local-035.jpeg` | Import lit un exemple mais n’expose pas cette carte |

## Versions ajoutées dans ce sous-lot

- `advanced-table.tsx` : tags avec débordement +N et popover, histogramme d’activité par ligne, agrégats réels du résultat filtré.
- `agenda-cards.tsx` : carte agenda compacte avec date détachée, priorité, description, détails et état terminé.
- `team-activity.tsx` : mentions, citation, réactions, réponses, accord d’accès simulé, carte rendez-vous et avatars empilés.
- `directory-demo.tsx` : annuaire avec cartes portraits/identité,3métriques et contacts ; fiche contact séparée `ContactProfileDemo` avec résumé, champs, note segmentée, activité et contacts associés.

Tous ces éléments utilisent des données fictives locales. Les portraits sont illustrés SVG. Le build et les26tests du projet passent après les ajouts. La revue visuelle dans l’atelier reste à faire par root, puis la validation utilisateur.

## Limites de la recherche A–M

Le lot a privilégié les compositions distinctes et non tous les dashboards ressemblants. Les vidéos non déjà découpées n’ont pas été parcourues dans ce sous-lot. Aucun compteur « couvert » global n’est attribué aux335médias : plusieurs composants peuvent partager une source et une famille peut exiger plusieurs variantes.

- `date-strip-demo.tsx` : cinq jours avec navigation, choix de date et multi-assignees, source2095732566968119645/01.
- Audit supplémentaire: condition-builder et insight paginé (2092250905655812121/01), inbox master-detail (2058850571692732712/01), donut continu et heatmap chiffrée (2095955237114609917/01).

## Extension vidéos

4planches contact existantes (8frames échantillonnées chacune) et2frames pleine taille ont été examinées. Elles sont comptées comme6images, pas comme34frames. Pas de preuve de mouvement complet. Spectrum et Lieflat apportent des types de graphes distincts transmis au lot graphes. Liste dans observed-components.json avec sourceVideo.

Ajouts supplémentaires code: FormBuilderDemo, PaymentCardDemo, InboxDemo, InsightCardsDemo. Leurs sources restent liées aux observations, aucune validation esthétique déduite.

## Diagnostic contexte et réseau agents — 2 sources supplémentaires

- `2098042196624826707/01-frames/006.01s.jpg` : comparaison envoyé/requis, champ manquant, poids contexte, runs. `ContextDiagnosticDemo` en code local.
- `2098668191446921472/01.jpg` : réseau anomalies boucle/perte contexte, inspecteur six métriques, champs requis. `AgentNetworkDemo` en code local.
- Limites : données fixtures, live feed non reproduit, pas de validation visuelle revendiquée.

## Revue interaction tables et inbox

- Footer Calculate (2094277575036305567/006.20s) réellement vu : menu fermé. Ajout somme/moyenne/min/max du montant sur les lignes filtrées, pas seulement la page.
- Inbox : brouillon maintenant conservé par message à travers sélection, recherche et archivage ; archivage rend le focus au champ de recherche.
- Table avancée : archivage et désélection rendent le focus à la recherche.
- Build local et 30 tests passent. Preuve visuelle et usages clavier humains distincts, restant à contrôler par root.
