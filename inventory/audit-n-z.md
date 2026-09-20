# Audit visuel N–Z — composants métier

15 septembre 2026. Audit de sources locales statiques et d’images extraites des vidéos. Cela établit les compositions visibles, pas les timings de chaque animation. Les chemins sont relatifs au dossier racine des références (parent de l’atelier). Les composants existants désignent le code, pas une validation humaine.

## Écarts structurels constatés

| Source observée | Sous-composants visibles | Couverture au moment de l’audit |
|---|---|---|
| `04-collecte-locale-20260915/images/local-011.jpeg` | Carte quota double enveloppe, ratio courant/plafond, badge de santé, barre interrompue par le pourcentage | KPI générique insuffisant. QuotaDemo en préparation. |
| `06-bookmarks-x-20260915/media/2094274397616140323/01.jpg` | Objectif revenu avec montant restant, barre hachurée + segment accent ; classement équipe portrait/rôle/deals | Objectif distinct de KPI. Variante Quota prévue. Annuaire confié à table_resize. |
| `06-bookmarks-x-20260915/media/2091911157414019287/01.jpg` | Carte campagne avec état et deux mesures budget/engagement côte à côte | Pas couverte par une seule jauge. Variante Quota prévue. |
| `04-collecte-locale-20260915/images/local-020.jpeg` | Graphe à branche conditionnelle Only IF, ports, Add Condition | WorkflowDemo est linéaire. Source transmise à graphs pour composant dédié. |
| `04-collecte-locale-20260915/images/local-031.jpeg` | Annuaire personne portrait/identifiant, texte, trois scores, contacts ; leaderboard ; certifications | Drawer contact ne couvre pas cartes annuaire. Source transmise à table_resize. |
| `04-collecte-locale-20260915/images/local-032.jpeg` | Carte template workflow avec trigger, outils empilés, nombre de runs, date | AgentCatalog ne couvre que cartes agents ; manque cette variante métier. |
| `04-collecte-locale-20260915/images/local-081.webp`, `local-083.webp`, `local-084.webp`, `local-090.webp` | Carte tâche avec image, checklist fractionnelle, priorité, avatars, commentaires et fichiers ; sous-tâches cochables ; discussion | Kanban deal/doc présent. Carte tâche riche absente ; TeamActivity couvre réactions/réponses et Editor la saisie mais leur composition dans le détail tâche reste absente. |
| `04-collecte-locale-20260915/images/local-023.jpeg` | Objectif détaillé courant/cible/reste/délai/mois/contribution + activité | Drawer et timeline sont présents séparément ; cette grille de calcul métier manque. |
| `04-collecte-locale-20260915/frames/local-video-08-3.jpg` | Règle de politique montant seuil + exigences mémo/reçu | PermissionsDemo ne couvre pas la règle de dépense. |
| `06-bookmarks-x-20260915/media/2094274397616140323/02.jpg` | Carte abonnement, état current, cadence, renouvellement, trois limites ; historique factures | InvoiceDemo couvre une facture, pas le plan/quotas d’abonnement. |
| `06-bookmarks-x-20260915/media/2094274397616140323/03.jpg` | Invitation multi-emails en chips, choix de rôle en cartes 2×2, département | ShareDemo + PermissionsDemo présents, mais formulaire d’invitation absent. |
| `06-bookmarks-x-20260915/media/2094274397616140323/04.jpg` | Catalogue intégrations compact : logo, catégorie, Free, note, Connect, recherche/tri | Catalogue agent et lignes intégration couvrent interactions de base, pas cette variante compacte notée. |
| `06-bookmarks-x-20260915/media/2079533426366136511/01-frames/013.52s.jpg` | Carte onboarding illustrée, pagination 2/3, précédent/suivant ; illustration sélection collaborative | FormDemo n’est pas ce tutoriel paginé. Présence collaborative illustrative absente. |
| `06-bookmarks-x-20260915/media/2092484251119673503/01-frames/007.01s.jpg` | Coachmark numéroté ancré sur graphe, voile et précédent/suivant/fermer | Tooltip simple insuffisant : visite guidée absente. |
| `06-bookmarks-x-20260915/media/2096914349403128128/01-frames/005.57s.jpg` | Éventail sous-agents, lignes en cours/échec/succès, compteurs, détail développé | ExecutionJournal ne couvre pas la hiérarchie parallèle. |
| `06-bookmarks-x-20260915/media/2098668191446921472/01.jpg` | Réseau agents, liens anomalie, détail métriques 2×3, champs contexte valides/manquants, flux handoffs | Workflow linéaire insuffisant ; inspecteur réseau et contexte absents. |
| `06-bookmarks-x-20260915/media/2098042196624826707/01-frames/006.01s.jpg` | Comparaison contexte envoyé/requis, état Missing/Match, charge contexte, récents runs | Table générique réutilisable mais composition diagnostic absente. Image en transition, texte partiellement estompé. |
| `06-bookmarks-x-20260915/media/2098705815850963218/01.jpg`, `/02.jpg` | Suivi commande étapes, articles, totaux ; assistant contextuel sources, alerte, réponse ton sélectionnable, copier/éditer | Prompt seul ne couvre pas réponse sourcée/contextuelle. Clair/sombre sont variantes de même composition. |

