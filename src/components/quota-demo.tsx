import { useState } from "react";
import { Check, Gauge, RotateCcw, Target, TriangleAlert } from "lucide-react";
import "./quota-demo.css";
const fmt = (n: number) => n.toLocaleString("fr-FR");
export function QuotaDemo() {
  const [mode, setMode] = useState("Consommation"),
    [used, setUsed] = useState(6800);
  const limit = 10000,
    percent = Math.round((used / limit) * 100);
  return (
    <section className="quota-demo">
      <nav aria-label="Variante de quota">
        {["Consommation", "Objectif", "Campagne"].map((v) => (
          <button key={v} aria-pressed={mode === v} onClick={() => setMode(v)}>
            {v}
          </button>
        ))}
      </nav>
      <article>
        <header>
          <span>
            {mode === "Objectif" ? <Target size={16} /> : <Gauge size={16} />}
            <strong>
              {mode === "Consommation"
                ? "Documents analysés"
                : mode === "Objectif"
                  ? "Objectif mensuel"
                  : "Campagne · Dossier Atlas"}
            </strong>
          </span>
          <button
            aria-label="Réinitialiser le quota"
            onClick={() => setUsed(6800)}
          >
            <RotateCcw size={13} />
          </button>
        </header>
        <div className="quota-body">
          <div className="quota-health">
            <span>Septembre 2026</span>
            <span className={percent >= 90 ? "warning" : "healthy"}>
              {percent >= 90 ? (
                <TriangleAlert size={11} />
              ) : (
                <Check size={11} />
              )}{" "}
              {percent >= 90 ? "Proche du plafond" : "Dans les limites"}
            </span>
          </div>
          <div className="quota-value">
            <strong>{mode === "Objectif" ? `${percent} %` : fmt(used)}</strong>
            <span>
              {mode === "Objectif"
                ? `${fmt(limit - used)} € restants`
                : `/ ${fmt(limit)}`}
            </span>
          </div>
          <div
            className="quota-track"
            role="progressbar"
            aria-label={
              mode === "Objectif" ? "Objectif atteint" : "Quota consommé"
            }
            aria-valuemin={0}
            aria-valuemax={limit}
            aria-valuenow={used}
          >
            <i style={{ width: `${percent}%` }} />
          </div>
          <div className="quota-caption">
            <span>
              {mode === "Objectif" ? "Revenu réalisé" : "Quota utilisé"}
            </span>
            <b>{percent} %</b>
          </div>
          {mode === "Campagne" && (
            <div className="quota-engagement">
              <div>
                <span>Engagement</span>
                <strong>42 %</strong>
              </div>
              <div
                className="quota-track secondary"
                role="progressbar"
                aria-label="Engagement"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={42}
              >
                <i style={{ width: "42%" }} />
              </div>
            </div>
          )}
        </div>
        <footer>
          <span>
            {mode === "Objectif" ? "Cible mensuelle" : "Plafond mensuel"}
          </span>
          <strong>
            {fmt(limit)}
            {mode === "Objectif" ? " €" : " documents"}
          </strong>
        </footer>
      </article>
      <label className="quota-control">
        Valeur de démonstration
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={used}
          onChange={(e) => setUsed(Number(e.target.value))}
        />
      </label>
    </section>
  );
}
