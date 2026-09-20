import { AppSelect } from "./ui/app-select";
import { useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import { CalendarDays, Clock3, RotateCcw, X, GripVertical } from "lucide-react";
import { moveSpan, resizeSpan, resizeStartSpan, sortPlanningRows, reorderPlanningRows, calendarLayout } from "./planning-model.mjs";
import "./planning-demo.css";
type EventItem={id:string; title:string; owner:string; start:number; duration:number; tone:string; day:number};
const initial:EventItem[]=[{id:"a",title:"Revue financière",owner:"Alice Martin",start:2,duration:4,tone:"blue",day:0},{id:"b",title:"Validation juridique",owner:"Paul Laurent",start:5,duration:3,tone:"amber",day:1},{id:"c",title:"Préparation du comité",owner:"Emma Dubois",start:8,duration:4,tone:"mint",day:2},{id:"d",title:"Comité de suivi",owner:"Équipe projet",start:12,duration:3,tone:"lilac",day:4}];
const time=(slot:number,base=8)=>`${String(base+Math.floor(slot/2)).padStart(2,"0")}:${slot%2?"30":"00"}`;
const weekdays=["Lundi","Mardi","Mercredi","Jeudi","Vendredi"];
function change(items:EventItem[],id:string,patch:Partial<EventItem>){return items.map(e=>e.id===id?{...e,...patch}:e)}
export function PlanningDemo() {
 const [mode,setMode]=useState<"Journée"|"Gantt">("Journée");
 const [events,setEvents]=useState(initial);
 const [selected,setSelected]=useState<string|null>(null);
 const [sort,setSort]=useState("manual");
 const rows:EventItem[]=sortPlanningRows(events,sort);
 const rowDrag=useRef<{id:string;target:number;initialY:number;centers:number[]}|null>(null);
 const [dropTarget,setDropTarget]=useState<{id:string;index:number}|null>(null);
 const [rowNotice,setRowNotice]=useState("");
 function beginRowDrag(e:PointerEvent<HTMLButtonElement>,id:string) {
   if(e.button!==0)return;
   e.preventDefault();e.currentTarget.focus();
   const elements=Array.from(e.currentTarget.closest(".bm-plan-grid")!.querySelectorAll(".bm-plan-row"));
   rowDrag.current={id,target:rows.findIndex(row=>row.id===id),initialY:e.clientY,centers:elements.map(row=>{const r=row.getBoundingClientRect();return r.top+r.height/2;})};
   e.currentTarget.setPointerCapture(e.pointerId);
 }
 function moveRowDrag(e:PointerEvent<HTMLButtonElement>) {
   const d=rowDrag.current;if(!d||Math.abs(e.clientY-d.initialY)<4)return;
   d.target=d.centers.reduce((best,center,index)=>Math.abs(center-e.clientY)<Math.abs(d.centers[best]-e.clientY)?index:best,0);
   setDropTarget({id:d.id,index:d.target});
 }
 function finishRowDrag(cancel=false) {
   const d=rowDrag.current;
   if(d&&!cancel&&dropTarget){setEvents(reorderPlanningRows(rows,d.id,d.target));setSort("manual");setRowNotice(`Ligne déplacée en position ${d.target+1} sur ${rows.length}.`);}
   rowDrag.current=null;setDropTarget(null);
 }
 function rowKeyboard(e:KeyboardEvent<HTMLButtonElement>,id:string) {
   if(e.key==="Escape"){finishRowDrag(true);return;}
   if(!["ArrowUp","ArrowDown"].includes(e.key))return;
   e.preventDefault();
   const target=Math.max(0,Math.min(rows.length-1,rows.findIndex(row=>row.id===id)+(e.key==="ArrowUp"?-1:1)));
   setEvents(reorderPlanningRows(rows,id,target));setSort("manual");setRowNotice(`Ligne déplacée en position ${target+1} sur ${rows.length}.`);
 }
 type Edge = "move" | "start" | "end";
 const drag=useRef<{id:string;x:number;start:number;duration:number;unit:number;edge:Edge}|null>(null);
 const [activeDrag,setActiveDrag]=useState<string|null>(null);
 const event=events.find(e=>e.id===selected), limit=20;
 const text=(e:EventItem)=>mode==="Journée"?`${time(e.start)} – ${time(e.start+e.duration)}`:`${e.start+1} – ${e.start+e.duration} septembre`;
 const spanChange=(start:number,duration:number,delta:number,edge:Edge)=>
   edge==="start"?resizeStartSpan(start,duration,delta,limit):edge==="end"?resizeSpan(start,duration,delta,limit):moveSpan(start,duration,delta,limit);
 function pointerDown(e:PointerEvent<HTMLButtonElement>,item:EventItem,edge:Edge="move") {
   if(e.button!==0)return;
   e.preventDefault();e.currentTarget.focus();setSelected(item.id);
   const width=e.currentTarget.closest(".bm-plan-track")!.getBoundingClientRect().width;
   drag.current={id:item.id,x:e.clientX,start:item.start,duration:item.duration,unit:width/limit,edge};
   setActiveDrag(item.id);e.currentTarget.setPointerCapture(e.pointerId);
 }
 function pointerMove(e:PointerEvent<HTMLButtonElement>) {
   const d=drag.current;if(!d)return;
   const delta=Math.round((e.clientX-d.x)/d.unit);
   setEvents(v=>change(v,d.id,spanChange(d.start,d.duration,delta,d.edge)));
 }
 function finishDrag(cancel=false) {
   const d=drag.current;
   if(cancel&&d)setEvents(v=>change(v,d.id,{start:d.start,duration:d.duration}));
   drag.current=null;setActiveDrag(null);
 }
 function keyboard(e:KeyboardEvent<HTMLButtonElement>,item:EventItem,edge:Edge="move") {
   if(e.key==="Escape"&&drag.current){e.preventDefault();finishDrag(true);return;}
   if(!["ArrowLeft","ArrowRight"].includes(e.key))return;
   e.preventDefault();setSelected(item.id);
   setEvents(v=>change(v,item.id,spanChange(item.start,item.duration,e.key==="ArrowRight"?1:-1,edge)));
 }
 return <div className="bm-planning">
   <header><span><CalendarDays size={15}/>{mode==="Journée"?"Mardi 15 septembre 2026":"Plan de mission · septembre 2026"}</span>
     <div className="bm-planning-tabs">{(["Journée","Gantt"] as const).map(m=><button type="button" key={m} aria-pressed={mode===m} onClick={()=>{setMode(m);setSelected(null)}}>{m}</button>)}</div>
     <button className="bm-plan-icon" type="button" aria-label="Réinitialiser le planning" onClick={()=>{setEvents(initial);setSelected(null);setSort("manual");setRowNotice("")}}><RotateCcw size={13}/></button>
   </header>
   <div className="bm-plan-tools"><span>Déplacez les lignes par leur poignée</span><label>Trier par<AppSelect aria-label="Trier les lignes du planning" value={sort} onValueChange={setSort}><option value="manual">Ordre manuel</option><option value="owner">Responsable · A–Z</option><option value="title">Livrable · A–Z</option><option value="start">Début croissant</option><option value="duration">Durée décroissante</option></AppSelect></label></div>
   <span className="bm-plan-announcement" role="status">{rowNotice}</span>
   <div className="bm-plan-scroll"><div className="bm-plan-grid">
     <div className="bm-plan-scale"><span>{mode==="Journée"?"Responsable":"Livrable"}</span><div>{Array.from({length:10},(_,i)=><span key={i}>{mode==="Journée"?`${8+i}:00`:`${1+i*2} sept.`}</span>)}</div></div>
     {rows.map((item,index)=><div className={`bm-plan-row ${selected===item.id?"selected":""}`} key={item.id} data-row-dragging={dropTarget?.id===item.id} data-drop={dropTarget?.index===index?(rows.findIndex(row=>row.id===dropTarget.id)<index?"after":"before"):undefined}>
       <div className="bm-plan-rowlabel"><button type="button" className="bm-plan-rowgrip" aria-label={`Déplacer la ligne ${item.title}. Flèches haut et bas.`} title="Déplacer la ligne · ↑ ↓ au clavier" onPointerDown={e=>beginRowDrag(e,item.id)} onPointerMove={moveRowDrag} onPointerUp={()=>finishRowDrag()} onPointerCancel={()=>finishRowDrag(true)} onLostPointerCapture={()=>finishRowDrag(true)} onKeyDown={e=>rowKeyboard(e,item.id)}><GripVertical size={14}/></button><span>{mode==="Journée"?item.owner:item.title}</span><small>{mode==="Journée"?"Mission Atlas":`${item.duration} jour${item.duration>1?'s':''}`}</small></div>
       <div className="bm-plan-track">
         <div className={`bm-plan-block ${item.tone}`} data-dragging={activeDrag===item.id} style={{left:`${item.start/limit*100}%`,width:`${item.duration/limit*100}%`}}>
           <button type="button" className="bm-plan-event" title={`${item.title} · ${text(item)}`} aria-label={`${item.title}, ${text(item)}. Flèches gauche et droite pour déplacer.`}
             onClick={()=>setSelected(item.id)} onPointerDown={e=>pointerDown(e,item)} onPointerMove={pointerMove} onPointerUp={()=>finishDrag()} onPointerCancel={()=>finishDrag(true)} onLostPointerCapture={()=>finishDrag()} onKeyDown={e=>keyboard(e,item)}><span>{item.title}</span></button>
           {(["start","end"] as const).map(edge=><button key={edge} type="button" className={`bm-plan-resize ${edge}`} title={edge==="start"?"Ajuster le début":"Ajuster la fin"}
             aria-label={`${edge==="start"?"Ajuster le début":"Ajuster la fin"} de ${item.title}. Flèches gauche et droite.`}
             onPointerDown={e=>pointerDown(e,item,edge)} onPointerMove={pointerMove} onPointerUp={()=>finishDrag()} onPointerCancel={()=>finishDrag(true)} onLostPointerCapture={()=>finishDrag()} onKeyDown={e=>keyboard(e,item,edge)}><span/></button>)}
         </div>
       </div>
     </div>)}
   </div></div>
   <div className="bm-plan-detail" aria-live="polite">{event?<><span className={`bm-plan-dot ${event.tone}`}/><strong>{event.title}</strong><span>{text(event)}</span><span>{event.owner}</span><button type="button" onClick={()=>setSelected(null)} aria-label="Fermer le détail du planning"><X size={13}/></button></>:<><Clock3 size={13}/><span>Glissez le bloc pour déplacer · étirez ses poignées aux deux extrémités.</span></>}</div>
   <footer>{mode==="Journée"?"Pas de 30 min · entre 08:00 et 18:00 · Europe/Paris":"Pas de 1 jour · du 1 au 20 septembre 2026"} · Flèches ← → au clavier · Données fictives</footer>
 </div>;
}

export function CalendarDemo(){
 const [events,setEvents]=useState(initial.map(e=>({...e,start:Math.max(0,e.start-2),duration:Math.min(e.duration,3)}))),[view,setView]=useState<"Semaine"|"Mois">("Semaine"),[selected,setSelected]=useState<string|null>(null);
 const drag=useRef<{id:string;x:number;y:number;start:number;duration:number;day:number;unitY:number;unitX:number;resize:boolean}|null>(null);
 const layout=calendarLayout(events);
 const [dragging,setDragging]=useState<string|null>(null);
 function finishCalendarDrag(cancel=false) {
   const d=drag.current;
   if(cancel&&d)setEvents(v=>change(v,d.id,{start:d.start,duration:d.duration,day:d.day}));
   drag.current=null;setDragging(null);
 }
 const event=events.find(e=>e.id===selected);
 const pointerDown=(e:PointerEvent<HTMLButtonElement>,item:EventItem,resize=false)=>{if(e.button!==0)return;e.preventDefault();e.currentTarget.focus();setSelected(item.id);const rect=e.currentTarget.closest('.bm-calendar-days')!.getBoundingClientRect();drag.current={id:item.id,x:e.clientX,y:e.clientY,start:item.start,duration:item.duration,day:item.day,unitX:rect.width/5,unitY:rect.height/16,resize};setDragging(item.id);e.currentTarget.setPointerCapture(e.pointerId)};
 const pointerMove=(e:PointerEvent<HTMLButtonElement>)=>{const d=drag.current;if(!d)return;const delta=Math.round((e.clientY-d.y)/d.unitY);const patch=d.resize?resizeSpan(d.start,d.duration,delta,16):{...moveSpan(d.start,d.duration,delta,16),day:Math.max(0,Math.min(4,d.day+Math.round((e.clientX-d.x)/d.unitX)))};setEvents(v=>change(v,d.id,patch))};
 const keyboard=(e:KeyboardEvent<HTMLButtonElement>,item:EventItem,resize=false)=>{if(e.key==="Escape"&&drag.current){e.preventDefault();finishCalendarDrag(true);return;}if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();setSelected(item.id);if(e.key==="ArrowLeft"||e.key==="ArrowRight"){if(!resize)setEvents(v=>change(v,item.id,{day:Math.max(0,Math.min(4,item.day+(e.key==="ArrowRight"?1:-1)))}));return;}setEvents(v=>change(v,item.id,resize?resizeSpan(item.start,item.duration,e.key==="ArrowDown"?1:-1,16):moveSpan(item.start,item.duration,e.key==="ArrowDown"?1:-1,16)))};
 return <div className="bm-planning bm-calendar"><header><span><CalendarDays size={15}/>Septembre 2026</span><div className="bm-planning-tabs">{(["Semaine","Mois"] as const).map(m=><button type="button" key={m} aria-pressed={view===m} onClick={()=>setView(m)}>{m}</button>)}</div><button type="button" className="bm-plan-icon" aria-label="Réinitialiser le calendrier" onClick={()=>{setEvents(initial.map(e=>({...e,start:Math.max(0,e.start-2),duration:Math.min(e.duration,3)})));setSelected(null)}}><RotateCcw size={13}/></button></header>
 {view==="Semaine"?<div className="bm-plan-scroll"><div className="bm-calendar-week"><div className="bm-calendar-dayheads"><span>Paris</span>{weekdays.map((d,i)=><span key={d}>{d.slice(0,3)}. <b>{14+i}</b></span>)}</div><div className="bm-calendar-timebody"><div className="bm-calendar-hours">{Array.from({length:8},(_,i)=><span key={i}>{9+i}:00</span>)}</div><div className="bm-calendar-days">{events.map(item=><div key={item.id} className={`bm-calendar-event ${item.tone} ${selected===item.id?"selected":""}`} data-dragging={dragging===item.id} style={{left:`calc(${item.day*20+layout[item.id].column*20/layout[item.id].columns}% + 3px)`,width:`calc(${20/layout[item.id].columns}% - 6px)`,top:`${item.start/16*100}%`,height:`${item.duration/16*100}%`}}><button type="button" className="bm-calendar-eventbody" title={`${item.title} · ${time(item.start,9)} – ${time(item.start+item.duration,9)}`} aria-label={`${item.title}, ${weekdays[item.day]} ${14+item.day} septembre, ${time(item.start,9)} à ${time(item.start+item.duration,9)}. Flèches pour déplacer.`} onClick={()=>setSelected(item.id)} onPointerDown={e=>pointerDown(e,item)} onPointerMove={pointerMove} onPointerUp={()=>finishCalendarDrag()} onPointerCancel={()=>finishCalendarDrag(true)} onLostPointerCapture={()=>finishCalendarDrag()} onKeyDown={e=>keyboard(e,item)}><small><span>{time(item.start,9)}</span><span> – {time(item.start+item.duration,9)}</span></small><strong>{item.title}</strong></button><button type="button" className="bm-calendar-resize" aria-label={`Redimensionner ${item.title}. Flèches haut et bas pour la durée.`} onPointerDown={e=>pointerDown(e,item,true)} onPointerMove={pointerMove} onPointerUp={()=>finishCalendarDrag()} onPointerCancel={()=>finishCalendarDrag(true)} onLostPointerCapture={()=>finishCalendarDrag()} onKeyDown={e=>keyboard(e,item,true)}><span/></button></div>)}</div></div></div></div>:<div className="bm-plan-scroll"><div className="bm-calendar-month">{["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map(d=><strong key={d}>{d}</strong>)}{Array.from({length:35},(_,i)=>{const date=i===0?31:i>30?i-30:i;const outside=i===0||i>30;return <div key={i} className={`${outside?"outside":""} ${i%7>=5?"weekend":""}`}><span>{date}</span>{!outside&&events.filter(e=>14+e.day===date).map(item=><button type="button" key={item.id} className={item.tone} onClick={()=>setSelected(item.id)}>{time(item.start,9)} {item.title}</button>)}</div>})}</div></div>}
 {event?<div className="bm-calendar-detail"><div><strong>{event.title}</strong><button type="button" aria-label="Fermer le détail du calendrier" onClick={()=>setSelected(null)}><X size={14}/></button></div><label>Jour<AppSelect aria-label="Jour du rendez-vous" value={event.day} onValueChange={e=>setEvents(v=>change(v,event.id,{day:Number(e)}))}>{weekdays.map((d,i)=><option key={d} value={i}>{d} {14+i} septembre</option>)}</AppSelect></label><label>Début<AppSelect aria-label="Heure de début" value={event.start} onValueChange={e=>setEvents(v=>change(v,event.id,{start:Number(e)}))}>{Array.from({length:17-event.duration},(_,i)=><option key={i} value={i}>{time(i,9)}</option>)}</AppSelect></label><label>Durée<AppSelect aria-label="Durée du rendez-vous" value={event.duration} onValueChange={e=>setEvents(v=>change(v,event.id,{duration:Number(e)}))}>{Array.from({length:16-event.start},(_,i)=><option key={i} value={i+1}>{(i+1)*30} min</option>)}</AppSelect></label></div>:<div className="bm-plan-detail"><Clock3 size={13}/><span>Sélectionnez un événement. Glissez pour prévisualiser le placement, bord inférieur pour étirer.</span></div>}
 <footer>14 – 18 septembre · 09:00 – 17:00 · Europe/Paris · Flèches : 30 min / 1 jour · Données fictives</footer></div>;
}
