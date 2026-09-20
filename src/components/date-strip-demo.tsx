import { DatePicker } from "./ui/date-picker";
import { useState } from "react";
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
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState(2);
  const [assignees, setAssignees] = useState(["alice", "paul"]);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState("");
  const days = Array.from({ length: 5 }, (_, i) => offset + i);
  function page(delta: number) {
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
      <div className="ds-month">
        <button aria-label="Cinq jours précédents" onClick={() => page(-5)}>
          <ChevronLeft size={14} />
        </button>
        <span>{formatMonth.format(at(selected))}</span>
        <button aria-label="Cinq jours suivants" onClick={() => page(5)}>
          <ChevronRight size={14} />
        </button>
      </div>
      <div className="ds-calendar-choice"><DatePicker aria-label="Choisir la date du point" value={at(selected).toISOString().slice(0,10)} required onValueChange={value=>{const next=Math.round((Date.parse(value+'T00:00:00Z')-start.getTime())/86400000);setSelected(next);setOffset(next);setSaved('')}}/></div>
      <div className="ds-days" role="group" aria-label="Choisir une date">
        {days.map((day) => (
          <button
            key={day}
            aria-pressed={selected === day}
            aria-label={at(day).toLocaleDateString("fr-FR", {
              dateStyle: "full",
              timeZone: "UTC",
            })}
            onClick={() => {
              setSelected(day);
              setSaved("");
            }}
          >
            <span>{formatDay.format(at(day))}</span>
            <strong>{String(at(day).getUTCDate()).padStart(2, "0")}</strong>
          </button>
        ))}
      </div>
      <label className="ds-label">Participants</label>
      <div className="ds-assignees">
        {assignees.map((id) => {
          const person = persons.find((p) => p.id === id)!;
          return (
            <span className="ds-person" key={id}>
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
            </span>
          );
        })}
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
          className="ds-save"
          disabled={!assignees.length}
          onClick={() =>
            setSaved(
              `Point du ${at(selected).toLocaleDateString("fr-FR", { day: "numeric", month: "long", timeZone: "UTC" })} avec ${assignees.length} personne${assignees.length > 1 ? "s" : ""} enregistré dans cet aperçu.`,
            )
          }
        >
          Enregistrer
        </button>
      </footer>
      <p role="status">
        {saved || "Démonstration locale · aucune invitation envoyée."}
      </p>
    </section>
  );
}
