import { ActionFeedback as ActionFeedbackLabel } from "./ui/action-feedback";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AppSelect } from "./ui/app-select";
import * as Popover from "@radix-ui/react-popover";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  Plus,
  Compass,
  FileSpreadsheet,
  Mail,
  MessageSquare,
  Search,
  Share2,
  X,
  Link2,
  Copy,
  Loader2,
  ChevronDown,
} from "lucide-react";
import "./agent-catalog-demo.css";
const agents = [
  {
    id: "dossiers",
    name: "Préparateur de dossiers",
    category: "Documents",
    description: "Réunit les pièces et prépare une synthèse structurée.",
    author: "Alice",
    tone: "blue",
    tools: ["Drive", "Docs", "Mail"],
  },
  {
    id: "suivi",
    name: "Assistant de suivi",
    category: "Commercial",
    description: "Organise les prochaines étapes de vos opportunités.",
    author: "Paul",
    tone: "amber",
    tools: ["CRM", "Mail", "Slack"],
  },
  {
    id: "finance",
    name: "Analyste financier",
    category: "Finance",
    description: "Rapproche les indicateurs et signale les écarts à vérifier.",
    author: "Emma",
    tone: "pink",
    tools: ["Excel", "Drive", "Docs"],
  },
];
export function AgentCatalogDemo() {
  const [category, setCategory] = useState("Tous");
  const [query, setQuery] = useState("");
  const [connected, setConnected] = useState<string[]>([]);
  const [shared, setShared] = useState<(typeof agents)[number] | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const visible = agents.filter(
    (agent) =>
      (category === "Tous" || agent.category === category) &&
      agent.name.toLowerCase().includes(query.toLowerCase()),
  );
  function close() {
    dialog.current?.close();
    trigger.current?.focus();
    setCopied(false);
  }
  return (
    <div className="ac-demo">
      <header>
        <Compass size={16} />
        <h3>Découvrir les assistants</h3>
      </header>
      <div className="ac-controls">
        <div className="ac-categories" aria-label="Catégorie d’assistants">
          {["Tous", "Documents", "Commercial", "Finance"].map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="ac-search">
          <Search size={12} />
          <input
            value={query}
            aria-label="Rechercher un assistant"
            placeholder="Rechercher"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="ac-grid">
        {visible.map((agent) => (
          <article key={agent.id} className="ac-card">
            <div className={`ac-art ac-art-${agent.tone}`}>
              <div className="ac-tool-icons">
                {agent.tools.map((tool, index) => (
                  <span key={tool} title={tool}>
                    {index === 0 ? (
                      <FileSpreadsheet size={17} />
                    ) : index === 1 ? (
                      <Mail size={17} />
                    ) : (
                      <MessageSquare size={17} />
                    )}
                    <small>{tool}</small>
                  </span>
                ))}
              </div>
            </div>
            <div className="ac-body">
              <h4>{agent.name}</h4>
              <p>{agent.description}</p>
              <div className="ac-author">
                <span>{agent.author.slice(0, 1)}</span>
                <small>par {agent.author}</small>
                <button
                  aria-label={`Partager ${agent.name}`}
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setShared(agent);
                    dialog.current?.showModal();
                  }}
                >
                  <Share2 size={13} />
                </button>
              </div>
              <button
                className={`ac-connect ${connected.includes(agent.id) ? "is-connected" : ""}`}
                onClick={() =>
                  setConnected((items) =>
                    items.includes(agent.id)
                      ? items.filter((id) => id !== agent.id)
                      : [...items, agent.id],
                  )
                }
              >
                {connected.includes(agent.id) ? (
                  <Check size={12} />
                ) : (
                  <Link2 size={12} />
                )}{" "}
                {connected.includes(agent.id)
                  ? "Ajouté · retirer"
                  : "Ajouter à mon espace"}
              </button>
            </div>
          </article>
        ))}
      </div>
      {!visible.length && (
        <div className="ac-empty">
          Aucun assistant trouvé.
          <button
            onClick={() => {
              setCategory("Tous");
              setQuery("");
            }}
          >
            Effacer les filtres
          </button>
        </div>
      )}
      <p className="ac-note">
        Démonstration locale · aucune connexion à un service externe.
      </p>
      <dialog
        ref={dialog}
        className="ac-dialog"
        aria-label="Partager l’assistant"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
      >
        <header>
          <h3>Partager l’assistant</h3>
          <button aria-label="Fermer le partage" onClick={close}>
            <X size={16} />
          </button>
        </header>
        <p>{shared?.name}</p>
        <label>
          Accès
          <AppSelect aria-label="Accès à l’assistant">
            <option>Mon équipe uniquement</option>
            <option>Lecture seule</option>
          </AppSelect>
        </label>
        <div className="ac-share-link">
          <Link2 size={13} />
          <span>atelier.local/assistants/{shared?.id}</span>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  `atelier.local/assistants/${shared?.id}`,
                );
                setCopied(true);
                setCopyError(false);
              } catch {
                setCopyError(true);
                setCopied(false);
              }
            }}
            aria-label="Copier le lien de démonstration"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <small role="status">
          {copyError
            ? "Copie indisponible. Sélectionnez le lien affiché."
            : copied
              ? "Lien copié : ce lien de démonstration n’est pas publié."
              : "Aucune invitation ne sera envoyée."}
        </small>
        <button className="ac-close" onClick={close}>
          Terminer
        </button>
      </dialog>
    </div>
  );
}

