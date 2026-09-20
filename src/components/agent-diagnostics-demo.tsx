import { AnimatedReveal } from "./ui/animated-reveal";
import { DataTable, DataRow } from "./ui/data-table";
import { useId, useState } from "react";
import {
  AlertTriangle,
  Bot,
  Check,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import "./agent-diagnostics-demo.css";
const fields = [
  "customer_id",
  "intent",
  "order_id",
  "authorization_scope",
  "conversation_history",
  "session_metadata",
];
export function ContextDiagnosticDemo() {
  const [fixed, setFixed] = useState(false),
    [expanded, setExpanded] = useState(false);
  return (
    <section className="bm-agent-diagnostic">
      <header>
        <div>
          <Bot size={17} />
          <strong>Router → Billing</strong>
          <span className={fixed ? "healthy" : "critical"}>
            {fixed ? "Contexte complet" : "Contexte dégradé"}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setFixed(false);
            setExpanded(false);
          }}
          aria-label="Réinitialiser le diagnostic"
        >
          <RotateCcw size={14} />
        </button>
      </header>
      <div className="bm-handoff-path">
        <div>
          <Bot size={19} />
          <strong>Router Agent</strong>
          <small>Contexte envoyé</small>
        </div>
        <div className="bm-handoff-metrics">
          <span>
            12,4 KB <small>contexte</small>
          </span>
          <span>
            420 ms <small>latence</small>
          </span>
          <span>
            2 431 <small>tokens</small>
          </span>
          <i className={fixed ? "healthy" : "critical"} />
          <b>{fixed ? "4 sur 4 champs requis" : "3 sur 4 champs requis"}</b>
        </div>
        <div>
          <Bot size={19} />
          <strong>Billing Agent</strong>
          <small>Contexte requis</small>
        </div>
      </div>
      <div className="bm-context-scroll">
        <DataTable>
          <thead>
            <DataRow>
              <th>Champ de contexte</th>
              <th>Envoyé par Router</th>
              <th>Attendu par Billing</th>
              <th>État</th>
            </DataRow>
          </thead>
          <tbody>
            {fields.map((field, i) => {
              const missing = i === 3 && !fixed;
              return (
                <DataRow key={field} className={missing ? "missing" : ""}>
                  <th>{field}</th>
                  <td>{missing ? "Non transmis" : "Présent"}</td>
                  <td>
                    {i < 4 ? "Requis" : i === 4 ? "Facultatif" : "Non utilisé"}
                  </td>
                  <td>
                    <span
                      className={
                        missing ? "critical" : i === 5 ? "neutral" : "healthy"
                      }
                    >
                      {missing ? (
                        <X size={12} />
                      ) : i === 5 ? null : (
                        <Check size={12} />
                      )}{" "}
                      {missing
                        ? "Manquant"
                        : i === 5
                          ? "Inutilisé"
                          : "Conforme"}
                    </span>
                  </td>
                </DataRow>
              );
            })}
          </tbody>
        </DataTable>
      </div>
      <div
        className={`bm-context-alert ${fixed ? "resolved" : ""}`}
        role="status"
      >
        <AlertTriangle size={15} />
        <p>
          {fixed
            ? "Simulation : authorization_scope est maintenant présent. Aucune configuration réelle modifiée."
            : "L’absence de authorization_scope a provoqué un rejet et deux tentatives supplémentaires."}
        </p>
      </div>
      <div className="bm-context-bottom">
        <div>
          <small>Volume du contexte</small>
          <strong>
            12,4 KB <span>3,2× la référence</span>
          </strong>
          <div className="bm-context-meter">
            <i />
          </div>
          <small>
            Référence : 3,9 KB · volume inchangé par cette simulation
          </small>
        </div>
        <button
          type="button"
          className="bm-agent-primary"
          disabled={fixed}
          onClick={() => setFixed(true)}
        >
          {fixed ? "Champ ajouté à la simulation" : "Simuler l’ajout du champ"}
        </button>
      </div>
      <button
        type="button"
        className="bm-context-expand"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        <ChevronRight
          size={14}
          style={{ transform: expanded ? "rotate(90deg)" : undefined }}
        />
        Dernières exécutions fictives
      </button>
      <AnimatedReveal open={expanded}>
        <div className="bm-context-runs">
          {["run_248", "run_247", "run_246"].map((run, i) => (
            <div key={run}>
              <code>{run}</code>
              <span>{i === 2 ? "Terminé" : "Rejeté"}</span>
              <span>{i === 2 ? "3,9" : "12,4"} KB</span>
              <span>{i === 2 ? "180" : "420"} ms</span>
            </div>
          ))}
        </div>
      </AnimatedReveal>
      <footer>Diagnostic de démonstration · aucune exécution externe</footer>
    </section>
  );
}
type Agent = {
  id: string;
  name: string;
  x: number;
  y: number;
  state: "healthy" | "degraded" | "critical";
  runs: string;
  success: string;
  latency: string;
  failures: string;
  cost: string;
  context: string;
};
const agents: Agent[] = [
  {
    id: "customer",
    name: "Customer",
    x: 18,
    y: 160,
    state: "healthy",
    runs: "9 240",
    success: "99,8 %",
    latency: "140 ms",
    failures: "18",
    cost: "42 $",
    context: "1,2 KB",
  },
  {
    id: "router",
    name: "Router",
    x: 185,
    y: 160,
    state: "degraded",
    runs: "9 224",
    success: "94,2 %",
    latency: "820 ms",
    failures: "535",
    cost: "420 $",
    context: "12,4 KB",
  },
  {
    id: "knowledge",
    name: "Knowledge",
    x: 352,
    y: 40,
    state: "degraded",
    runs: "4 201",
    success: "96,4 %",
    latency: "1,8 s",
    failures: "151",
    cost: "284 $",
    context: "8,2 KB",
  },
  {
    id: "billing",
    name: "Billing",
    x: 352,
    y: 160,
    state: "critical",
    runs: "8 142",
    success: "82,1 %",
    latency: "3,4 s",
    failures: "284",
    cost: "984 $",
    context: "12,4 KB",
  },
  {
    id: "support",
    name: "Support",
    x: 352,
    y: 280,
    state: "healthy",
    runs: "2 184",
    success: "99,2 %",
    latency: "620 ms",
    failures: "17",
    cost: "126 $",
    context: "3,2 KB",
  },
  {
    id: "response",
    name: "Response",
    x: 519,
    y: 160,
    state: "healthy",
    runs: "8 024",
    success: "99,8 %",
    latency: "180 ms",
    failures: "16",
    cost: "94 $",
    context: "2,4 KB",
  },
];
const links = [
  ["customer", "router"],
  ["router", "knowledge"],
  ["router", "billing"],
  ["router", "support"],
  ["knowledge", "response"],
  ["billing", "response"],
  ["support", "response"],
];
export function AgentNetworkDemo() {
  const [selected, setSelected] = useState("billing"),
    [filter, setFilter] = useState("Tous"),
    [zoom, setZoom] = useState(1),
    [details, setDetails] = useState(false);
  const uid = useId();
  const agent = agents.find((a) => a.id === selected)!;
  const visible = (a: Agent) =>
    filter === "Tous" ||
    (filter === "Échecs"
      ? a.state === "critical"
      : filter === "Boucles"
        ? ["router", "knowledge"].includes(a.id)
        : a.id === "billing" || a.id === "router");
  return (
    <section className="bm-agent-network">
      <header>
        <div>
          <Bot size={16} />
          <strong>Réseau d’agents</strong>
        </div>
        <span>Workflow Assistance · simulation</span>
      </header>
      <div className="bm-agent-toolbar">
        <div>
          {["Tous", "Échecs", "Boucles", "Perte de contexte"].map((f) => (
            <button
              type="button"
              key={f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div>
          <button
            type="button"
            disabled={zoom <= 0.75}
            aria-label="Réduire le réseau"
            onClick={() => setZoom((v) => Math.max(0.75, v - 0.25))}
          >
            <Minus size={13} />
          </button>
          <output>{Math.round(zoom * 100)} %</output>
          <button
            type="button"
            disabled={zoom >= 1.5}
            aria-label="Agrandir le réseau"
            onClick={() => setZoom((v) => Math.min(1.5, v + 0.25))}
          >
            <Plus size={13} />
          </button>
        </div>
      </div>
      <div className="bm-agent-layout">
        <div
          className="bm-agent-canvas"
          tabIndex={0}
          aria-label="Carte défilante du réseau"
        >
          <svg
            viewBox="0 0 680 400"
            style={{ width: `${zoom * 100}%` }}
            role="group"
            aria-label="Sélectionner un agent pour examiner ses métriques"
          >
            <defs>
              <pattern
                id={uid}
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r=".6" fill="#dce0e5" />
              </pattern>
            </defs>
            <rect width="680" height="400" fill={`url(#${uid})`} />
            {links.map(([a, b]) => {
              const from = agents.find((n) => n.id === a)!,
                to = agents.find((n) => n.id === b)!;
              return (
                <path
                  key={a + b}
                  d={`M${from.x + 138} ${from.y + 28} C${from.x + 158} ${from.y + 28},${to.x - 20} ${to.y + 28},${to.x} ${to.y + 28}`}
                  fill="none"
                  stroke={b === "billing" ? "#d47676" : "#cbd2da"}
                  opacity={visible(from) && visible(to) ? 1 : 0.18}
                />
              );
            })}
            <path
              d="M400 40 C400 -8,250 -8,250 158"
              fill="none"
              stroke="#caa463"
              strokeDasharray="4 4"
              opacity={filter === "Échecs" ? 0.2 : 1}
            />
            <text x="278" y="19" className="bm-agent-loop">
              Boucle · 17 cycles
            </text>
            {agents.map((n) => (
              <g
                key={n.id}
                transform={`translate(${n.x} ${n.y})`}
                className={`bm-agent-node ${n.state} ${selected === n.id ? "selected" : ""}`}
                opacity={visible(n) ? 1 : 0.2}
                tabIndex={0}
                role="button"
                aria-pressed={selected === n.id}
                aria-label={`${n.name}, ${n.state === "healthy" ? "opérationnel" : n.state === "degraded" ? "dégradé" : "critique"}`}
                onClick={() => {
                  setSelected(n.id);
                  setDetails(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(n.id);
                    setDetails(false);
                  }
                }}
              >
                <rect width="138" height="64" rx="10" />
                <Bot x="11" y="13" width="17" height="17" />
                <text x="36" y="25">
                  {n.name}
                </text>
                <text x="12" y="47" className="bm-agent-node-small">
                  {n.runs} · {n.success}
                </text>
              </g>
            ))}
            <text x="358" y="243" className="bm-agent-loss">
              auth_scope manquant
            </text>
          </svg>
        </div>
        <aside aria-live="polite">
          <div className="bm-agent-inspector-title">
            <Bot size={19} />
            <strong>{agent.name} Agent</strong>
            <span className={agent.state}>
              {agent.state === "healthy"
                ? "Stable"
                : agent.state === "degraded"
                  ? "Dégradé"
                  : "Critique"}
            </span>
          </div>
          <div className="bm-agent-stats">
            {[
              ["Invocations", agent.runs],
              ["Succès", agent.success],
              ["Latence", agent.latency],
              ["Échecs / 24 h", agent.failures],
              ["Coût", agent.cost],
              ["Contexte", agent.context],
            ].map(([label, value]) => (
              <div key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <h4>Champs de contexte</h4>
          <ul>
            {fields.slice(0, 5).map((field, i) => (
              <li key={field}>
                {agent.id === "billing" && i === 3 ? (
                  <X size={13} color="#be6262" />
                ) : (
                  <Check size={13} color="#619481" />
                )}
                <code>{field}</code>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bm-agent-detail"
            aria-expanded={details}
            onClick={() => setDetails((v) => !v)}
          >
            {details ? "Masquer le diagnostic" : "Examiner le diagnostic"}
            <ChevronRight size={13} />
          </button>
          <AnimatedReveal open={details}>
            <p className="bm-agent-detail-text">
              {agent.id === "billing"
                ? "128 transmissions affectées : autorisation absente à l’entrée. Vérifier le contrat de Router."
                : agent.state === "degraded"
                  ? "Une boucle de 17 cycles est observée entre Router et Knowledge. Prévoir une condition de sortie."
                  : "Aucune anomalie détectée dans cette fixture."}
            </p>
          </AnimatedReveal>
        </aside>
      </div>
      <footer>
        <span>
          <i />
          Opérationnel
        </span>
        <span>
          <i className="degraded" />
          Dégradé
        </span>
        <span>
          <i className="critical" />
          Critique
        </span>
        <span>Données fictives · 24 dernières heures</span>
      </footer>
    </section>
  );
}
