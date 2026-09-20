import { useEffect, useId, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './chart-tooltip.css';
type Tip={title:string;value:string;detail:string;color:string;x:number;y:number};
export function ChartTooltipArea({children,enabled=true}:{children:ReactNode;enabled?:boolean}) {
 const [tip,setTip]=useState<Tip|null>(null);const id=useId();
 useEffect(()=>{const close=()=>setTip(null);const reposition=()=>{if(document.activeElement?.matches('[data-chart-title]'))show(document.activeElement);else close()};const key=(e:KeyboardEvent)=>{if(e.key==='Escape')close()};window.addEventListener('scroll',reposition,true);window.addEventListener('resize',close);window.addEventListener('keydown',key);return()=>{window.removeEventListener('scroll',reposition,true);window.removeEventListener('resize',close);window.removeEventListener('keydown',key)}},[enabled]);
 function show(target:EventTarget|null,point?:{x:number;y:number}) {
  const el=target instanceof Element?target.closest<HTMLElement>('[data-chart-title]'):null;
  if(!enabled||!el){setTip(null);return}
  const r=el.getBoundingClientRect();
  setTip({title:el.dataset.chartTitle!,value:el.dataset.chartValue!,detail:el.dataset.chartDetail||'',color:el.dataset.chartColor||'#2786ef',x:Math.max(12,Math.min((point?.x??r.x+r.width/2)+14,window.innerWidth-232)),y:Math.max(12,Math.min((point?.y??r.y)-112,window.innerHeight-112))});
 }
 return <div className="chart-tooltip-area" onMouseMove={e=>show(e.target,{x:e.clientX,y:e.clientY})} onMouseLeave={()=>setTip(null)} onFocusCapture={e=>show(e.target)} onBlurCapture={()=>setTip(null)}>
 {children}
 {enabled&&tip&&createPortal(<div id={id} className="chart-floating-tip" role="tooltip" style={{left:tip.x,top:tip.y}}><div className="chart-tip-title">{tip.title}</div><div className="chart-tip-value"><i style={{background:tip.color}}/><strong>{tip.value}</strong></div>{tip.detail&&<div className="chart-tip-detail">{tip.detail}</div>}</div>,document.body)}
 </div>
}
