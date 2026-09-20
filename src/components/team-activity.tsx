import { AnimatedReveal } from "./ui/animated-reveal";
import { useState } from "react";
import {
  MessageSquare,
  Upload,
  CalendarDays,
  UserPlus,
  Check,
  RotateCcw,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import "./team-activity.css";
export function TeamActivityDemo() {
  const [tab, setTab] = useState("Tout");
  const [reactions, setReactions] = useState<string[]>([]);
  const [replies, setReplies] = useState([
    "Les hypothèses sont à jour dans le dossier.",
  ]);
  const [reply, setReply] = useState("");
  const [open, setOpen] = useState(false);
  const [access, setAccess] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  return (
    <section className="team-activity-demo" aria-label="Journal de l’équipe">
      <header>
        <strong>Activité de l’équipe</strong>
        <Button
          small
          variant="ghost"
          aria-label="Réinitialiser le journal"
          onClick={() => {
            setTab("Tout");
            setReactions([]);
            setReplies(["Les hypothèses sont à jour dans le dossier."]);
            setReply("");
            setOpen(false);
            setAccess(null);
            setNotice("Journal réinitialisé.");
          }}
        >
          <RotateCcw size={12} />
        </Button>
      </header>
      <div className="ta-filters">
        {["Tout", "Messages", "Accès", "Événements"].map((t) => (
          <button key={t} aria-pressed={tab === t} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
        <span>Aujourd’hui</span>
      </div>
      <div className="ta-timeline">
        {(tab === "Tout" || tab === "Messages") && (
          <article className="ta-entry">
            <span className="ta-type purple">
              <MessageSquare size={13} />
            </span>
            <div className="ta-entry-content">
              <div className="ta-meta">
                <img src="./avatars/emma.svg" alt="" />
                <strong>Emma Dubois</strong>
                <span>
                  a mentionné <b>@vous</b> dans
                </span>
                <span className="ta-channel"># Design</span>
                <time>09:20</time>
              </div>
              <blockquote>
                La synthèse est prête. <b>@Alice</b>, peux-tu vérifier les deux
                derniers scénarios avant notre point ?
              </blockquote>
              <div className="ta-reactions">
                {["👍", "✨"].map((emoji, i) => (
                  <button
                    key={emoji}
                    aria-pressed={reactions.includes(emoji)}
                    aria-label={`Réagir ${emoji}`}
                    onClick={() =>
                      setReactions((items) =>
                        items.includes(emoji)
                          ? items.filter((item) => item !== emoji)
                          : [...items, emoji],
                      )
                    }
                  >
                    {emoji} {i + 2 + (reactions.includes(emoji) ? 1 : 0)}
                  </button>
                ))}
                <button
                  className="ta-reply-toggle"
                  aria-expanded={open}
                  onClick={() => setOpen(!open)}
                >
                  <img src="./avatars/alice.svg" alt="" />
                  {replies.length} réponse{replies.length > 1 ? "s" : ""}
                </button>
              </div>
              <AnimatedReveal open={open}>
                <div className="ta-replies">
                  {replies.map((text, i) => (
                    <p key={i}>
                      <strong>{i === 0 ? "Alice" : "Vous"}</strong>
                      {text}
                    </p>
                  ))}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!reply.trim()) return;
                      setReplies((items) => [...items, reply.trim()]);
                      setReply("");
                      setNotice("Réponse ajoutée dans cet aperçu.");
                    }}
                  >
                    <input
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      aria-label="Répondre à Emma"
                      placeholder="Ajouter une réponse…"
                      maxLength={400}
                    />
                    <button
                      type="submit"
                      aria-label="Ajouter la réponse"
                      disabled={!reply.trim()}
                    >
                      <Send size={13} />
                    </button>
                  </form>
                </div>
              </AnimatedReveal>
            </div>
          </article>
        )}
        {(tab === "Tout" || tab === "Accès") && (
          <article className="ta-entry">
            <span className="ta-type violet">
              <UserPlus size={13} />
            </span>
            <div className="ta-entry-content">
              <div className="ta-meta">
                <img src="./avatars/paul.svg" alt="" />
                <strong>Paul Laurent</strong>
                <span>demande l’accès à</span>
                <span className="ta-channel">Dossier Astrée</span>
                <time>10:40</time>
              </div>
              <div className="ta-access">
                {access ? (
                  <span>
                    <Check size={12} />
                    {access}
                  </span>
                ) : (
                  <>
                    <Button
                      small
                      variant="default"
                      onClick={() => {
                        setAccess("Demande refusée");
                        setNotice("Accès refusé dans la démonstration.");
                      }}
                    >
                      Refuser
                    </Button>
                    <Button
                      small
                      variant="primary"
                      onClick={() => {
                        setAccess("Accès accordé");
                        setNotice("Accès accordé dans la démonstration.");
                      }}
                    >
                      Autoriser
                    </Button>
                  </>
                )}
              </div>
            </div>
          </article>
        )}
        {(tab === "Tout" || tab === "Événements") && (
          <article className="ta-entry">
            <span className="ta-type blue">
              <CalendarDays size={13} />
            </span>
            <div className="ta-entry-content">
              <div className="ta-meta">
                <strong>Votre prochain rendez-vous</strong>
                <time>12:29</time>
              </div>
              <div className="ta-event">
                <time dateTime="2026-09-18">
                  <small>SEP</small>
                  <strong>18</strong>
                </time>
                <div>
                  <strong>Point équipe hebdomadaire</strong>
                  <span>11:00 – 11:30 · Paris</span>
                </div>
                <span className="ta-stack">
                  <img src="./avatars/alice.svg" alt="Alice" />
                  <img src="./avatars/paul.svg" alt="Paul" />
                  <img src="./avatars/emma.svg" alt="Emma" />
                  <small>+2</small>
                </span>
              </div>
            </div>
          </article>
        )}
        {tab === "Tout" && (
          <article className="ta-entry">
            <span className="ta-type green">
              <Upload size={13} />
            </span>
            <div className="ta-meta">
              <strong>Alice Martin</strong>
              <span>a ajouté</span>
              <span className="ta-channel">Synthèse financière.pdf</span>
              <time>13:24</time>
            </div>
          </article>
        )}
      </div>
      <footer role="status">
        {notice || "Activité fictive · aucun message ni droit réel modifié."}
      </footer>
    </section>
  );
}