## Graphiques — écarts à ne pas masquer par « graphiques présents »

- `01-dashboards/spark-pixel-halftone.jpg` : histogramme en carrés unitaires empilés, tooltip double série et curseur vertical. Distinct d’une heatmap.
- `01-dashboards/orbito-analytics-orange.png` : barre démographique proportionnelle 40/60 et légende ; histogrammes empilés déjà famille graphique générale.
- `01-dashboards/shipnova-team-performance.png` : progression individuelle avec véhicule au bout de la jauge ; table classement avec scores ; jauges département segmentées.
- `01-dashboards/shadcn-all-analytics.jpeg` : logos catégorie au sommet des barres, objectif pointillé sur courbe, liste pays avec fond de ligne proportionnel.
- `06-bookmarks-x-20260915/media/2065117631796154769/04.jpg` : comparaison modèles avec notes par segments colorés.
- `06-bookmarks-x-20260915/media/2093034489010401419/03.jpg` : jauges horizontales par canal à fond hachuré et poignée visuelle d’extrémité.
- `06-bookmarks-x-20260915/media/2094890583265251405/01.jpg` : histogramme miroir divergent ; empilement espacé/hachuré.
- `06-bookmarks-x-20260915/media/2095606711453429966/01.jpg` : barre segmentée multicolore commune aux environnements ; légende active atténuant les autres ; compte/taux commutable.

Ces écarts ont valeur de variantes graphiques, pas de nouveaux dashboards entiers. À rapprocher des exports ChartsDemo/ChartsExtra/ComparisonChartsDemo en évolution concurrente.

## Familles déjà représentées, précisions de construction

