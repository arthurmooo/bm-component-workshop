import { DataTable, DataRow } from "./ui/data-table";
import { AppSelect } from "./ui/app-select";
import { useState } from "react";
import {
  ArrowUp,
  Check,
  Image,
  Mic,
  MousePointer2,
  Pause,
  Play,
  Plus,
  SlidersHorizontal,
  X,
} from "lucide-react";
import "./extended-interactions.css";
export function VoicePromptDemo() {
  const [text, setText] = useState(""),
    [listening, setListening] = useState(false),
    [recent, setRecent] = useState([
      "Préparer le prochain comité",
      "Résumer les pièces du dossier",
    ]),
    [notice, setNotice] = useState("");
  function stop() {
    setListening(false);
    setText("Préparer une synthèse des documents du dossier Atlas.");
    setNotice("Transcription fictive insérée. Vous pouvez la modifier.");
  }
  return (
    <section className="voice-prompt">
      <h3>Sur quoi travaillons-nous ?</h3>
      <p>Une saisie vocale de démonstration, sans microphone.</p>
      <div className="voice-box">
        <textarea
          aria-label="Demande à préparer"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Décrivez votre demande…"
        />
        {listening && (
          <div className="voice-wave" role="status">
            <span />
            <span />
            <span />
            <span />
            <span />
            <small>Écoute simulée…</small>
          </div>
        )}
        <footer>
          <button
            aria-pressed={listening}
            onClick={() => (listening ? stop() : setListening(true))}
          >
            {listening ? <Pause size={13} /> : <Mic size={13} />}{" "}
            {listening ? "Terminer la simulation" : "Parler · démo"}
          </button>
          <button
            aria-label="Préparer cette demande"
            disabled={!text.trim() || listening}
            onClick={() => {
              setRecent(
                [text.trim(), ...recent.filter((v) => v !== text.trim())].slice(
                  0,
                  4,
                ),
              );
              setNotice("Demande préparée localement. Aucun appel IA.");
              setText("");
            }}
          >
            <ArrowUp size={15} />
          </button>
        </footer>
      </div>
      <div className="voice-recents">
        <span>Récents</span>
        {recent.map((v) => (
          <button
            key={v}
            onClick={() => {
              setText(v);
              setNotice("Demande précédente reprise.");
            }}
          >
            {v}
          </button>
        ))}
      </div>
      <small className="voice-notice" role="status">
        {notice || "Aucun audio enregistré ni transmis."}
      </small>
    </section>
  );
}
export function CollaborationPresenceDemo() {
  const [active, setActive] = useState("Alice"),
    [cell, setCell] = useState("1-1"),
    [show, setShow] = useState(true);
  return (
    <section className="presence-demo">
      <header>
        <div>
          <h3>Prévisions partagées</h3>
          <p>Présence et sélection illustratives.</p>
        </div>
        <div className="presence-people">
          {["Alice", "Emma"].map((n, i) => (
            <button
              key={n}
              aria-pressed={active === n}
              aria-label={`Simuler la sélection de ${n}`}
              onClick={() => setActive(n)}
            >
              <img src={`./avatars/${i ? "emma" : "alice"}.svg`} alt="" />
              {n}
            </button>
          ))}
        </div>
      </header>
      <DataTable>
        <thead>
          <DataRow>
            <th>Trimestre</th>
            <th>Revenu</th>
            <th>Variation</th>
          </DataRow>
        </thead>
        <tbody>
          {[
            ["T1", "128 000 €", "+8,1 %"],
            ["T2", "156 000 €", "+21,9 %"],
            ["T3", "184 000 €", "+17,9 %"],
          ].map((row, i) => (
            <DataRow key={i}>
              {row.map((value, j) => (
                <td key={j}>
                  <button
                    onClick={() => {
                      setCell(`${i}-${j}`);
                      setShow(true);
                    }}
                    className={
                      show && cell === `${i}-${j}`
                        ? `presence-selected ${active === "Emma" ? "purple" : ""}`
                        : ""
                    }
                    aria-label={`Sélectionner ${value} pour ${active}`}
                  >
                    {value}
                    {show && cell === `${i}-${j}` && (
                      <span className="presence-cursor">
                        <MousePointer2 size={15} />
                        <b>{active}</b>
                      </span>
                    )}
                  </button>
                </td>
              ))}
            </DataRow>
          ))}
        </tbody>
      </DataTable>
      <footer>
        <span>
          <i />
          {show ? `${active} sélectionne une cellule` : "Présence masquée"}
        </span>
        <button onClick={() => setShow(!show)}>
          {show ? "Masquer" : "Afficher"}
        </button>
      </footer>
      <p>
        Aucune collaboration réelle · cliquez une cellule pour déplacer le
        curseur fictif.
      </p>
    </section>
  );
}
export function MediaNodeInspectorDemo() {
  const [mode, setMode] = useState("Image"),
    [weight, setWeight] = useState("Équilibré"),
    [intent, setIntent] = useState(64),
    [density, setDensity] = useState(35),
    [trigger, setTrigger] = useState(["Document", "Manuel"]),
    [selected, setSelected] = useState("Synthèse média"),
    [ran, setRan] = useState(false);
  return (
    <section className="media-inspector">
      <div className="media-settings">
        <header>
          <SlidersHorizontal size={14} />
          <strong>Paramètres du nœud</strong>
        </header>
        <label>
          Format
          <AppSelect
            value={mode}
            onValueChange={(e) => {
              setMode(e);
              setRan(false);
            }}
          >
            <option>Image</option>
            <option>Vidéo</option>
          </AppSelect>
        </label>
        <label>
          Style
          <AppSelect
            value={weight}
            onValueChange={(e) => {
              setWeight(e);
              setRan(false);
            }}
          >
            <option>Équilibré</option>
            <option>Précis</option>
            <option>Créatif</option>
          </AppSelect>
        </label>
        <label>
          Intention <output>{intent}</output>
          <input
            type="range"
            min="0"
            max="100"
            value={intent}
            onChange={(e) => {
              setIntent(Number(e.target.value));
              setRan(false);
            }}
          />
        </label>
        <label>
          Densité <output>{density}</output>
          <input
            type="range"
            min="0"
            max="100"
            value={density}
            onChange={(e) => {
              setDensity(Number(e.target.value));
              setRan(false);
            }}
          />
        </label>
        <p>Déclencheurs</p>
        <div className="media-trigger">
          {["Document", "Manuel", "Calendrier"].map((t) => (
            <button
              key={t}
              aria-pressed={trigger.includes(t)}
              onClick={() => {
                setTrigger(
                  trigger.includes(t)
                    ? trigger.filter((v) => v !== t)
                    : [...trigger, t],
                );
                setRan(false);
              }}
            >
              {t}
              {trigger.includes(t) ? <Check size={9} /> : <Plus size={9} />}
            </button>
          ))}
        </div>
      </div>
      <div className="media-node-canvas">
        <div className="media-node-selector">
          {["Entrée", "Synthèse média"].map((v) => (
            <button
              aria-pressed={selected === v}
              key={v}
              onClick={() => setSelected(v)}
            >
              {v}
            </button>
          ))}
        </div>
        <article className="media-node">
          <header>
            <Image size={16} />
            <span>
              <strong>{selected}</strong>
              <small>
                {selected === "Entrée"
                  ? "Sources sélectionnées"
                  : ran
                    ? "Prévisualisation préparée"
                    : "Prêt à simuler"}
              </small>
            </span>
          </header>
          <div className="media-node-section">
            <small>{selected === "Entrée" ? "Sources" : "Paramètres"}</small>
            {selected === "Entrée" ? (
              <div className="media-thumbnails">
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>
            ) : (
              <dl>
                <div>
                  <dt>Format</dt>
                  <dd>{mode}</dd>
                </div>
                <div>
                  <dt>Style</dt>
                  <dd>{weight}</dd>
                </div>
                <div>
                  <dt>Intention / densité</dt>
                  <dd>
                    {intent} / {density}
                  </dd>
                </div>
              </dl>
            )}
          </div>
          <div className="media-node-section">
            <small>Déclencheurs actifs</small>
            <p>{trigger.join(" · ") || "Aucun — ajoutez un déclencheur"}</p>
          </div>
          <div className="media-node-section">
            <small>Sortie structurée</small>
            <pre>
              {JSON.stringify(
                {
                  format: mode.toLowerCase(),
                  intent,
                  density,
                  triggers: trigger.length,
                },
                null,
                2,
              )}
            </pre>
          </div>
          <footer>
            <button disabled={!trigger.length} onClick={() => setRan(true)}>
              {ran ? <Check size={12} /> : <Play size={12} />}{" "}
              {ran ? "Aperçu prêt" : "Préparer l’aperçu"}
            </button>
            {ran && (
              <button
                aria-label="Réinitialiser l’aperçu"
                onClick={() => setRan(false)}
              >
                <X size={12} />
              </button>
            )}
          </footer>
        </article>
      </div>
      <p className="media-disclaimer">
        Illustration locale des paramètres · aucun média généré, aucune donnée
        transmise.
      </p>
    </section>
  );
}
