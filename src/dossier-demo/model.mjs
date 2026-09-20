/** @typedef {{phase:'idle'|'running'|'paused'|'done', completed:number, prompt:string, text:string, saved:boolean}} Run */
/** @returns {Run} */
export function initialRun(){return {phase:'idle',completed:0,prompt:'Préparer une synthèse des pièces et lister les points à confirmer.',text:'',saved:false};}
/** @param {Run} state @param {{type:string,value?:string,result?:string}} event @returns {Run} */
export function transition(state,event){
 switch(event.type){
  case 'prompt':return state.phase==='idle'?{...state,prompt:event.value??''}:state;
  case 'start':return state.phase==='idle'&&state.prompt.trim()?{...state,phase:'running'}:state;
  case 'pause':return state.phase==='running'?{...state,phase:'paused'}:state;
  case 'resume':return state.phase==='paused'?{...state,phase:'running'}:state;
  case 'tick':if(state.phase!=='running')return state;return state.completed<2?{...state,completed:state.completed+1}:{...state,completed:3,phase:'done',text:event.result??'',saved:false};
  case 'edit':return state.phase==='done'?{...state,text:event.value??'',saved:false}:state;
  case 'save':return state.phase==='done'&&state.text.trim()?{...state,saved:true}:state;
  case 'reset':return {...initialRun(),prompt:state.prompt};
  default:return state;
 }
}
