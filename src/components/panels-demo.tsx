import {Overlay} from '../design-system/filter-panel';
export {Overlay} from '../design-system/filter-panel';
import { useEffect, useRef, useState, type ReactNode } from "react";
import { X, SlidersHorizontal, Building2, Star } from "lucide-react";
import { Button } from "./ui/button";
import { StatusBadge } from "./status-badge";
import "./panels-demo.css";
import { nearestRangeEndpoint } from "./range-model.mjs";

const companies=[{name:'Atelier Nord',sector:'Industrie',stage:'Qualification',amount:480,assigned:true,rating:4.5},{name:'Maison Astrée',sector:'Services',stage:'Négociation',amount:1250,assigned:false,rating:4},{name:'Studio Rivage',sector:'Technologie',stage:'Découverte',amount:320,assigned:true,rating:4.5},{name:'Alto Industrie',sector:'Industrie',stage:'Qualification',amount:860,assigned:true,rating:4.5},{name:'Groupe Opaline',sector:'Services',stage:'Négociation',amount:670,assigned:false,rating:4},{name:'Signal',sector:'Technologie',stage:'Découverte',amount:210,assigned:false,rating:4}];
type Filters={sectors:string[];stage:string;min:number;max:number;rating:number;assigned:boolean};
const clean:Filters={sectors:[],stage:'Toutes',min:0,max:1500,rating:0,assigned:false};
function filtered(f:Filters){return companies.filter(c=>(!f.sectors.length||f.sectors.includes(c.sector))&&(f.stage==='Toutes'||c.stage===f.stage)&&c.amount>=f.min&&c.amount<=f.max&&c.rating>=f.rating&&(!f.assigned||c.assigned))}
export function FiltersDemo(){
 const [open,setOpen]=useState(false),[draft,setDraft]=useState<Filters>(clean);
 const rows=filtered(draft),matches=rows;
 return <div className="panel-demo"><div className="panel-demo-toolbar"><span><Building2 size={15}/> Sociétés <small>{rows.length}</small></span><Button onClick={()=>{setOpen(true)}}><SlidersHorizontal size={14}/> Filtres</Button></div><div className="filter-results" aria-live="polite">{rows.map(c=><div key={c.name}><span className="company-monogram">{c.name[0]}</span><strong>{c.name}</strong><span>{c.sector}</span><span>{c.amount.toLocaleString('fr-FR')} k€</span></div>)}{!rows.length&&<p>Aucune société. Élargissez vos critères.</p>}</div>{open&&<Overlay title="Filtrer les sociétés" onClose={()=>setOpen(false)}><div className="filter-body"><fieldset><legend>Secteur <span>Plusieurs choix possibles</span></legend><div className="filter-chips">{['Industrie','Services','Technologie'].map(s=><button key={s} aria-pressed={draft.sectors.includes(s)} onClick={()=>setDraft({...draft,sectors:draft.sectors.includes(s)?draft.sectors.filter(x=>x!==s):[...draft.sectors,s]})}>{s}</button>)}</div></fieldset><fieldset><legend>Étape</legend><div className="filter-chips">{['Toutes','Découverte','Qualification','Négociation'].map(s=><button key={s} aria-pressed={draft.stage===s} onClick={()=>setDraft({...draft,stage:s})}>{s}</button>)}</div></fieldset><div className="filter-range"><div className="filter-range-title">Montant du dossier <strong>{draft.min.toLocaleString('fr-FR')} – {draft.max.toLocaleString('fr-FR')} k€</strong></div><div className="double-range" onPointerDown={e=>{
 if(e.button!==0 || e.target instanceof HTMLInputElement)return;
 e.preventDefault();
 const bounds=e.currentTarget.getBoundingClientRect();
 const {endpoint,value}=nearestRangeEndpoint(draft.min,draft.max,(e.clientX-bounds.left-6.5)/Math.max(1,bounds.width-13));
 setDraft(current=>({...current,[endpoint]:value}));
 e.currentTarget.querySelector<HTMLInputElement>(endpoint==='min'?'input:first-of-type':'input:last-of-type')?.focus({preventScroll:true});
}}><div className="range-track"><i style={{left:`${draft.min/15}%`,right:`${100-draft.max/15}%`}}/></div><input aria-label="Montant minimum" type="range" min="0" max="1500" step="50" value={draft.min} onChange={e=>setDraft({...draft,min:Math.min(Number(e.target.value),draft.max)})}/><input aria-label="Montant maximum" type="range" min="0" max="1500" step="50" value={draft.max} onChange={e=>setDraft({...draft,max:Math.max(Number(e.target.value),draft.min)})}/></div><div className="range-limits"><span>0 k€</span><span>1 500 k€</span></div></div><fieldset><legend>Note minimum</legend><div className="filter-chips">{[0,4,4.5].map(n=><button key={n} aria-pressed={draft.rating===n} onClick={()=>setDraft({...draft,rating:n})}>{n>0&&<Star size={12}/>} {n===0?'Toutes':`${n.toLocaleString('fr-FR')}+`}</button>)}</div></fieldset><fieldset><legend>Responsabilité</legend><label className="filter-check"><input type="checkbox" checked={draft.assigned} onChange={e=>setDraft({...draft,assigned:e.target.checked})}/> Mes sociétés uniquement</label></fieldset><p className="filter-count" aria-live="polite">{matches.length} société{matches.length!==1?'s':''} correspondent aux critères.</p></div><footer><Button onClick={()=>setOpen(false)}>Fermer</Button><div><Button variant="ghost" onClick={()=>setDraft(clean)}>Réinitialiser</Button><Button variant="primary" onClick={()=>{setOpen(false)}}>Afficher {matches.length} résultat{matches.length!==1?'s':''}</Button></div></footer></Overlay>}</div>
}
export { ApprovalDemo } from "./approval-demo";
export { DrawerDemo } from "./drawer-demo";
