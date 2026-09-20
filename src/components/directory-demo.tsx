import { AnimatedReveal } from "./ui/animated-reveal";
import { AppSelect } from "./ui/app-select";
import { useState } from "react";
import {
  Search,
  Mail,
  MapPin,
  Building2,
  Copy,
  ChevronLeft,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";
import "./directory-demo.css";
const people = [
  {
    id: "alice",
    name: "Alice Martin",
    role: "Directrice des opérations",
    company: "Atelier Nord",
    location: "Lyon, France",
    email: "alice@example.com",
    score: 3,
    tag: "Intéressée",
    about:
      "Alice pilote les opérations et coordonne les échanges avec l’équipe projet. Elle participe à la préparation des documents et aux prochaines décisions.",
  },
  {
    id: "paul",
    name: "Paul Laurent",
    role: "Responsable développement",
    company: "Maison Astrée",
    location: "Paris, France",
    email: "paul@example.com",
    score: 2,
    tag: "À contacter",
    about:
      "Paul accompagne le développement de Maison Astrée. Il centralise les questions commerciales et le calendrier des échanges.",
  },
  {
    id: "emma",
    name: "Emma Dubois",
    role: "Directrice produit",
    company: "Studio Rivage",
    location: "Bordeaux, France",
    email: "emma@example.com",
    score: 2,
    tag: "En échange",
    about:
      "Emma organise la feuille de route produit et les validations de l’équipe. Elle partage les retours et prépare les prochaines étapes.",
  },
];
export function ContactProfileDemo() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>("alice");
  const [tab, setTab] = useState("Vue d’ensemble");
  const [notice, setNotice] = useState("");
  const person = people.find((p) => p.id === active);
  const filtered = people.filter((p) =>
    `${p.name} ${p.company} ${p.role}`
      .toLocaleLowerCase("fr")
      .includes(query.toLocaleLowerCase("fr")),
  );
  return (
    <section className="directory-demo" aria-label="Répertoire de contacts">
      <aside>
        <label className="directory-search">
          <Search size={13} />
          <input
            aria-label="Rechercher un contact"
            placeholder="Rechercher…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <span className="directory-count">{filtered.length} contacts</span>
        {filtered.map((p) => (
          <button
            className="directory-person"
            key={p.id}
            aria-pressed={p.id === active}
            onClick={() => {
              setActive(p.id);
              setTab("Vue d’ensemble");
              setNotice("");
            }}
          >
            <img src={`./avatars/${p.id}.svg`} alt="" />
            <span>
              <strong>{p.name}</strong>
              <small>{p.company}</small>
            </span>
          </button>
        ))}
        {!filtered.length && (
          <p className="directory-empty">Aucun contact trouvé.</p>
        )}
      </aside>
      <div className="directory-detail">
        {person ? (
          <>
            <div className="directory-banner" />
            <header className="directory-profile">
              <img
                className="directory-avatar"
                src={`./avatars/${person.id}.svg`}
                alt=""
              />
              <div>
                <h3>{person.name}</h3>
                <p>
                  {person.role} · {person.company}
                </p>
              </div>
              <Button
                small
                variant="ghost"
                aria-label="Fermer la fiche contact"
                onClick={() => setActive(null)}
              >
                <ChevronLeft size={14} />
              </Button>
            </header>
            <div className="directory-tabs">
              {["Vue d’ensemble", "Activité", "Collègues"].map((t) => (
                <button
                  key={t}
                  aria-pressed={tab === t}
                  onClick={() => setTab(t)}
                >
                  {t}
                  {t === "Collègues" && <small>2</small>}
                </button>
              ))}
            </div>
            <div className="directory-content">
              {tab === "Vue d’ensemble" ? (
                <>
                  <h4>Aperçu</h4>
                  <p className="directory-about">{person.about}</p>
                  <h4>Informations</h4>
                  <dl className="directory-fields">
                    <div>
                      <dt>E-mail</dt>
                      <dd>
                        <Mail size={12} />
                        {person.email}
                        <button
                          aria-label={`Copier l’e-mail de ${person.name}`}
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(person.email);
                              setNotice("Adresse e-mail copiée.");
                            } catch {
                              setNotice(
                                "Copie indisponible. Sélectionnez l’adresse dans la fiche.",
                              );
                            }
                          }}
                        >
                          <Copy size={11} />
                        </button>
                      </dd>
                    </div>
                    <div>
                      <dt>Relation</dt>
                      <dd>
                        <span className="directory-tag">{person.tag}</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Entreprise</dt>
                      <dd>
                        <Building2 size={13} />
                        {person.company}
                      </dd>
                    </div>
                    <div>
                      <dt>Fonction</dt>
                      <dd>{person.role}</dd>
                    </div>
                    <div>
                      <dt>Localisation</dt>
                      <dd>
                        <MapPin size={13} />
                        {person.location}
                      </dd>
                    </div>
                    <div>
                      <dt>Priorité de suivi</dt>
                      <dd>
                        <span
                          className="directory-score"
                          role="img"
                          aria-label={`${person.score} sur 3`}
                        >
                          {[1, 2, 3].map((n) => (
                            <i
                              key={n}
                              data-active={n <= person.score}
                              style={{ height: 5 + n * 3 }}
                            />
                          ))}
                        </span>
                        {person.score === 3 ? "Élevée" : "Moyenne"}
                      </dd>
                    </div>
                  </dl>
                  <div className="directory-note">
                    <Check size={13} />
                    Fiche de démonstration · coordonnées fictives
                  </div>
                </>
              ) : tab === "Activité" ? (
                <div className="directory-activity">
                  <p>
                    <span />
                    Aujourd’hui<strong>Fiche consultée</strong>
                  </p>
                  <p>
                    <span />
                    Hier<strong>Documents préparatoires ajoutés</strong>
                  </p>
                  <p>
                    <span />
                    12 septembre<strong>Premier échange avec l’équipe</strong>
                  </p>
                </div>
              ) : (
                <div className="directory-colleagues">
                  {people
                    .filter((p) => p.id !== person.id)
                    .map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActive(p.id);
                          setTab("Vue d’ensemble");
                        }}
                      >
                        <img src={`./avatars/${p.id}.svg`} alt="" />
                        <span>
                          <strong>{p.name}</strong>
                          <small>Contact de démonstration</small>
                        </span>
                      </button>
                    ))}
                </div>
              )}
            </div>
            <footer role="status">{notice}</footer>
          </>
        ) : (
          <div className="directory-no-selection">
            Sélectionnez une personne pour consulter sa fiche.
          </div>
        )}
      </div>
    </section>
  );
}

