import { forwardRef, useId, type HTMLAttributes, type InputHTMLAttributes, type ReactNode } from 'react';
import {AlertSurface,type AlertLevel} from '../components/work-surfaces';

export function Card({className='', ...props}:HTMLAttributes<HTMLElement>) {
  return <section className={`bm-card ${className}`} {...props}/>;
}
export function CardHeader({title,description,action}:{title:string;description?:string;action?:ReactNode}) {
  return <header className="bm-card-header"><div><h2>{title}</h2>{description&&<p>{description}</p>}</div>{action}</header>;
}
export const Input=forwardRef<HTMLInputElement,InputHTMLAttributes<HTMLInputElement>>(({className='',...props},ref)=><input ref={ref} className={`bm-input ${className}`} {...props}/>);
Input.displayName='Input';
export function Field({label,hint,error,id, ...props}:InputHTMLAttributes<HTMLInputElement>&{label:string;hint?:string;error?:string}) {
  const generated=useId();const fieldId=id??generated;const description=[props['aria-describedby'],hint?`${fieldId}-hint`:null,error?`${fieldId}-error`:null].filter(Boolean).join(' ')||undefined;
  return <div className="bm-field"><label htmlFor={fieldId}>{label}</label><Input {...props} id={fieldId} aria-invalid={Boolean(error)||props['aria-invalid']} aria-describedby={description}/>{hint&&<p className="bm-field-hint" id={`${fieldId}-hint`}>{hint}</p>}{error&&<p role="alert" className="bm-field-hint bm-field-error" id={`${fieldId}-error`}>{error}</p>}</div>;
}
export type MetricTone='neutral'|'info'|'positive'|'warning'|'critical';
export function MetricCard({label,value,detail,tone}:{label:string;value:ReactNode;detail?:ReactNode;tone?:MetricTone}) {
  if(tone){const level:AlertLevel=tone==='critical'?'critique':tone==='warning'?'attention':tone==='positive'?'aucun':'neutre';return <AlertSurface level={level} title={label} value={value} action={tone==='critical'?'ACTION':tone==='warning'?'REVIEW':tone==='positive'?'VERIFIED':'STATUS'} detail={String(detail??'')}/>}
  return <Card><span className="bm-metric-label">{label}</span><strong className="bm-metric-value">{value}</strong>{detail&&<p className="bm-metric-detail">{detail}</p>}</Card>;
}
export function EmptyState({title,description,action}:{title:string;description:string;action?:ReactNode}) {
  return <div className="bm-empty"><h3>{title}</h3><p>{description}</p>{action}</div>;
}
