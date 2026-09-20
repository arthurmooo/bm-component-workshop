import { AmountInput } from "./ui/amount-input";
import { AppSelect } from "./ui/app-select";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { projectSavings } from "./simulation-model.mjs";
import "./simulation-demo.css";
const eur = (v: number) => new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(v);
export function SimulationDemo() {
  const [monthly,setMonthly]=useState(250), [years,setYears]=useState(10), [rate,setRate]=useState(5), [active,setActive]=useState<number|null>(null);
  const projection=projectSavings(monthly,years,rate);
  const max=Math.max(1000,Math.ceil(projection.total/1000)*1000);
  return <section className="bm-simulation" aria-label="Simulation d’épargne fictive">
    <header><strong>Projection d’épargne</strong><span>Hypothèse {rate} % / an</span></header>
    <div className="bm-simulation-values"><div><span>Versements cumulés</span><strong>{eur(projection.contributed)}</strong></div><div><span>À {years} ans · projection</span><strong aria-live="polite">{eur(projection.total)}</strong></div></div>
    <div className="bm-simulation-tip" role="status">{active === null ? "Capital projeté en milliers d’euros" : `Année ${active+1} · ${eur(projection.series[active].value)}`}</div>
    <svg viewBox="0 0 320 170" role="group" aria-label="Capital projeté à la fin de chaque année">
      {[0,.5,1].map(f=><g key={f}><line x1="35" x2="314" y1={142-f*122} y2={142-f*122} stroke="#e6e9ee" strokeDasharray="3 5"/><text x="28" y={146-f*122} textAnchor="end">{new Intl.NumberFormat("fr-FR",{maximumFractionDigits:1}).format(max*f/1000)}</text></g>)}
      {projection.series.map((p:{year:number;value:number},i:number)=>{const step=278/years,x=36+i*step,h=p.value/max*122;return <g key={i} className="bm-simulation-bar" data-active={active===i} data-muted={active!==null&&active!==i} tabIndex={0} role="img" aria-label={`Année ${p.year}, capital projeté ${eur(p.value)}`} onFocus={()=>setActive(i)} onBlur={()=>setActive(null)} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)}><rect className="bm-simulation-value-bar" x={x} y={142-h} width={Math.max(3,step-4)} height={h} rx={Math.min(5,step/3)} fill={active===i?"#287bea":i===years-1&&active===null?"#287bea":"#d7e5fc"}/><rect className="bm-simulation-hit" x={x} y="17" width={step-2} height="129" rx="3"/>{(i===0||i===years-1||i===Math.floor(years/2))&&<text x={x+step/2} y="163" textAnchor="middle">{p.year} an{p.year>1?"s":""}</text>}</g>})}
    </svg>
    <div className="bm-simulation-fields">
      <label><span>Versement mensuel</span><span><AmountInput  min={0} max={10000} step={50} value={monthly} onValueChange={e=>{setMonthly(Math.min(10000,Math.max(0,Number(e))));setActive(null)}} aria-label="Versement mensuel en euros"/> €</span></label>
      <label><span>Horizon</span><AppSelect value={years} onValueChange={e=>{setYears(Number(e));setActive(null)}} aria-label="Horizon en années">{[5,10,15,20,30].map(n=><option key={n} value={n}>{n} ans</option>)}</AppSelect></label>
      <label><span>Rendement annuel supposé</span><AppSelect value={rate} onValueChange={e=>{setRate(Number(e));setActive(null)}} aria-label="Rendement annuel supposé">{[-5,0,3,5,7].map(n=><option key={n} value={n}>{n} %</option>)}</AppSelect></label>
    </div>
    <button className="bm-simulation-reset" type="button" onClick={()=>{setMonthly(250);setYears(10);setRate(5);setActive(null)}}><RotateCcw size={13}/>Réinitialiser la simulation</button>
    <p>Exemple fictif. Versements en fin de mois, rendement constant, hors frais et fiscalité. Le résultat est une hypothèse, sans garantie de rendement.</p>
  </section>;
}
