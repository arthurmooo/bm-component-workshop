import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import "./insight-cards-demo.css";
const insights = [
  {
    title: "Les dossiers qualifiés progressent",
    summary:
      "Le volume qualifié augmente tandis que les dossiers en attente diminuent.",
    question: "Comment poursuivre cette progression ?",
    series: [
      {
        name: "Qualifiés",
        color: "#78a4d9",
        values: [8, 10, 9, 13, 14, 16, 18],
        unit: "dossiers",
      },
      {
        name: "En attente",
        color: "#d8ab79",
        values: [14, 13, 15, 12, 10, 9, 8],
        unit: "dossiers",
      },
    ],
  },
  {
    title: "Le délai de réponse se réduit",
    summary:
      "Les deux équipes répondent plus vite sur les sept derniers jours.",
    question: "Quelles actions ont réduit le délai ?",
    series: [
      {
        name: "Équipe A",
        color: "#78a4d9",
        values: [18, 17, 15, 16, 13, 12, 11],
        unit: "h",
      },
      {
        name: "Équipe B",
        color: "#d8ab79",
        values: [22, 20, 19, 17, 18, 16, 14],
        unit: "h",
      },
    ],
  },
  {
    title: "Les dépenses se stabilisent",
    summary: "Le rythme de dépense revient près du budget journalier prévu.",
    question: "Faut-il réallouer le budget ?",
    series: [
      {
        name: "Dépensé",
        color: "#78a4d9",
        values: [19, 24, 22, 21, 20, 19, 20],
        unit: "k€",
      },
      {
        name: "Budget",
        color: "#d8ab79",
        values: [20, 20, 20, 20, 20, 20, 20],
        unit: "k€",
      },
    ],
  },
];
export function InsightCardsDemo() {
  const [page, setPage] = useState(0);
  const [point, setPoint] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const insight = insights[page];
  const max = Math.max(...insight.series.flatMap((s) => s.values)) * 1.15;
  function change(next: number) {
    setPage(next);
    setPoint(null);
    setMessage("");
  }
  return (
    <section className="insight-cards-demo" aria-label="Analyses paginées">
      <header>
        <span>
          <Sparkles size={14} /> Analyses{" "}
          <small>
            {page + 1} / {insights.length}
          </small>
        </span>
        <div>
          <button
            aria-label="Analyse précédente"
            disabled={page === 0}
            onClick={() => change(page - 1)}
          >
            <ChevronLeft size={14} />
          </button>
          <button
            aria-label="Analyse suivante"
            disabled={page === insights.length - 1}
            onClick={() => change(page + 1)}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </header>
      <h3>{insight.title}</h3>
      <p className="ic-summary">{insight.summary}</p>
      <div className="ic-inner">
        <div className="ic-metrics">
          {insight.series.map((s) => {
            const first = s.values[0],
              last = s.values[6],
              difference = last - first;
            return (
              <div key={s.name}>
                <span>
                  <i style={{ background: s.color }} />
                  {s.name}
                </span>
                <strong style={{ color: s.color }}>
                  {last} <small>{s.unit}</small>
                </strong>
                <em>
                  {difference > 0 ? "+" : ""}
                  {difference} {s.unit} sur 7 jours
                </em>
              </div>
            );
          })}
        </div>
        <div className="ic-chart-head">
          <span>Évolution · 8–14 septembre</span>
          <small>Exemple</small>
        </div>
        <div className="ic-chart">
          <svg
            viewBox="0 0 360 155"
            role="group"
            aria-label="Comparaison sur sept jours"
          >
            {[0, 0.5, 1].map((r) => (
              <g key={r}>
                <line
                  x1="27"
                  x2="348"
                  y1={128 - r * 108}
                  y2={128 - r * 108}
                  stroke="#e9edf3"
                  strokeDasharray="3 4"
                />
                <text
                  x="22"
                  y={131 - r * 108}
                  textAnchor="end"
                  fontSize="8"
                  fill="#adb8c6"
                >
                  {Math.round(max * r)}
                </text>
              </g>
            ))}
            {insight.series.map((s) => (
              <polyline
                key={s.name}
                points={s.values
                  .map((v, i) => `${28 + i * 53},${128 - (v / max) * 108}`)
                  .join(" ")}
                fill="none"
                stroke={s.color}
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <g
                key={i}
                tabIndex={0}
                role="img"
                aria-label={`${8 + i} septembre : ${insight.series.map((s) => `${s.name} ${s.values[i]} ${s.unit}`).join(", ")}`}
                onMouseEnter={() => setPoint(i)}
                onMouseLeave={() => setPoint(null)}
                onFocus={() => setPoint(i)}
                onBlur={() => setPoint(null)}
              >
                <rect
                  x={14 + i * 53}
                  y="12"
                  width="28"
                  height="124"
                  fill="transparent"
                />
                {point === i && (
                  <line
                    x1={28 + i * 53}
                    x2={28 + i * 53}
                    y1="15"
                    y2="129"
                    stroke="#cdd6e3"
                    strokeDasharray="2 3"
                  />
                )}
                {insight.series.map((s) => (
                  <circle
                    key={s.name}
                    cx={28 + i * 53}
                    cy={128 - (s.values[i] / max) * 108}
                    r={point === i ? 3.2 : 1.6}
                    fill={s.color}
                    stroke="white"
                    strokeWidth="1"
                  />
                ))}
                <text
                  x={28 + i * 53}
                  y="148"
                  textAnchor="middle"
                  fontSize="8"
                  fill="#b2bdcc"
                >
                  {8 + i}
                </text>
              </g>
            ))}
          </svg>
          <div className="ic-point-readout" aria-live="polite">
            {point === null
              ? "Survolez un jour ou utilisez Tab."
              : `${8 + point} sept. · ${insight.series.map((s) => `${s.name} : ${s.values[point]} ${s.unit}`).join(" · ")}`}
          </div>
        </div>
      </div>
      <button
        className="ic-question"
        onClick={() =>
          setMessage(`Question préparée : « ${insight.question} »`)
        }
      >
        {insight.question}
        <ArrowUpRight size={12} />
      </button>
      <footer role="status">
        {message || "Analyse illustrative · données fictives."}
      </footer>
    </section>
  );
}