| Sources inspectées | Construction observée et couverture |
|---|---|
| `01-dashboards/neom-inbox.jpg` | Cartes inbox emboîtées, alerte briefing et agenda : WorkCardsDemo, AlertCardsDemo, AgendaCardsDemo. |
| `02-composants/navigation-onglets-inbox.png` | Onglets soulignés icône + compteur : NavigationDemo. |
| `02-composants/recrutement-formulaire-et-etapes.webp` | Stepper horizontal, inputs, suggestions, rôle sélectionnable en cartes : FormDemo couvre étapes/validation ; ChoiceCardsDemo couvre choix radio en cartes, pas encore variante rôle/tarif. |
| `02-composants/onboarding-business.webp` | Stepper vertical sept étapes, champs en deux colonnes, cartes taille d’entreprise illustrées : comportement FormDemo, variantes verticales/illustrées distinctes. |
| `04-collecte-locale-20260915/images/local-074.webp` | Carte géographique et classement pays : MapDemo. |
| `04-collecte-locale-20260915/frames/local-video-06-3.jpg` | Nuage de prix comparables : vérifier variante scatter parmi graphiques ; distinct de comparaison barres. |
| `04-collecte-locale-20260915/frames/local-video-07-1.jpg` | Table transactions sélectionnée + confirmation synchronisation ERP : structure table et success existent, transition spécifique non reproduite. |
| `06-bookmarks-x-20260915/media/2079196583967809951/01.jpg` à `/04.jpg` | Table appels groupée semaine, durée/coût/état/priorité, KPI, intégrations : AdvancedTable + KPI + IntegrationRows ; variante carte intégration toggle/description/footer différente. |
| `06-bookmarks-x-20260915/media/2080638654842827228/01.jpg` à `/04.jpg` | Pièce jointe, quatre tuiles actions, journal JSON, choix postrésultat : AttachmentDemo, PromptActionsDemo, ExecutionJournalDemo, FollowupDemo. |
| `06-bookmarks-x-20260915/media/2065117631796154769/01.jpg` à `/03.jpg` | Prompt modes, JSON, icônes outils à tooltip : PromptDemo, ExecutionJournalDemo ; rangée logos empilés variante visuelle. |
| `06-bookmarks-x-20260915/media/2095792559125835852/01.png`, `/02.jpg` | Sidebar groupes/récents, pile logos intégrations : NavigationDemo + integrations, composition assistant sidebar à affiner. |
| `06-bookmarks-x-20260915/media/2092964720768643581/01.jpg` | KPI à double enveloppe ; table commande ; liste de mini KPI : primitives couvertes par KpiCard/table, variante mini KPI en liste. |
| `06-bookmarks-x-20260915/media/2095159058424537568/01.jpg`, `/02.jpg` | Courbes comparées, tooltip deux séries ; mini courbe dans synthèse narrative ; agenda vide. Courbes/KPI/état vide présents, composition insight narratif distincte. |
| `06-bookmarks-x-20260915/media/2094383840752218204/01.png`, `/02.png` | Comparaison crafted/vibed : même structure paramètres ; mieux séparer par espacements, graisse, contours doux. SettingsDemo couvre réglages. |
| `06-bookmarks-x-20260915/media/2096235297554280876/01.jpg` à `/03.jpg` | Malgré nom « réglages d’apparence », visuel est documentation de fond Aurora : arborescence/sidebar + sommaire ancré + preview + code. Pas un réglage de thème. |
| `06-bookmarks-x-20260915/media/2095419915494682979/01.jpg` | Éditeur workflow média ; inspecteur paramètres, vignettes, chips trigger, nœuds détails JSON. Workflow couvre base, inspecteur paramètres et nœuds riches distincts. |
| `06-bookmarks-x-20260915/media/2098711617105969557/01-frames/002.96s.jpg` | Timeline jours, repère aujourd’hui, tâches avec fraction restante/%barre : PlanningDemo couvre planning ; variante barre blanche intégrant progression. |

## Limite explicite

Les tables déjà couvertes par les 22 familles n’ont pas été toutes réinspectées dans cet audit : local-000/021/026/029/033/036, sales-orders-tableau, tableau participations et leur animation. Idem simulation investissement déjà documentée. L’audit N–Z décrit les sources réellement vues et ne certifie pas une équivalence exhaustive de chaque capture ni une relecture intégrale des vidéos. Les screenshots de construction prouvent la forme ; le comportement doit rester testé dans l’atelier.

## Mise à jour après implémentation locale

Les écarts suivants ont désormais des specimens dédiés (TypeScript `npx tsc -b` réussi ; QA navigateur détenue par le lead) :

