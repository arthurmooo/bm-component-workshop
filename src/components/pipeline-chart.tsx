import { useEffect, useState, useRef } from "react";
import { CalendarDays, ChartNoAxesCombined } from "lucide-react";
import "./charts-demo.css";

export type PipelineStage = { label: string; value: number; color?: string };
export type PipelineChartProps = {
  title?: string;
  meta?: string;
  stages: PipelineStage[];
  summaryLabel?: string;
  caption?: string;
  fixture?: string;
  emptyLabel?: string;
  locale?: "fr" | "en";
  compact?: boolean;
  expanded?: boolean;
  showSummary?: boolean;
  showInspector?: boolean;
};

export function PipelineChart({
  title = "De la rencontre à la signature",
  meta = "Cohorte active",
  stages,
  locale = "fr",
  compact = false,
  expanded = false,
  showSummary = true,
  showInspector = true,
  summaryLabel = "dossiers convertis",
  caption = "Même cohorte · étapes cumulatives.",
  fixture = "Données fictives",
  emptyLabel = "Aucune donnée sur cette période",
}: PipelineChartProps) {
  const plotRef=useRef<HTMLDivElement>(null);
  const [plotWidth,setPlotWidth]=useState(552);
  useEffect(()=>{const el=plotRef.current;if(!el)return;const observer=new ResizeObserver(([entry])=>setPlotWidth(Math.max(240,entry.contentRect.width)));observer.observe(el);return()=>observer.disconnect()},[stages.length]);
  const center=compact?86:expanded?145:120,halfHeight=compact?62:expanded?105:82,plotHeight=compact?190:expanded?320:245;
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active !== null && active >= stages.length) setActive(null);
  }, [active, stages.length]);
  const values = stages.map((stage) => Math.max(0, stage.value));
  const max = Math.max(1, ...values);
  const colors = ["var(--bm-chart-fifth,#9dceff)", "var(--bm-chart-third,#73b4fd)", "var(--bm-accent)", "var(--bm-action)"];
  const selected = active === null ? null : stages[active];

  return <section className="bm-chart-shell bm-pipeline-chart" data-compact={compact} aria-label={title}>
    <header className="bm-chart-heading">
      <span><ChartNoAxesCombined size={17} aria-hidden="true" />{title}</span>
      <span className="bm-chart-date"><CalendarDays size={13} aria-hidden="true" />{meta}</span>
    </header>
    <div className="bm-chart-body">
      {showSummary&&<div className="bm-chart-summary"><div><strong>{stages.at(-1)?.value ?? "—"}</strong><span>{summaryLabel} {locale==="en"?"of":"sur"} {stages[0]?.value ?? 0}</span></div></div>}
      {!stages.length ? <div className="bm-chart-empty"><strong>{emptyLabel}</strong><p>Les étapes apparaîtront ici dès que la cohorte sera disponible.</p></div> : <div className="bm-chart-plot" ref={plotRef}>
        {showInspector&&<div className={`bm-chart-tooltip ${selected ? "is-visible" : ""}`} role="status" aria-live="polite">
          {selected ? `${selected.label} · ${selected.value} ${locale==="en"?"records":"dossiers"} · ${Math.round(values[active!] / max * 100)} %` : locale==="en"?"Hover or focus a stage to inspect conversion.":"Survolez un point ou utilisez Tab pour explorer."}
        </div>}
        <svg viewBox={`0 0 ${plotWidth} ${plotHeight}`} role="group" aria-label={stages.map((stage) => `${stage.label}: ${stage.value}`).join(", ")}>
          <line x1="12" y1={center} x2={plotWidth-12} y2={center} stroke="#e5e7eb" strokeDasharray="3 5" />
          {stages.map((stage, index) => {
            const width = (plotWidth-24) / stages.length;
            const left = 12 + index * width;
            const right = left + width;
            const before = values[index] / max * halfHeight;
            const after = (values[index + 1] ?? values[index]) / max * halfHeight;
            const path = `M ${left} ${center-before} C ${left+width/2} ${center-before}, ${right-width/2} ${center-after}, ${right} ${center-after} L ${right} ${center+after} C ${right-width/2} ${center+after}, ${left+width/2} ${center+before}, ${left} ${center+before} Z`;
            const percent = Math.round(values[index] / max * 100);
            return <g key={`${stage.label}-${index}`} tabIndex={0} role="img" aria-label={`${stage.label}: ${stage.value} ${locale==="en"?"records":"dossiers"}, ${percent}%`} className="bm-chart-point" onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(index)} onBlur={() => setActive(null)}>
              <path d={path} fill={stage.color ?? colors[index % colors.length]} opacity={active === null || active === index ? 1 : .42} stroke="white" strokeWidth="2" />
              <rect x={left + width / 2 - 23} y={center-12} width="46" height="24" rx="12" fill="white" fillOpacity=".96" />
              <text x={left + width / 2} y={center+4} textAnchor="middle" className="bm-chart-percent">{percent}%</text>
              <text x={left + width / 2} y={plotHeight-12} textAnchor="middle">{stage.label}</text>
              <rect className="bm-chart-focus" x={left + 2} y={center-halfHeight-6} width={Math.max(1, width - 4)} height={halfHeight*2+12} rx="7" />
            </g>;
          })}
        </svg>
      </div>}
      <footer className="bm-chart-legend"><span>{caption}</span><span className="bm-chart-fixture">{fixture}</span></footer>
    </div>
  </section>;
}
