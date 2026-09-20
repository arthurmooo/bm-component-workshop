# Revue du premier lot — 15 septembre 2026

## Décision du coordinateur

PASS pour présentation à Arthur des sept familles du premier lot. Ce statut signifie que les contrôles ci-dessous ont passé la revue technique et visuelle locale. Il ne remplace pas la validation esthétique d'Arthur, laissée À examiner dans l'atelier.

## Corrections après premier passage (RETRY → correction)

- Label menu : ancrage vertical trop bas sur portable, provoquant ouverture au-dessus. Zone du composant remontée ; panneau garde collision handling sur écran étroit.
- Tableau : textes initialement trop petits. Corps passé à 12 px, statuts à 10 px ; colonnes et chiffres restent alignés.
- Transfert : action Simuler erreur activée en pause mais sans effet. Désactivée tant que le transfert n'est pas en cours.
- Transfert : boutons qui disparaissent pouvaient perdre le focus. Restauration conditionnelle vers la commande suivante ; zone actions conservée, animée et inactive pendant transfert.
- Contrastes : teintes de premier plan badges, statuts transfert, boutons teintés et KPI renforcées pour atteindre 4,5:1 sur leurs fonds. Les fonds pâles restent en place. Ce contrôle ciblé n'est pas un audit WCAG complet.
- KPI : variation absolue exprimée en dossiers, pas en points.
- Navigation atelier : retour en haut lors du changement de famille.

## Preuves observées dans le navigateur

- Sept composants affichés à taille réelle sur viewport bureau 1280 × 720.
- Labels : recherche Design → Entrée → focus Corail → flèche → Entrée → tag créé, retour focus champ ; saisie DESIGN entourée d'espaces ne propose pas de doublon ; Échap rend le focus au déclencheur.
- Menu tableau : tri Montant croissant donne 320k,480k,670k,860k,1,25M ; déplacement Montant au début déplace la colonne entière et préserve le tri.
- Sélecteur : flèche pour déplacer focus puis Espace pour activer Kanban, état checked et liste renommée observés.
- Bouton : largeur 153 px avant et pendant chargement ; confirmation disponible après délai simulé.
- KPI : état normal et zéro vus ; zéro affiche 42 dossiers restants.
- Badge : libellé long entier affiché.
- Upload : pause à69% et gel du pourcentage constatés ; reprise puis erreur à71% ; nouvelle reprise → terminé et deux actions. CSV réellement trouvé dans Downloads (14 222 octets), malgré timeout de l'événement download du pilote.
- Après correction focus : Entrée sur Lancer donne focus Mettre en pause ; activation Annuler donne focus Recommencer.
- Note et statut À revoir conservés après rechargement ; validation puis annulation observées. Les données de test ont été effacées et le statut remis À examiner.
- Écran390×844 : les7 familles n'ont pas de débordement horizontal de page (scrollWidth=clientWidth=390). Menu de labels et carte transfert examinés visuellement. Tableau possède son propre défilement horizontal.
- Console navigateur : aucune erreur ni avertissement retourné.

## Sources et précision du mouvement

Dejv 2092547295950618961 et Louis2097341066857066784 : contact sheets couvrant les vidéos à2 images/s + image détaillée du menu. Création/palette/tags et tri/mouvements repris. CreateUI : analyse précédente couvrant toute la durée à250 ms, plus contrôle des états du prototype.

Les courbes d'accélération et timings sont des adaptations évaluées en prototype. Aucun code source des auteurs ni valeur de ressort n'a été supposé. Les captures sont des références, jamais utilisées comme composant aplati.

## Limites

Première collection seulement ; pas de tableau métier complet, pas de serveur de transfert, pas de dashboard global. Préférence de réduction des animations gérée dans CSS/Motion/composants ; pas de mesure instrumentée de fluidité GPU. Navigation et focus ciblés vérifiés, pas de campagne complète lecteur d'écran. Sauvegarde des retours locale au navigateur ; exporter pour transférer à un autre appareil.


## Révision ciblée — Approbations & journal

Retour Arthur : sens du composant et informations difficiles à comprendre. Diagnostic : objet de décision implicite, rôles émetteur/bénéficiaire ambigus, aucune pièce consultable, circuit1/2 insuffisant, historique en concurrence avec action.

Refonte en facture fournisseur fictive : Atelier Nord doit régler Lumen Conseil ; 40 000 € HT + 8 000 € TVA = 48 000 € TTC. Étape opérationnelle validée par Alice, validation financière attendue de Vous, autorisation de transmission comptabilité distincte du règlement. Identités, flux, pièce, étape courante et résultat possèdent une représentation visuelle. Historique replié par défaut.

Preuves navigateur : aperçu facture correct ; refus désactivé si motif vide, motif repris dans résultat ; approbation donne 2/2 et troisième événement ; viewport390px sans débordement ; capture desktop dédiée. Build TypeScript/Vite passé. Cette revue ne présume pas validation esthétique d’Arthur.

