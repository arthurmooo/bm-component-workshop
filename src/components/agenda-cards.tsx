import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  Clock3,
  ChevronRight,
  Check,
  RotateCcw,
  Video,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import "./agenda-cards.css";

const events:AgendaEvent[] = [
  {
    id: "review",
    day: "16",
    month: "SEP",
    title: "Revue du dossier Astrée",
    time: "09:30 – 10:00",
    priority: "Prioritaire",
    tone: "coral",
    description: "Valider les hypothèses et préparer le comité.",
    place: "Visioconférence",
    owner: "Paul Laurent",
  },
  {
    id: "design",
    day: "17",
    month: "SEP",
    title: "Point équipe produit",
    time: "11:00 – 11:45",
    priority: "Équipe",
    tone: "amber",
    description: "Arbitrer les retours et les prochaines étapes.",
    place: "Salle Opaline",
    owner: "Emma Dubois",
  },
  {
    id: "client",
    day: "18",
    month: "SEP",
    title: "Présentation au client",
    time: "14:00 – 15:00",
    priority: "À préparer",
    tone: "blue",
    description: "Partager la synthèse financière et les scénarios.",
    place: "Visioconférence",
    owner: "Alice Martin",
  },
];

export type AgendaEvent={id:string;day:string;month:string;title:string;time:string;priority:string;tone:string;description:string;place:string;owner:string};
export function AgendaCardsDemo() {return <AgendaCards events={events}/>}
export function AgendaCards({events,title='À venir',footer='Cette semaine · horaires de Paris',onOpen,onDone}:{events:AgendaEvent[];title?:string;footer?:string;onOpen?:(id:string)=>void;onDone?:(id:string)=>void}) {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [notice, setNotice] = useState("");
  return (
    <section className="agenda-cards-demo" aria-label="Agenda compact">
      <header>
        <span>
          <CalendarDays size={15} /> {title}{" "}
          <small>{events.length - done.size}</small>
        </span>
        <Button
          small
          variant="ghost"
          onClick={() => {
            setExpanded(null);
            setDone(new Set());
            setNotice("Agenda réinitialisé.");
          }}
          aria-label="Réinitialiser l’agenda"
        >
          <RotateCcw size={12} />
        </Button>
      </header>
      <div className="agenda-card-list">
        {events.map((event) => (
          <article
            className="agenda-event"
            key={event.id}
            data-done={done.has(event.id)}
            data-expanded={expanded === event.id}
          >
            <button
              className="agenda-event-summary"
              aria-expanded={expanded === event.id}
              aria-controls={`agenda-detail-${event.id}`}
              onClick={() =>
                setExpanded(expanded === event.id ? null : event.id)
              }
            >
              <time
                className="agenda-event-date"
                dateTime={`2026-09-${event.day}`}
              >
                <span>{event.month}</span>
                <strong>{event.day}</strong>
                <small>{event.day === "16" ? "MER." : event.day === "17" ? "JEU." : "VEN."}</small>
              </time>
              <span className="agenda-event-body">
                <span className="agenda-event-heading">
                  <strong>{event.title}</strong>
                  <span
                    className={`agenda-priority ${done.has(event.id) ? "done" : event.tone}`}
                  >
                    {done.has(event.id) ? "Terminé" : event.priority}
                  </span>
                </span>
                <span className="agenda-event-time"><Clock3 size={12}/>{event.time}</span>
                <span className="agenda-event-description">
                  {event.description}
                </span>
              </span>
              <ChevronRight size={13} className="agenda-event-chevron" />
            </button>
            <AnimatePresence initial={false}>
            {expanded === event.id && (
              <motion.div key="details" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.22,ease:[.22,1,.36,1]}} style={{overflow:"hidden"}} >
              <div
                id={`agenda-detail-${event.id}`}
                className="agenda-event-detail"
              >
                <span>
                  {event.place === "Visioconférence" ? (
                    <Video size={13} />
                  ) : (
                    <MapPin size={13} />
                  )}{" "}
                  {event.place}
                </span>
                <span>Organisé par {event.owner}</span>
                <Button
                  small
                  variant="default"
                  onClick={() => {
                    setDone((current) => {
                      const next = new Set(current);
                      if (next.has(event.id)) next.delete(event.id);
                      else next.add(event.id);
                      return next;
                    });
                    setNotice(
                      done.has(event.id)
                        ? `${event.title} remis à venir.`
                        : `${event.title} marqué terminé.`,
                    );
                    onDone?.(event.id);
                  }}
                >
                  <Check size={12} />
                  {done.has(event.id) ? "Remettre à venir" : "Marquer terminé"}
                </Button>
                {onOpen&&<Button small variant="ghost" onClick={()=>onOpen(event.id)}>Ouvrir</Button>}
              </div>
              </motion.div>
            )}
            </AnimatePresence>
          </article>
        ))}
      </div>
      <footer role="status">
        {notice || footer}
      </footer>
    </section>
  );
}
