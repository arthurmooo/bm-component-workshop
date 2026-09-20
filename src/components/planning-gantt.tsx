import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { CalendarDays, Clock3, RotateCcw, X } from "lucide-react";
import type { PlanTask } from "../design-system/workflow-components";
import { moveSpan, resizeSpan, resizeStartSpan } from "./planning-model.mjs";
import "./planning-demo.css";

const DAY = 86_400_000;
type Edge = "move" | "start" | "end";
type DateSpan = { start: number; duration: number };

export type PlanningGanttProps = {
  tasks: PlanTask[];
  onSelect: (id: string) => void;
  onChange?: (id: string, dates: { start: string; end: string }) => boolean | void;
  title?: string;
  locale?: "fr" | "en";
  showHelp?: boolean;
};

const iso = (time: number) => new Date(time).toISOString().slice(0, 10);
const tasksKey = (tasks: PlanTask[]) => tasks.map(task => `${task.id}:${task.start}:${task.end}`).join("|");

export function PlanningGantt({ tasks, onSelect, onChange, locale = "fr", title = "Plan de mission", showHelp = true }: PlanningGanttProps) {
  const [items, setItems] = useState(tasks);
  const [selected, setSelected] = useState<string | null>(null);
  const [activeDrag, setActiveDrag] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const drag = useRef<{ id: string; title: string; x: number; span: DateSpan; latest: DateSpan; unit: number; edge: Edge; moved: boolean } | null>(null);
  const skipClick = useRef(false);
  const syncKey = tasksKey(tasks);

  useEffect(() => setItems(tasks), [syncKey]);

  const starts = items.map(task => Date.parse(task.start));
  const ends = items.map(task => Date.parse(task.end));
  const first = (starts.length ? Math.min(...starts) : Date.now()) - DAY * 2;
  const last = (ends.length ? Math.max(...ends, first + DAY) : first + DAY) + DAY * 2;
  const limit = Math.max(1, Math.round((last - first) / DAY));
  const index = (date: string) => Math.round((Date.parse(date) - first) / DAY);
  const spanOf = (task: PlanTask): DateSpan => ({ start: index(task.start), duration: Math.max(1, Math.round((Date.parse(task.end) - Date.parse(task.start)) / DAY)) });
  const fmt = (time: number) => new Date(time).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  const active = items.find(task => task.id === selected);
  const patchFor = (span: DateSpan) => ({ start: iso(first + span.start * DAY), end: iso(first + (span.start + span.duration) * DAY) });
  const change = (list: PlanTask[], id: string, span: DateSpan) => list.map(task => task.id === id ? { ...task, ...patchFor(span) } : task);
  const transform = (span: DateSpan, delta: number, edge: Edge) => edge === "start" ? resizeStartSpan(span.start, span.duration, delta, limit) : edge === "end" ? resizeSpan(span.start, span.duration, delta, limit) : moveSpan(span.start, span.duration, delta, limit);

  function pointerDown(event: PointerEvent<HTMLButtonElement>, task: PlanTask, edge: Edge = "move") {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.focus();
    setSelected(task.id);
    const width = event.currentTarget.closest(".bm-plan-track")!.getBoundingClientRect().width;
    const span = spanOf(task);
    drag.current = { id: task.id, title: task.title, x: event.clientX, span, latest: span, unit: width / limit, edge, moved: false };
    setActiveDrag(task.id);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function pointerMove(event: PointerEvent<HTMLButtonElement>) {
    const current = drag.current;
    if (!current) return;
    const delta = Math.round((event.clientX - current.x) / current.unit);
    if (delta === 0) return;
    current.moved = true;
    current.latest = transform(current.span, delta, current.edge);
    setItems(list => change(list, current.id, current.latest));
  }

  function finishDrag(cancel = false) {
    const current = drag.current;
    if (!current) return;
    if (cancel) setItems(list => change(list, current.id, current.span));
    else if (current.moved) {
      const dates = patchFor(current.latest);
      const accepted = onChange?.(current.id, dates) !== false;
      if (!accepted) setItems(list => change(list, current.id, current.span));
      setAnnouncement(accepted ? `${current.title} déplacé du ${fmt(Date.parse(dates.start))} au ${fmt(Date.parse(dates.end))}.` : `${current.title} n’a pas été déplacé : vérifiez ses dépendances.`);
      skipClick.current = true;
      requestAnimationFrame(() => { skipClick.current = false; });
    }
    drag.current = null;
    setActiveDrag(null);
  }

  function keyboard(event: KeyboardEvent<HTMLButtonElement>, task: PlanTask, edge: Edge = "move") {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    setSelected(task.id);
    const next = transform(spanOf(task), event.key === 'ArrowRight' ? 1 : -1, edge);
    const dates = patchFor(next);
    setItems(list => list.map(item => item.id === task.id ? { ...item, ...dates } : item));
    const accepted = onChange?.(task.id, dates) !== false;
    if (!accepted) setItems(list => list.map(item => item.id === task.id ? task : item));
    setAnnouncement(accepted ? `${task.title} déplacé du ${fmt(Date.parse(dates.start))} au ${fmt(Date.parse(dates.end))}.` : `${task.title} n’a pas été déplacé : vérifiez ses dépendances.`);
  }

  return <div className="bm-planning">
    <header><span><CalendarDays size={15}/>{title}</span><div className="bm-planning-tabs"><button type="button" aria-pressed="true">Gantt</button></div><button className="bm-plan-icon" type="button" aria-label="Réinitialiser la sélection" onClick={() => setSelected(null)}><RotateCcw size={13}/></button></header>
    <div className="bm-plan-tools"><span>{locale==="en"?"Drag a bar to move its dates":"Glissez une barre pour déplacer les dates"}</span><span>{fmt(first)} — {fmt(last)}</span></div>
    <span className="bm-plan-announcement" role="status">{announcement}</span>
    <div className="bm-plan-scroll"><div className="bm-plan-grid">
      <div className="bm-plan-scale"><span>{locale==="en"?"Deliverable":"Livrable"}</span><div>{Array.from({ length: 10 }, (_, i) => <span key={i}>{fmt(first + (last - first) * i / 9)}</span>)}</div></div>
      {items.map((item, itemIndex) => { const span = spanOf(item); return <div className={`bm-plan-row ${selected === item.id ? "selected" : ""}`} key={item.id}>
        <div className="bm-plan-rowlabel"><span>{item.title}</span><small>{item.owner}</small></div>
        <div className="bm-plan-track"><div className={`bm-plan-block ${["blue", "amber", "mint", "lilac"][itemIndex % 4]}`} data-dragging={activeDrag === item.id} style={{ left: `${span.start / limit * 100}%`, width: `${span.duration / limit * 100}%` }}>
          <button type="button" className="bm-plan-event" title={`${item.title} · ${item.start} — ${item.end}`} aria-label={`${item.title}, ${item.start} à ${item.end}. Flèches gauche et droite pour déplacer.`} onClick={() => { if (!skipClick.current) onSelect(item.id); }} onPointerDown={event => pointerDown(event, item)} onPointerMove={pointerMove} onPointerUp={() => finishDrag()} onPointerCancel={() => finishDrag(true)} onLostPointerCapture={() => finishDrag()} onKeyDown={event => keyboard(event, item)}><span>{item.title}</span></button>
          {(["start", "end"] as const).map(edge => <button key={edge} type="button" className={`bm-plan-resize ${edge}`} title={edge === "start" ? "Ajuster le début" : "Ajuster la fin"} aria-label={`${edge === "start" ? "Ajuster le début" : "Ajuster la fin"} de ${item.title}. Flèches gauche et droite.`} onPointerDown={event => pointerDown(event, item, edge)} onPointerMove={pointerMove} onPointerUp={() => finishDrag()} onPointerCancel={() => finishDrag(true)} onLostPointerCapture={() => finishDrag()} onKeyDown={event => keyboard(event, item, edge)}><span/></button>)}
        </div></div>
      </div>; })}
    </div></div>
    {(active || showHelp) && <div className="bm-plan-detail" aria-live="polite">{active ? <><span className="bm-plan-dot blue"/><strong>{active.title}</strong><span>{active.start} → {active.end}</span><span>{active.owner}</span><button type="button" onClick={() => setSelected(null)} aria-label="Fermer le détail"><X size={13}/></button></> : <><Clock3 size={13}/><span>{locale==="en"?"Drag to move · resize with either handle · use ← → on the keyboard.":"Glissez le bloc pour déplacer · étirez ses poignées aux deux extrémités · utilisez ← → au clavier."}</span></>}</div>}
    <footer>{locale==="en"?"1-day increments · inclusive dates · synthetic plan":"Pas de 1 jour · dates inclusives · flèches ← → au clavier · données de démonstration"}</footer>
  </div>;
}