export function IntegrationRowsDemo() {
  const [enabled, setEnabled] = useState<string[]>([]);
  const rows = [
    {
      id: "channels",
      title: "Connecter un canal",
      description: "Centralisez les messages de votre équipe.",
      tone: "blue",
      icons: [Mail, MessageSquare, Share2],
    },
    {
      id: "knowledge",
      title: "Base de connaissances",
      description: "Réunissez documents et sources de confiance.",
      tone: "amber",
      icons: [FileSpreadsheet, Search, Link2],
    },
    {
      id: "inbox",
      title: "Votre boîte de réception",
      description: "Relisez les propositions avant toute action.",
      tone: "pink",
      icons: [Mail, Check, MessageSquare],
    },
  ];
  return (
    <div className="ac-integration-rows">
      {rows.map((row) => (
        <button
          key={row.id}
          aria-pressed={enabled.includes(row.id)}
          className="ac-integration-row"
          onClick={() =>
            setEnabled((items) =>
              items.includes(row.id)
                ? items.filter((i) => i !== row.id)
                : [...items, row.id],
            )
          }
        >
          <span className={`ac-art ac-art-${row.tone}`}>
            <span className="ac-tool-icons">
              {row.icons.map((Icon, index) => (
                <span key={index}>
                  <Icon size={15} />
                </span>
              ))}
            </span>
          </span>
          <span className="ac-integration-text">
            <strong>{row.title}</strong>
            <span>{row.description}</span>
          </span>
          <span className="ac-integration-state" aria-hidden="true">
            <Plus className="ac-integration-plus" size={20} strokeWidth={1.8} />
            <Check className="ac-integration-check" size={20} strokeWidth={2} />
          </span>
        </button>
      ))}
      <p className="ac-note">
        Activation simulée · aucun compte externe connecté.
      </p>
    </div>
  );
}

