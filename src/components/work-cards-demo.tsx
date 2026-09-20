import { AnimatedReveal } from "./ui/animated-reveal";
import { useState } from "react";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  FileCheck2,
  MessageSquare,
} from "lucide-react";
import "./work-cards-demo.css";
import {AlertSurface,type AlertLevel} from './work-surfaces';
export function WorkCardsDemo() {
  const [expanded, setExpanded] = useState(true);
  const [done, setDone] = useState(false);
  const [read, setRead] = useState(false);
  return (
    <div className="wc-demo">
      <div className="wc-topline">
        <span>À traiter aujourd’hui</span>
        <span>1 dossier</span>
      </div>
      <article className={`wc-envelope ${read ? "is-read" : ""}`}>
        <header>
          <span className="wc-person">AM</span>
          <strong>Alice Martin</strong>
          <span className="wc-priority">Prioritaire</span>
          <time>10:24</time>
          <button
            aria-label={
              expanded ? "Réduire le dossier" : "Développer le dossier"
            }
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            <ChevronDown
              size={14}
              style={{ transform: expanded ? "none" : "rotate(-90deg)" }}
            />
          </button>
        </header>
        <div className="wc-inner">
          <h3>Validation de la présentation société</h3>
          <AnimatedReveal open={expanded}>
            <>
              <p>
                La version révisée du dossier Atelier Nord est prête. Il reste à
                confirmer les chiffres clés avant le comité de vendredi.
              </p>
              <div className="wc-file">
                <FileCheck2 size={14} />
                <span>Présentation société · v3.pdf</span>
                <small>14 pages</small>
              </div>
              <footer>
                <button
                  className="wc-primary"
                  onClick={() => {
                    setDone(!done);
                    setRead(true);
                  }}
                >
                  {done ? <Check size={13} /> : <FileCheck2 size={13} />}{" "}
                  {done
                    ? "Validation locale enregistrée"
                    : "Valider la version"}
                </button>
                <button onClick={() => setRead(!read)}>
                  <MessageSquare size={13} />
                  {read ? "Marquer non lu" : "Marquer comme lu"}
                </button>
              </footer>
            </>
          </AnimatedReveal>
        </div>
      </article>
      <p className="wc-note" role="status">
        {done
          ? "État de démonstration · aucune validation métier envoyée."
          : read
            ? "Dossier marqué comme lu."
            : "Le résumé, la pièce jointe et les actions restent réunis."}
      </p>
    </div>
  );
}
export function AlertCardsDemo() {
  const [level, setLevel] = useState("critique");
  const states = [
    { id: "neutre", name: "Neutre" },
    { id: "attention", name: "Attention" },
    { id: "critique", name: "Critique" },
    { id: "aucun", name: "Aucun risque" },
  ];
  return (
    <div className="wc-alert-demo">
      <AlertSurface
        level={level as AlertLevel}
        title={level === "aucun" ? "Tout est à jour" : level === "neutre" ? "Points à examiner" : "Dossiers à risque"}
        value={level === "aucun" ? "0" : level === "attention" ? "3" : "2"}
        action={level === "critique" ? "ACTION" : level === "attention" ? "À SURVEILLER" : level === "aucun" ? "AUCUNE ACTION" : "REVUE"}
        detail={level === "aucun" ? "Tous les dossiers sont suivis." : "requise avant le prochain comité."}
      />
      <div className="wc-states" aria-label="Niveau de l’alerte">
        {states.map((item) => (
          <button
            key={item.id}
            aria-pressed={level === item.id}
            onClick={() => setLevel(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
