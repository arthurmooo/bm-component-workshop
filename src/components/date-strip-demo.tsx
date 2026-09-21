import { DatePicker } from "./ui/date-picker";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  CalendarDays,
  Check,
} from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import "./date-strip-demo.css";
const persons = [
  { id: "alice", name: "Alice Martin" },
  { id: "paul", name: "Paul Laurent" },
  { id: "emma", name: "Emma Dubois" },
];
const start = new Date(Date.UTC(2026, 8, 14));
const formatDay = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  timeZone: "UTC",
});
const formatMonth = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const at = (offset: number) => new Date(start.getTime() + offset * 86400000);
export function DateStripDemo() {
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState(2);
  const [assignees, setAssignees] = useState(["alice", "paul"]);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState("");
  const [direction, setDirection] = useState(1);
  const days = Array.from({ length: 5 }, (_, i) => offset + i);
  function page(delta: number) {
    setDirection(delta > 0 ? 1 : -1);
    setOffset(offset + delta);
    setSelected(selected + delta);
    setSaved("");
  }
  return (
    <section
      className="date-strip-demo"
      aria-label="Date et personnes assignées"
    >
      <header>
        <CalendarDays size={16} />
        <strong>Planifier un point</strong>
      </header>
      <div className="ds-toolbar">
        <div className="ds-month">
          <button aria-label="Cinq jours précédents" onClick={() => page(-5)}>
            <ChevronLeft size={14} />
          </button>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={formatMonth.format(at(selected))}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -3 }}
              transition={{ duration: reducedMotion ? 0 : 0.18 }}
            >
              {formatMonth.format(at(selected))}
            </motion.span>
          </AnimatePresence>
          <button aria-label="Cinq jours suivants" onClick={() => page(5)}>
            <ChevronRight size={14} />
          </button>
        </div>
        <div className="ds-calendar-choice">
          <DatePicker
            aria-label="Choisir la date du point"
            value={at(selected).toISOString().slice(0, 10)}
            required
            onValueChange={(value) => {
              const next = Math.round(
                (Date.parse(value + "T00:00:00Z") - start.getTime()) / 86400000,
              );
              setDirection(next >= selected ? 1 : -1);
              setSelected(next);
              setOffset(next);
              setSaved("");
            }}
          />
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          className="ds-days"
          role="group"
          aria-label="Choisir une date"
          key={offset}
          custom={direction}
          initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -8 }}
          transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {days.map((day) => (
            <button
              key={day}
              aria-pressed={selected === day}
              aria-label={at(day).toLocaleDateString("fr-FR", {
                dateStyle: "full",
                timeZone: "UTC",
              })}
              onClick={() => {
                setDirection(day >= selected ? 1 : -1);
                setSelected(day);
                setSaved("");
              }}
            >
              {selected === day && (
                <motion.span
                  className="ds-day-active"
                  layoutId="date-strip-active-day"
                  transition={{ duration: reducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span>{formatDay.format(at(day))}</span>
              <strong>{String(at(day).getUTCDate()).padStart(2, "0")}</strong>
            </button>
          ))}
        </motion.div>
      </AnimatePresence>
      <label className="ds-label">Participants</label>
      <div className="ds-assignees">
        <AnimatePresence initial={false} mode="popLayout">
          {assignees.map((id) => {
            const person = persons.find((p) => p.id === id)!;
            return (
            <motion.span
              className="ds-person"
              key={id}
              layout
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
              transition={{ duration: reducedMotion ? 0 : 0.16 }}
            >
              <img src={`./avatars/${id}.svg`} alt="" />
              {person.name}
              <button
                aria-label={`Retirer ${person.name}`}
                onClick={() => {
                  setAssignees(assignees.filter((item) => item !== id));
                  setSaved("");
                }}
              >
                <X size={12} />
              </button>
            </motion.span>
          );
          })}
        </AnimatePresence>
        {!assignees.length && (
          <span className="ds-none">Aucune personne assignée</span>
        )}
      </div>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button className="ds-add">
            <Plus size={13} /> Ajouter une personne
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="ds-person-menu"
            sideOffset={5}
            align="start"
            aria-label="Participants disponibles"
          >
            {persons.map((person) => (
              <button
                key={person.id}
                aria-pressed={assignees.includes(person.id)}
                onClick={() => {
                  setAssignees((items) =>
                    items.includes(person.id)
                      ? items.filter((id) => id !== person.id)
                      : [...items, person.id],
                  );
                  setSaved("");
                }}
              >
                <img src={`./avatars/${person.id}.svg`} alt="" />
                {person.name}
                {assignees.includes(person.id) && <Check size={12} />}
              </button>
            ))}
            <Popover.Close className="ds-menu-done">Terminé</Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <footer>
        <button
          onClick={() => {
            setOffset(0);
            setSelected(2);
            setAssignees(["alice", "paul"]);
            setSaved("");
          }}
        >
          Réinitialiser
        </button>
        <button
          className={`ds-save${saved ? " is-saved" : ""}`}
          disabled={!assignees.length}
          onClick={() =>
            setSaved(
              `Point du ${at(selected).toLocaleDateString("fr-FR", { day: "numeric", month: "long", timeZone: "UTC" })} avec ${assignees.length} personne${assignees.length > 1 ? "s" : ""} enregistré dans cet aperçu.`,
            )
          }
        >
          {saved && <Check size={13} aria-hidden="true" />}
          {saved ? "Enregistré" : "Enregistrer"}
        </button>
      </footer>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={saved ? "saved" : "idle"}
          className={`ds-save-status${saved ? " is-saved" : ""}`}
          role="status"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reducedMotion ? 0 : -3 }}
          transition={{ duration: reducedMotion ? 0 : 0.16 }}
        >
          {saved && <Check size={13} aria-hidden="true" />}
          <span>{saved || "Démonstration locale · aucune invitation envoyée."}</span>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
