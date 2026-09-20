import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Users,
  WandSparkles,
  X,
} from "lucide-react";
import "./onboarding-demo.css";
const steps = [
  {
    title: "Rassemblez vos documents.",
    desc: "Un même espace pour les pièces de votre dossier.",
    icon: FileText,
  },
  {
    title: "Travaillez ensemble.",
    desc: "Retrouvez les contributions de chacun, au même endroit.",
    icon: Users,
  },
  {
    title: "Passez à l’action.",
    desc: "Préparez votre synthèse à partir des sources choisies.",
    icon: WandSparkles,
  },
];
export function OnboardingDemo() {
  const [step, setStep] = useState(0),
    [done, setDone] = useState(false);
  return (
    <section className="onboarding-demo">
      <div
        className={`onboarding-illustration step-${step}`}
        aria-hidden="true"
      >
        {step === 0 ? (
          <div className="onboard-docs">
            {[
              "Présentation.pdf",
              "Synthèse.xlsx",
              "Lettre de mission.docx",
            ].map((v, i) => (
              <div key={v}>
                <FileText size={16} />
                <span>{v}</span>
                <Check size={12} />
                <small>{[2.4, 1.8, 0.5][i]} Mo</small>
              </div>
            ))}
          </div>
        ) : step === 1 ? (
          <div className="onboard-table">
            <div>
              Trimestre<span>Revenu</span>
            </div>
            {["T1", "T2", "T3"].map((v, i) => (
              <div key={v}>
                <span className={i === 1 ? "selected" : ""}>
                  {v}
                  {i === 1 && <b>Alice</b>}
                </span>
                <span className={i === 2 ? "selected purple" : ""}>
                  {[128, 156, 184][i]} k€{i === 2 && <b>Emma</b>}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="onboard-result">
            <WandSparkles size={20} />
            <strong>Synthèse préparée</strong>
            <span />
            <span />
            <span />
            <small>
              3 sources vérifiées <Check size={10} />
            </small>
          </div>
        )}
      </div>
      <div className="onboarding-copy">
        <h3>{done ? "Votre espace est prêt." : steps[step].title}</h3>
        <p>
          {done
            ? "Vous pouvez revenir sur ces étapes à tout moment."
            : steps[step].desc}
        </p>
      </div>
      <footer>
        <button
          disabled={step === 0 && !done}
          aria-label="Étape précédente"
          onClick={() => {
            setDone(false);
            setStep(Math.max(0, step - 1));
          }}
        >
          <ArrowLeft size={13} />
        </button>
        <span aria-live="polite">
          {done ? "Terminé" : `${step + 1} / ${steps.length}`}
        </span>
        <button
          className="onboard-next"
          onClick={() => {
            if (done) {
              setDone(false);
              setStep(0);
            } else if (step === 2) setDone(true);
            else setStep(step + 1);
          }}
        >
          {done ? "Revoir" : step === 2 ? "Terminer" : "Suivant"}
          {done ? <Check size={12} /> : <ArrowRight size={12} />}
        </button>
      </footer>
    </section>
  );
}
export function CoachmarkDemo() {
  const [step, setStep] = useState<number | null>(null);
  return (
    <section className="coachmark-demo">
      <header>
        <strong>Préparer un dossier</strong>
        <button onClick={() => setStep(0)}>Visite guidée</button>
      </header>
      <div className={`coachmark-canvas ${step !== null ? "tour-active" : ""}`}>
        {steps.map(({ title, icon: Icon }, i) => (
          <div
            key={title}
            className={`coachmark-node ${step === i ? "highlighted" : ""}`}
          >
            <Icon size={18} />
            <span>{["Documents", "Équipe", "Synthèse"][i]}</span>
            <small>
              {
                ["3 pièces disponibles", "2 collaborateurs", "Prête à générer"][
                  i
                ]
              }
            </small>
            {i < 2 && <i />}
          </div>
        ))}
      </div>
      {step !== null && (
        <div
          className="coachmark-content"
          role="region"
          aria-label="Visite guidée"
        >
          <button
            className="coachmark-close"
            aria-label="Fermer la visite"
            onClick={() => setStep(null)}
          >
            <X size={13} />
          </button>
          <small>ÉTAPE {step + 1} SUR 3</small>
          <h3>{steps[step].title}</h3>
          <p>{steps[step].desc}</p>
          <footer>
            <button disabled={step === 0} onClick={() => setStep(step - 1)}>
              Précédent
            </button>
            <button onClick={() => setStep(step === 2 ? null : step + 1)}>
              {step === 2 ? "Terminer" : "Suivant"}
              <ArrowRight size={12} />
            </button>
          </footer>
        </div>
      )}
      <p className="coachmark-note">
        Démonstration locale · les étapes présentent les zones du composant.
      </p>
    </section>
  );
}
