import { AnimatedReveal } from "./ui/animated-reveal";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  RotateCcw,
  Loader2,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bell,
  Bold,
  Check,
  Copy,
  FileText,
  Italic,
  MoreHorizontal,
  Plus,
  Trash2,
  Underline,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import "./micro-interactions-demo.css";
import { toggleTextFormat } from "./text-format-model.mjs";
const previewText = "Une idée claire mérite une présentation précise.";
const formatBits: Record<string, number> = { bold: 1, italic: 2, underline: 4 };
export function MicroInteractionsDemo() {
  const [marks, setMarks] = useState<number[]>(() => Array(previewText.length).fill(0));
  const [selection, setSelection] = useState<{start:number;end:number}|null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const toolbar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const capture = () => {
      const root = preview.current;
      const selected = window.getSelection();
      if (!root || !selected?.rangeCount) return;
      const range = selected.getRangeAt(0);
      if (root.contains(range.startContainer) && root.contains(range.endContainer)) {
        const before = range.cloneRange();
        before.selectNodeContents(root);
        before.setEnd(range.startContainer, range.startOffset);
        const start = before.toString().length;
        setSelection(range.collapsed ? null : {start, end: start + range.toString().length});
      } else if (!toolbar.current?.contains(document.activeElement)) setSelection(null);
    };
    document.addEventListener("selectionchange", capture);
    return () => document.removeEventListener("selectionchange", capture);
  }, []);
  const [align, setAlign] = useState<"left" | "center" | "right">("left");
  return (
    <div className="mi-demo">
      <div ref={toolbar} className="mi-editor-toolbar" aria-label="Mise en forme" onMouseDown={event => event.preventDefault()}>
        {[
          { key: "bold", icon: Bold, label: "Gras" },
          { key: "italic", icon: Italic, label: "Italique" },
          { key: "underline", icon: Underline, label: "Souligné" },
        ].map(({ key, icon: Icon, label }) => (
          <span className="mi-tooltip-wrap" key={key}>
            <button
              aria-label={label}
              aria-pressed={!!selection && marks.slice(selection.start, selection.end).every(mark => (mark & formatBits[key]) !== 0)}
              disabled={!selection}
              onClick={() => {
                if (selection) setMarks(current => toggleTextFormat(current, selection.start, selection.end, formatBits[key]));
              }}
            >
              <Icon size={16} />
            </button>
            <span role="tooltip" className="mi-tooltip">
              {label}
            </span>
          </span>
        ))}
        <span className="mi-separator" />
        <div className="mi-align">
          {[
            {
              value: "left" as const,
              icon: AlignLeft,
              label: "Aligner à gauche",
            },
            { value: "center" as const, icon: AlignCenter, label: "Centrer" },
            {
              value: "right" as const,
              icon: AlignRight,
              label: "Aligner à droite",
            },
          ].map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              aria-label={label}
              aria-pressed={align === value}
              onClick={() => setAlign(value)}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>
      <div
        ref={preview}
        className="mi-editor-preview"
        tabIndex={0}
        aria-label="Texte à mettre en forme"
        style={{ textAlign: align }}
      >
        {previewText.split("").map((letter, index) => <span key={index} style={{fontWeight: marks[index] & 1 ? 650 : 400, fontStyle: marks[index] & 2 ? "italic" : "normal", textDecoration: marks[index] & 4 ? "underline" : "none"}}>{letter}</span>)}
      </div>
      <p>Sélectionnez un passage, puis appliquez un style. L’alignement concerne le paragraphe.</p>
    </div>
  );
}
export function ContextMenuDemo() {
  const [open, setOpen] = useState(false);
  const [exists, setExists] = useState(true);
  const [message, setMessage] = useState("");
  return (
    <div className="mi-context-demo">
      {exists ? (
        <div
          className="mi-document"
          onContextMenu={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <span className="mi-doc-icon">
            <FileText size={22} />
          </span>
          <div>
            <strong>Synthèse financière.pdf</strong>
            <small>Mis à jour aujourd’hui · 245 ko</small>
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <button aria-label="Actions du document">
                <MoreHorizontal size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onSelect={() =>
                  setMessage(
                    "Copie locale du document préparée (démonstration).",
                  )
                }
              >
                <Copy size={13} />
                Dupliquer
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="mi-delete"
                onSelect={() => {
                  setExists(false);
                  setMessage("Document retiré de la démonstration.");
                }}
              >
                <Trash2 size={13} />
                Retirer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <button
          className="mi-restore"
          onClick={() => {
            setExists(true);
            setMessage("Document restauré.");
          }}
        >
          Restaurer le document
        </button>
      )}
      <p role="status">
        {message ||
          "Clic droit ou menu · mêmes actions accessibles au clavier."}
      </p>
    </div>
  );
}
export function NotificationDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="mi-notification-demo">
      {visible ? (
        <div className="mi-toast" role="status">
          <span className="mi-toast-check">
            <Check size={15} />
          </span>
          <div>
            <strong>Les modifications sont enregistrées</strong>
            <small>Votre dossier est à jour.</small>
          </div>
          <button
            aria-label="Fermer la notification"
            onClick={() => setVisible(false)}
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <button className="mi-restore" onClick={() => setVisible(true)}>
          <Bell size={13} />
          Afficher la notification
        </button>
      )}
      <p>Confirmation discrète, fermeture explicite.</p>
    </div>
  );
}
export function EmptyStateDemo() {
  const [state, setState] = useState<"empty" | "loading" | "ready">("empty");
  const [stage, setStage] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const steps = ["Préparation du document", "Mise en page des sections", "Dernières vérifications"];
  function changeState(next: "empty" | "loading" | "ready") {
    setStage(0); setExpanded(false); setState(next);
  }
  useEffect(() => {
    if (state !== "loading") return;
    const timers = [
      window.setTimeout(() => setStage(1), 850),
      window.setTimeout(() => setStage(2), 1800),
      window.setTimeout(() => setState("ready"), 2900),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [state]);
  const loading = state === "loading";
  return (
    <div className="mi-empty-demo">
      <div className={`mi-empty-card mi-document-state is-${state}`} aria-busy={loading}>
        {state === "empty" ? <div className="mi-state-empty">
          <span className="mi-empty-icon"><FileText size={23}/></span>
          <h3>Aucun document pour le moment</h3>
          <p>Ajoutez une première pièce pour commencer ce dossier.</p>
          <button onClick={() => changeState("loading")}><Plus size={13}/>Ajouter un exemple</button>
        </div> : <>
          <header className="mi-document-heading"><span><FileText size={14}/> DOCUMENTS DU DOSSIER</span><span className={`mi-document-status ${loading ? "pending" : "complete"}`}>{loading ? <Loader2 size={12}/> : <Check size={12}/>} {loading ? "Préparation" : "Prêt à consulter"}</span></header>
          <div className="mi-document-body">
            <div className={`mi-paper ${loading ? "is-skeleton" : ""}`} aria-hidden="true">
              <div className="mi-paper-top"><i/>ATLAS<span>01</span></div>
              <div className="mi-paper-title">Synthèse<br/>financière</div>
              <div className="mi-paper-rule"/>
              <div className="mi-paper-lines"><i/><i/><i/></div>
              <div className="mi-paper-chart"><i/><i/><i/><i/><i/></div>
              <div className="mi-paper-bottom">CONFIDENTIEL<span>1 / 3</span></div>
            </div>
            <div className="mi-document-info">
              <span className="mi-document-eyebrow">DOSSIER ATLAS</span>
              <h3>Synthèse financière</h3>
              <p>{loading ? "Nous préparons votre aperçu et les informations du document." : "Les éléments clés du dossier, réunis dans un document prêt à parcourir."}</p>
              {loading ? <div className="mi-detail-skeleton" aria-hidden="true"><i/><i/><i/></div> : <dl><div><dt>Format</dt><dd>PDF · 245 ko</dd></div><div><dt>Contenu</dt><dd>3 pages · Synthèse</dd></div><div><dt>Ajouté par</dt><dd><img src="./avatars/alice.svg" alt=""/>Alice Martin</dd></div></dl>}
            </div>
          </div>
          <footer className="mi-document-footer">{loading ? <>
            <div className="mi-loading-caption" role="status"><span key={stage}>{steps[stage]}</span><small>Exemple local</small></div>
            <div className="mi-loading-steps" aria-hidden="true">{steps.map((step, i) => <span key={step} className={i < stage ? "done" : i === stage ? "current" : ""}/>)}</div>
          </> : <div className="mi-ready-actions"><span><Check size={13}/>Document disponible</span><button aria-label="Rejouer le chargement" onClick={() => changeState("loading")}><RotateCcw size={13}/></button><button className="mi-open-document" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? "Fermer l’aperçu" : "Consulter"}<ArrowUpRight size={13}/></button></div>}</footer>
        </>}
      </div>
      <AnimatedReveal open={expanded && state === "ready"}><section className="mi-document-excerpt" aria-label="Aperçu de la synthèse"><span>APERÇU · DOCUMENT DE DÉMONSTRATION</span><h3>Synthèse du dossier Atlas</h3><p>Le dossier rassemble la présentation de la société, les éléments financiers disponibles et les échanges de l’équipe.</p><h4>Points à vérifier</h4><p>Confirmer le périmètre de l’analyse, rapprocher les pièces reçues et compléter les informations manquantes.</p><h4>Prochaine étape</h4><p>Organiser une revue avec le responsable du dossier avant de partager la synthèse.</p></section></AnimatedReveal>
      <div className="mi-state-buttons">{(["empty", "loading", "ready"] as const).map((value, index) => <button key={value} aria-pressed={state === value} onClick={() => changeState(value)}>{["Vide", "Chargement", "Rempli"][index]}</button>)}</div>
    </div>
  );
}