## Révision ciblée — Drawer de détail

Références fournies par Arthur conservées sous public/references/drawer-work-order.webp, drawer-comments.webp et drawer-history.webp. Reprise des principes : identité nette, propriétés alignées, sections sans multiplication des cadres, documents identifiables, fil chronologique avec avatars et repères.

Panneau desktop détaché de 12 px, 560 px de large ; plein écran mobile. En-tête et onglets fixes, corps défilant. Navigation parmi trois dossiers, modification locale du responsable, notes par dossier et aperçu explicatif des documents fictifs. Attribution historique indépendante du responsable courant.

Preuves navigateur : ajout de note et compteur actualisé ; passage au dossier suivant sans fuite des notes ; aperçu XLSX ; rendu mobile 390 × 844 sans débordement horizontal ; Échap restitue le focus au dossier déclencheur. Captures bureau de synthèse et activité après build final TypeScript/Vite réussi. Pas de serveur ni de fichiers clients ; la validation esthétique reste à Arthur.

## Révision ciblée — Kanban deals

Colonnes déplaçables par leur en-tête (et flèches gauche/droite sur la poignée). Glissement des cartes par pointeur avec seuil de 5 px, emplacement de même hauteur dans la destination et réorganisation animée avant dépôt ; les données sont conservées tant que le dépôt n’a pas lieu. Échap et pointercancel nettoient la prévisualisation. Avatars, montant dominant et statuts différenciés.

Preuve navigateur : Atelier Nord survolant Proposition fait descendre Alto Industrie avant le relâchement (capture kanban-avant-depot.png). Dépôt : deux cartes et 1 340 000 € dans Proposition, une carte et 320 000 € dans Qualification. Glissement de Proposition après Négociation confirmé par l’ordre des colonnes. Commande clavier également vérifiée. Tests existants et build passés. Vérification effectuée dans le navigateur intégré, pas dans Safari ; variante Kanban documents inchangée.

## Parité Kanban documents / deals

Les deux exports utilisent maintenant le même KanbanBoard, avec les mêmes gestes de pointeur, prévisualisation de hauteur réelle, menus de déplacement/réordonnancement, commandes clavier des colonnes et réinitialisation. Seuls données, libellés, résumés de colonnes et corps visuel des cartes diffèrent. Documents : icône PDF, version/taille, date, circuit de signature simulé selon l’état et avatar du responsable.

Preuve navigateur : emplacement visible avant dépôt de Lettre de mission dans À signer ; deux documents présents dans cette colonne après dépôt ; glissement de À signer après Signé confirmé ; réinitialisation restaure les colonnes. Build passé et 34 tests réussis, dont déplacement documentaire avec préservation de l’entrée et rejet des états invalides. Capture kanban-documents-revu.png.

## 2026-09-16 — socle clair réutilisable

- Contrat de tokens communs ; 473 occurrences de couleurs raccordées dans 50 feuilles de style, puis échelles typographiques et arrondis récurrents mutualisés.
- Styles de Button, DropdownMenu et StatusBadge extraits du CSS de l'atelier. API publique, build ES/CSS et déclarations TypeScript dans `lib/`.
- `design-system.html` consomme ce paquet compilé et son CSS. Aucun import de `App.tsx` ou du CSS de l'atelier.
- Vérification navigateur : changement de marque sur action principale et menu porté, filtre sur En cours, recherche sans résultat et remise à zéro, tri décroissant des montants, ouverture du calendrier. Captures vérifiées du socle, du dropdown Société et de l'éditeur existant. Aucun message d'erreur console lors du contrôle de l'éditeur.
- `npm test` : 49 tests réussis. `npm run build` : paquet, types et deux pages compilés. Avertissement de taille du bundle atelier encore présent.
- Limites : contrôle navigateur ciblé, pas revue visuelle exhaustive des 76 entrées. Les pages `*Demo` ne sont pas exposées comme composants métier contrôlés ; voir DESIGN-SYSTEM.md.

## Parcours dossier — 16 septembre 2026
- Ajout de cinq exports configurables : DetailDrawer, DocumentList, PromptComposer, ExecutionJournal, TextEditor.
- Démo indépendante dossier-demo.html : trois dossiers, consultation des pièces, préparation progressive, pause/reprise/annulation, édition et validation. Aucune correction CSS propre à la démo ; données et simulation hors bibliothèque.
- Le journal de l’atelier et celui de la démo partagent ExecutionJournal.
- Vérification navigateur desktop : pièces dépliées, pause puis reprise, synthèse éditée et validée, compteur et tableau mis à jour, autre dossier encore disponible, réouverture avec texte conservé, Échap et retour du focus au déclencheur. Console sans erreur observée. Journal de l’atelier rendu et repliement contrôlés.
- Build et 52 tests réussis. Simulation locale, mémoire de session uniquement. Mobile et utilisation humaine non validés sur cette livraison.
