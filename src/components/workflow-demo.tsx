import { ActionFeedback } from "./ui/action-feedback";
import { AnimatedReveal } from "./ui/animated-reveal";
import { ExecutionJournal } from "../design-system/dossier-components";
import { useEffect, useState } from "react";
import {
  Check,
  ChevronDown,
  Circle,
  FileSearch,
  Files,
  Loader2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./workflow-demo.css";
const steps = [
  {
    name: "Lire les documents",
    detail: "3 pièces du dossier · accès local simulé",
    icon: Files,
    log: "Documents indexés : présentation, bilan, lettre de mission.",
  },
  {
    name: "Extraire les informations",
    detail: "Chiffres clés, parties prenantes et échéances",
    icon: FileSearch,
    log: "12 informations structurées. Unité des montants : EUR.",
  },
  {
    name: "Préparer la synthèse",
    detail: "Relier chaque observation à sa source",
    icon: Sparkles,
    log: "Synthèse préparée avec 3 références. Relecture humaine requise.",
  },
];
export function WorkflowDemo() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState(0);
  const [logs, setLogs] = useState(false);
  useEffect(() => {
    if (!running || step >= steps.length) return;
    const timer = window.setTimeout(() => {
      setStep((value) => value + 1);
      if (step === steps.length - 1) setRunning(false);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, [running, step]);
  const finished = step === steps.length;
  const stateFor = (index: number) => step > index ? "done" : step === index && started ? running ? "running" : "paused" : "pending";
  const stateLabel = (index: number) => ({done: "Terminé", running: "En cours", paused: "En pause", pending: "En attente"})[stateFor(index)];
  return (
    <div className="wf-demo">
      <header>
        <span className="wf-identity">
          <Workflow size={16} />
          Préparer un dossier
        </span>
        <span className={`wf-status ${running ? "is-active" : ""}`} data-state={finished ? "done" : running ? "running" : started ? "paused" : "pending"}>
          {finished
            ? "Terminé"
            : running
              ? "En cours"
              : started
                ? "En pause"
                : "Prêt"}
        </span>
      </header>
      <div className="wf-node-flow" aria-label="Étapes du workflow">
        {steps.map(({ name, icon: Icon }, index) => (
          <div className="wf-node-slot" key={name}>
            {index > 0 && (
              <span
                className={`wf-connector ${step >= index ? "is-done" : ""}`}
                aria-hidden="true"
              />
            )}
            <button
              className={`wf-node ${selected === index ? "is-selected" : ""} ${step > index ? "is-done" : ""}`}
              data-state={stateFor(index)}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <span className="wf-node-icon">
                <Icon size={17} />
              </span>
              <span>
                <small>ÉTAPE 0{index + 1}</small>
                <strong>{name}</strong>
                <em className="wf-node-state">{stateLabel(index)}</em>
              </span>
              {step > index ? (
                <Check size={16} />
              ) : running && step === index ? (
                <Loader2 size={16} className="wf-spinner" />
              ) : stateFor(index) === "paused" ? (
                <Pause size={14} />
              ) : (
                <Circle size={10} />
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="wf-inspector" data-state={stateFor(selected)}>
        <span>Étape {selected + 1} · {stateLabel(selected)}</span>
        <h4>{steps[selected].name}</h4>
        <p>{steps[selected].detail}</p>
        <div>
          <span>{step > selected ? "Sortie obtenue" : "Sortie attendue"}</span>
          <strong>
            {selected === 0
              ? "3 documents lisibles"
              : selected === 1
                ? "Données structurées"
                : "Note de synthèse sourcée"}
          </strong>
        </div>
      </div>
      <section className="wf-run">
        <header>
          <span>
            {finished
              ? "Exécution terminée"
              : started
                ? "Exécution locale"
                : "Tester le parcours"}
          </span>
          <small>{step} / 3 étapes</small>
        </header>
        <div className="wf-step-list">
          {steps.map((item, index) => (
            <div
              key={item.name}
              data-state={stateFor(index)}
              className={
                step > index
                  ? "is-done"
                  : step === index && running
                    ? "is-current"
                    : ""
              }
            >
              {step > index ? (
                <Check size={13} />
              ) : step === index && running ? (
                <Loader2 size={13} className="wf-spinner" />
              ) : stateFor(index) === "paused" ? (
                <Pause size={13} />
              ) : (
                <Circle size={10} />
              )}
              <span>{item.name}</span>
              <small>{stateLabel(index)}
              </small>
            </div>
          ))}
        </div>
        <footer>
          <button
            className="wf-primary"
            onClick={() => {
              if (finished) {
                setStep(0);
                setStarted(true);
                setRunning(true);
              } else {
                setStarted(true);
                setRunning(!running);
              }
            }}
          >
            {running ? <Pause size={12} /> : <Play size={12} />}{" "}
            {finished
              ? "Relancer"
              : running
                ? "Mettre en pause"
                : started
                  ? "Reprendre"
                  : "Lancer la simulation"}
          </button>
          <button
            aria-label="Réinitialiser le workflow"
            onClick={() => {
              setStep(0);
              setRunning(false);
              setStarted(false);
            }}
          >
            <RotateCcw size={13} />
          </button>
          <span role="status">
            {finished
              ? "Synthèse prête à relire."
              : running
                ? "Simulation, sans appel à une IA."
                : started
                  ? "Progression conservée."
                  : "Aucun service externe appelé."}
          </span>
        </footer>
      </section>
      <button
        className="wf-log-toggle"
        aria-expanded={logs}
        onClick={() => setLogs(!logs)}
      >
        <ChevronDown
          size={12}
          style={{ transform: logs ? "none" : "rotate(-90deg)" }}
        />
        Journal d’exécution <span>{step}</span>
      </button>
      <AnimatedReveal open={logs}>
        <ol className="wf-log">
          {steps.slice(0, step).map((item, index) => (
            <li key={item.name}>
              <span>0{index + 1}</span>
              {item.log}
            </li>
          ))}
          {step === 0 && <li>Aucun événement pour le moment.</li>}
        </ol>
      </AnimatedReveal>
    </div>
  );
}

export function ExecutionJournalDemo({completed = 3, active = false, interrupted = false, compact = false}: {completed?: number; active?: boolean; interrupted?: boolean; compact?: boolean} = {}) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const output=JSON.stringify({dossier:"Atelier Nord",statut:"à relire",sources:3},null,2);
  return <ExecutionJournal title={completed===3?"3 étapes terminées":interrupted?"Exécution arrêtée":"Préparation de la réponse"} steps={steps.map((step,index)=>({id:String(index),label:step.name,state:index<completed?"done":index===completed&&active?"running":index===completed&&interrupted?"paused":"pending"}))}>
    {!compact&&completed===3&&<div className="wf-journal-output"><header><span>Résultat structuré</span><button aria-label="Copier le résultat de démonstration" onClick={async()=>{try{await navigator.clipboard.writeText(output);setCopied(true);setCopyError(false)}catch{setCopyError(true)}}}><ActionFeedback state={copied?"copied":"idle"} icon={copied?<Check size={13}/>:<Files size={13}/>} text={copied?"Copié":"Copier"}/></button></header><pre>{output}</pre><span role="status">{copyError?"Copie indisponible. Sélectionnez le JSON ci-dessus.":copied?"Résultat copié.":"Exemple local, aucune exécution réelle."}</span></div>}
  </ExecutionJournal>;
}
