import {PromptBox,PromptActionTiles} from '../design-system/prompt-box';
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExecutionJournalDemo } from "./workflow-demo";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUp,
  FileText,
  Globe2,
  Loader2,
  Plus,
  Search,
  Square,
  X,
  Sparkles,
  FolderSearch,
  Code2,
  ChevronDown,
  Check,
} from "lucide-react";
import "./prompt-demo.css";
type Attachment = { id: string; name: string; size: number };
const initialAttachment = {
  id: "example",
  name: "Présentation société.pdf",
  size: 245000,
};
export function AttachmentDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="pc-attachment-demo">
      {visible ? (
        <Attachment file={initialAttachment} remove={() => setVisible(false)} />
      ) : (
        <button onClick={() => setVisible(true)}>
          Restaurer la pièce jointe
        </button>
      )}
      <p>Le fichier conserve son nom et peut être retiré.</p>
    </div>
  );
}
function Attachment({
  file,
  remove,
}: {
  file: Attachment;
  remove: () => void;
}) {
  return (
    <div className="pc-attachment">
      <span className="pc-file-icon">
        <FileText size={19} />
      </span>
      <div>
        <strong title={file.name}>{file.name}</strong>
        <small>
          Document ·{" "}
          {new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(
            file.size / 1000,
          )}{" "}
          ko
        </small>
      </div>
      <button aria-label={`Retirer ${file.name}`} onClick={remove}>
        <X size={12} />
      </button>
    </div>
  );
}
const suggestions = [
  {
    icon: Plus,
    title: "Créer",
    sub: "Synthèse, note, document",
    text: "Prépare une synthèse du dossier.",
  },
  {
    icon: FolderSearch,
    title: "Trouver",
    sub: "Réponses et fichiers",
    text: "Retrouve les documents utiles à ce dossier.",
  },
  {
    icon: Globe2,
    title: "Rechercher",
    sub: "Sources et contexte",
    text: "Recherche les éléments de contexte de cette société.",
  },
  {
    icon: Code2,
    title: "Structurer",
    sub: "Tableaux et données",
    text: "Structure les données du dossier dans un tableau.",
  },
];
export function PromptActionsDemo() {
  const [selected, setSelected] = useState("");
  return (
    <div className="pc-action-demo">
      <div className="pc-actions">
        {suggestions.map(({ icon: Icon, title, sub }) => (
          <button
            key={title}
            aria-pressed={selected === title}
            onClick={() => setSelected(title)}
          >
            <span className="pc-action-icon"><Icon size={20} /></span>
            <span className="pc-action-selected" aria-hidden="true"><Check size={12} /></span>
            <strong>{title}</strong>
            <span>{sub}</span>
          </button>
        ))}
      </div>
      <p role="status">
        {selected
          ? `Action sélectionnée : ${selected}`
          : "Choisissez une action pour commencer."}
      </p>
    </div>
  );
}
export function PromptDemo() {
  const [text, setText] = useState("");
  const [files, setFiles] = useState<Attachment[]>([]);
  const [mode, setMode] = useState("Rechercher");
  const [sources, setSources] = useState(["Documents"]);
  const [status, setStatus] = useState<"idle" | "running" | "streaming" | "stopped" | "done">("idle");
  const [answer,setAnswer]=useState('');
  const [submitted,setSubmitted]=useState('');
  const [response,setResponse]=useState('');
  const [prepared,setPrepared]=useState(0);
  const [runId,setRunId]=useState(0);
  const [sampleActive,setSampleActive]=useState('');
  const busy=status==='running'||status==='streaming';
  useEffect(()=>{if(status!=='running')return;const timer=setTimeout(()=>{if(prepared<1)setPrepared(prepared+1);else{setPrepared(2);setStatus('streaming')}},900);return()=>clearTimeout(timer)},[status,prepared]);
  useEffect(()=>{if(status!=='streaming')return;const words=response.split(' ');let n=0;const timer=setInterval(()=>{n++;setAnswer(words.slice(0,n).join(' '));if(n>=words.length){clearInterval(timer);setStatus('done')}},65);return()=>clearInterval(timer)},[status,response]);
  function submit() {
    if(!text.trim()||busy)return;
    setSubmitted(text.trim());setAnswer('');setPrepared(0);setRunId(id=>id+1);
    const intro=mode==='Rédiger'?'Voici une proposition de synthèse à adapter.':mode==='Analyser'?'Voici une première grille de lecture du dossier.':'Voici une démarche pour retrouver les informations utiles.';
    setResponse(`${intro}\n\n1. Rassembler les éléments disponibles : présentation de la société, chiffres clés et échanges récents.\n\n2. Distinguer les faits confirmés des points à vérifier, puis relever les pièces manquantes.\n\n3. Préparer une note courte avec le contexte, les questions ouvertes et la prochaine action.\n\nProchaine étape : préciser le dossier concerné et les informations à approfondir. Cette réponse est un exemple simulé ; elle ne provient pas d’une analyse de vos fichiers.`);
    setStatus('running');
  }
  return (
    <div className="pc-demo">
      <div className="pc-intro">
        <Sparkles size={20} />
        <h3>Sur quoi travaillons-nous ?</h3>
        <p>Un dossier, une question, une prochaine étape.</p>
      </div>
      <PromptBox value={text} onChange={setText} onSubmit={submit} busy={busy} onStop={()=>setStatus('stopped')} files={files} onFilesChange={setFiles} mode={mode} onModeChange={setMode} modes={[{value:'Rechercher',description:'Explorer les sources et le contexte'},{value:'Rédiger',description:'Composer une note ou une synthèse'},{value:'Analyser',description:'Comparer et faire ressortir les points clés'}]} sources={sources} onSourcesChange={setSources} sourceOptions={[{value:'Documents',description:'Les pièces jointes à votre demande'},{value:'Connaissances équipe',description:'Le contexte partagé par l’équipe'},{value:'Web',description:'Les informations publiques en ligne'}]} label="Votre demande" placeholder="Posez une question ou décrivez votre besoin…" caption="Démo locale · aucun fichier envoyé" labels={{attach:'Joindre des fichiers',send:'Envoyer la demande de démonstration',stop:'Arrêter la simulation',mode:'Mode de travail',sources:'Sources',remove:'Retirer',fileError:'Certains fichiers dépassent 10 Mo. Les autres ont été ajoutés.'}}/>
      {status!=='idle'&&<section className="pc-response" aria-label="Réponse de démonstration"><div className="pc-user-message">{submitted}</div><header><Sparkles size={16}/><strong>Assistant</strong><span>Simulation</span></header><ExecutionJournalDemo key={runId} completed={status==='done'?3:prepared} active={busy} interrupted={status==='stopped'} compact/>{status!=='running'&&<div className="pc-answer">{answer}{status==='streaming'&&<span className="pc-writing-cursor"/>}</div>}<footer role="status">{status==='streaming'?'Rédaction en cours…':status==='done'?'Réponse terminée':status==='stopped'?'Rédaction arrêtée':''}</footer></section>}
      <PromptActionTiles items={suggestions.slice(0,3).map(({icon:Icon,title,sub})=>({id:title,title,description:sub,icon:<Icon size={18}/>}))} selected={sampleActive} disabled={busy} onSelect={title=>{const sample=suggestions.find(s=>s.title===title)!;setSampleActive(title);setMode(title==='Créer'?'Rédiger':'Rechercher');setText(sample.text);setStatus('idle')}}/>

    </div>
  );
}

