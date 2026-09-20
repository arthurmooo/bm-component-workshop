import { DatePicker } from "./ui/date-picker";
import { AppSelect } from "./ui/app-select";
import { useRef, useState } from "react";
import {
  Type,
  List,
  CalendarDays,
  Hash,
  Plus,
  ArrowUp,
  ArrowDown,
  Trash2,
  Eye,
  GripVertical,
  RotateCcw,
} from "lucide-react";
import "./form-builder-demo.css";
type Kind = "text" | "number" | "date" | "select";
type Field = { id: number; kind: Kind; label: string; required: boolean };
const initial: Field[] = [
  { id: 1, kind: "text", label: "Prénom", required: true },
  { id: 2, kind: "text", label: "Entreprise", required: true },
  { id: 3, kind: "select", label: "Type de mission", required: false },
];
const kinds = [
  {
    kind: "text" as Kind,
    label: "Texte",
    description: "Une ligne de texte",
    icon: Type,
  },
  {
    kind: "number" as Kind,
    label: "Nombre",
    description: "Valeur numérique",
    icon: Hash,
  },
  {
    kind: "date" as Kind,
    label: "Date",
    description: "Choisir une date",
    icon: CalendarDays,
  },
  {
    kind: "select" as Kind,
    label: "Liste",
    description: "Choix unique",
    icon: List,
  },
];
export function FormBuilderDemo() {
  const [dates,setDates]=useState<Record<number,string>>({});
  const [fields, setFields] = useState<Field[]>(initial);
  const [selected, setSelected] = useState(1);
  const [preview, setPreview] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const [notice, setNotice] = useState("");
  const nextId = useRef(4);
  const field = fields.find((f) => f.id === selected);
  function move(id: number, to: number) {
    setFields((items) => {
      const index = items.findIndex((f) => f.id === id);
      if (index < 0 || to < 0 || to >= items.length) return items;
      const result = [...items];
      const [item] = result.splice(index, 1);
      result.splice(to, 0, item);
      return result;
    });
    setNotice("Ordre des champs modifié.");
  }
  function add(kind: Kind) {
    const id = nextId.current++;
    setFields((items) => [
      ...items,
      {
        id,
        kind,
        label: kinds.find((k) => k.kind === kind)!.label,
        required: false,
      },
    ]);
    setSelected(id);
    setNotice("Champ ajouté en fin de formulaire.");
  }
  return (
    <section
      className="form-builder-demo"
      aria-label="Constructeur de formulaire"
    >
      <header>
        <strong>Nouveau formulaire</strong>
        <div>
          <button
            aria-pressed={preview}
            onClick={() => {
              setPreview(!preview);
              setNotice("");
            }}
          >
            <Eye size={13} />
            {preview ? "Modifier" : "Aperçu"}
          </button>
          <button
            aria-label="Réinitialiser le formulaire"
            onClick={() => {
              setFields(initial);
              setSelected(1);
              setPreview(false);
              setNotice("");
              nextId.current = 4;
            }}
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </header>
      <div className="fb-workspace">
        <div className="fb-canvas">
          <div className="fb-canvas-heading">
            <small>FORMULAIRE / 01</small>
            <h3>Votre demande</h3>
            <p>Les informations utiles pour préparer notre échange.</p>
          </div>
          {preview ? (
            <form
              className="fb-preview"
              onSubmit={(e) => {
                e.preventDefault();
                setNotice(
                  "Formulaire valide. Réponse de démonstration enregistrée localement.",
                );
              }}
            >
              {fields.map((f) => (
                <label key={f.id}>
                  {f.label}
                  {f.required && <span> *</span>}
                  {f.kind === "select" ? (
                    <AppSelect required={f.required} defaultValue="">
                      <option value="" disabled>
                        Sélectionner…
                      </option>
                      <option>Conseil</option>
                      <option>Développement</option>
                      <option>Autre</option>
                    </AppSelect>
                  ) : (
                    <>{f.kind === "date" ? <DatePicker value={dates[f.id]??""} onValueChange={value=>setDates(current=>({...current,[f.id]:value}))} required={f.required} aria-label={f.label}/> : <input type={f.kind} required={f.required} />}</>
                  )}
                </label>
              ))}
              {!fields.length ? (
                <p className="fb-empty">Ajoutez un champ dans l’éditeur.</p>
              ) : (
                <button type="submit" className="fb-submit">
                  Tester la validation
                </button>
              )}
            </form>
          ) : (
            <div className="fb-fields">
              {fields.map((f, index) => (
                <div
                  className="fb-field"
                  key={f.id}
                  data-selected={selected === f.id}
                  data-over={over === f.id}
                  draggable
                  onDragStart={(e) => {
                    setDrag(f.id);
                    e.dataTransfer.setData("text/plain", String(f.id));
                    e.dataTransfer.effectAllowed = "move";
                  }}
                  onDragOver={(e) => {
                    if (drag === null) return;
                    e.preventDefault();
                    setOver(f.id);
                  }}
                  onDragLeave={() => setOver(null)}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (drag !== null) move(drag, index);
                    setDrag(null);
                    setOver(null);
                  }}
                  onDragEnd={() => {
                    setDrag(null);
                    setOver(null);
                  }}
                >
                  <button
                    className="fb-field-body"
                    aria-pressed={selected === f.id}
                    onClick={() => setSelected(f.id)}
                  >
                    <GripVertical size={13} />
                    <span>
                      {f.label}
                      {f.required && <b> *</b>}
                      <i>
                        {f.kind === "select"
                          ? "Sélectionner une option"
                          : f.kind === "date"
                            ? "jj/mm/aaaa"
                            : f.kind === "number"
                              ? "0"
                              : "Saisir une valeur…"}
                      </i>
                    </span>
                  </button>
                  <div className="fb-field-actions">
                    <button
                      aria-label={`Monter ${f.label}`}
                      disabled={index === 0}
                      onClick={() => move(f.id, index - 1)}
                    >
                      <ArrowUp size={12} />
                    </button>
                    <button
                      aria-label={`Descendre ${f.label}`}
                      disabled={index === fields.length - 1}
                      onClick={() => move(f.id, index + 1)}
                    >
                      <ArrowDown size={12} />
                    </button>
                  </div>
                </div>
              ))}
              {!fields.length && (
                <p className="fb-empty">
                  Choisissez un type de champ dans la palette.
                </p>
              )}
            </div>
          )}
        </div>
        {!preview && (
          <aside>
            <h4>Ajouter un champ</h4>
            <div className="fb-palette">
              {kinds.map(({ kind, label, description, icon: Icon }) => (
                <button key={kind} onClick={() => add(kind)}>
                  <Icon size={15} />
                  <span>
                    <strong>{label}</strong>
                    <small>{description}</small>
                  </span>
                  <Plus size={12} />
                </button>
              ))}
            </div>
            {field && (
              <div className="fb-inspector">
                <h4>Champ sélectionné</h4>
                <label>
                  Libellé
                  <input
                    value={field.label}
                    maxLength={60}
                    onChange={(e) =>
                      setFields((items) =>
                        items.map((f) =>
                          f.id === selected
                            ? { ...f, label: e.target.value }
                            : f,
                        ),
                      )
                    }
                  />
                </label>
                <label className="fb-required">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) =>
                      setFields((items) =>
                        items.map((f) =>
                          f.id === selected
                            ? { ...f, required: e.target.checked }
                            : f,
                        ),
                      )
                    }
                  />
                  Obligatoire
                </label>
                <button
                  className="fb-delete"
                  onClick={() => {
                    setFields((items) =>
                      items.filter((f) => f.id !== selected),
                    );
                    setSelected(fields.find((f) => f.id !== selected)?.id ?? 0);
                    setNotice(
                      "Champ retiré. Réinitialiser restaure le modèle.",
                    );
                  }}
                >
                  <Trash2 size={12} />
                  Retirer le champ
                </button>
              </div>
            )}
          </aside>
        )}
      </div>
      <footer role="status">
        {notice ||
          "Glissez les champs ou utilisez les flèches. Données locales."}
      </footer>
    </section>
  );
}