export function DirectoryDemo() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("name");
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const rows = people
    .map((p, i) => ({
      ...p,
      rating: [4.9, 4.5, 4.8][i],
      deliveries: [512, 487, 503][i],
      onTime: [96, 95, 98][i],
    }))
    .filter((p) =>
      `${p.name} ${p.company}`
        .toLocaleLowerCase("fr")
        .includes(query.toLocaleLowerCase("fr")),
    )
    .sort((a, b) =>
      sort === "rating"
        ? b.rating - a.rating
        : a.name.localeCompare(b.name, "fr"),
    );
  return (
    <section className="directory-cards" aria-label="Cartes du répertoire">
      <header>
        <div>
          <strong>Répertoire de l’équipe</strong>
          <p>{rows.length} personnes · données fictives</p>
        </div>
        <AppSelect
          aria-label="Trier le répertoire"
          value={sort}
          onValueChange={(e) => setSort(e)}
        >
          <option value="name">Par nom</option>
          <option value="rating">Par note</option>
        </AppSelect>
      </header>
      <label className="directory-search">
        <Search size={13} />
        <input
          aria-label="Rechercher dans le répertoire"
          placeholder="Nom ou entreprise…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <div className="directory-card-grid">
        {rows.map((p) => (
          <article key={p.id} className="directory-card">
            <div className="directory-card-identity">
              <img src={`./avatars/${p.id}.svg`} alt="" />
              <span>
                <strong>{p.name}</strong>
                <small>
                  #{p.id.toUpperCase()} · {p.company}
                </small>
              </span>
            </div>
            <p>{p.role}. Coordination et suivi des dossiers de l’équipe.</p>
            <dl>
              <div>
                <dd>{p.rating.toLocaleString("fr")}</dd>
                <dt>Note / 5</dt>
              </div>
              <div>
                <dd>{p.deliveries}</dd>
                <dt>Dossiers</dt>
              </div>
              <div>
                <dd>{p.onTime} %</dd>
                <dt>À temps</dt>
              </div>
            </dl>
            <footer>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(p.email);
                    setNotice(`Adresse de ${p.name} copiée.`);
                  } catch {
                    setNotice(p.email);
                  }
                }}
              >
                <Mail size={11} />
                {p.email}
              </button>
              <button
                aria-expanded={selected === p.id}
                onClick={() => setSelected(selected === p.id ? null : p.id)}
              >
                {selected === p.id ? "Réduire" : "Détails"}
              </button>
            </footer>
            <AnimatedReveal open={selected === p.id}>
              <div className="directory-card-expanded">
                <MapPin size={12} />
                {p.location}
                <span className="directory-tag">{p.tag}</span>
              </div>
            </AnimatedReveal>
          </article>
        ))}
      </div>
      {rows.length === 0 && (
        <p className="directory-empty">Aucune personne trouvée.</p>
      )}
      <p role="status" className="directory-cards-status">
        {notice || "Les scores illustrent la composition de référence."}
      </p>
    </section>
  );
}