export function FollowupDemo() {
  const reduced = useReducedMotion();
  const [choice, setChoice] = useState(0);
  const [custom, setCustom] = useState("");
  const [result, setResult] = useState("");
  const choices = [
    "Relancer avec les mêmes sources",
    "Modifier la synthèse",
    "Écrire une autre consigne",
  ];
  return (
    <div className="pc-followup">
      <h3>Comment souhaitez-vous continuer ?</h3>
      <div
        className="pc-followup-choices"
        role="radiogroup"
        aria-label="Prochaine action"
      >
        {choices.map((item, index) => (
          <button
            role="radio"
            tabIndex={choice === index ? 0 : -1}
            aria-checked={choice === index}
            key={item}
            onClick={() => {
              setChoice(index);
              setResult("");
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                const next = (index + (e.key === "ArrowDown" ? 1 : 2)) % 3;
                setChoice(next);
                (
                  e.currentTarget.parentElement?.children[
                    next
                  ] as HTMLButtonElement
                )?.focus();
              }
            }}
          >
            <span>{index + 1}</span>
            {item}
          </button>
        ))}
      </div>
      <AnimatePresence initial={false}>
      {choice === 2 && (
        <motion.div key="custom-instruction" className="pc-followup-reveal"
          initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
          transition={{duration:reduced?0:.24,ease:[.22,1,.36,1]}}>
        <div className="pc-followup-field">
        <textarea
          aria-label="Autre consigne"
          placeholder="Votre consigne…"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
        </div>
        </motion.div>
      )}
      </AnimatePresence>
      <footer>
        <button
          disabled={choice === 2 && !custom.trim()}
          onClick={() =>
            setResult(
              choice === 2
                ? `Consigne retenue : ${custom}`
                : `Choix retenu : ${choices[choice]}`,
            )
          }
        >
          Continuer
        </button>
        <button onClick={() => setResult("Cette étape a été passée.")}>
          Passer
        </button>
      </footer>
      <p role="status">
        {result || "Choix de démonstration · aucune action externe."}
      </p>
    </div>
  );
}
