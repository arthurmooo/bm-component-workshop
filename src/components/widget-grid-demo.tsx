import { useRef, useState, type PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  Check,
  Columns2,
  GripVertical,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  RotateCcw,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import "./widget-grid-demo.css";
import { widgetDropOrder } from "./widget-grid-model.mjs";
export function WidgetGridDemo() {
  const [widgets, setWidgets] = useState([
    { id: "next", span: 1 },
    { id: "progress", span: 1 },
    { id: "note", span: 2 },
  ]);
  const drag = useRef<{ id:string; x:number; y:number; moved:boolean; original:typeof widgets; targets:{x:number;y:number}[] } | null>(null);
  const [dragging,setDragging] = useState<string|null>(null);
  const title = (id:string) => id === "next" ? "Prochaine échéance" : id === "progress" ? "Documents réunis" : "Note du dossier";
  function beginDrag(e:PointerEvent<HTMLButtonElement>,id:string) {
    if(e.button!==0)return;
    e.preventDefault();e.currentTarget.focus();
    const grid=e.currentTarget.closest<HTMLElement>(".wg-grid")!;
    drag.current={id,x:e.clientX,y:e.clientY,moved:false,original:widgets,targets:Array.from(grid.querySelectorAll(".wg-widget")).map(el=>{const r=el.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};})};
    grid.setPointerCapture(e.pointerId);
  }
  function moveDrag(e:PointerEvent<HTMLDivElement>) {
    const d=drag.current;if(!d)return;
    if(!d.moved&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<5)return;
    d.moved=true;setDragging(d.id);
    setWidgets(widgetDropOrder(d.original,d.id,d.targets,e.clientX,e.clientY));
  }
  function finishDrag(cancel=false) {
    const d=drag.current;if(!d)return;
    if(cancel)setWidgets(d.original);
    setMessage(cancel?"Déplacement annulé.":"Ordre des widgets modifié.");
    drag.current=null;setDragging(null);
  }
  const [grid, setGrid] = useState(false);
  const [message, setMessage] = useState("");
  const reduced = useReducedMotion();
  function size(id: string) {
    setWidgets((items) =>
      items.map((item) =>
        item.id === id ? { ...item, span: item.span === 1 ? 2 : 1 } : item,
      ),
    );
    setMessage("Largeur du widget modifiée.");
  }
  function move(id: string, delta: number) {
    setWidgets((items) => {
      const next = [...items];
      const pos = next.findIndex((item) => item.id === id);
      const target = pos + delta;
      if (target < 0 || target >= next.length) return items;
      [next[pos], next[target]] = [next[target], next[pos]];
      return next;
    });
    setMessage("Ordre des widgets modifié.");
  }
  return (
    <div className="wg-demo">
      <header>
        <span>Votre espace de travail</span>
        <div>
          <button aria-pressed={grid} onClick={() => setGrid(!grid)}>
            <Columns2 size={12} />
            Grille
          </button>
          <button
            aria-label="Réinitialiser la grille"
            onClick={() => {
              setWidgets([
                { id: "next", span: 1 },
                { id: "progress", span: 1 },
                { id: "note", span: 2 },
              ]);
              setMessage("Grille réinitialisée.");
            }}
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </header>
      <div className={`wg-grid ${grid ? "show-grid" : ""}`} onPointerMove={moveDrag} onPointerUp={()=>finishDrag()} onPointerCancel={()=>finishDrag(true)} onLostPointerCapture={()=>finishDrag()} onKeyDown={e=>{if(e.key==="Escape"&&drag.current){e.preventDefault();finishDrag(true)}}}>
        {widgets.map((widget, index) => (
          <motion.article
            layout={!reduced}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
            className={`wg-widget wg-${widget.id} wg-span-${widget.span}`}
            data-dragging={dragging===widget.id}
            key={widget.id}
          >
            <header>
              <button className="wg-drag-handle" aria-label={`Déplacer ${title(widget.id)}`} title="Glisser pour déplacer · flèches au clavier" onPointerDown={e=>beginDrag(e,widget.id)} onKeyDown={e=>{if(["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(e.key)){e.preventDefault();move(widget.id,e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1)}}}><GripVertical size={14}/></button>
              <span>
                {widget.id === "next"
                  ? "Prochaine échéance"
                  : widget.id === "progress"
                    ? "Documents réunis"
                    : "Note du dossier"}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label={`Modifier ${widget.id === "next" ? "Prochaine échéance" : widget.id === "progress" ? "Documents réunis" : "Note du dossier"}`}
                  >
                    <MoreHorizontal size={15} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onSelect={() => size(widget.id)}>
                    {widget.span === 1 ? (
                      <Maximize2 size={13} />
                    ) : (
                      <Minimize2 size={13} />
                    )}{" "}
                    {widget.span === 1 ? "Élargir" : "Réduire"}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={index === 0}
                    onSelect={() => move(widget.id, -1)}
                  >
                    <ArrowUp size={13} />
                    Déplacer avant
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={index === widgets.length - 1}
                    onSelect={() => move(widget.id, 1)}
                  >
                    <ArrowDown size={13} />
                    Déplacer après
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            {widget.id === "next" ? (
              <div className="wg-calendar">
                <span>
                  <small>SEPT.</small>
                  <strong>25</strong>
                </span>
                <div>
                  <h4>Comité de suivi</h4>
                  <p>Vendredi · 09:30</p>
                  <span>
                    <CalendarDays size={11} />
                    Atelier Nord
                  </span>
                </div>
              </div>
            ) : widget.id === "progress" ? (
              <div className="wg-progress">
                <div>
                  <strong>
                    8 <span>/ 12</span>
                  </strong>
                  <small>67 %</small>
                </div>
                <div className="wg-meter">
                  <span />
                </div>
                <p>
                  <Check size={11} />4 pièces à compléter
                </p>
              </div>
            ) : (
              <div className="wg-note">
                <h4>Préparer la prochaine discussion.</h4>
                <p>
                  Revoir les hypothèses de croissance, confirmer le calendrier
                  et identifier les pièces encore attendues.
                </p>
                <span>Mis à jour aujourd’hui</span>
              </div>
            )}
            <button
              className="wg-resize"
              aria-label={`${widget.span===1?"Élargir":"Réduire"} ${title(widget.id)}`} title={widget.span===1?"Passer en pleine largeur":"Passer en demi-largeur"}
              onClick={() => size(widget.id)}
            >
              {widget.span===1?<Maximize2 size={12}/>:<Minimize2 size={12}/>}
            </button>
          </motion.article>
        ))}
      </div>
      <p>
        Glissez les poignées pour organiser votre espace. Ajustez la largeur avec ↗.
      </p>
      <span role="status" className="sr-only">
        {message}
      </span>
    </div>
  );
}
