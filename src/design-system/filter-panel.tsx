import {useEffect,useRef,useState,type ReactNode} from 'react';
import {X,SlidersHorizontal} from 'lucide-react';
import {Button} from '../components/ui/button';
import './panels.css';
export function Overlay({title,children,onClose,drawer=false,closeLabel='Fermer'}:{title:string;children:ReactNode;onClose:()=>void;drawer?:boolean;closeLabel?:string}){
 const ref=useRef<HTMLDialogElement>(null);const origin=useRef(document.activeElement as HTMLElement|null);
 useEffect(()=>{const d=ref.current;d?.showModal();return()=>{d?.close();const target=origin.current;requestAnimationFrame(()=>{if(!d?.isConnected&&target?.isConnected)target.focus()})}},[]);
 return <dialog ref={ref} className={`bm-ui bm-overlay ${drawer?'bm-drawer':''}`} aria-label={title} onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="bm-overlay-inner"><header><h2>{title}</h2><Button small variant="ghost" aria-label={`${closeLabel} ${title}`} onClick={onClose}><X size={16}/></Button></header>{children}</div></dialog>
}
export function FilterPanel({title='Filters',fields,values,onApply,defaults,applyLabel='Apply filters',resetLabel='Reset'}:{title?:string;fields:{key:string;label:string;options:string[]}[];values:Record<string,string>;defaults:Record<string,string>;onApply:(values:Record<string,string>)=>void;applyLabel?:string;resetLabel?:string}){
 const [open,setOpen]=useState(false);const [draft,setDraft]=useState(values);const count=fields.filter(f=>values[f.key]!==defaults[f.key]).length;
 return <><Button onClick={()=>{setDraft(values);setOpen(true)}}><SlidersHorizontal size={14}/>{title}{count>0&&` · ${count}`}</Button>{open&&<Overlay title={title} closeLabel="Close" onClose={()=>setOpen(false)}><div className="filter-body">{fields.map(f=><fieldset key={f.key}><legend>{f.label}</legend><div className="filter-chips">{f.options.map(option=><button key={option} type="button" aria-pressed={draft[f.key]===option} onClick={()=>setDraft(d=>({...d,[f.key]:option}))}>{option}</button>)}</div></fieldset>)}</div><footer className="filter-footer"><Button onClick={()=>setDraft(defaults)}>{resetLabel}</Button><Button variant="primary" onClick={()=>{onApply(draft);setOpen(false)}}>{applyLabel}</Button></footer></Overlay>}</>
}
