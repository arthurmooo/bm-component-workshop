import { Children, Fragment, cloneElement, createContext, isValidElement, useContext, useRef, useState, type ReactElement, type ReactNode, type HTMLAttributes } from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowLeftToLine, ArrowRightToLine, ChevronDown, Check, Minus } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import { projectCells, compareTableValues } from '../table-cells.mjs';
import { cellText } from '../table-data.mjs';
import { moveColumn } from '../table-model.mjs';
import { clampColumnWidth, resizeColumnByKey, MIN_COLUMN_WIDTH, MAX_COLUMN_WIDTH } from '../column-width.mjs';
import './data-table.css';

type Cell = ReactElement<{ children?: ReactNode; className?: string; colSpan?: number; 'data-sort-value'?: string | number }>;
export type TableSort = { column: number; direction: 'asc' | 'desc' | null };
const Context = createContext<number[] | null>(null);
function elements(nodes: ReactNode): Cell[] {
 return Children.toArray(nodes).flatMap(node => isValidElement(node) ? node.type === Fragment ? elements((node.props as {children:ReactNode}).children) : [node as Cell] : []);
}
const text=cellText;
function value(cell: Cell): string | number {
 if(cell.props['data-sort-value'] !== undefined) return cell.props['data-sort-value'];
 const label=text(cell.props.children).trim();
 const numeric=label.replace(/[\s€%]/g,'').replace(',','.');
 return numeric && /^-?\d+(\.\d+)?$/.test(numeric) ? Number(numeric) : label;
}
export function DataRow({children,...props}: HTMLAttributes<HTMLTableRowElement>) {
 const order=useContext(Context);
 const cells=elements(children);
 if(!order)return <tr {...props}>{children}</tr>;
 const output=projectCells(cells.map(cell=>cell.props.colSpan??1),order).map(({owner,span,show}: {owner:number;span:number;show:boolean},index:number)=>cloneElement(cells[owner],{key:owner+'-'+index,colSpan:span,children:show?cells[owner].props.children:null}));
 return <tr {...props}>{output}</tr>;
}
export function DataTable({children,sort:controlledSort,onSortChange,filters:controlledFilters,onFiltersChange,sortable=true,locale="fr",...props}: HTMLAttributes<HTMLTableElement> & {sort?:TableSort;onSortChange?:(sort:TableSort)=>void;filters?:Record<string,string>;onFiltersChange?:(filters:Record<string,string>)=>void;sortable?:boolean;locale?:"fr"|"en"}) {
 const translations:Record<string,string>={"Menu de colonne":"Column menu","Redimensionner":"Resize","Tri croissant":"Sort ascending","Tri décroissant":"Sort descending","Sans tri":"No sorting","Déplacer à gauche":"Move left","Déplacer à droite":"Move right","Déplacer au début":"Move first","Déplacer à la fin":"Move last"};
 const translate=(label:string)=>locale==="en"?(translations[label]??label):label;
 const sections=elements(children);
 const head=sections.find(section=>section.type==='thead');
 const header=elements(head?.props.children)[0];
 const headers=elements(header?.props.children);
 const [order,setOrder]=useState(headers.map((_,i)=>String(i)));
 const [widths,setWidths]=useState<Record<string,number>>({});
 const [localSort,setLocalSort]=useState<TableSort>({column:-1,direction:null});
 const [localFilters,setLocalFilters]=useState<Record<string,string>>({});
 const filters=controlledFilters??localFilters;
 const setFilters=(next:Record<string,string>)=>{setLocalFilters(next);onFiltersChange?.(next)};
 const sort=controlledSort ?? localSort;
 const setSort=(next:TableSort)=>{setLocalSort(next);onSortChange?.(next)};
 const table=useRef<HTMLTableElement>(null);
 const drag=useRef<{id:string;x:number;width:number;before:Record<string,number>}|null>(null);
 const visible=order;
 const measure=()=>Object.fromEntries(Array.from(table.current?.querySelectorAll<HTMLTableCellElement>('thead th')??[]).map((cell,i)=>[visible[i],cell.getBoundingClientRect().width]));
 const title=(id:string)=>elements(headers[Number(id)]?.props.children).some(child=>child.type==='input')?'':text(headers[Number(id)]?.props.children).trim();
 const moves=[['left','Déplacer à gauche',ArrowLeft],['right','Déplacer à droite',ArrowRight],['first','Déplacer au début',ArrowLeftToLine],['last','Déplacer à la fin',ArrowRightToLine]] as const;
 const sortBody=(nodes:ReactNode)=>{
  const rows=elements(nodes).filter(row=>onFiltersChange || Object.entries(filters).every(([column,needle])=>text(elements(row.props.children)[Number(column)]?.props.children).toLocaleLowerCase().includes(needle.toLocaleLowerCase())));
  if(onSortChange || !sort.direction || !sortable)return rows;
  const output:ReactNode[]=[];let batch:Cell[]=[];
  const flush=()=>{batch.sort((a,b)=>{const ac=elements(a.props.children)[sort.column],bc=elements(b.props.children)[sort.column];if(!ac||!bc)return 0;const av=value(ac),bv=value(bc);return compareTableValues(av,bv,sort.direction)});output.push(...batch);batch=[]};
  for(const row of rows){if(elements(row.props.children).some(cell=>(cell.props.colSpan??1)>1)){flush();output.push(row)}else batch.push(row)}flush();return output;
 };
 return <div className="shared-table">{Object.entries(filters).filter(([,v])=>v).length>0&&<div className="shared-table-filters" aria-label={locale==="en"?"Active filters":"Filtres actifs"}>{Object.entries(filters).filter(([,v])=>v).map(([id,filter])=><button type="button" key={id} onClick={()=>{const next={...filters};delete next[id];setFilters(next)}} aria-label={`${locale==="en"?'Clear filter':'Effacer le filtre'} ${title(id)}`}>{title(id)}: {filter} ×</button>)}</div>}<Context.Provider value={visible.map(Number)}><table {...props} ref={table} className={`shared-data-table ${props.className??''}`} style={{...props.style, ...(Object.keys(widths).length?{tableLayout:'fixed',width:visible.reduce((sum,id)=>sum+(widths[id]??160),0),minWidth:0}:{})}}>
 <colgroup>{visible.map(id=><col key={id} style={{width:widths[id]}}/>)}</colgroup>
 {sections.map((section,sectionIndex)=>section.type==='thead'?<thead key={sectionIndex}><tr>{visible.map((id,index)=>{const name=title(id);const active=sort.column===Number(id)&&sort.direction;return <th key={id} scope="col" aria-sort={active?(active==='asc'?'ascending':'descending'):undefined} className={`${name?'shared-column':'selection-cell'} ${headers[Number(id)].props.className??''}`}>{name?<><DropdownMenu><DropdownMenuTrigger className="shared-column-trigger" aria-label={`${translate("Menu de colonne")} ${name}`}>{headers[Number(id)].props.children}{active==='asc'?<ArrowUp size={12}/>:active==='desc'?<ArrowDown size={12}/>:<ChevronDown size={11}/>}</DropdownMenuTrigger><DropdownMenuContent align="start"><div className="menu-caption">{name}</div><label className="shared-column-filter">{locale==="en"?'Filter values':'Filtrer les valeurs'}<input aria-label={`${locale==="en"?'Filter':'Filtrer'} ${name}`} placeholder={locale==="en"?'Contains…':'Contient…'} value={filters[id]??''} onKeyDown={event=>{if(event.key!=="Escape"&&event.key!=="Tab")event.stopPropagation()}} onChange={event=>setFilters({...filters,[id]:event.target.value})}/></label><DropdownMenuSeparator/>{sortable&&<>{([['asc','Tri croissant',ArrowUp],['desc','Tri décroissant',ArrowDown],[null,'Sans tri',Minus]] as const).map(([direction,label,Icon])=><DropdownMenuItem key={label} role="menuitemradio" aria-checked={direction===null?!sort.direction:active===direction} onSelect={()=>setSort({column:Number(id),direction})}><Icon size={14}/>{translate(label)}{(direction===null?!sort.direction:active===direction)&&<Check size={12} className="trailing"/>}</DropdownMenuItem>)}<DropdownMenuSeparator/></>}{moves.map(([direction,label,Icon])=><DropdownMenuItem key={direction} disabled={direction==='first'||direction==='left'?index===0:index===visible.length-1} onSelect={()=>setOrder([...moveColumn(visible,id,direction)])}><Icon size={14}/>{translate(label)}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
 <div role="separator" tabIndex={0} aria-label={`${translate("Redimensionner")} ${name}`} aria-orientation="vertical" aria-valuemin={MIN_COLUMN_WIDTH} aria-valuemax={MAX_COLUMN_WIDTH} aria-valuenow={Math.round(widths[id]??160)} className="shared-column-resize" onPointerDown={e=>{if(e.button!==0)return;e.preventDefault();const measured=measure();drag.current={id,x:e.clientX,width:measured[id],before:widths};setWidths({...widths,...measured});e.currentTarget.setPointerCapture(e.pointerId);e.currentTarget.focus()}} onPointerMove={e=>{if(drag.current)setWidths(current=>({...current,[id]:clampColumnWidth(drag.current!.width+e.clientX-drag.current!.x)}))}} onPointerUp={()=>{drag.current=null}} onPointerCancel={()=>{if(drag.current)setWidths(drag.current.before);drag.current=null}} onLostPointerCapture={()=>{drag.current=null}} onDoubleClick={()=>setWidths(current=>({...current,[id]:160}))} onKeyDown={e=>{if(e.key==='Escape'&&drag.current){setWidths(drag.current.before);drag.current=null;return}const measured=measure();const width=resizeColumnByKey(measured[id],e.key,e.shiftKey);if(width!==null){e.preventDefault();setWidths({...widths,...measured,[id]:width})}}}/></>:headers[Number(id)].props.children}</th>})}</tr></thead>:section.type==='tbody'?cloneElement(section,{key:sectionIndex,children:sortBody(section.props.children)}):section.type==='colgroup'?null:cloneElement(section,{key:sectionIndex}))}
 </table></Context.Provider></div>;
}
