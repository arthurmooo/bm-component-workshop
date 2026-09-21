import { StatisticalChartsDemo } from "./components/statistical-charts";
import { FinancialChartsDemo } from "./components/financial-charts";
import { MediaNodeInspectorDemo } from "./components/extended-interactions";
import { CollaborationPresenceDemo } from "./components/extended-interactions";
import { VoicePromptDemo } from "./components/extended-interactions";
import { AgentNetworkDemo } from "./components/agent-diagnostics-demo";
import { ContextDiagnosticDemo } from "./components/agent-diagnostics-demo";
import { RuleBuilderDemo } from "./components/rule-builder-demo";
import { RatedIntegrationsDemo } from "./components/business-cards-demo";
import { GoalDetailDemo } from "./components/business-cards-demo";
import { SourcedAnswerDemo } from "./components/business-cards-demo";
import { SubscriptionDemo } from "./components/business-cards-demo";
import { AgentSupervisionDemo } from "./components/agent-supervision";
import { InsightCardsDemo } from "./components/insight-cards-demo";
import { PaymentCardDemo } from "./components/payment-card-demo";
import { FormBuilderDemo } from "./components/form-builder-demo";
import { PolicyDemo } from "./components/policy-demo";
import { WorkflowTemplateDemo } from "./components/task-cards-demo";
import { TaskCardsDemo } from "./components/task-cards-demo";
import { InboxDemo } from "./components/inbox-demo";
import { CoachmarkDemo } from "./components/onboarding-demo";
import { OnboardingDemo } from "./components/onboarding-demo";
import { InvitationDemo } from "./components/invitation-demo";
import { QuotaDemo } from "./components/quota-demo";
import { DateStripDemo } from "./components/date-strip-demo";
import { ConditionalWorkflowDemo } from "./components/dependency-graph";
import { DependencyGraphDemo } from "./components/dependency-graph";
import { ContactProfileDemo } from "./components/directory-demo";
import { DirectoryDemo } from "./components/directory-demo";
import { TeamActivityDemo } from "./components/team-activity";
import { RecoveryDemo } from "./components/business-details";
import { ChoiceCardsDemo } from "./components/business-details";
import { InvoiceDemo } from "./components/business-details";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  MousePointer2,
  Tag,
  Columns3,
  Table2,
  ChartNoAxesColumn,
  Upload,
  ChevronRight,
  ArrowUpRight,
  PanelRight,
  Download,
  RotateCcw,
  Check,
  Plus,
  Search,
  ArrowUp,
  Settings2,
  MoveUpRight,
  Command,
  BookOpen,
  Layers2,
  LoaderCircle,
  MessageSquare,
  FileText,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { StatusBadge, statusKeys } from "./components/status-badge";
