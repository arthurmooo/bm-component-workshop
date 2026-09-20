import {ComparisonChart} from '../design-system/workshop-charts';
import { ChartTooltipArea } from "./chart-tooltip";
import { useId, useState } from "react";
import { ArrowUpRight, BarChart3, CalendarDays, ChartNoAxesCombined } from "lucide-react";
import "./charts-demo.css";
import { detailedModes } from "./charts-variants";
import { ChartsExtra, type ExtraMode } from "./charts-extra";
import { PipelineChart } from "./pipeline-chart";

type Mode = "Courbe" | "Barres" | "Pipeline" | ExtraMode;
const weeks = ["03 août", "10 août", "17 août", "24 août", "31 août", "07 sept.", "14 sept."];
const values = [12, 18, 15, 24, 21, 31, 38];
const stages = ["Identifiés", "Qualifiés", "Rencontrés", "Offres", "Signés"];
const counts = [100, 64, 38, 24, 12];
const colors = ["#9dceff", "#73b4fd", "#4796f3", "#287be0", "#155cb5"];

export function ChartsDemo() {
  const [mode, setMode] = useState<Mode>("Courbe");
  const [empty, setEmpty] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const uid = useId().replace(/:/g, "");
  const title = mode === "Pipeline" ? "De la rencontre à la signature" : "Dossiers qualifiés";
  const selected = active === null ? null : mode === "Pipeline" ? `${stages[active]} · ${counts[active]} dossiers · ${counts[active]} % de la cohorte` : `${weeks[active]} 2026 · ${values[active]} dossiers${mode === "Barres" && active === 6 ? " · semaine en cours" : ""}`;
  const x = (i: number) => 48 + i * 76;
  const y = (v: number) => 205 - v * 4;
  const points = values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  return <div className="bm-charts-demo">
    <div className="bm-chart-controls" aria-label="Variantes du graphique">
      <div className="bm-chart-modes">{(["Courbe", "Barres", "Pipeline", "Profondeur", "Jauges", "Donut", "Heatmap", ...detailedModes] as Mode[]).map(item => <button key={item} type="button" aria-pressed={mode === item} onClick={() => { setMode(item); setActive(null); }}>{item}</button>)}</div>
      <label><input type="checkbox" checked={empty} onChange={e => { setEmpty(e.target.checked); setActive(null); }} /> État vide</label>
    </div>
    {mode==='Barres'&&!empty?<ComparisonChart title="Dossiers qualifiés" unit="Dossiers" summary="38" caption="semaine du 14 sept." series={['Dossiers']} rows={weeks.map((label,i)=>({id:label,label,values:[values[i]]}))}/>:mode==='Pipeline'&&!empty?<PipelineChart meta="Août — sept. 2026" summaryLabel="signatures" caption="Épaisseur proportionnelle aux dossiers · même cohorte, étapes cumulatives." stages={stages.map((label,index)=>({label,value:counts[index],color:colors[index]}))}/>:!["Courbe", "Barres", "Pipeline"].includes(mode) ? <ChartsExtra key={mode} mode={mode as ExtraMode} empty={empty} /> : <section className="bm-chart-shell" aria-label={title}>
      <header className="bm-chart-heading"><span><ChartNoAxesCombined size={17} strokeWidth={1.6} />{title}</span><span className="bm-chart-date"><CalendarDays size={13} /> Août — sept. 2026</span></header>
      <div className="bm-chart-body">
        <div className="bm-chart-summary"><div><strong>{empty ? "—" : mode === "Pipeline" ? "12" : "38"}</strong><span>{mode === "Pipeline" ? "signatures sur 100 dossiers" : "dossiers · semaine du 14 sept."}</span></div>{!empty && mode !== "Pipeline" && <span className="bm-chart-delta"><ArrowUpRight size={15} /> +7 <small>vs semaine précédente</small></span>}</div>
        {empty ? <div className="bm-chart-empty"><BarChart3 size={28} strokeWidth={1.2} /><strong>Aucune donnée sur cette période</strong><p>Les dossiers apparaîtront ici dès leur qualification.</p></div> : <div className="bm-chart-plot"><ChartTooltipArea enabled={mode!=="Pipeline"}>
          {mode==="Pipeline"&&<div className={`bm-chart-tooltip ${selected ? "is-visible" : ""}`} role="status" aria-live="polite">{selected || "Survolez un point ou utilisez Tab pour explorer."}</div>}
          {mode === "Pipeline" ? <svg viewBox="0 0 552 245" role="group" aria-label="Conversion d’une cohorte fictive de 100 dossiers">
            <line x1="20" y1="120" x2="532" y2="120" stroke="#e5e7eb" strokeDasharray="3 5" />
            {counts.map((v, i) => {
              const left = 20 + i * 102.4, right = left + 102.4;
              const a = v * .82, b = (counts[i + 1] ?? v) * .82;
              const d = `M ${left} ${120-a} C ${left+51} ${120-a}, ${right-51} ${120-b}, ${right} ${120-b} L ${right} ${120+b} C ${right-51} ${120+b}, ${left+51} ${120+a}, ${left} ${120+a} Z`;
              return <g key={v} tabIndex={0} role="img" aria-label={`${stages[i]} : ${v} dossiers, ${v} pour cent de la cohorte`} className="bm-chart-point" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(i)} onBlur={() => setActive(null)}>
                <path d={d} fill={colors[i]} opacity={active === null || active === i ? 1 : .42} stroke="white" strokeWidth="2" />
                <rect x={left+28} y="108" width="46" height="24" rx="12" fill="white" fillOpacity=".96" />
                <text x={left+51} y="124" textAnchor="middle" className="bm-chart-percent">{v}%</text>
                <text x={left+51} y="225" textAnchor="middle">{stages[i]}</text>
                <rect className="bm-chart-focus" x={left+2} y="22" width="98" height="184" rx="7" />
              </g>;
            })}
          </svg> : <svg viewBox="0 0 552 245" role="group" aria-label={`${mode === "Courbe" ? "Évolution" : "Histogramme"} hebdomadaire des dossiers qualifiés`}>
            <defs><linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1685fa" stopOpacity=".17" /><stop offset="100%" stopColor="#1685fa" stopOpacity=".01" /></linearGradient><pattern id={`${uid}-hatch`} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="9" height="9" fill="#d4e7ff" /><rect width="4" height="9" fill="#a9cffb" /></pattern></defs>
            {[0,10,20,30,40].map(v => <g key={v}><line x1="42" y1={y(v)} x2="512" y2={y(v)} stroke="#e5e7eb" strokeDasharray="4 6" /><text x="28" y={y(v)+4} textAnchor="end">{v}</text></g>)}
            <text x="42" y="24" className="bm-chart-unit">Dossiers</text>
            {mode === "Courbe" && <><path d={`M48,205 L${points.replace(/ /g," L")} L504,205 Z`} fill={`url(#${uid}-area)`} /><polyline points={points} fill="none" stroke="#1685fa" strokeWidth="2.5" strokeLinejoin="round" /></>}
            {values.map((v,i) => <g key={weeks[i]} data-chart-title={`${weeks[i]} 2026`} data-chart-value={`${v} dossiers`} data-chart-detail={i===6?"Semaine en cours":"Dossiers qualifiés · semaine clôturée"} tabIndex={0} role="img" aria-label={`${weeks[i]} 2026 : ${v} dossiers${mode === "Barres" && i === 6 ? ", semaine en cours" : ""}`} className="bm-chart-point" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(i)} onBlur={() => setActive(null)}>
              {mode === "Courbe" ? <><line x1={x(i)} x2={x(i)} y1="38" y2="205" stroke={active === i ? "#afd2fa" : "transparent"} strokeDasharray="3 4" /><circle cx={x(i)} cy={y(v)} r={active === i ? 5 : 3.5} fill="white" stroke="#1685fa" strokeWidth="2.3" /></> : <rect x={x(i)-19} y={y(v)} width="38" height={v*4} rx="7" fill={i === 6 ? `url(#${uid}-hatch)` : "#1685fa"} opacity={active === null || active === i ? 1 : .55} />}
              <text x={x(i)} y="229" textAnchor="middle">{weeks[i]}</text><rect className="bm-chart-focus" x={x(i)-26} y="35" width="52" height="176" rx="7" />
            </g>)}
          </svg>}
        </ChartTooltipArea></div>}
        <footer className="bm-chart-legend">{mode === "Pipeline" ? <span>Épaisseur proportionnelle aux dossiers · même cohorte, étapes cumulatives.</span> : <><span><i />{mode === "Courbe" ? "Dossiers qualifiés" : "Semaines clôturées"}</span>{mode === "Barres" && <span><i className="hatched" />Semaine en cours</span>}</>}<span className="bm-chart-fixture">Données fictives</span></footer>
      </div>
    </section>}
  </div>;
}
