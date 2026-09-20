// Project merged cells onto a reordered subset without duplicating their content.
export function projectCells(spans, order) {
 const owners=spans.flatMap((span,owner)=>Array.from({length:span},()=>owner));
 const visible=order.map(index=>owners[index]).filter(owner=>owner!==undefined);
 const seen=new Set();const result=[];
 for(let i=0;i<visible.length;){const owner=visible[i];let span=1;while(visible[i+span]===owner)span++;result.push({owner,span,show:!seen.has(owner)});seen.add(owner);i+=span;}
 return result;
}
export function compareTableValues(a,b,direction) {
 const delta=typeof a==='number'&&typeof b==='number'?a-b:String(a).localeCompare(String(b),'fr',{numeric:true});
 return direction==='asc'?delta:direction==='desc'?-delta:0;
}