- `quota-demo.tsx` / `QuotaDemo` : consommation à ratio/plafond + santé, objectif/restant et campagne à deux mesures. Sources local-011, 2094274397616140323/01, 2091911157414019287/01.
- `invitation-demo.tsx` / `InvitationDemo` : multi-adresses ajoutées par Entrée, suppression chip, validation/dédoublonnage, cartes rôles, département, préparation locale sans envoi. Source 2094274397616140323/03.
- `onboarding-demo.tsx` / `OnboardingDemo` : tutoriel illustré à trois pages, navigation et état terminé. Source 2079533426366136511/013.52s.
- `onboarding-demo.tsx` / `CoachmarkDemo` : visite guidée trois zones de canvas avec mise en évidence, contenu numéroté et précédent/suivant/fermer. Source 2092484251119673503/007.01s. Adaptation inline compacte plutôt que reprise du positionnement absolu vidéo.
- `task-cards-demo.tsx` / `TaskCardsDemo` : carte tâche avec aperçu graphique joint, priorité, checklist fonctionnelle, progression calculée, fichier, avatars, date, compteur et notes locales. Sources local-081/083/084/090. Aperçu est un visuel CSS fictif et pièce de démonstration, aucun téléchargement réel.
- `task-cards-demo.tsx` / `WorkflowTemplateDemo` : carte template avec diagramme compact, date, déclencheur, outils, compteur et simulation. Source local-032.
- `policy-demo.tsx` / `PolicyDemo` : seuil chiffré, exigences mémo/reçu et test du comportement à montant donné ; comparaison stricte `montant > seuil`. Source local-video-08-3.

Restent distincts dans cet audit : abonnement/limites et factures, assistant de réponse sourcée, variante goal détail, invitation visuellement 1:1 non revendiquée, présence collaborative réelle hors frontend, supervision réseau/contexte et variantes graphiques assignées séparément au lead/graphs.

### Derniers ajouts décomposés

`business-cards-demo.tsx` + CSS exportent désormais :
- `SubscriptionDemo` : plan/cadence, trois quotas et historique avec aperçu facture fictive (2094274397616140323/02).
- `SourcedAnswerDemo` : question contextuelle, liste sources dépliable, grille de faits, alerte, ton, édition et copie locale (2098705815850963218/01). Aucun envoi et aucune génération IA.
- `GoalDetailDemo` : objectif, restant, échéance, mois et contribution recalculés lorsque le montant varie (local-023). Répartition arithmétique simple sans rendement.
- `RatedIntegrationsDemo` : recherche, tri par note, carte catégorie/gratuité/note/connexion locale (2094274397616140323/04).

Deux tests métier exécutés avec succès : normalisation/dédoublonnage e-mails et frontière stricte du seuil de justificatifs. TypeScript passe après ce lot. Ces tests ne valident pas l’esthétique ni la correspondance 1:1 aux sources ; la QA visuelle reste du ressort du lead. Les composants sont des adaptations frontend autonomes, pas des connecteurs réels.

## Relecture source responsive et observations complémentaires

Corrections effectuées : replay template incrémenté à chaque activation ; copies de lien démo/JSON effectives via presse-papiers et retour d’erreur ; nom accessible et hauteur/scroll du dialogue ; chips email longues avec retour à la ligne ; contraste des textes secondaires des derniers composants renforcé. Reduced-motion existant conservé pour les animations; clamping des nombres de PolicyDemo vérifié. TypeScript passe. Aucun PASS visuel automatique.

Sources supplémentaires réellement inspectées :
- `04-collecte-locale-20260915/images/local-036.png` : **nom catalogue trompeur**. Ce n’est pas une pagination mais un éditeur de règles imbriquées. Lignes champ/opérateur/valeur, groupes AND/OR reliés par traits latéraux, chips multi-valeurs, ajout/suppression condition et groupes ; sections THEN avec cas vrai et faux. `PolicyDemo` et `ConditionalWorkflow` ne représentent pas toute cette structure. Manque distinct signalé au lead.
- `local-000.jpeg` : table tâches avec checkbox terminée + texte barré ; filtres inline statut/responsable/catégorie/priorité. Structure table existante, variante complétion barrée.
- `local-021.jpeg` : planning horaire ; déplacement de barre, cible fantôme pointillée et zone horaire bleue ; barres d’alerte hachurées. Famille PlanningDemo mais états de drag spécifiques à conserver.
- `local-026.jpeg` : tables projet groupées, headers groupe colorés/count/plus, répétition colonnes et avatars empilés. Table groupée existe ; plus d’ajout au niveau groupe à vérifier.
- `local-029.jpeg` : switch liste/kanban avec tooltip volumétrique. ViewSelector + tooltip.
- `local-033.jpeg` : tableau commandes avec trois statuts indépendants paiement/exécution/expédition, tabs prédéfinis et sélection. Structure AdvancedTable ; ne pas fusionner les trois axes métier dans un seul statut.
- `01-dashboards/sales-orders-tableau.jpeg` : table statuts commande et paiement distincts, import/export et pagination ; familles existantes.
- `06-bookmarks-x-20260915/media/2094277575036305567/01-frames/006.20s.jpg` : table participations rang/logo/société/localisation/fondateur/effectif/site/tags, pied calcul par colonne et première colonne fixe. Enrichissement table, pas nouvelle famille globale.
- `06-bookmarks-x-20260915/media/2094782722841747512/03.jpg` : prompt avec cartes suggestion phrases complètes, bouton vocal Speak, rangée récente en chips, crédits dans toolbar. Prompt et suggestions existent ; entrée vocale et historique récent ne sont pas dans PromptDemo, volontairement aucune autorisation micro déclenchée.

