import { useLayoutEffect, useRef, type InputHTMLAttributes } from 'react';
import { formatAmount, normalizeAmount } from '../input-model.mjs';
export function AmountInput({value,onValueChange,...props}:Omit<InputHTMLAttributes<HTMLInputElement>,'value'|'onChange'|'type'> & {value:string|number;onValueChange:(value:string)=>void}){
 const ref=useRef<HTMLInputElement>(null), caret=useRef<number|null>(null);
 const formatted=formatAmount(String(value));
 useLayoutEffect(()=>{if(caret.current===null||!ref.current)return;let index=0,count=0;while(index<formatted.length&&count<caret.current){if(formatted[index]!=='\u202f')count++;index++}ref.current.setSelectionRange(index,index);caret.current=null},[formatted]);
 return <input {...props} ref={ref} type="text" inputMode="decimal" value={formatted} onChange={e=>{const raw=e.target.value;caret.current=raw.slice(0,e.target.selectionStart??raw.length).replace(/[\s€]/g,'').length;onValueChange(normalizeAmount(raw))}} onKeyDown={e=>{props.onKeyDown?.(e);const input=e.currentTarget,pos=input.selectionStart??0;if(e.key==='Backspace'&&pos===input.selectionEnd&&/[\s]/.test(input.value[pos-1]??'')){e.preventDefault();const raw=input.value.slice(0,pos-2)+input.value.slice(pos);caret.current=input.value.slice(0,pos-2).replace(/\s/g,'').length;onValueChange(normalizeAmount(raw))}}}/>;
}
