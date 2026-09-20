import { compareTableValues } from './table-cells.mjs';
// Read presentation values without invoking a component or including hidden decoration.
export function cellText(node) {
 if (typeof node === 'string' || typeof node === 'number') return String(node);
 if (Array.isArray(node)) return node.map(cellText).filter(Boolean).join(' ');
 if (!node || typeof node !== 'object' || !node.props || node.props['aria-hidden']) return '';
 const p=node.props;
 return ['title','subtitle','name','label','value','detail','children'].map(key=>cellText(p[key])).filter(Boolean).join(' ');
}
/** @param {{column:number,direction:"asc"|"desc"|null}} sort */
export function queryTableRows(rows, query='', filters={}, sort={column:-1,direction:null}, offset=0) {
 const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase().trim();
 const found=rows.filter(row=>normalize(row.searchText ?? row.cells.map(cellText).join(' ')).includes(normalize(query)) && Object.entries(filters).every(([column,needle])=>normalize(cellText(row.cells[Number(column)-offset])).includes(normalize(needle))));
 if (!sort.direction) return found;
 const value=node=>{if(typeof node?.props?.value==='number')return node.props.value;const raw=cellText(node).trim();return /^-?\d+(\.\d+)?%?$/.test(raw)?Number(raw.replace('%','')):raw};
 return found.sort((a,b)=>compareTableValues(value(a.cells[sort.column-offset]),value(b.cells[sort.column-offset]),sort.direction));
}
