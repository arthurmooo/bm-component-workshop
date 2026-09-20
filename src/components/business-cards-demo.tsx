import { ActionFeedback } from "./ui/action-feedback";
import { AnimatedReveal } from "./ui/animated-reveal";
import { AppSelect } from "./ui/app-select";
import { useState } from "react";
import {
  Check,
  Copy,
  FileText,
  Globe,
  Link2,
  Pencil,
  ShieldCheck,
  Star,
} from "lucide-react";
import "./business-cards-demo.css";
const euro = (n: number) => n.toLocaleString("fr-FR") + " €";
export function SubscriptionDemo() {
  const [yearly, setYearly] = useState(false),
    [detail, setDetail] = useState<string | null>(null);
  return (
    <section className="business-card subscription-demo">
      <header>
        <div>
          <h3>Abonnement & facturation</h3>
          <p>Exemple de forfait et de son historique.</p>
        </div>
        <button aria-pressed={yearly} onClick={() => setYearly(!yearly)}>
          {yearly ? "Annuel" : "Mensuel"}
        </button>
      </header>
      <article className="subscription-plan">
        <div>
          <span className="business-logo">
            <ShieldCheck size={17} />
          </span>
          <span>
            <strong>Équipe</strong>
            <small>
              {yearly ? "1 490 € / an" : "149 € / mois"} · Renouvellement le 15
              octobre
            </small>
          </span>
          <b>Actuel</b>
        </div>
        <dl>
          <div>
            <dt>100 k</dt>
            <dd>Appels / mois</dd>
          </div>
          <div>
            <dt>3 M</dt>
            <dd>Tokens / mois</dd>
          </div>
          <div>
            <dt>50</dt>
            <dd>Membres</dd>
          </div>
        </dl>
      </article>
      <h4>Historique des factures</h4>
      <div className="subscription-history">
        {[
          ["Septembre 2026", "En attente", "149 €"],
          ["Août 2026", "Réglée", "149 €"],
          ["Juillet 2026", "Réglée", "149 €"],
        ].map(([date, status, price]) => (
          <div key={date}>
            <span>{date}</span>
            <b className={status === "Réglée" ? "paid" : "pending"}>{status}</b>
            <strong>{price}</strong>
            <button
              aria-label={`Voir la facture ${date}`}
              onClick={() => setDetail(detail === date ? null : date)}
            >
              <FileText size={13} />
            </button>
          </div>
        ))}
      </div>
      {detail && (
        <div className="business-detail" role="status">
          <strong>Facture · {detail}</strong>
          <p>Forfait Équipe · 149 € · Document fictif, aucun paiement.</p>
        </div>
      )}
      <footer>
        Modification d’affichage uniquement · aucun abonnement réel.
      </footer>
    </section>
  );
}
const answers = {
  Rassurant:
    "Le dossier Atlas avance comme prévu. Les trois pièces principales sont disponibles et la synthèse sera prête pour le comité du 18 septembre.",
  Factuel:
    "Atlas : 3 pièces disponibles, 2 validations reçues. Comité le 18 septembre. Synthèse en préparation.",
};
export function SourcedAnswerDemo() {
  const [tone, setTone] = useState<keyof typeof answers>("Rassurant"),
    [text, setText] = useState(answers.Rassurant),
    [editing, setEditing] = useState(false),
    [sources, setSources] = useState(false),
    [copied, setCopied] = useState(false);
  return (
    <section className="business-card sourced-answer">
      <header>
        <div>
          <h3>Assistant · Dossier Atlas</h3>
          <p>Réponse préparée à partir des pièces du dossier.</p>
        </div>
        <Star size={16} />
      </header>
      <div className="answer-question">
        <img src="./avatars/alice.svg" alt="" />
        <span>Où en est la préparation du comité ?</span>
      </div>
      <p className="answer-summary">
        La préparation est en cours. Les pièces principales sont réunies, deux
        validations sont reçues.
      </p>
      <button
        className="answer-sources"
        aria-expanded={sources}
        onClick={() => setSources(!sources)}
      >
        <Link2 size={12} />3 sources de démonstration {sources ? "−" : "+"}
      </button>
      <AnimatedReveal open={sources}>
        <ul className="answer-source-list">
          {[
            "Présentation société.pdf",
            "Validation financière · 14 septembre",
            "Calendrier du comité · 18 septembre",
          ].map((v) => (
            <li key={v}>
              <FileText size={12} />
              {v}
            </li>
          ))}
        </ul>
      </AnimatedReveal>
      <div className="answer-facts">
        <div>
          <small>Pièces</small>
          <strong>3 disponibles</strong>
        </div>
        <div>
          <small>Validations</small>
          <strong>2 / 3 reçues</strong>
        </div>
        <div>
          <small>Comité</small>
          <strong>18 septembre</strong>
        </div>
        <div>
          <small>Actualisation</small>
          <strong>Il y a 5 min</strong>
        </div>
      </div>
      <div className="answer-alert">
        <ShieldCheck size={15} />
        <span>
          <strong>Un point reste à confirmer</strong>La validation juridique
          n’est pas encore reçue.
        </span>
      </div>
      <div className="answer-tone">
        <strong>Proposition de réponse</strong>
        <div>
          {Object.keys(answers).map((t) => (
            <button
              key={t}
              aria-pressed={tone === t}
              onClick={() => {
                setTone(t as keyof typeof answers);
                setText(answers[t as keyof typeof answers]);
                setCopied(false);
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      {editing ? (
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setCopied(false);
          }}
          aria-label="Réponse préparée"
        />
      ) : (
        <blockquote>{text}</blockquote>
      )}
      <div className="answer-actions">
        <button onClick={() => setEditing(!editing)}>
          {editing ? <Check size={12} /> : <Pencil size={12} />}{" "}
          {editing ? "Terminer" : "Éditer"}
        </button>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text);
              setCopied(true);
            } catch {
              setCopied(false);
              setEditing(true);
            }
          }}
        >
          <ActionFeedback state={copied?"copied":"idle"} icon={copied?<Check size={12}/>:<Copy size={12}/>} text={copied?"Copié":"Copier"}/>
        </button>
      </div>
      <footer>
        Réponse fictive, sources illustratives · aucun envoi ni appel IA.
      </footer>
    </section>
  );
}
export function GoalDetailDemo() {
  const [current, setCurrent] = useState(68000),
    [expanded, setExpanded] = useState(false);
  const goal = 100000,
    remaining = goal - current;
  return (
    <section className="business-card goal-detail">
      <header>
        <div>
          <h3>Réserve d’investissement</h3>
          <p>Objectif de trésorerie · Décembre 2026</p>
        </div>
        <span className="business-logo">
          <Globe size={17} />
        </span>
      </header>
      <p>
        Constituer une réserve pour financer les projets à venir.
        {expanded &&
          " La contribution mensuelle indicative répartit simplement le montant restant sur les quatre mois de démonstration."}
      </p>
      <button
        className="goal-more"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Réduire" : "En savoir plus"}
      </button>
      <div className="goal-main">
        <strong>{euro(current)}</strong>
        <span>sur {euro(goal)}</span>
      </div>
      <div
        className="goal-track"
        role="progressbar"
        aria-label="Progression de l’objectif"
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-valuenow={current}
      >
        <i style={{ width: (current / goal) * 100 + "%" }} />
      </div>
      <dl>
        {[
          ["Objectif", euro(goal)],
          ["À constituer", euro(remaining)],
          ["Échéance", "31 déc. 2026"],
          ["Mois restants", "4"],
          ["Contribution mensuelle", euro(Math.ceil(remaining / 4))],
          ["Progression", Math.round((current / goal) * 100) + " %"],
        ].map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <label className="goal-control">
        Montant constitué
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={current}
          onChange={(e) => setCurrent(Number(e.target.value))}
        />
      </label>
      <footer>
        Simulation arithmétique · montants fictifs, sans rendement.
      </footer>
    </section>
  );
}
export function RatedIntegrationsDemo() {
  const [q, setQ] = useState(""),
    [order, setOrder] = useState("Populaires"),
    [connected, setConnected] = useState<string[]>([]);
  const apps = [
    { name: "Notion", type: "Documents", rating: 4.7, symbol: "N" },
    { name: "Linear", type: "Projets", rating: 4.8, symbol: "L" },
    { name: "Google Meet", type: "Réunions", rating: 4.5, symbol: "M" },
    { name: "Figma", type: "Design", rating: 4.9, symbol: "F" },
  ];
  const visible = apps
    .filter((a) =>
      (a.name + " " + a.type).toLowerCase().includes(q.toLowerCase()),
    )
    .sort((a, b) => (order === "Note" ? b.rating - a.rating : 0));
  return (
    <section className="business-card rated-integrations">
      <header>
        <div>
          <h3>Connecter une intégration</h3>
          <p>Choisissez les outils utiles à votre espace.</p>
        </div>
      </header>
      <div className="rated-search">
        <input
          aria-label="Rechercher une intégration"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher…"
        />
        <AppSelect
          aria-label="Trier les intégrations"
          value={order}
          onValueChange={(e) => setOrder(e)}
        >
          <option>Populaires</option>
          <option>Note</option>
        </AppSelect>
      </div>
      <div className="rated-grid">
        {visible.map((a) => (
          <article key={a.name}>
            <div>
              <span className="business-logo">{a.symbol}</span>
              <span>
                <strong>{a.name}</strong>
                <small>{a.type}</small>
              </span>
              <b>Gratuit</b>
            </div>
            <footer>
              <span>
                <Star size={11} />
                {a.rating}
              </span>
              <button
                aria-pressed={connected.includes(a.name)}
                onClick={() =>
                  setConnected(
                    connected.includes(a.name)
                      ? connected.filter((n) => n !== a.name)
                      : [...connected, a.name],
                  )
                }
              >
                <ActionFeedback state={connected.includes(a.name)?"connected":"idle"} icon={connected.includes(a.name)?<Check size={13}/>:undefined} text={connected.includes(a.name)?"Connecté":"Connecter"}/>
              </button>
            </footer>
          </article>
        ))}
      </div>
      {!visible.length && <p>Aucune intégration correspondante.</p>}
      <footer>Notes fictives · connexions simulées localement.</footer>
    </section>
  );
}
