import type { ReactNode } from "react";
import {ChevronRight} from "lucide-react";
import "./advanced-table.css";
import "./rich-table-cells.css";

export function EntityCell({title,subtitle,initials,action}:{title:ReactNode;subtitle?:ReactNode;initials?:string;action?:ReactNode}) {
  return <span className="advanced-company">
    {initials&&<i aria-hidden="true">{initials}</i>}
    <span><strong>{title}</strong>{subtitle&&<small>{subtitle}</small>}</span>
    {action}
  </span>;
}

export function ProgressCell({value,label=`${value}%`,detail,ariaLabel,colorByRate=false}:{value:number;label?:ReactNode;detail?:ReactNode;ariaLabel?:string;colorByRate?:boolean}) {
  const bounded=Math.min(100,Math.max(0,value));
  return <span className="advanced-probability" data-rate-tone={colorByRate?(bounded<40?'low':bounded<70?'medium':'high'):undefined}>
    <span className="advanced-probability-track" role="progressbar" aria-label={ariaLabel??(typeof detail==='string'?detail:'Progression')} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(bounded)}><i style={{width:`${bounded}%`}}/></span>
    <span>{label}{detail&&<small className="advanced-stage">{detail}</small>}</span>
  </span>;
}

export function SparklineCell({values,label,color="var(--bm-action)",value,unit="",onInspect,onActiveChange}:{values:number[];label:string;color?:string;value?:ReactNode;unit?:string;onInspect?:()=>void;onActiveChange?:(active:boolean)=>void}) {
  if(!values.length)return <span>—</span>;
  const low=Math.min(...values),high=Math.max(...values),span=Math.max(1,high-low);
  const points=values.map((point,index)=>`${3+(values.length===1?0:index*114/(values.length-1))},${27-(point-low)/span*22}`).join(" ");
  const last=values.at(-1)!;
  const graph=<svg viewBox="0 0 120 32" aria-hidden="true"><line x1="2" y1="28" x2="118" y2="28"/><polyline points={points} style={{stroke:color}}/><circle cx={values.length===1?3:117} cy={27-(last-low)/span*22} r="2.3" style={{fill:color}}/></svg>;
  return <span className="bm-table-spark">
    {onInspect?<button type="button" aria-label={`${label}: ${values.join(", ")}${unit}`} onClick={onInspect} onFocus={()=>onActiveChange?.(true)} onBlur={()=>onActiveChange?.(false)} onMouseEnter={()=>onActiveChange?.(true)} onMouseLeave={()=>onActiveChange?.(false)}>{graph}</button>:<span role="img" aria-label={`${label}: ${values.join(", ")}${unit}`}>{graph}</span>}
    {value!==undefined&&<strong>{value}</strong>}
  </span>;
}

export function PersonCell({name,children,photoUrl,photoPosition='50%',photoSize='cover'}:{name:string;children?:ReactNode;photoUrl?:string;photoPosition?:string;photoSize?:string}) {
 return <span className="bm-person-cell"><span className="bm-person-photo" role="img" aria-label={name} style={photoUrl?{backgroundImage:`url(${photoUrl})`,backgroundPosition:photoPosition,backgroundSize:photoSize}:undefined}/><span>{children??name}</span></span>;
}

export function NextActionCell({title,meta,tone='neutral'}:{title:ReactNode;meta:ReactNode;tone?:'neutral'|'attention'|'overdue'}) {
 return <span className="bm-next-action-cell" data-tone={tone}><span><strong>{title}</strong><small>{meta}</small></span><ChevronRight size={16} aria-hidden="true"/></span>;
}