export function ShareDemo() {
  const [team, setTeam] = useState(true);
  const [publicAccess, setPublicAccess] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [copying,setCopying]=useState(false);
  const [phase,setPhase]=useState<'idle'|'preparing'|'sharing'|'done'>('idle');
  const timers=useRef<ReturnType<typeof setTimeout>[]>([]);
  const copyReset=useRef<ReturnType<typeof setTimeout>|undefined>(undefined);
  const alive=useRef(true);
  useEffect(()=>{alive.current=true;return()=>{alive.current=false;timers.current.forEach(clearTimeout);clearTimeout(copyReset.current)}},[]);
  const busy=phase==='preparing'||phase==='sharing';
  const later=(fn:()=>void,delay:number)=>{timers.current.push(setTimeout(fn,delay))};
  const simulate=()=>{if(busy)return;setSaved(false);setPhase('preparing');later(()=>setPhase('sharing'),550);later(()=>{setPhase('done');setSaved(true)},1250)};
  return (
    <div className="ac-share-demo">
      <h3>Partager ce document</h3>
      <p>Un accès simple, choisi pour chaque audience.</p>
      <div className="ac-share-copy" data-copied={copied}>
        <Link2 size={16} />
        <span>Lien du document</span>
        <button type="button" disabled={copying} aria-label={copied?'Lien copié':'Copier le lien'}
          onClick={async () => {
            setCopying(true);setCopied(false);setCopyError(false);
            clearTimeout(copyReset.current);

            try {
              await navigator.clipboard.writeText(
                "atelier.local/documents/demo",
              );
              if(!alive.current)return;
              setCopied(true);
              copyReset.current=setTimeout(()=>setCopied(false),2400);
              setCopyError(false);
            } catch {
              if(!alive.current)return;
              setCopyError(true);
              setCopied(false);
            } finally { if(alive.current)setCopying(false); }
          }}
        >
          <ActionFeedbackLabel state={copying?"copying":copied?"copied":"copy"} icon={copying?<Loader2 size={12}/>:copied?<Check size={12}/>:<Copy size={12}/>} text={copying?"Copie…":copied?"Copié":"Copier"}/>
        </button>
      </div>
      <h4>Partager avec</h4>
      <div className="ac-sharing-row">
        <span className="ac-team-symbol">B</span>
        <strong>Équipe BM</strong>
        <small>Équipe</small>
        <div className="ac-avatar-group" aria-label="4 membres">
          <span>A</span>
          <span>P</span>
          <span>E</span>
          <span>J</span>
        </div>
        <button
          role="switch"
          aria-checked={team}
          aria-label="Accès de l’équipe"
          className="ac-switch" disabled={busy}
          onClick={() => {
            setTeam(!team);
            setSaved(false);setPhase("idle");
          }}
        >
          <span />
        </button>
      </div>
      <div className="ac-sharing-row">
        <Compass size={21} />
        <strong>Toute personne avec le lien</strong>
        <button
          role="switch"
          aria-checked={publicAccess}
          aria-label="Accès public par lien"
          className="ac-switch" disabled={busy}
          onClick={() => {
            setPublicAccess(!publicAccess);
            setSaved(false);setPhase("idle");
          }}
        >
          <span />
        </button>
      </div>
      <button type="button" className="ac-publish-demo" data-phase={phase} disabled={busy} aria-busy={busy} onClick={simulate}>
        {busy&&<span className="ac-share-progress" aria-hidden="true"/>}
        <ActionFeedbackLabel state={phase} icon={busy?<Loader2 size={14}/>:saved?<Check size={14}/>:<Share2 size={14}/>} text={phase==='preparing'?'Préparation des accès…':phase==='sharing'?'Simulation en cours…':saved?'Partage simulé':'Simuler le partage'}/>
      </button>
      <span className="ac-share-feedback" role="status">
        {copyError
          ? "Copie indisponible dans ce navigateur."
          : busy
            ? "Vérification des accès sélectionnés…"
          : saved
            ? `Accès simulé : ${team ? "équipe" : ""}${team && publicAccess ? " et " : ""}${publicAccess ? "public" : ""}${!team && !publicAccess ? "privé" : ""}. Rien n’a été publié.`
            : copied
              ? "Lien de démonstration copié, aucun lien public créé."
              : "Démonstration locale · aucune publication."}
      </span>
    </div>
  );
}
export function ConnectionPopoverDemo() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"idle" | "connecting" | "connected" | "disconnecting">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const connected = phase === "connected";
  const busy = phase === "connecting" || phase === "disconnecting";
  function toggleConnection() {
    if (busy) return;
    setPhase(connected ? "disconnecting" : "connecting");
    timer.current = setTimeout(() => setPhase(connected ? "idle" : "connected"), connected ? 600 : 1100);
  }
  return (
    <div className="ac-connection-demo">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button className="ac-connection-trigger" data-connected={connected}>
            <MessageSquare size={17} />
            <span>Messagerie de l’équipe</span>
            <span className="ac-connection-indicator" aria-hidden="true"><ChevronDown size={14} /></span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
                        align="start"
            className="ac-connection-popover" data-phase={phase}
            sideOffset={10}
            collisionPadding={16}
            aria-label="Connexion messagerie"
          >
            <div className="ac-connection-emblem" data-connected={connected}>
              <MessageSquare size={22} />
              <span aria-hidden="true"><Check size={10} /></span>
            </div>
            <h4>Un canal pour vos assistants</h4>
            <p>Retrouvez les mises à jour dans votre messagerie.</p>
            <button onClick={toggleConnection} disabled={busy} aria-busy={busy} aria-label={connected ? "Connecté · retirer" : busy ? "Connexion en cours" : "Simuler la connexion"}>
              {busy && <span className="ac-connection-progress" aria-hidden="true" />}
              <ActionFeedbackLabel state={phase}
                icon={busy ? <Loader2 size={14} /> : connected ? <Check size={14} /> : <Link2 size={14} />}
                text={phase === "connecting" ? "Connexion en cours…" : phase === "disconnecting" ? "Retrait en cours…" : connected ? "Connecté · retirer" : "Simuler la connexion"} />
            </button>
            <small role="status">
              {phase === "connecting" ? "Préparation du canal de démonstration…" : phase === "disconnecting" ? "Fermeture du canal de démonstration…" : connected
                ? "Connexion locale simulée."
                : "Aucun compte externe utilisé."}
            </small>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
