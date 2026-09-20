import {useCallback,useEffect,useReducer,useRef} from "react";
export type UploadState="idle"|"uploading"|"paused"|"complete"|"error"|"cancelled";
export interface UploadSnapshot{state:UploadState;progress:number}
export type UploadAction={type:"start"|"pause"|"resume"|"cancel"|"fail"|"reset"}|{type:"tick";amount:number};
export const initialUploadState:UploadSnapshot={state:"idle",progress:0};
export function uploadReducer(snapshot:UploadSnapshot,action:UploadAction):UploadSnapshot{
 switch(action.type){
  case "start":return {state:"uploading",progress:0};
  case "reset":return initialUploadState;
  case "pause":return snapshot.state==="uploading"?{...snapshot,state:"paused"}:snapshot;
  case "resume":return snapshot.state==="paused"||snapshot.state==="error"?{...snapshot,state:"uploading"}:snapshot;
  case "cancel":return {state:"cancelled",progress:0};
  case "fail":return snapshot.state==="uploading"?{...snapshot,state:"error"}:snapshot;
  case "tick":{if(snapshot.state!=="uploading"||!Number.isFinite(action.amount)||action.amount<=0)return snapshot;const progress=Math.min(100,snapshot.progress+action.amount);return {state:progress===100?"complete":"uploading",progress}}
 }
}

export const UPLOAD_FILENAME = "pipeline-ma-exemple.csv";
export const UPLOAD_CSV =
  "\uFEFF" +
  [
    "Societe;Secteur;Chiffre_affaires_EUR;EBITDA_EUR;Statut",
    ...Array.from({ length: 240 }, (_, index) => {
      const revenue = 2_000_000 + index * 75_000;
      return `Societe fictive ${String(index + 1).padStart(3, "0")};${["Services", "Industrie", "Logiciels"][index % 3]};${revenue};${Math.round(revenue * 0.18)};A qualifier`;
    }),
  ].join("\r\n");
const FILE_BYTES = new TextEncoder().encode(UPLOAD_CSV).length;

export function useUploadDemo({
  durationMs = 12_000,
}: { durationMs?: number } = {}) {
  const [snapshot,dispatch]=useReducer(uploadReducer,initialUploadState);
  const downloadUrl = useRef<string | null>(null);
  const duration=Number.isFinite(durationMs)&&durationMs>0?durationMs:12_000;
  useEffect(()=>{if(snapshot.state!=="uploading")return;let previous=performance.now();const timer=window.setInterval(()=>{const now=performance.now();dispatch({type:"tick",amount:((now-previous)/duration)*100});previous=now},120);return()=>window.clearInterval(timer)},[snapshot.state,duration]);

  useEffect(
    () => () => {
      if (downloadUrl.current) URL.revokeObjectURL(downloadUrl.current);
    },
    [],
  );

  const onDownload = useCallback(() => {
    if (snapshot.state !== "complete") return;
    if (!downloadUrl.current) {
      downloadUrl.current = URL.createObjectURL(
        new Blob([UPLOAD_CSV], { type: "text/csv;charset=utf-8" }),
      );
    }
    const anchor = document.createElement("a");
    anchor.href = downloadUrl.current;
    anchor.download = UPLOAD_FILENAME;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
  }, [snapshot.state]);

  return {
    name: UPLOAD_FILENAME,
    bytes: FILE_BYTES,
    state:snapshot.state,
    progress:Math.floor(snapshot.progress),
    onStart:useCallback(()=>dispatch({type:"start"}),[]),
    onPause:useCallback(()=>dispatch({type:"pause"}),[]),
    onResume:useCallback(()=>dispatch({type:"resume"}),[]),
    onCancel:useCallback(()=>dispatch({type:"cancel"}),[]),
    onError:useCallback(()=>dispatch({type:"fail"}),[]),
    reset:useCallback(()=>dispatch({type:"reset"}),[]),
    onDownload,
  };
}