import { ViewSelector } from "./components/view-selector";
import { LabelPicker, type Label } from "./components/label-picker";
import { ColumnTable } from "./components/column-table";
import { KpiCard } from "./components/kpi-card";
import { UploadCard } from "./components/upload-card";
import { useUploadDemo } from "./components/use-upload-demo";
import { FiltersDemo, DrawerDemo, ApprovalDemo } from "./components/panels-demo";
import { ChartsDemo } from "./components/charts-demo";
import { KanbanDemo, DocumentKanbanDemo } from "./components/kanban-demo";
import { PromptDemo, PromptActionsDemo, AttachmentDemo, FollowupDemo } from "./components/prompt-demo";
import { SimulationDemo } from "./components/simulation-demo";
import { AdvancedTableDemo } from "./components/advanced-table";
import { NavigationDemo } from "./components/navigation-demo";
import { ImportDemo } from "./components/import-demo";
import { WorkCardsDemo, AlertCardsDemo } from "./components/work-cards-demo";
import { AgentCatalogDemo, IntegrationRowsDemo, ShareDemo, ConnectionPopoverDemo } from "./components/agent-catalog-demo";
import { WorkflowDemo, ExecutionJournalDemo } from "./components/workflow-demo";
import { PlanningDemo, CalendarDemo } from "./components/planning-demo";
import { FormDemo, SettingsDemo, EditorDemo } from "./components/forms-demo";
import { ComparisonChartsDemo } from "./components/comparison-charts";
import { MapDemo } from "./components/map-demo";
import { MicroInteractionsDemo, ContextMenuDemo, NotificationDemo, EmptyStateDemo } from "./components/micro-interactions-demo";
import { PermissionsDemo } from "./components/permissions-demo";
import { WidgetGridDemo } from "./components/widget-grid-demo";
import { AgendaCardsDemo } from "./components/agenda-cards";
const modules = [
  {
    id: "buttons",
    title: "Boutons",
    group: "Fondations",
    icon: MousePointer2,
    caption: "Une commande juste à sa place.",
    description:
      "Surfaces discrètes, relief court et sélection légère. Les tailles restent stables pendant l’action.",
    source: "Saisie IA et outils",
    file: "buttons.jpg",
    link: "https://x.com/i/status/2065117631796154769",
    details: [
      "Hauteur 30 px · icône 15 px · rayon 8 px",
      "Contour fin et reflet intérieur sur les surfaces pleines",
      "Chargement, désactivation et confirmation sans saut de largeur",
    ],
  },
  {
    id: "badges",
    title: "Badges de statut",
    group: "Fondations",
    icon: Tag,
    caption: "L’état se lit en un regard.",
    description:
      "Sept statuts avec un libellé et une icône. La couleur accompagne la lecture.",
    source: "Microcomposants et éditeur",
    file: "badges.jpg",
    link: "https://x.com/i/status/2094787302967169266",
    details: [
      "Hauteur 24 px · texte 12 px · icône 14 px",
      "Fond teinté pâle, premier plan contrasté",
      "Les libellés peuvent s’allonger sans couper le sens",
    ],
  },
  {
    id: "segments",
    title: "Sélecteur de vue",
    group: "Fondations",
    icon: Columns3,
    caption: "Deux vues, une même surface.",
    description:
      "Le bouton sélectionné glisse dans son réceptacle. Les rayons et le relief sont emboîtés.",
    source: "Kanban documentaire",
    file: "segments.jpg",
    link: "https://x.com/i/status/2082486176074829875",
    details: [
      "Hauteur 36 px · deux cellules de 40 px",
      "Enveloppe rayon 12 px, sélection 9 px",
      "Flèches du clavier et état actif annoncé",
    ],
  },
  {
    id: "labels",
    title: "Dropdown · labels",
    group: "Interactions",
    icon: Plus,
    caption: "Chercher. Choisir. Créer.",
    description:
      "La recherche devient création de label, puis choix de couleur. Les tags accompagnent chaque changement.",
    source: "Dejv · Add new item",
    file: "labels.mp4",
    link: "https://x.com/dejvdesign/status/2092547295950618961/video/1",
    details: [
      "Menu 252 px · lignes 30 px · tags 23 px",
      "Hauteur animée entre recherche et choix de couleur",
      "Saisie, flèches, Entrée, Échap ; sélection multiple et création",
    ],
  },
  {
    id: "table",
    title: "Dropdown · tableau",
    group: "Interactions",
    icon: Table2,
    caption: "Le menu agit sur la donnée.",
    description:
      "Triez, déplacez, masquez ou redimensionnez une colonne. Chaque responsable possède un avatar.",
    source: "Louis · Table menu dropdown",
    file: "table.mp4",
    link: "https://x.com/louisnstudio/status/2097341066857066784/video/1",
    details: [
      "Menu 220 px · lignes 29 px · trois groupes d’actions",
      "Poignées de largeur à la souris et au clavier · 120–520 px",
      "Actions impossibles désactivées ; réinitialisation disponible",
    ],
  },
  {
    id: "kpi",
    title: "Carte KPI",
    group: "Compositions",
    icon: ChartNoAxesColumn,
    caption: "Une hiérarchie en deux couches.",
    description:
      "L’enveloppe porte le titre. La surface intérieure rassemble le chiffre, le delta et la progression.",
    source: "Cadence équipe et indicateurs",
    file: "kpi.jpg",
    link: "https://x.com/i/status/2092991035244958195",
    details: [
      "Carte 340 px · rayons extérieur 24 px, intérieur 18 px",
      "Chiffre 44 px · delta fin · barre hachurée",
      "Valeurs normales, baisse, zéro et chargement",
    ],
  },
  {
    id: "upload",
    title: "Transfert de fichier",
    group: "Compositions",
    icon: Upload,
    caption: "Un mouvement, du début à la fin.",
    description:
      "Le fond et la barre progressent ensemble. La pause neutralise la couleur ; la réussite révèle les actions.",
    source: "CreateUI · File upload",
    file: "upload.mp4",
    link: "https://x.com/i/status/2096962716036472894",
    details: [
      "Carte 440 px · rayon 18 px · icône de fichier 42 px",
      "Progression, pause, reprise, interruption, réussite et annulation",
      "Simulation locale : aucun fichier envoyé ; CSV de démonstration téléchargeable",
    ],
  },
  {"id": "filters", "title": "Panneau de filtres", "group": "Interactions", "caption": "Choisir, affiner, voir immédiatement.", "description": "Groupes de puces, plafond de montant et responsabilité. Le compteur et la liste reflètent les critères.", "source": "Formulaire de filtres", "file": "filters.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Choix multiples et étape unique", "Compteur réel sur six sociétés fictives", "Filtrage instantané et réinitialisation"], "icon": Settings2},
  {"id": "drawer", "title": "Drawer de détail", "group": "Compositions", "caption": "Le détail garde son contexte.", "description": "Identité fixe, trois onglets et corps défilant. Le tableau reste derrière le panneau.", "source": "Drawer · propriétés et commentaires", "file": "drawer-comments.webp", "link": "references/drawer-comments.webp", "details": ["Identité et propriétés fixes, corps défilant", "Fil d’activité, notes et aperçu des documents", "Navigation entre dossiers, Échap et retour du focus"], "icon": PanelRight},
  {"id": "approvals", "title": "Approbations & journal", "group": "Compositions", "caption": "Une facture, un circuit, votre décision.", "description": "Facture fournisseur, société facturée et pièce consultable. Circuit à deux étapes, conséquence explicite de la décision et historique repliable.", "source": "Approbation financière", "file": "approvals.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Objet, montant TTC et fournisseur identifiés", "Motif obligatoire pour refuser", "Simulation locale, aucune transaction"], "icon": Check},
  {"id": "charts", "title": "Graphiques", "group": "Graphiques", "caption": "Des données, une lecture précise.", "description": "Courbes fines, hachures et formes de pipeline. Axes et unités explicites.", "source": "Cadence équipe et indicateurs", "file": "charts.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Données fictives, graduations et légende", "Valeurs au survol et au clavier", "Variantes et états vides"], "icon": ChartNoAxesColumn},
  {"id": "kanban", "title": "Kanban · deals", "group": "Compositions", "caption": "Chaque carte garde ses repères.", "description": "Société, montant, probabilité et échéance. Les comptes suivent les déplacements.", "source": "Kanban deals", "file": "kanban.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Glisser-déposer et commandes clavier", "Montants et compteurs par colonne", "Réinitialisation disponible"], "icon": Columns3},
  {"id": "documents", "title": "Kanban · documents", "group": "Compositions", "caption": "Du document à la signature.", "description": "Cartes documentaires par étape avec progression et identité du fichier.", "source": "Kanban documentaire", "file": "documents.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Cartes et colonnes documentaires", "Déplacement entre étapes", "Compteurs actualisés"], "icon": FileText},
  {"id": "prompt", "title": "Compositeur IA", "group": "IA & documents", "caption": "Un espace pour formuler.", "description": "Saisie multiligne, sources et modes compacts dans une surface arrondie.", "source": "Saisie IA et outils", "file": "prompt.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Saisie et pièces jointes locales", "Sources sélectionnables et modes", "Simulation d’envoi avec arrêt"], "icon": MessageSquare},
  {"id": "attachments", "title": "Pièces jointes", "group": "IA & documents", "caption": "Le fichier conserve son identité.", "description": "Icône, nom et type dans une carte légère intégrée à la saisie.", "source": "Prompt documentaire", "file": "attachments.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Noms longs, taille et retrait", "Ajout de fichiers locaux", "Aucun fichier envoyé"], "icon": FileText},
  {"id": "actions", "title": "Tuiles d’actions", "group": "IA & documents", "caption": "Quatre intentions distinctes.", "description": "Icônes fines, titres courts et descriptions dans une grille de tuiles.", "source": "Prompt documentaire", "file": "actions.jpg", "link": "../../08-analyse-composants-20260915/index.html", "details": ["Créer, trouver, rechercher et coder", "Activation clavier", "Disposition adaptative"], "icon": Plus},
  {"id": "simulation", "title": "Simulation financière", "group": "Graphiques", "caption": "Hypothèses visibles, résultat calculé.", "description": "Paramètres modifiables et calcul mensuel Capital, versements, horizon et rendement Résultat fictif, aucune promesse de performance.", "source": "Simulation investissement", "file": "simulation.jpg", "link": "../../06-bookmarks-x-20260915/media/2095855961781019129/01.jpg", "details": ["Paramètres modifiables et calcul mensuel", "Capital, versements, horizon et rendement", "Résultat fictif, aucune promesse de performance"], "icon": ChartNoAxesColumn},
  {"id": "data-table", "title": "Table · cellules & groupes", "group": "Interactions", "caption": "Sélectionner, regrouper, parcourir.", "description": "Recherche, pagination et sélection multiple Groupes repliables et totaux Archivage local avec annulation.", "source": "CRM dense sombre", "file": "data-table.jpg", "link": "../../06-bookmarks-x-20260915/media/2095557355777745393/01.jpg", "details": ["Recherche, pagination et sélection multiple", "Groupes repliables et totaux", "Archivage local avec annulation"], "icon": Layers2},
  {"id": "navigation", "title": "Navigation compacte", "group": "Fondations", "caption": "Les repères restent à portée.", "description": "Sections, favoris et compteurs Réduction en rail et recherche Onglets et fil d’Ariane.", "source": "Sidebar CRM", "file": "navigation.jpg", "link": "../../06-bookmarks-x-20260915/media/2099121946437071193/02.jpg", "details": ["Sections, favoris et compteurs", "Réduction en rail et recherche", "Onglets et fil d’Ariane"], "icon": Layers2},
  {"id": "import", "title": "Import & correspondance", "group": "IA & documents", "caption": "Du fichier à la donnée.", "description": "Dépôt CSV, sélection et modèle Correspondance Société / Montant Validation et aperçu avant confirmation.", "source": "Import de documents", "file": "import.jpeg", "link": "../../04-collecte-locale-20260915/images/local-035.jpeg", "details": ["Dépôt CSV, sélection et modèle", "Correspondance Société / Montant", "Validation et aperçu avant confirmation"], "icon": Layers2},
  {"id": "inbox", "title": "Cartes de travail · inbox", "group": "Compositions", "caption": "Un sujet, son contexte, ses actions.", "description": "Enveloppe, auteur, priorité et contenu Développer, marquer lu et actions locales Métadonnées discrètes et actions compactes.", "source": "Neom inbox", "file": "inbox.jpg", "link": "../../01-dashboards/neom-inbox.jpg", "details": ["Enveloppe, auteur, priorité et contenu", "Développer, marquer lu et actions locales", "Métadonnées discrètes et actions compactes"], "icon": Layers2},
  {"id": "alerts", "title": "Alertes & surfaces", "group": "Compositions", "caption": "Une gravité lisible sans bruit.", "description": "Surfaces emboîtées Neutre, avertissement et critique État sans alerte.", "source": "Resource risk", "file": "alerts.jpg", "link": "../../06-bookmarks-x-20260915/media/2094440844871045236/03.jpg", "details": ["Surfaces emboîtées", "Neutre, avertissement et critique", "État sans alerte"], "icon": Layers2},
  {"id": "agents", "title": "Catalogue d’agents", "group": "IA & documents", "caption": "Découvrir par usage.", "description": "Catégories et recherche Cartes avec visuel et intégrations Ajout local réversible et partage simulé.", "source": "Agents, apps et partage", "file": "agents.jpg", "link": "../../06-bookmarks-x-20260915/media/2098757799174132155/01.jpg", "details": ["Catégories et recherche", "Cartes avec visuel et intégrations", "Ajout local réversible et partage simulé"], "icon": Layers2},
  {"id": "integrations", "title": "Connexions & intégrations", "group": "IA & documents", "caption": "Chaque outil, son état.", "description": "Lignes de connexions et états Actions locales réversibles Aucune autorisation externe accordée.", "source": "Exécution IA et connexions", "file": "integrations.jpg", "link": "../../06-bookmarks-x-20260915/media/2062608607192232445/02.jpg", "details": ["Lignes de connexions et états", "Actions locales réversibles", "Aucune autorisation externe accordée"], "icon": Layers2},
  {"id": "workflow", "title": "Canvas de workflow", "group": "IA & documents", "caption": "Lire et inspecter le déroulement.", "description": "Nœuds et relations explicites Inspection d’étape Exécution simulée, pause et reprise.", "source": "Canvas workflow et inspecteur", "file": "workflow.jpg", "link": "../../06-bookmarks-x-20260915/media/2084947115751403729/01.jpg", "details": ["Nœuds et relations explicites", "Inspection d’étape", "Exécution simulée, pause et reprise"], "icon": Layers2},
  {"id": "execution", "title": "Journal d’exécution", "group": "IA & documents", "caption": "Le déroulement reste lisible.", "description": "Étapes et états progressifs Journal et temps associés Simulation locale.", "source": "Exécution IA et connexions", "file": "execution.jpg", "link": "../../06-bookmarks-x-20260915/media/2062608607192232445/04.jpg", "details": ["Étapes et états progressifs", "Journal et temps associés", "Simulation locale"], "icon": Layers2},
  {"id": "planning", "title": "Planning & Gantt", "group": "Compositions", "caption": "Le temps devient une mesure.", "description": "Déplacer et redimensionner Pas explicite, bornes et accès clavier Vue journée et Gantt.", "source": "Timeline planification", "file": "planning.jpeg", "link": "../../04-collecte-locale-20260915/images/local-021.jpeg", "details": ["Déplacer et redimensionner", "Pas explicite, bornes et accès clavier", "Vue journée et Gantt"], "icon": Layers2},
  {"id": "calendar", "title": "Calendrier", "group": "Compositions", "caption": "Une même échéance, plusieurs vues.", "description": "Semaine et mois Édition d’événements et durée Déplacement et clavier.", "source": "Calendrier de projet", "file": "calendar.jpeg", "link": "../../04-collecte-locale-20260915/images/local-027.jpeg", "details": ["Semaine et mois", "Édition d’événements et durée", "Déplacement et clavier"], "icon": Layers2},
  {"id": "forms", "title": "Formulaire & étapes", "group": "Interactions", "caption": "Avancer sans perdre sa saisie.", "description": "Champs, radio, montant et date Validation par étape et récapitulatif Création locale de démonstration.", "source": "Formulaire et étapes", "file": "forms.webp", "link": "../../02-composants/recrutement-formulaire-et-etapes.webp", "details": ["Champs, radio, montant et date", "Validation par étape et récapitulatif", "Création locale de démonstration"], "icon": Layers2},
  {"id": "settings", "title": "Réglages d’apparence", "group": "Interactions", "caption": "Les préférences se voient.", "description": "Thèmes et densité sur aperçu Switch et couleurs d’accent Aucun réglage système modifié.", "source": "Réglages comparés", "file": "settings.png", "link": "../../06-bookmarks-x-20260915/media/2094383840752218204/01.png", "details": ["Thèmes et densité sur aperçu", "Switch et couleurs d’accent", "Aucun réglage système modifié"], "icon": Layers2},
  {"id": "editor", "title": "Éditeur de message", "group": "IA & documents", "caption": "Un brouillon bien composé.", "description": "Destinataire, objet et texte Mise en forme directe Copie, aperçu et confirmation d’effacement.", "source": "Composer email", "file": "editor.jpg", "link": "../../06-bookmarks-x-20260915/media/2095040379968262189/01.jpg", "details": ["Destinataire, objet et texte", "Mise en forme directe", "Copie, aperçu et confirmation d’effacement"], "icon": Layers2},
  {"id": "comparisons", "title": "Comparaisons & sparklines", "group": "Graphiques", "caption": "Barres horizontales, séries comparatives.", "description": "Barres horizontales, séries comparatives. Échelle commune et mini-historiques. Survol, clavier et vide.", "source": "Analytics commercial", "file": "comparisons.jpg", "link": "../../06-bookmarks-x-20260915/media/2099827615934943627/01-frames/008.93s.jpg", "details": ["Barres horizontales, séries comparatives", "Échelle commune et mini-historiques", "Survol, clavier et vide"],"icon": Layers2},
  {"id": "map", "title": "Carte géographique", "group": "Graphiques", "caption": "Contours géographiques Natural Earth.", "description": "Contours géographiques Natural Earth. Pays actifs et légende. Données fictives et sélection accessible.", "source": "Carte monde analytics", "file": "map.png", "link": "../../04-collecte-locale-20260915/images/local-016.png", "details": ["Contours géographiques Natural Earth", "Pays actifs et légende", "Données fictives et sélection accessible"],"icon": Layers2},
  {"id": "toolbar", "title": "Barre d’édition & tooltips", "group": "Fondations", "caption": "Gras, italique, souligné et alignement.", "description": "Gras, italique, souligné et alignement. Infobulles et focus. Aperçu de texte.", "source": "Microcomposants et éditeur", "file": "toolbar.jpg", "link": "../../06-bookmarks-x-20260915/media/2094787302967169266/04.jpg", "details": ["Gras, italique, souligné et alignement", "Infobulles et focus", "Aperçu de texte"],"icon": Layers2},
  {"id": "context-menu", "title": "Menu documentaire", "group": "Interactions", "caption": "Clic droit et bouton de menu.", "description": "Clic droit et bouton de menu. Actions sur un document fictif. Annulation de la suppression.", "source": "Menu contextuel sur document", "file": "context-menu.jpeg", "link": "../../04-collecte-locale-20260915/images/local-008.jpeg", "details": ["Clic droit et bouton de menu", "Actions sur un document fictif", "Annulation de la suppression"],"icon": Layers2},
  {"id": "notification", "title": "Notifications", "group": "Fondations", "caption": "Notification avec action.", "description": "Notification avec action. Apparition et fermeture. Annonce accessible.", "source": "Microcomposants et éditeur", "file": "notification.jpg", "link": "../../06-bookmarks-x-20260915/media/2094787302967169266/03.jpg", "details": ["Notification avec action", "Apparition et fermeture", "Annonce accessible"],"icon": Layers2},
  {"id": "empty", "title": "Vide & chargement", "group": "Fondations", "caption": "État vide contextualisé.", "description": "État vide contextualisé. Chargement et squelette. Action de création locale.", "source": "Dashboard monochrome", "file": "empty.jpg", "link": "../../06-bookmarks-x-20260915/media/2096912608121290974/01.jpg", "details": ["État vide contextualisé", "Chargement et squelette", "Action de création locale"],"icon": Layers2},
  {"id": "permissions", "title": "Rôles & permissions", "group": "Interactions", "caption": "Choix des rôles.", "description": "Choix des rôles. Cases de permissions. Propriétaire protégé, changements fictifs.", "source": "Rôles et permissions en tableau", "file": "permissions.jpeg", "link": "../../04-collecte-locale-20260915/images/local-030.jpeg", "details": ["Choix des rôles", "Cases de permissions", "Propriétaire protégé, changements fictifs"],"icon": Layers2},
  {"id": "widgets", "title": "Grille de widgets", "group": "Compositions", "caption": "Largeur ajustable.", "description": "Largeur ajustable. Ordre des cartes. Contraintes de grille.", "source": "Grille de widgets", "file": "widgets.mp4", "link": "../../06-bookmarks-x-20260915/media/2096059496812716307/01.mp4", "details": ["Largeur ajustable", "Ordre des cartes", "Contraintes de grille"],"icon": Layers2},
  {"id": "share", "title": "Partage & avatars", "group": "Interactions", "caption": "Groupe d’avatars et accès équipe.", "description": "Groupe d’avatars et accès équipe. Accès par lien en simulation. Aucune publication.", "source": "Agents, apps et partage", "file": "share.jpg", "link": "../../06-bookmarks-x-20260915/media/2098757799174132155/03.jpg", "details": ["Groupe d’avatars et accès équipe", "Accès par lien en simulation", "Aucune publication"],"icon": Layers2},
  {"id": "connection", "title": "Popover de connexion", "group": "Interactions", "caption": "Déclencheur et popover.", "description": "Déclencheur et popover. Connexion locale réversible. Échap et retour du focus.", "source": "Agents, apps et partage", "file": "connection.jpg", "link": "../../06-bookmarks-x-20260915/media/2098757799174132155/04.jpg", "details": ["Déclencheur et popover", "Connexion locale réversible", "Échap et retour du focus"],"icon": Layers2},
  {"id": "followup", "title": "Choix après réponse", "group": "IA & documents", "caption": "Choix de relance.", "description": "Choix de relance. Consigne personnalisée. Continuer et passer.", "source": "Prompt documentaire et validation", "file": "followup.jpg", "link": "../../06-bookmarks-x-20260915/media/2080638654842827228/04.jpg", "details": ["Choix de relance", "Consigne personnalisée", "Continuer et passer"],"icon": Layers2},
  {"id": "agenda", "title": "Cartes d’agenda", "group": "Compositions", "caption": "Date détachée.", "description": "Date détachée. Priorité, heure et résumé. Développer et terminer.", "source": "Neom inbox", "file": "agenda.jpg", "link": "../../01-dashboards/neom-inbox.jpg", "details": ["Date détachée", "Priorité, heure et résumé", "Développer et terminer"],"icon": Layers2},
  {"id": "invoice", "title": "Facture & totaux", "group": "Compositions", "caption": "Lignes, quantité et prix unitaire.", "description": "Lignes, quantité et prix unitaire. Sous-total, TVA et total recalculés. État de paiement simulé.", "source": "Facture & totaux", "file": "invoice.jpeg", "link": "../../04-collecte-locale-20260915/images/local-009.jpeg", "details": ["Lignes, quantité et prix unitaire", "Sous-total, TVA et total recalculés", "État de paiement simulé"], "icon": Layers2},
  {"id": "choice-cards", "title": "Cartes de choix", "group": "Fondations", "caption": "Choix Text / Number.", "description": "Choix Text / Number. Nom et valeur initiale. Validation et création locale.", "source": "Cartes de choix", "file": "choice-cards.jpg", "link": "../../06-bookmarks-x-20260915/media/2095112501403025821/01.jpg", "details": ["Choix Text / Number", "Nom et valeur initiale", "Validation et création locale"], "icon": Layers2},
  {"id": "recovery", "title": "Erreur & récupération", "group": "IA & documents", "caption": "Résumé et logs détaillés.", "description": "Résumé et logs détaillés. Correction simulée. Chargement et résultat.", "source": "Erreur & récupération", "file": "recovery.png", "link": "../../06-bookmarks-x-20260915/media/2060625519771815985/01.png", "details": ["Résumé et logs détaillés", "Correction simulée", "Chargement et résultat"], "icon": Layers2},
  {"id": "team-activity", "title": "Activité d’équipe", "group": "Compositions", "caption": "Mentions, citations et réponses.", "description": "Mentions, citations et réponses. Réactions à compteurs. Événements et demande d’accès.", "source": "Activité d’équipe", "file": "team-activity.jpg", "link": "../../06-bookmarks-x-20260915/media/2092485643897053452/01.jpg", "details": ["Mentions, citations et réponses", "Réactions à compteurs", "Événements et demande d’accès"], "icon": Layers2},
  {"id": "directory", "title": "Répertoire de contacts", "group": "Compositions", "caption": "Cartes identité et score.", "description": "Cartes identité et score. Recherche et tri. Copie et détail.", "source": "Répertoire de contacts", "file": "directory.jpeg", "link": "../../04-collecte-locale-20260915/images/local-031.jpeg", "details": ["Cartes identité et score", "Recherche et tri", "Copie et détail"], "icon": Layers2},
  {"id": "profile", "title": "Fiche de contact", "group": "Compositions", "caption": "Portrait sur bandeau.", "description": "Portrait sur bandeau. Résumé, activité et collègues. Informations et score segmenté.", "source": "Fiche de contact", "file": "profile.jpg", "link": "../../06-bookmarks-x-20260915/media/2099426938645319938/02.jpg", "details": ["Portrait sur bandeau", "Résumé, activité et collègues", "Informations et score segmenté"], "icon": Layers2},
 {"id": "dependencies", "title": "Graphe de dépendances", "group": "IA & documents", "caption": "Nœuds, liens et légende.", "description": "Nœuds, liens et légende. Sélection amont / aval et inspecteur. Zoom et ajustement", "source": "Graphe de dépendances", "file": "dependencies.jpg", "link": "../../06-bookmarks-x-20260915/media/2097699922871013794/01.jpg", "details": ["Nœuds, liens et légende", "Sélection amont / aval et inspecteur", "Zoom et ajustement"], "icon": Layers2},
 {"id": "conditions", "title": "Workflow conditionnel", "group": "IA & documents", "caption": "Quand / seulement si / alors.", "description": "Quand / seulement si / alors. Conditions éditables. Test de passage ou exclusion", "source": "Workflow conditionnel", "file": "conditions.jpeg", "link": "../../04-collecte-locale-20260915/images/local-020.jpeg", "details": ["Quand / seulement si / alors", "Conditions éditables", "Test de passage ou exclusion"], "icon": Layers2},
 {"id": "date-strip", "title": "Dates & assignation", "group": "Compositions", "caption": "Navigation de cinq jours.", "description": "Navigation de cinq jours. Sélection de date. Multi-assignation et retrait", "source": "Dates & assignation", "file": "date-strip.jpg", "link": "../../06-bookmarks-x-20260915/media/2095732566968119645/01.jpg", "details": ["Navigation de cinq jours", "Sélection de date", "Multi-assignation et retrait"], "icon": Layers2},
 {"id": "quota", "title": "Quotas & objectifs", "group": "Compositions", "caption": "Consommation et plafond.", "description": "Consommation et plafond. Objectif et reste à atteindre. Campagne à deux mesures", "source": "Quotas & objectifs", "file": "quota.jpeg", "link": "../../04-collecte-locale-20260915/images/local-011.jpeg", "details": ["Consommation et plafond", "Objectif et reste à atteindre", "Campagne à deux mesures"], "icon": Layers2},
 {"id": "invitation", "title": "Invitation d’équipe", "group": "Compositions", "caption": "Adresses multiples.", "description": "Adresses multiples. Cartes de rôles et département. Invitation simulée", "source": "Invitation d’équipe", "file": "invitation.jpg", "link": "../../06-bookmarks-x-20260915/media/2094274397616140323/03.jpg", "details": ["Adresses multiples", "Cartes de rôles et département", "Invitation simulée"], "icon": Layers2},
 {"id": "onboarding", "title": "Onboarding illustré", "group": "Compositions", "caption": "Carte illustrée.", "description": "Carte illustrée. Pagination. Précédent et suivant", "source": "Onboarding illustré", "file": "onboarding.jpg", "link": "../../06-bookmarks-x-20260915/media/2079533426366136511/01-frames/013.52s.jpg", "details": ["Carte illustrée", "Pagination", "Précédent et suivant"], "icon": Layers2},
 {"id": "coachmark", "title": "Visite guidée", "group": "Compositions", "caption": "Coachmark ancré.", "description": "Coachmark ancré. Étapes et voile. Navigation et fermeture", "source": "Visite guidée", "file": "coachmark.jpg", "link": "../../06-bookmarks-x-20260915/media/2092484251119673503/01-frames/007.01s.jpg", "details": ["Coachmark ancré", "Étapes et voile", "Navigation et fermeture"], "icon": Layers2},
 {"id": "inbox-mail", "title": "Inbox · multicanale", "group": "Compositions", "caption": "E-mail et messagerie instantanée.", "description": "Une enveloppe partagée, deux grammaires distinctes. E-mail éditorial avec pièces jointes. WhatsApp en bulles avec présence et accusés de lecture.", "source": "Inbox · conversation", "file": "inbox-mail.jpg", "link": "../../06-bookmarks-x-20260915/media/2058850571692732712/01.jpg", "details": ["Mode E-mail · objet, corps et pièces jointes", "Mode WhatsApp · bulles, présence et accusés", "Recherche, états de lecture et réponse locale"], "icon": Layers2},
 {"id": "task-cards", "title": "Carte tâche & checklist", "group": "Compositions", "caption": "Image et sous-tâches.", "description": "Image et sous-tâches. Progression recalculée. Priorité, avatars et notes", "source": "Carte tâche & checklist", "file": "task-cards.webp", "link": "../../04-collecte-locale-20260915/images/local-081.webp", "details": ["Image et sous-tâches", "Progression recalculée", "Priorité, avatars et notes"], "icon": Layers2},
 {"id": "workflow-template", "title": "Template de workflow", "group": "Compositions", "caption": "Déclencheur et outils.", "description": "Déclencheur et outils. Exécutions et date. Carte de template", "source": "Template de workflow", "file": "workflow-template.jpeg", "link": "../../04-collecte-locale-20260915/images/local-032.jpeg", "details": ["Déclencheur et outils", "Exécutions et date", "Carte de template"], "icon": Layers2},
 {"id": "policy", "title": "Règle de dépense", "group": "Compositions", "caption": "Seuil et justificatifs requis.", "description": "Seuil et justificatifs requis. Dépense d’essai. Résultat de validation", "source": "Règle de dépense", "file": "policy.jpg", "link": "../../04-collecte-locale-20260915/frames/local-video-08-3.jpg", "details": ["Seuil et justificatifs requis", "Dépense d’essai", "Résultat de validation"], "icon": Layers2},
 {"id": "form-builder", "title": "Constructeur de formulaire", "group": "Compositions", "caption": "Palette de champs.", "description": "Palette de champs. Ordre, libellé et obligation. Aperçu avec validation", "source": "Constructeur de formulaire", "file": "form-builder.webp", "link": "../../02-composants/checkout-editeur.webp", "details": ["Palette de champs", "Ordre, libellé et obligation", "Aperçu avec validation"], "icon": Layers2},
 {"id": "payment-card", "title": "Carte de paiement", "group": "Compositions", "caption": "Numéro fictif masqué.", "description": "Numéro fictif masqué. Afficher, masquer et suspendre. Copie de l’identifiant démo", "source": "Carte de paiement", "file": "payment-card.jpg", "link": "../../06-bookmarks-x-20260915/media/2095077867381981411/01.jpg", "details": ["Numéro fictif masqué", "Afficher, masquer et suspendre", "Copie de l’identifiant démo"], "icon": Layers2},
 {"id": "insights", "title": "Cartes d’analyse", "group": "Compositions", "caption": "Pagination de trois analyses.", "description": "Pagination de trois analyses. Deux séries et métriques calculées. Relance préparée localement", "source": "Cartes d’analyse", "file": "insights.jpg", "link": "../../06-bookmarks-x-20260915/media/2092250905655812121/01.jpg", "details": ["Pagination de trois analyses", "Deux séries et métriques calculées", "Relance préparée localement"], "icon": Layers2},
 {"id": "supervision", "title": "Supervision de sous-agents", "group": "Compositions", "caption": "Branches parallèles.", "description": "Branches parallèles. États et compteurs. Détail, reprise et fin simulées", "source": "Supervision de sous-agents", "file": "supervision.jpg", "link": "../../06-bookmarks-x-20260915/media/2096914349403128128/01-frames/005.57s.jpg", "details": ["Branches parallèles", "États et compteurs", "Détail, reprise et fin simulées"], "icon": Layers2},
 {"id": "subscription", "title": "Abonnement & limites", "group": "Compositions", "caption": "Plan et renouvellement.", "description": "Plan et renouvellement. Trois quotas. Historique de factures", "source": "Abonnement & limites", "file": "subscription.jpg", "link": "../../06-bookmarks-x-20260915/media/2094274397616140323/02.jpg", "details": ["Plan et renouvellement", "Trois quotas", "Historique de factures"], "icon": Layers2},
 {"id": "sourced-answer", "title": "Réponse sourcée", "group": "Compositions", "caption": "Sources et réponse contextuelle.", "description": "Sources et réponse contextuelle. Ton et édition. Copie locale", "source": "Réponse sourcée", "file": "sourced-answer.jpg", "link": "../../06-bookmarks-x-20260915/media/2098705815850963218/01.jpg", "details": ["Sources et réponse contextuelle", "Ton et édition", "Copie locale"], "icon": Layers2},
 {"id": "goal-detail", "title": "Objectif détaillé", "group": "Compositions", "caption": "Courant, cible et reste.", "description": "Courant, cible et reste. Délai et contribution. Activité", "source": "Objectif détaillé", "file": "goal-detail.jpeg", "link": "../../04-collecte-locale-20260915/images/local-023.jpeg", "details": ["Courant, cible et reste", "Délai et contribution", "Activité"], "icon": Layers2},
 {"id": "rated-integrations", "title": "Catalogue d’intégrations", "group": "Compositions", "caption": "Cartes avec note et catégorie.", "description": "Cartes avec note et catégorie. Recherche et tri. Connexion simulée", "source": "Catalogue d’intégrations", "file": "rated-integrations.jpg", "link": "../../06-bookmarks-x-20260915/media/2094274397616140323/04.jpg", "details": ["Cartes avec note et catégorie", "Recherche et tri", "Connexion simulée"], "icon": Layers2},
 {"id": "rule-builder", "title": "Éditeur de règles", "group": "IA & documents", "caption": "Groupes AND / OR imbriqués.", "description": "Groupes AND / OR imbriqués. Opérateurs et valeurs multiples. Branches et résultat de test", "source": "Éditeur de règles", "file": "rule-builder.png", "link": "../../04-collecte-locale-20260915/images/local-036.png", "details": ["Groupes AND / OR imbriqués", "Opérateurs et valeurs multiples", "Branches et résultat de test"], "icon": Layers2},
 {"id": "context-diagnostic", "title": "Diagnostic de contexte", "group": "IA & documents", "caption": "Contexte transmis et requis.", "description": "Contexte transmis et requis. Champs manquants. Correction simulée et historique", "source": "Diagnostic de contexte", "file": "context-diagnostic.jpg", "link": "../../06-bookmarks-x-20260915/media/2098042196624826707/01-frames/006.01s.jpg", "details": ["Contexte transmis et requis", "Champs manquants", "Correction simulée et historique"], "icon": Layers2},
 {"id": "agent-network", "title": "Réseau d’agents", "group": "IA & documents", "caption": "Anomalies et sélection.", "description": "Anomalies et sélection. Inspecteur de six métriques. Zoom et contexte", "source": "Réseau d’agents", "file": "agent-network.jpg", "link": "../../06-bookmarks-x-20260915/media/2098668191446921472/01.jpg", "details": ["Anomalies et sélection", "Inspecteur de six métriques", "Zoom et contexte"], "icon": Layers2},
 {"id": "voice", "title": "Saisie vocale & récents", "group": "IA & documents", "caption": "Voix simulée.", "description": "Voix simulée. Transcription modifiable. Demandes récentes", "source": "Saisie vocale & récents", "file": "voice.jpg", "link": "../../06-bookmarks-x-20260915/media/2094782722841747512/03.jpg", "details": ["Voix simulée", "Transcription modifiable", "Demandes récentes"], "icon": Layers2},
 {"id": "collaboration", "title": "Présence collaborative", "group": "IA & documents", "caption": "Personnes actives.", "description": "Personnes actives. Curseurs et sélection. Présence illustrative", "source": "Présence collaborative", "file": "collaboration.jpg", "link": "../../06-bookmarks-x-20260915/media/2079533426366136511/01-frames/013.52s.jpg", "details": ["Personnes actives", "Curseurs et sélection", "Présence illustrative"], "icon": Layers2},
 {"id": "media-inspector", "title": "Inspecteur de nœud média", "group": "IA & documents", "caption": "Paramètres et déclencheurs.", "description": "Paramètres et déclencheurs. Entrées et sortie JSON. Sélection de nœud", "source": "Inspecteur de nœud média", "file": "media-inspector.jpg", "link": "../../06-bookmarks-x-20260915/media/2095419915494682979/01.jpg", "details": ["Paramètres et déclencheurs", "Entrées et sortie JSON", "Sélection de nœud"], "icon": Layers2},
 {"id": "financial-charts", "title": "Graphiques financiers", "group": "Graphiques", "caption": "Chandeliers et volume.", "description": "Chandeliers et volume. Carnet et profondeur cumulée. Aires empilées et double axe", "source": "Graphiques financiers", "file": "financial-charts.jpg", "link": "../../06-bookmarks-x-20260915/media/2098784334383915025/01-frames/027.04s.jpg", "details": ["Chandeliers et volume", "Carnet et profondeur cumulée", "Aires empilées et double axe"], "icon": Layers2},
 {"id": "statistical-charts", "title": "Graphiques statistiques", "group": "Graphiques", "caption": "Distribution et bulles.", "description": "Distribution et bulles. Arbre et radial. Deux mesures séparées", "source": "Graphiques statistiques", "file": "statistical-charts.jpg", "link": "../../06-bookmarks-x-20260915/media/2094719194302706136/01-frames/040.02s.jpg", "details": ["Distribution et bulles", "Arbre et radial", "Deux mesures séparées"], "icon": Layers2},
];
type Review = { status: "À examiner" | "À revoir" | "Validé"; note: string };
const storageKey = "bm-component-workshop:v1";
const approvedModuleIds = new Set([
  "buttons", "badges", "segments", "labels", "table", "kpi", "upload",
  "filters", "drawer", "charts", "kanban", "documents", "prompt",
  "attachments", "actions", "simulation", "data-table", "navigation",
  "import", "inbox", "alerts", "integrations", "planning", "forms",
  "settings", "map", "toolbar", "context-menu", "notification", "empty",
  "permissions", "widgets", "share", "connection", "followup", "agenda",
  "invoice", "choice-cards", "team-activity", "directory", "profile",
  "date-strip", "quota", "onboarding", "coachmark", "inbox-mail",
  "task-cards", "workflow-template", "financial-charts",
]);
function getReviews(): Record<string, Review> {
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return Object.fromEntries(
      modules
        .filter(
          (m) =>
            approvedModuleIds.has(m.id) ||
            (raw[m.id] &&
              ["À examiner", "À revoir", "Validé"].includes(raw[m.id].status) &&
              typeof raw[m.id].note === "string"),
        )
        .map((m) => [
          m.id,
          approvedModuleIds.has(m.id)
            ? { status: "Validé", note: typeof raw[m.id]?.note === "string" ? raw[m.id].note : "" }
            : raw[m.id],
        ]),
    );
  } catch {
    return Object.fromEntries(
      modules
        .filter((m) => approvedModuleIds.has(m.id))
        .map((m) => [m.id, { status: "Validé", note: "" }]),
    );
  }
}
function download(name: string, text: string, type = "application/json") {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const initialLabels: Label[] = [
  { id: "a", name: "Accessibilité", color: "#438bea" },
  { id: "c", name: "Contenu", color: "#de9b21" },
  { id: "h", name: "Handoff", color: "#697586" },
  { id: "m", name: "Motion", color: "#9963e9" },
  { id: "r", name: "Recherche", color: "#35b98d" },
  { id: "v", name: "Revue visuelle", color: "#ef6570" },
];
function ButtonDemo() {
  const [state, setState] = useState("idle");
  useEffect(() => {
    if (state === "loading") {
      const t = setTimeout(() => setState("done"), 1200);
      return () => clearTimeout(t);
    }
  }, [state]);
  return (
    <div className="button-examples">
      <div className="example-row">
        <span className="example-label">Actions</span>
        <div>
          <Button
            variant="primary"
            className="save-example"
            onClick={() => setState(state === "done" ? "idle" : "loading")}
            disabled={state === "loading"}
          >
            {state === "loading" ? (
              <LoaderCircle className="spin" size={14} />
            ) : state === "done" ? (
              <Check size={14} />
            ) : (
              <Plus size={14} />
            )}{" "}
            {state === "done"
              ? "Enregistré"
              : state === "loading"
                ? "Enregistrement"
                : "Créer un dossier"}
          </Button>
          <Button onClick={() => setState("idle")}>Annuler</Button>
          <Button disabled>Indisponible</Button>
        </div>
      </div>
      <div className="example-row">
        <span className="example-label">Sélection</span>
        <ButtonModes />
      </div>
      <div className="example-row">
        <span className="example-label">Icônes</span>
        <div>
          <Button aria-label="Ajouter" onClick={() => setState("loading")}>
            <Plus size={16} />
          </Button>
          <Button aria-label="Réinitialiser" onClick={() => setState("idle")}>
            <RotateCcw size={15} />
          </Button>
          <span className="quiet">Contour fin. Ombre courte.</span>
        </div>
      </div>
      <span className="sr-only" role="status">
        {state === "done" ? "Dossier de démonstration créé." : ""}
      </span>
    </div>
  );
}
function ButtonModes() {
  const [v, setV] = useState("search");
  return (
    <div>
      <Button
        variant={v === "search" ? "tint" : "ghost"}
        aria-pressed={v === "search"}
        onClick={() => setV("search")}
      >
        <Search size={15} />
        Rechercher
      </Button>
      <Button
        variant={v === "computer" ? "tint" : "ghost"}
        aria-pressed={v === "computer"}
        onClick={() => setV("computer")}
      >
        <MoveUpRight size={15} />
        Ordinateur
      </Button>
    </div>
  );
}
function BadgesDemo() {
  const [long, setLong] = useState(false);
  return (
    <>
      <div className="badge-examples">
        {statusKeys.map((s) => (
          <StatusBadge
            key={s}
            status={s}
            label={
              long && s === "pending"
                ? "En attente de validation client"
                : undefined
            }
          />
        ))}
      </div>
      <div className="canvas-control">
        <label>
          <input
            type="checkbox"
            checked={long}
            onChange={(e) => setLong(e.target.checked)}
          />{" "}
          Tester un libellé long
        </label>
      </div>
    </>
  );
}
function SegmentDemo() {
  const [view, setView] = useState("list");
  return (
    <div className="segment-demo">
      <div className="segment-demo-heading">
        <span>
          Documents <small>3</small>
        </span>
        <ViewSelector value={view} onChange={setView} />
      </div>
      <motion.div
        layout
        className={`document-preview ${view}`}
        role="list"
        aria-label={`Documents en vue ${view === "list" ? "liste" : "Kanban"}`}
      >
        {[
          "Lettre de mission",
          "Présentation société",
          "Synthèse financière",
        ].map((t, i) => (
          <motion.div layout key={t} role="listitem">
            <FileText size={16} />
            <span>{t}</span>
            <span className={`doc-dot dot-${i}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
function LabelsDemo() {
  const [labels, setLabels] = useState(initialLabels),
    [selected, setSelected] = useState(["h", "m"]);
  return (
    <div className="labels-demo">
      <span className="overline">DOSSIER ATLAS</span>
      <h3>Une sélection qui évolue.</h3>
      <LabelPicker
        labels={labels}
        value={selected}
        onChange={setSelected}
        onCreate={(l) => setLabels((prev) => [...prev, l])}
      />
      <p className="canvas-hint">
        Ouvrez « Label », puis cherchez un nom ou créez-en un.
      </p>
    </div>
  );
}
function KpiDemo() {
  const [state, setState] = useState("normal");
  return (
    <>
      <KpiCard
        value={state === "empty" ? 0 : state === "down" ? 32 : 38}
        delta={state === "empty" ? 0 : state === "down" ? -4 : 6}
        loading={state === "loading"}
      />
      <div className="canvas-control segmented-controls">
        {[
          ["normal", "Normal"],
          ["down", "Baisse"],
          ["empty", "Zéro"],
          ["loading", "Chargement"],
        ].map(([s, n]) => (
          <button
            key={s}
            aria-pressed={state === s}
            onClick={() => setState(s)}
          >
            {n}
          </button>
        ))}
      </div>
    </>
  );
}
function UploadDemo() {
  const upload = useUploadDemo();
  return (
    <>
      <UploadCard {...upload} />
      <div className="canvas-control upload-demo-controls">
        <span>Simulation locale</span>
        <button
          disabled={upload.state !== "uploading"}
          onClick={upload.onError}
        >
          Simuler une erreur
        </button>
        <button onClick={upload.reset}>Réinitialiser</button>
      </div>
    </>
  );
}
const demos: Record<string, () => React.JSX.Element> = {
 "statistical-charts": StatisticalChartsDemo,
 "financial-charts": FinancialChartsDemo,
 "media-inspector": MediaNodeInspectorDemo,
 "collaboration": CollaborationPresenceDemo,
 "voice": VoicePromptDemo,
 "agent-network": AgentNetworkDemo,
 "context-diagnostic": ContextDiagnosticDemo,
 "rule-builder": RuleBuilderDemo,
 "rated-integrations": RatedIntegrationsDemo,
 "goal-detail": GoalDetailDemo,
 "sourced-answer": SourcedAnswerDemo,
 "subscription": SubscriptionDemo,
 "supervision": AgentSupervisionDemo,
 "insights": InsightCardsDemo,
 "payment-card": PaymentCardDemo,
 "form-builder": FormBuilderDemo,
 "policy": PolicyDemo,
 "workflow-template": WorkflowTemplateDemo,
 "task-cards": TaskCardsDemo,
 "inbox-mail": InboxDemo,
 "coachmark": CoachmarkDemo,
 "onboarding": OnboardingDemo,
 "invitation": InvitationDemo,
 "quota": QuotaDemo,
 "date-strip": DateStripDemo,
 "conditions": ConditionalWorkflowDemo,
 "dependencies": DependencyGraphDemo,
 "profile": ContactProfileDemo,
 "directory": DirectoryDemo,
 "team-activity": TeamActivityDemo,
 "recovery": RecoveryDemo,
 "choice-cards": ChoiceCardsDemo,
 "invoice": InvoiceDemo,
  buttons: ButtonDemo,
  badges: BadgesDemo,
  segments: SegmentDemo,
  labels: LabelsDemo,
  table: ColumnTable,
  kpi: KpiDemo,
  upload: UploadDemo,
  "comparisons": ComparisonChartsDemo,
  "map": MapDemo,
  "toolbar": MicroInteractionsDemo,
  "context-menu": ContextMenuDemo,
  "notification": NotificationDemo,
  "empty": EmptyStateDemo,
  "permissions": PermissionsDemo,
  "widgets": WidgetGridDemo,
  "share": ShareDemo,
  "connection": ConnectionPopoverDemo,
  "followup": FollowupDemo,
  "agenda": AgendaCardsDemo,

  "simulation": SimulationDemo,
  "data-table": AdvancedTableDemo,
  "navigation": NavigationDemo,
  "import": ImportDemo,
  "inbox": WorkCardsDemo,
  "alerts": AlertCardsDemo,
  "agents": AgentCatalogDemo,
  "integrations": IntegrationRowsDemo,
  "workflow": WorkflowDemo,
  "execution": ExecutionJournalDemo,
  "planning": PlanningDemo,
  "calendar": CalendarDemo,
  "forms": FormDemo,
  "settings": SettingsDemo,
  "editor": EditorDemo,

  filters: FiltersDemo, drawer: DrawerDemo, approvals: ApprovalDemo, charts: ChartsDemo, kanban: KanbanDemo, documents: DocumentKanbanDemo, prompt: PromptDemo, attachments: AttachmentDemo, actions: PromptActionsDemo,
};
export default function App() {
  const [active, setActive] = useState(() =>
      modules.some((m) => m.id === location.hash.slice(1))
        ? location.hash.slice(1)
        : "labels",
    ),
    [reference, setReference] = useState(true),
    [moduleQuery, setModuleQuery] = useState(""),
    [reviews, setReviews] = useState(getReviews),
    [storageError, setStorageError] = useState(false),
    [reset, setReset] = useState(0);
  const mod = modules.find((m) => m.id === active)!,
    Demo = demos[active],
    review = reviews[active] ?? { status: "À examiner", note: "" };
  const validated = Object.values(reviews).filter(
    (r) => r.status === "Validé",
  ).length;
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(reviews));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [reviews]);
  useEffect(() => {
    const onHash = () => {
      if (modules.some((m) => m.id === location.hash.slice(1)))
        setActive(location.hash.slice(1));
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);
  const change = (id: string) => {
    setActive(id);
    location.hash = id;
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const update = (part: Partial<Review>) =>
    setReviews((prev) => ({ ...prev, [active]: { ...review, ...part } }));
  return (
    <div className="workshop">
      <a href="#main" className="skip-link">
        Aller au composant
      </a>
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">
            <Layers2 size={19} />
          </span>
          <div>
            <strong>BM Atelier</strong>
            <span>Bibliothèque de composants</span>
          </div>
        </div>
        <div className="collection-name">
          <span className="collection-dot" />
          Collection 01 <span>{modules.length}</span>
        </div>
        <a className="coverage-link" href="./design-system.html">Socle UI · thème clair ↗</a>
        <a className="coverage-link" href="./coverage.html">Couverture des références ↗</a>
        <label className="module-search"><Search size={13}/><input aria-label="Rechercher un composant" placeholder="Rechercher un composant…" value={moduleQuery} onChange={e=>setModuleQuery(e.target.value)}/></label>
        <nav aria-label="Familles de composants">
          {[...new Set(modules.map(m => m.group))].map((group) => (
            <div className="nav-group" key={group}>
              <h2>{group}</h2>
              {modules
                .filter((m) => m.group === group && m.title.toLocaleLowerCase("fr").includes(moduleQuery.toLocaleLowerCase("fr")))
                .map((m) => (
                  <button
                    className={active === m.id ? "active" : ""}
                    key={m.id}
                    onClick={() => change(m.id)}
                    aria-current={active === m.id ? "page" : undefined}
                  >
                    <m.icon size={15} strokeWidth={1.65} />
                    <span>{m.title}</span>
                    {reviews[m.id]?.status === "Validé" ? (
                      <Check size={12} className="validated-icon" />
                    ) : (
                      <span className="nav-dot" />
                    )}
                  </button>
                ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="collection-progress">
            <span>Votre sélection</span>
            <strong>{validated} / {modules.length}</strong>
            <div>
              <i style={{ width: `${(validated / modules.length) * 100}%` }} />
            </div>
          </div>
          <a
            href="http://127.0.0.1:8766/08-analyse-composants-20260915/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <BookOpen size={14} />
            Analyse des références
            <ArrowUpRight size={12} />
          </a>
          <span className="local-label">
            <i />
            En local · première édition
          </span>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div>
            Collection 01 <ChevronRight size={12} />
            <span>{mod.group}</span>
            <ChevronRight size={12} />
            <strong>{mod.title}</strong>
          </div>
          <Button
            variant="ghost"
            small
            onClick={() =>
              download(
                "bm-atelier-retours.json",
                JSON.stringify(
                  { date: new Date().toISOString(), reviews },
                  null,
                  2,
                ),
              )
            }
          >
            <Download size={13} />
            Exporter mes retours
          </Button>
        </header>
        <main id="main">
          <div className="page-heading">
            <div>
              <div className="overline">
                {mod.group} <span>/</span>{" "}
                {String(modules.indexOf(mod) + 1).padStart(2, "0")}
              </div>
              <h1>{mod.title}</h1>
              <p>{mod.caption}</p>
            </div>
            <span
              className={`review-pill ${review.status === "Validé" ? "approved" : ""}`}
            >
              <i />
              {review.status}
            </span>
          </div>
          <div className="workbench-toolbar">
            <div>
              <span className="live-dot" />
              Aperçu interactif <span className="scale-label">1:1</span>
            </div>
            <div>
              <Button
                variant="ghost"
                small
                aria-label="Réinitialiser le composant"
                onClick={() => setReset((r) => r + 1)}
              >
                <RotateCcw size={13} />
              </Button>
              <Button
                variant={reference ? "default" : "ghost"}
                small
                aria-pressed={reference}
                onClick={() => setReference((v) => !v)}
              >
                <PanelRight size={14} />
                Référence
              </Button>
            </div>
          </div>
          <div className={`workbench ${reference ? "with-reference" : ""}`}>
            <section
              className={`canvas canvas-${active}`}
              aria-label={`Composant ${mod.title}`}
            >
              <span className="specimen-number">
                BM / {String(modules.indexOf(mod) + 1).padStart(2, "0")}
              </span>
              <div className="demo-content" key={`${active}-${reset}`}>
                <Demo />
              </div>
              <span className="specimen-footer">
                {active === "table"
                  ? "Menu sur l’en-tête · faites glisser une séparation pour ajuster la largeur."
                  : "Survolez, cliquez, essayez au clavier."}
              </span>
            </section>
            {reference && (
              <aside className="reference-panel">
                <div className="reference-heading">
                  <span>Référence retenue</span>
                  <ArrowUpRight size={13} />
                </div>
                <a
                  className="source-title"
                  href={mod.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {mod.source}
                </a>
                <div className={`reference-media reference-${active}`}>
                  {mod.file.endsWith(".mp4") ? (
                    <video
                      key={mod.file}
                      src={`${import.meta.env.BASE_URL}references/${mod.file}`}
                      poster={["labels", "table", "upload"].includes(active) ? `${import.meta.env.BASE_URL}references/${active}.jpg` : undefined}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <a
                      href={`${import.meta.env.BASE_URL}references/${mod.file}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}references/${mod.file}`}
                        alt={mod.source}
                      />
                    </a>
                  )}
                </div>
                <p>{mod.description}</p>
                <div className="reference-links">
                  <a
                    className="source-link"
                    href={`${import.meta.env.BASE_URL}references/${mod.file}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agrandir <ArrowUpRight size={12} />
                  </a>
                  <a
                    className="source-link"
                    href={mod.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir la source <ArrowUpRight size={12} />
                  </a>
                </div>
                <div className="reference-note">
                  <span>À comparer</span>Proportions, surfaces, alignements et
                  continuité du mouvement.
                </div>
              </aside>
            )}
          </div>
          <div className="below-workbench">
            <section className="construction">
              <h2>
                <Settings2 size={14} />
                Construction & états
              </h2>
              <ul>
                {mod.details.map((t) => (
                  <li key={t}>
                    <span />
                    {t}
                  </li>
                ))}
              </ul>
              <span className="edition-note">
                Adaptation interactive · v0.1 · à valider visuellement
              </span>
            </section>
            <section className="review-box">
              <div className="review-heading">
                <h2>
                  <MessageSquare size={14} />
                  Votre retour
                </h2>
                <span>
                  {storageError
                    ? "Export conseillé"
                    : "Enregistré dans ce navigateur"}
                </span>
              </div>
              <textarea
                aria-label={`Votre retour sur ${mod.title}`}
                value={review.note}
                onChange={(e) => update({ note: e.target.value })}
                placeholder="Un rayon, un espacement, un mouvement à ajuster…"
              />
              <div className="review-actions">
                <Button
                  small
                  variant={review.status === "À revoir" ? "tint" : "default"}
                  onClick={() => update({ status: "À revoir" })}
                >
                  À revoir
                </Button>
                <Button
                  small
                  variant={review.status === "Validé" ? "tint" : "default"}
                  onClick={() =>
                    update({
                      status:
                        review.status === "Validé" ? "À examiner" : "Validé",
                    })
                  }
                >
                  <Check size={13} />
                  {review.status === "Validé"
                    ? "Validé · annuler"
                    : "Valider ce composant"}
                </Button>
              </div>
              {storageError && (
                <p role="alert">
                  Le navigateur ne permet pas l’enregistrement. Exportez vos
                  retours avant de fermer.
                </p>
              )}
            </section>
          </div>
        </main>
        <footer className="workspace-footer">
          <span>
            Conçu pour être réutilisé. Affiné composant par composant.
          </span>
          <span>
            BM AUTOMATION <span> / </span> 2026
          </span>
        </footer>
      </div>
    </div>
  );
}
