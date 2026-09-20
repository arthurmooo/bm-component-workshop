import { useState } from "react";
import {
  Building2,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Inbox,
  BriefcaseBusiness,
  CalendarDays,
  Settings2,
  ChevronRight,
  ArrowUpRight,
  LayoutGrid,
} from "lucide-react";
import "./navigation-demo.css";
const destinations = [
  { id: "inbox", label: "À traiter", icon: Inbox, count: 8 },
  { id: "companies", label: "Sociétés", icon: Building2, count: 24 },
  { id: "deals", label: "Dossiers", icon: BriefcaseBusiness, count: 12 },
  { id: "calendar", label: "Calendrier", icon: CalendarDays, count: 3 },
];
const content: Record<string, string[]> = {
  inbox: [
    "Valider la lettre de mission",
    "Compléter la fiche Atelier Nord",
    "Relancer Maison Astrée",
  ],
  companies: ["Atelier Nord", "Maison Astrée", "Studio Rivage"],
  deals: [
    "Acquisition · Projet Horizon",
    "Cession · Projet Opaline",
    "Financement · Projet Alto",
  ],
  calendar: [
    "09:30 · Revue des dossiers",
    "11:00 · Échange équipe",
    "14:30 · Présentation du projet",
  ],
  settings: ["Notifications activées", "Vue compacte", "Langue · Français"],
};
export function NavigationDemo() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("companies");
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("Tous");
  const title =
    destinations.find((item) => item.id === active)?.label ?? "Réglages";
  const items = destinations.filter((item) =>
    item.label.toLocaleLowerCase("fr").includes(query.toLocaleLowerCase("fr")),
  );
  const records = content[active];
  return (
    <div
      className={`navigation-demo${collapsed ? " navigation-collapsed" : ""}`}
    >
      <aside
        className="navigation-sidebar"
        aria-label="Navigation de démonstration"
      >
        <div className="navigation-brand">
          <span className="navigation-logo">
            <LayoutGrid size={16} />
          </span>
          <strong aria-hidden={collapsed}>Acme Workspace</strong>
          <button
            title={
              collapsed ? "Déplier la navigation" : "Réduire la navigation"
            }
            aria-label={
              collapsed ? "Déplier la navigation" : "Réduire la navigation"
            }
            aria-expanded={!collapsed}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <PanelLeftOpen size={14} />
            ) : (
              <PanelLeftClose size={14} />
            )}
          </button>
        </div>
        {(
          <label className="navigation-search" inert={collapsed}>
            <Search size={13} />
            <input
              placeholder="Accès rapide…"
              aria-label="Rechercher une destination"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        )}
        <div className="navigation-destinations">
          {items.map((item) => (
            <button
              key={item.id}
              title={collapsed ? item.label : undefined}
              aria-label={item.label}
              aria-current={active === item.id ? "page" : undefined}
              onClick={() => {
                setActive(item.id);
                setTab("Tous");
              }}
            >
              <item.icon size={15} />
              <span aria-hidden={collapsed}>{item.label}</span>
              <small aria-hidden={collapsed}>{item.count}</small>
            </button>
          ))}
          {!items.length && !collapsed && <p>Aucune destination.</p>}
        </div>
        {(
          <div className="navigation-favorites" inert={collapsed}>
            <span>FAVORIS</span>
            <button
              onClick={() => {
                setActive("deals");
                setTab("Tous");
              }}
            >
              <i />
              Projet Horizon
              <ArrowUpRight size={11} />
            </button>
            <button
              onClick={() => {
                setActive("companies");
                setTab("Tous");
              }}
            >
              <i />
              Atelier Nord
              <ArrowUpRight size={11} />
            </button>
          </div>
        )}
        <button
          className="navigation-settings"
          aria-label="Réglages"
          aria-current={active === "settings" ? "page" : undefined}
          onClick={() => {
            setActive("settings");
            setTab("Tous");
          }}
        >
          <Settings2 size={15} />
          <span aria-hidden={collapsed}>Réglages</span>
        </button>
        <div className="navigation-profile">
          <img src="./avatars/alice.svg" alt="" width={25} height={25} />
          {(
            <span aria-hidden={collapsed}>
              <strong>Alice Martin</strong>
              <small>Espace de démonstration</small>
            </span>
          )}
        </div>
      </aside>
      <section className="navigation-content" aria-label={title}>
        <nav aria-label="Fil d’Ariane de démonstration">
          <button
            onClick={() => {
              setActive("companies");
              setTab("Tous");
            }}
          >
            Espace de travail
          </button>
          <ChevronRight size={12} />
          <span aria-current="page">{title}</span>
        </nav>
        <div className="navigation-content-body">
          <h3>{title}</h3>
          <div
            className="navigation-tabs"
            role="tablist"
            aria-label="Filtrer la liste"
          >
            {["Tous", "Mes éléments", "Récents"].map((name, index) => (
              <button
                id={`navigation-tab-${index}`}
                aria-controls="navigation-tab-panel"
                role="tab"
                aria-selected={tab === name}
                tabIndex={tab === name ? 0 : -1}
                key={name}
                onClick={() => setTab(name)}
                onKeyDown={(event) => {
                  if (
                    !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                      event.key,
                    )
                  )
                    return;
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : (index + (event.key === "ArrowRight" ? 1 : -1) + 3) %
                          3;
                  setTab(["Tous", "Mes éléments", "Récents"][next]);
                  document.getElementById(`navigation-tab-${next}`)?.focus();
                }}
              >
                {name}
              </button>
            ))}
          </div>
          <div
            id="navigation-tab-panel"
            role="tabpanel"
            aria-labelledby={`navigation-tab-${["Tous", "Mes éléments", "Récents"].indexOf(tab)}`}
            tabIndex={0}
          >
            {(tab === "Tous"
              ? records
              : tab === "Mes éléments"
                ? records.slice(0, 2)
                : records.slice(-1)
            ).map((record, index) => (
              <div className="navigation-record" key={record}>
                <span className="navigation-record-icon">
                  <Building2 size={14} />
                </span>
                <span>
                  {record}
                  <small>
                    {tab === "Récents"
                      ? "Modifié aujourd’hui"
                      : `${index + 1} élément à consulter`}
                  </small>
                </span>
                <ChevronRight size={12} />
              </div>
            ))}
          </div>
          <p className="navigation-note">
            Navigation et filtres locaux · données fictives
          </p>
        </div>
      </section>
    </div>
  );
}
