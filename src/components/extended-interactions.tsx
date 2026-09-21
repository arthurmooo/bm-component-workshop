import { DataTable, DataRow } from "./ui/data-table";
import { AppSelect } from "./ui/app-select";
import { useEffect, useState } from "react";
import {
  Check,
  Clock3,
  FileText,
  Image,
  Mic,
  MousePointer2,
  Pencil,
  Play,
  Plus,
  SlidersHorizontal,
  X,
} from "lucide-react";
import "./extended-interactions.css";
export function VoicePromptDemo() {
  const [text, setText] = useState("Préparer une synthèse du dossier Astrée et identifier les points à valider avant le comité."),
    [listening, setListening] = useState(true),
    [elapsed, setElapsed] = useState(18),
    [recent, setRecent] = useState([
      "Préparer le prochain comité",
      "Résumer les pièces du dossier",
    ]),
    [notice, setNotice] = useState("");
  useEffect(() => {
    if (!listening) return;
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [listening]);
  function stop() {
    setListening(false);
    setNotice("Écoute simulée terminée. Vous pouvez modifier la transcription.");
  }
  function cancel() {
    setListening(false);
    setElapsed(0);
    setText("");
    setNotice("Saisie vocale annulée. Aucun audio conservé.");
  }
  const bars=[8,15,20,12,9,18,25,34,44,31,50,62,72,55,66,48,31,24,38,45,49,35,29,53,47,41,45,39,33,20,15,24,35,18,13,11,9,7,13,19,14,11,10,8,35];
  return (
    <section className="voice-prompt">
      <h3>Sur quoi travaillons-nous ?</h3>
      <p>Une saisie vocale de démonstration, sans microphone.</p>
      <div className="voice-box">
        <div className={`voice-capture ${listening?'is-listening':''}`}>
          <button className="voice-mic" aria-label={listening?'Terminer la simulation':'Démarrer la simulation'} aria-pressed={listening} onClick={()=>{if(listening){stop()}else{setListening(true);setElapsed(0);setNotice('')}}}>
            <span><Mic size={25}/></span>
          </button>
          <div className="voice-signal">
            <div className="voice-waveform" aria-hidden="true">{bars.map((height,index)=><i key={index} style={{height:`${height}%`,'--bar-index':index} as React.CSSProperties}/>)}</div>
            <div className="voice-capture-status" role="status"><span><b/> {listening?'Écoute en cours':'Prête à écouter'}</span><time>{String(Math.floor(elapsed/60)).padStart(2,'0')}:{String(elapsed%60).padStart(2,'0')}</time></div>
          </div>
        </div>
        <div className="voice-transcript"><textarea aria-label="Transcription modifiable" value={text} onChange={(e) => {setText(e.target.value);setNotice('')}} placeholder="La transcription apparaîtra ici…"/><Pencil size={16} aria-hidden="true"/></div>
        <footer>
          <button className="voice-cancel" onClick={cancel}>Annuler</button>
          <button className="voice-use" disabled={!text.trim()} onClick={() => {
              setRecent(
                [text.trim(), ...recent.filter((v) => v !== text.trim())].slice(
                  0,
                  4,
                ),
              );
              setListening(false);
              setNotice("Transcription utilisée localement. Aucun appel IA.");
            }}>
            <Check size={15}/> Utiliser la transcription
          </button>
        </footer>
      </div>
      <div className="voice-recents">
        <span><Clock3 size={15}/> Récents</span>
        {recent.map((v) => (
          <button
            key={v}
            onClick={() => {
              setText(v);
              setNotice("Demande précédente reprise.");
            }}
          >
            <FileText size={14}/>{v}
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