### Éditeur de règles livré

`RuleBuilderDemo` (`rule-builder-demo.tsx/css`, `rule-model.mjs`) décompose maintenant local-036 : deux niveaux AND/OR, conditions montant ou catégorie, opérateurs, valeurs catégorie multiples, ajout/suppression groupes/conditions, branches si vrai/faux, fixture montant/catégorie avec résultat évalué. Groupe vide explicitement faux. Deux tests passent : logique AND/OR+multivaleurs+frontière de seuil et groupe vide. TypeScript passe. Il s’agit d’un éditeur local limité à deux niveaux et deux champs, aucune action réelle. Pas de claim de reproduction pixel parfaite ni du drag des règles de la source.

Écarts fonctionnels restants observés, au-delà décoration : entrée vocale Speak (2094782722841747512/03.jpg), historique récent en chips dans la même source ; présence collaborative live illustrée (2079533426366136511/013.52s), éditeur nodal média à inspecteur riche (2095419915494682979/01.jpg), agrégats par colonne (2094277575036305567/006.20s) selon couverture table à confirmer. Le parent reçoit ces limites au lieu d’un PASS général.

### Dernier lot de variantes interactives

`extended-interactions.tsx/css` ajoute trois spécimens autonomes :
- `VoicePromptDemo` : bouton Parler de démonstration, onde animée respectant reduced-motion, fin de simulation insérant une phrase fictive modifiable, préparation locale et chips de demandes récentes réutilisables. Aucun microphone/audio. Source 2094782722841747512/03.jpg.
- `CollaborationPresenceDemo` : bascule Alice/Emma, cellule sélectionnable et curseur étiqueté déplacé au clic, présence masquable. Présence illustrative, aucun vrai collaborateur connecté. Source 2079533426366136511/01-frames/013.52s.jpg.
- `MediaNodeInspectorDemo` : nœuds Entrée/Synthèse média inspectables ; format, style, sliders intention/densité ; déclencheurs multiples ; aperçus sources et JSON recalculé ; aperçu simulé désactivé sans déclencheur. Source 2095419915494682979/01.jpg.

Au dernier contrôle de ce lot, TypeScript ne signale aucun de ces nouveaux fichiers ; le build global échoue sur une directive `@ts-expect-error` devenue inutile dans `financial-charts.tsx:2`, fichier d’un autre agent. Le lead est informé. Les agrégats en pied de colonne sont déjà représentés dans AdvancedTable selon le lead.

Toutes les nouvelles familles fonctionnelles observées et explicitement signalées par cet audit ont maintenant un spécimen ou une attribution au lead/graphs/table_resize. Cela ne signifie ni reconstruction exhaustive à l’identique des maquettes, ni toutes les animations originales vérifiées. Les limites restantes sont celles documentées : fonctionnement local, fixtures et simulation, adaptation visuelle et variantes de construction à arbitrer en QA. Aucun manque supplémentaire n’est affirmé sans source observée.
