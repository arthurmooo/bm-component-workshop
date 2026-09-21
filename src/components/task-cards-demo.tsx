import { ActionFeedback } from "./ui/action-feedback";
import { AnimatedReveal } from "./ui/animated-reveal";
import { FileTypeIcon } from "./ui/file-type-icon";
import { useEffect, useState } from "react";
import {
  Check,
  ChevronDown,
  FileText,
  MessageSquare,
  Paperclip,
  Play,
  Loader2,
  Workflow,
  X,
  CalendarDays,
} from "lucide-react";
import "./task-cards-demo.css";
export function TaskCardsDemo() {
  const [checks, setChecks] = useState([true, true, false, false]),
    [expanded, setExpanded] = useState(true),
    [imageVisible, setImageVisible] = useState(true),
    [note, setNote] = useState(""),
    [notes, setNotes] = useState<string[]>([]);
  const count = checks.filter(Boolean).length;
  return (
    <article className="task-rich-card">
      <header>
        <span className="task-category">Dossier Atlas</span>
        <span className="task-priority">Priorité haute</span>
      </header>
      {imageVisible && (
        <div className="task-cover">
          <div />
          <span>
            ATLAS
            <br />
            <small>Présentation du projet</small>
          </span>
          <button
            aria-label="Masquer l’aperçu joint"
            onClick={() => setImageVisible(false)}
          >
            <X size={12} />
          </button>
        </div>
      )}
      <h3>Préparer le comité d’investissement</h3>
      <p>Rassembler les éléments de décision et finaliser la synthèse.</p>
      <button
        className="task-checklist-trigger"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <span>
          Liste de préparation{" "}
          <b>
            {count} / {checks.length}
          </b>
        </span>
        <span className="task-progress-percent">{count * 25} %</span>
        <ChevronDown size={13} />
      </button>
      <div
        className="task-check-progress"
        role="progressbar"
        aria-label="Préparation terminée"
        aria-valuemin={0}
        aria-valuemax={4}
        aria-valuenow={count}
      >
        <i style={{ width: `${count * 25}%` }} />
      </div>
      <AnimatedReveal open={expanded}>
        <div className="task-checklist">
          {[
            "Vérifier les chiffres",
            "Ajouter les annexes",
            "Relire la synthèse",
            "Valider la présentation",
          ].map((v, i) => (
            <label key={v} data-complete={checks[i]}>
              <input
                type="checkbox"
                checked={checks[i]}
                onChange={() =>
                  setChecks(checks.map((c, j) => (j === i ? !c : c)))
                }
              />
              <i aria-hidden="true">{checks[i] ? <Check size={11} /> : i + 1}</i>
              <span>{v}</span>
            </label>
          ))}
        </div>
      </AnimatedReveal>
      <div className="task-file">
        <FileTypeIcon filename="Présentation comité.pdf" className="task-file-icon" />
        <span>
          Présentation comité.pdf
          <small>PDF · 2,4 Mo · fichier de démonstration</small>
        </span>
        {!imageVisible && (
          <button onClick={() => setImageVisible(true)}>Aperçu</button>
        )}
      </div>
      <footer>
        <span className="task-assignees">
          <img src="./avatars/alice.svg" alt="Alice" />
          <img src="./avatars/emma.svg" alt="Emma" />
        </span>
        <span className="task-meta-chip">
          <CalendarDays size={11} />
          18 sept.
        </span>
        <span className="task-meta-chip">
          <Paperclip size={11} />1
        </span>
        <span className="task-meta-chip">
          <MessageSquare size={11} />
          {notes.length}
        </span>
      </footer>
      <div className="task-discussion">
        {notes.map((v, i) => (
          <p key={i}>
            <strong>Vous</strong>
            {v}
          </p>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (note.trim()) {
              setNotes([...notes, note.trim()]);
              setNote("");
            }
          }}
        >
          <input
            aria-label="Commentaire local sur la tâche"
            value={note}
            maxLength={280}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ajouter une note locale…"
          />
          <button disabled={!note.trim()} aria-label="Ajouter la note">
            <Check size={13} />
          </button>
        </form>
      </div>
    </article>
  );
}
export function WorkflowTemplateDemo() {
  const [phase, setPhase] = useState<'idle'|'running'|'done'>('idle');
  const [activeNode, setActiveNode] = useState(-1);
  const [runs, setRuns] = useState(12);
  useEffect(()=>{
    if(phase!=='running')return;
    const timers = [0, 1, 2].map((node) => setTimeout(() => setActiveNode(node), node * 420));
    timers.push(setTimeout(()=>{setActiveNode(3);setPhase('done');setRuns(n=>n+1)},1260));
    return()=>timers.forEach(clearTimeout);
  },[phase]);
  return (
    <article className="workflow-template" data-state={phase}>
      <div className="template-cover">
        <span data-active={activeNode >= 0}>
          <FileText size={22} />
        </span>
        <i data-active={activeNode >= 1} />
        <span data-active={activeNode >= 1}>
          <Workflow size={24} />
        </span>
        <i data-active={activeNode >= 2} />
        <span data-active={activeNode >= 2}>
          <Check size={21} />
        </span>
      </div>
      <div className="template-body">
        <div className="template-meta">
          <span>FINANCE</span>
          <small>Modifié le 15 sept.</small>
        </div>
        <h3>Validation des factures</h3>
        <p>
          Vérification des pièces, contrôle du montant et préparation de
          l’approbation.
        </p>
        <div className="template-trigger">
          <span>Déclencheur</span>
          <strong>Nouvelle pièce reçue</strong>
        </div>
        <div className="template-tools">
          <span>Outils</span>
          <b title="Documents">D</b>
          <b title="Messagerie">M</b>
          <b title="Comptabilité">C</b>
        </div>
      </div>
      <footer>
        <span>{runs} exécutions simulées</span>
        <button
          disabled={phase==='running'}
          onClick={() => {setActiveNode(0);setPhase('running')}}
        >
          <ActionFeedback state={phase} icon={phase==='running'?<Loader2 size={13} className="wf-spinner"/>:phase==='done'?<Check size={13}/>:<Play size={13}/>} text={phase==='running'?"En cours…":phase==='done'?"Terminée · rejouer":"Simuler"}/>
        </button>
      </footer>
    </article>
  );
}
