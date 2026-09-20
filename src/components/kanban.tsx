import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  MapPin,
  Banknote,
  MoreHorizontal,
  ArrowRight,
  RotateCcw,
  GripVertical,
  FileText,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { moveDeal } from "./kanban-model.mjs";
import "./kanban-demo.css";
const stages = ["Qualification", "Proposition", "Négociation"];
export type DealKanbanCard={id:string;name:string;sector:string;owner:string;ownerName?:string;avatarSrc?:string;city:string;amount:number;amountLabel?:string;progressLabel?:string;hideProgress?:boolean;date:string;probability:number;stage:string;status:string};
const initial:DealKanbanCard[] = [
  {
    id: "nord",
    name: "Atelier Nord",
    sector: "Acquisition · Industrie",
    owner: "AM",
    city: "Lyon, FR",
    amount: 480000,
    date: "30 sept. 2026",
    probability: 42,
    stage: stages[0],
    status: "En cours",
  },
  {
    id: "rivage",
    name: "Studio Rivage",
    sector: "Cession · Services",
    owner: "ED",
    city: "Nantes, FR",
    amount: 320000,
    date: "12 oct. 2026",
    probability: 35,
    stage: stages[0],
    status: "À suivre",
  },
  {
    id: "alto",
    name: "Alto Industrie",
    sector: "Acquisition · Industrie",
    owner: "AM",
    city: "Paris, FR",
    amount: 860000,
    date: "8 oct. 2026",
    probability: 64,
    stage: stages[1],
    status: "En cours",
  },
  {
    id: "astree",
    name: "Maison Astrée",
    sector: "Cession · Retail",
    owner: "PL",
    city: "Bordeaux, FR",
    amount: 1250000,
    date: "25 sept. 2026",
    probability: 82,
    stage: stages[2],
    status: "Bien engagé",
  },
];
const money = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
const documentStages = ['Brouillon', 'À signer', 'Signé'];
const documentInitial = [
 {...initial[0],id:'mission',name:'Lettre de mission',sector:'Mandat de cession · Atelier Nord',stage:'Brouillon',date:'15 sept. 2026',status:'Version 2 · 248 Ko'},
 {...initial[1],id:'nda',name:'Accord de confidentialité',sector:'NDA · Maison Astrée',stage:'À signer',date:'14 sept. 2026',status:'Version 1 · 186 Ko'},
 {...initial[2],id:'presentation',name:'Présentation société',sector:'Dossier de cession · Atelier Nord',stage:'Brouillon',date:'15 sept. 2026',status:'Version 3 · 2,4 Mo'},
 {...initial[3],id:'loi',name:'Lettre d’intention',sector:'LOI · Atelier Nord',stage:'Signé',date:'12 sept. 2026',status:'Version 2 · 320 Ko'},
];
export function KanbanDemo() {return <KanbanBoard/>}
export function DocumentKanbanDemo() {return <KanbanBoard documents/>}
export function DealKanban({columns,cards,onOpen,onMove,readOnlyStages=false,label,currency='EUR',locale='fr-FR',action}:{columns:string[];cards:DealKanbanCard[];onOpen?:(id:string)=>void;onMove?:(id:string,column:string)=>boolean|void;label?:string;currency?:string;locale?:string;readOnlyStages?:boolean;action?:React.ReactNode}){return <KanbanBoard boardCards={cards} boardColumns={columns} onOpen={onOpen} onMove={onMove} readOnlyStages={readOnlyStages} label={label} currency={currency} locale={locale} action={action}/>}
function KanbanBoard({documents=false,boardCards,boardColumns,onOpen,onMove,readOnlyStages=false,label,currency='EUR',locale='fr-FR',action}:{documents?:boolean;boardCards?:DealKanbanCard[];boardColumns?:string[];onOpen?:(id:string)=>void;onMove?:(id:string,column:string)=>boolean|void;label?:string;currency?:string;locale?:string;readOnlyStages?:boolean;action?:React.ReactNode}) {
  const english=locale.startsWith("en");
  const boardInitial=boardCards??(documents?documentInitial:initial);
  const stages=boardColumns??(documents?documentStages:['Qualification','Proposition','Négociation']);
  const [deals, setDeals] = useState(boardInitial);
  const [drag, setDrag] = useState<string | null>(null);
  const [preview, setPreview] = useState<{stage:string; before:string|null; height:number}|null>(null);
  const [dragHeight, setDragHeight] = useState(240);
  const [over, setOver] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const reduced = useReducedMotion();
  const gesture=useRef<{id:string;x:number;y:number;active:boolean}|null>(null);
  const [pointer,setPointer]=useState<{x:number;y:number}|null>(null);
  const syncKey=boardCards?.map(card=>`${card.id}:${card.stage}`).join('|')??'';
  useEffect(()=>{if(boardCards)setDeals(boardCards)},[syncKey]);
  useEffect(()=>{const cancel=(e:KeyboardEvent)=>{if(e.key==='Escape'){gesture.current=null;setDrag(null);setPreview(null);setOver(null);setPointer(null)}};window.addEventListener('keydown',cancel);return()=>window.removeEventListener('keydown',cancel)},[]);
  function startPointer(e:React.PointerEvent<HTMLElement>,id:string) {
    if(readOnlyStages || e.button!==0 || (e.target as HTMLElement).closest('button'))return;
    e.currentTarget.setPointerCapture(e.pointerId);
    gesture.current={id,x:e.clientX,y:e.clientY,active:false};
    setDragHeight(e.currentTarget.getBoundingClientRect().height);
  }
  function updatePointer(e:React.PointerEvent<HTMLElement>) {
    const g=gesture.current;if(!g)return;
    if(!g.active && Math.hypot(e.clientX-g.x,e.clientY-g.y)<5)return;
    g.active=true;setPointer({x:e.clientX,y:e.clientY});
    setDrag(g.id);
    const target=document.elementFromPoint(e.clientX,e.clientY)?.closest<HTMLElement>('[data-kb-stage]');
    if(!target){setPreview(null);return}
    const stage=target.dataset.kbStage!;
    const cards=Array.from(target.querySelectorAll<HTMLElement>('[data-deal-id]')).filter(el=>el.dataset.dealId!==g.id);
    const before=cards.find(el=>e.clientY<el.getBoundingClientRect().top+el.getBoundingClientRect().height/2)?.dataset.dealId??null;
    setOver(stage);setPreview({stage,before,height:dragHeight});
  }
  function endPointer(){if(gesture.current?.active)finishDrop();gesture.current=null;setDrag(null);setOver(null);setPreview(null);setPointer(null)}
  function move(
    id: string,
    stage: string,
    before: string | null = null,
    restoreFocus = false,
  ) {
    if (readOnlyStages) return;
    if (onMove?.(id,stage) === false) { setDrag(null); setOver(null); setPreview(null); return; }
    setDeals((items) => moveDeal(items, id, stage, before, stages));
    setMessage(
      `${deals.find((d) => d.id === id)?.name} ${english?"moved to":"déplacé dans"} ${stage}.`,
    );
    setDrag(null);
    setOver(null);
    if (restoreFocus)
      requestAnimationFrame(() =>
        document
          .querySelector<HTMLButtonElement>(`[data-kb-trigger="${id}"]`)
          ?.focus(),
      );
  }
  function finishDrop() {
    if(drag && preview) move(drag,preview.stage,preview.before);
    setPreview(null);
  }
  return (
    <div className="kb-demo kb-deals" onPointerMove={updatePointer} onPointerUp={endPointer} onPointerCancel={()=>{gesture.current=null;setDrag(null);setOver(null);setPreview(null);setPointer(null)}}>
      {pointer && <div className="kb-drag-ghost" style={{left:pointer.x+14,top:pointer.y+12}}>{deals.find(d=>d.id===drag)?.name}</div>}
      <div className="kb-toolbar">
        <span>
          {label??(documents?'Documents':english?'Opportunities':'Opportunités')} <b>{deals.length}</b>
        </span>
        <div className="kb-toolbar-actions">
          {action}
          {!readOnlyStages&&<button
          onClick={() => {
            setDeals(boardInitial);setPreview(null);boardInitial.forEach(card=>onMove?.(card.id,card.stage));
            setMessage(english?"Board reset.":"Kanban réinitialisé.");
          }}
        >
          <RotateCcw size={12} />
          {locale.startsWith("en")?"Reset":"Réinitialiser"}
          </button>}
        </div>
      </div>
      <div className="kb-board" aria-label={english?(documents?"Documents by status":"Records by stage"):(documents?"Documents par état":"Opportunités par étape")}>
        {stages.map((stage) => {
          const index=stages.indexOf(stage);
          const cards = deals.filter((d) => d.stage === stage);
          return (
            <section
              className={`kb-column ${over === stage ? "is-over" : ""}`}
              key={stage}
              aria-label={stage}
              data-kb-stage={stage}

            >
              <header>
                {!readOnlyStages&&<span className="kb-column-grip" aria-hidden="true"><GripVertical size={13}/></span>}
                <i
                  style={{
                    background: ["#73a6dc", "#a78bd4", "#78b49b"][index],
                  }}
                />
                <h3>{stage}</h3>
                <span>{cards.length}</span>
                {!deals.some(d=>d.amountLabel)&&<strong>
                  {documents ? `${cards.length} ${english?'file':'fichier'}${cards.length===1?'':'s'}` : new Intl.NumberFormat(locale,{style:'currency',currency,maximumFractionDigits:0}).format(cards.reduce((sum, d) => sum + d.amount, 0))}
                </strong>}
              </header>
              <div className="kb-cards">
                {cards.map((deal, pos) => (
                  <Fragment key={deal.id}>
                  {preview?.stage===stage && preview.before===deal.id && <motion.div layout={!reduced} className="kb-placeholder" style={{height:preview.height}}><span>{english?"Drop here":"Déposer ici"}</span></motion.div>}
                  <motion.article
                    layout={!reduced}
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                    key={deal.id}
                    className={`kb-card ${documents?"kb-file-card":""} ${drag === deal.id ? "is-dragging" : ""}`}
                    data-deal-id={deal.id}
                    onPointerDown={e=>startPointer(e,deal.id)}
                    role={readOnlyStages&&onOpen?"button":undefined}
                    aria-label={readOnlyStages&&onOpen?`${english?"Open":"Ouvrir"} ${deal.name}`:undefined}
                    tabIndex={readOnlyStages&&onOpen?0:undefined}
                    onClick={e=>{if(readOnlyStages&&onOpen&&!(e.target as HTMLElement).closest('button,a,input,select,textarea,[role=menuitem]'))onOpen(deal.id)}}
                    onKeyDown={e=>{if(readOnlyStages&&onOpen&&e.target===e.currentTarget&&(e.key==='Enter'||e.key===' ')){e.preventDefault();onOpen(deal.id)}}}

                  >
                    <div className="kb-card-head">
                      <span className={documents?"kb-file-symbol":`kb-avatar kb-avatar-${deal.owner}`}>
                        {documents ? <FileText size={21}/> : <>
                        {deal.avatarSrc?<img src={deal.avatarSrc} alt={deal.ownerName??deal.owner} draggable={false}/>:deal.owner}</>}
                      </span>
                      <div>
                        <h4>{deal.name}</h4>
                        <p>{deal.sector}</p>
                      </div>
                      {!readOnlyStages&&<DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            className="kb-card-menu"
                            data-kb-trigger={deal.id}
                            aria-label={`${english?"Actions for":"Actions pour"} ${deal.name}`}
                          >
                            <MoreHorizontal size={15} />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          {onOpen&&<DropdownMenuItem onSelect={()=>onOpen(deal.id)}>{english?"Open record":"Ouvrir le dossier"}</DropdownMenuItem>}
                          {!readOnlyStages&&stages.map((target) => (
                            <DropdownMenuItem
                              key={target}
                              disabled={target === stage}
                              onSelect={() => move(deal.id, target, null, true)}
                            >
                              <ArrowRight size={13} />
                              {target}
                            </DropdownMenuItem>
                          ))}
                          {!readOnlyStages&&<DropdownMenuItem
                            disabled={pos === 0}
                            onSelect={() =>
                              move(deal.id, stage, cards[pos - 1]?.id, true)
                            }
                          >
                            {english?"Move up in column":"Monter dans la colonne"}
                          </DropdownMenuItem>}
                          {!readOnlyStages&&<DropdownMenuItem
                            disabled={pos === cards.length - 1}
                            onSelect={() =>
                              move(
                                deal.id,
                                stage,
                                cards[pos + 2]?.id ?? null,
                                true,
                              )
                            }
                          >
                            {english?"Move down in column":"Descendre dans la colonne"}
                          </DropdownMenuItem>}
                        </DropdownMenuContent>
                      </DropdownMenu>}
                    </div>
                    {documents ? <div className="kb-file-content">
                      <div className="kb-file-format"><span>PDF</span><small>{deal.status}</small></div>
                      <div className="kb-file-property"><CalendarDays size={13}/><span>{english?"Updated":"Mis à jour"}</span><strong>{deal.date}</strong></div>
                      <div className="kb-file-property"><Users size={13}/><span>{stage==='Signé'?(english?'Signatories':'Signataires'):(english?'Signing workflow':'Circuit de signature')}</span><strong>{stage==='Signé'?'2 / 2':stage==='À signer'?'1 / 2':(english?'To prepare':'À préparer')}</strong></div>
                      <div className="kb-track"><span style={{width:stage==='Signé'?'100%':stage==='À signer'?'50%':'0%',background:stage==='Signé'?'#62ad8c':'#c3a16c'}}/></div>
                    </div> : <>{!deal.hideProgress&&<><div className="kb-probability">
                      <span>{deal.progressLabel??(locale.startsWith("en")?"Probability":"Probabilité")}</span>
                      <b>{deal.probability} %</b>
                    </div>
                    <div className="kb-track">
                      <span
                        style={{
                          width: `${deal.probability}%`,
                          background:
                            deal.probability > 75 ? "#62ad8c" : "#7ca4da",
                        }}
                      />
                    </div>
                    </>}<dl>
                      <div>
                        <dt>
                          <MapPin size={13} />
                          <span className="sr-only">{english?"Location":"Localisation"}</span>
                        </dt>
                        <dd>{deal.city}</dd>
                      </div>
                      <div>
                        <dt>
                          <CalendarDays size={13} />
                          <span className="sr-only">{english?"Due date":"Échéance"}</span>
                        </dt>
                        <dd>{deal.date}</dd>
                      </div>
                      <div>
                        <dt>
                          {deal.amountLabel?<Users size={13}/>:<Banknote size={13}/>}
                          <span className="sr-only">{english?"Amount":"Montant"}</span>
                        </dt>
                        <dd>{deal.amountLabel??new Intl.NumberFormat(locale,{style:'currency',currency,maximumFractionDigits:0}).format(deal.amount)}</dd>
                      </div>
                    </dl></>}
                    <footer>
                      <span
                        className={documents ? (stage==='Signé'?'is-positive':stage==='À signer'?'is-warning':'') : deal.probability > 75 ? "is-positive" : deal.status==="À suivre" ? "is-warning" : ""}
                      >
                        {documents?stage:deal.status}
                      </span>
                      <small className="kb-card-owner">{documents&&deal.avatarSrc&&<img src={deal.avatarSrc} alt="" draggable={false}/>} {deal.ownerName??deal.owner}</small>
                    </footer>
                  </motion.article></Fragment>
                ))}
                {preview?.stage===stage && preview.before===null && <motion.div layout={!reduced} className="kb-placeholder" style={{height:preview.height}}><span>{english?"Drop here":"Déposer ici"}</span></motion.div>}
                {!cards.length && preview?.stage!==stage && (
                  <div className="kb-empty">{readOnlyStages?(english?"No records at this stage":"Aucun dossier à cette étape"):english?(documents?"Drop a document here":"Drop a record here"):(documents?"Déposez un document ici":"Déposez un dossier ici")}</div>
                )}
              </div>
              </section>
          );
        })}
      </div>
      <p className="kb-help">
        {readOnlyStages?(english?"Open a card to review its next action.":"Ouvrez une carte pour consulter sa prochaine action."):english?"Drag cards between stages, or use the card menu.":"Glissez uniquement les cartes. Les en-têtes et les totaux restent fixes pendant le dépôt."}
      </p>
      <span className="sr-only" role="status">
        {message}
      </span>
    </div>
  );
}
