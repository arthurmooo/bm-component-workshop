import { DataTable, DataRow } from "./ui/data-table";
import { AppSelect } from "./ui/app-select";
import { useRef, useState } from "react";
import {
  UploadCloud,
  FileSpreadsheet,
  Check,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { parseCsv, mapImportRows, exampleCsv } from "./import-model.mjs";
import "./import-demo.css";
type CsvData = { headers: string[]; rows: string[][] };
const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
export function ImportDemo() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CsvData | null>(null);
  const [fileName, setFileName] = useState("");
  const [companyColumn, setCompanyColumn] = useState(0);
  const [amountColumn, setAmountColumn] = useState(1);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [reading, setReading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const generation = useRef(0);
  const moveTo = (next: number) => {
    setStep(next);
    setError("");
    requestAnimationFrame(() => headingRef.current?.focus());
  };
  const load = (text: string, name: string) => {
    try {
      const parsed = parseCsv(text);
      setData(parsed);
      setFileName(name);
      setCompanyColumn(
        Math.max(
          0,
          parsed.headers.findIndex((header) =>
            /soci[eé]t[eé]|company|nom/i.test(header),
          ),
        ),
      );
      const amountIndex = parsed.headers.findIndex((header) =>
        /montant|amount|prix/i.test(header),
      );
      setAmountColumn(amountIndex < 0 ? 1 : amountIndex);
      moveTo(1);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Le fichier ne peut pas être lu.",
      );
    }
  };
  const read = async (file?: File) => {
    if (!file) return;
    const current = ++generation.current;
    setError("");
    if (!/\.csv$/i.test(file.name)) {
      setError("Choisissez un fichier .csv.");
      return;
    }
    if (file.size > 1_000_000) {
      setError("Le fichier dépasse la limite de 1 Mo.");
      return;
    }
    setReading(true);
    try {
      const text = await file.text();
      if (current === generation.current) load(text, file.name);
    } catch {
      if (current === generation.current)
        setError("Impossible de lire ce fichier.");
    } finally {
      if (current === generation.current) setReading(false);
    }
  };
  const reset = () => {
    generation.current++;
    setReading(false);
    setData(null);
    setFileName("");
    setError("");
    moveTo(0);
  };
  let mapped: { company: string; amount: number }[] = [];
  let mappingError = "";
  if (data) {
    try {
      mapped = mapImportRows(data, companyColumn, amountColumn);
    } catch (cause) {
      mappingError =
        cause instanceof Error ? cause.message : "Vérifiez le mapping.";
    }
  }
  return (
    <section
      className="import-demo"
      aria-label="Import CSV avec correspondance des colonnes"
    >
      <div className="import-demo-top">
        <span>
          <FileSpreadsheet size={15} />
          Importer des sociétés
        </span>
        {step > 0 && (
          <Button small variant="ghost" onClick={reset}>
            <RotateCcw size={12} />
            Recommencer
          </Button>
        )}
      </div>
      <ol className="import-steps" aria-label="Étapes de l’import">
        {["Fichier", "Colonnes", "Vérification", "Terminé"].map(
          (label, index) => (
            <li
              key={label}
              aria-current={step === index ? "step" : undefined}
              data-complete={step > index}
            >
              <span>{step > index ? <Check size={11} /> : index + 1}</span>
              {label}
            </li>
          ),
        )}
      </ol>
      <div className="import-demo-body">
        <h3 ref={headingRef} tabIndex={-1}>
          {
            [
              "Ajoutez votre fichier",
              "Associez les colonnes",
              "Vérifiez les données",
              "Vos sociétés sont prêtes",
            ][step]
          }
        </h3>
        {step === 0 && (
          <>
            <p>Fichier CSV · 1 Mo maximum · jusqu’à 5 000 lignes</p>
            <div
              className={`import-dropzone${dragging ? " is-dragging" : ""}`}
              onDragOver={(event) => {
                event.preventDefault();
                setDragging(true);
              }}
              onDragLeave={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                )
                  setDragging(false);
              }}
              onDrop={(event) => {
                event.preventDefault();
                setDragging(false);
                void read(event.dataTransfer.files[0]);
              }}
            >
              <span className="import-drop-icon">
                <UploadCloud size={26} />
              </span>
              <strong>
                {reading ? "Lecture du fichier…" : "Déposez votre fichier ici"}
              </strong>
              <span>ou choisissez-le sur votre appareil</span>
              <Button
                small
                variant="default"
                disabled={reading}
                onClick={() => inputRef.current?.click()}
              >
                Choisir un fichier
              </Button>
              <input
                ref={inputRef}
                type="file"
                accept=".csv,text/csv"
                aria-label="Choisir le fichier CSV"
                hidden
                onChange={(event) => {
                  void read(event.target.files?.[0]);
                  event.target.value = "";
                }}
              />
            </div>
            <button
              className="import-example"
              disabled={reading}
              onClick={() => load(exampleCsv, "societes-exemple.csv")}
            >
              Essayer avec le fichier d’exemple
              <ArrowRight size={12} />
            </button>
          </>
        )}
        {step === 1 && data && (
          <>
            <p>
              <FileSpreadsheet size={12} />
              {fileName} · {data.rows.length} lignes détectées
            </p>
            <div className="import-mapping">
              <div>
                <span>Champ de destination</span>
                <span>Colonne du fichier</span>
              </div>
              {[
                {
                  label: "Société",
                  value: companyColumn,
                  set: setCompanyColumn,
                },
                {
                  label: "Montant (€)",
                  value: amountColumn,
                  set: setAmountColumn,
                },
              ].map((field) => (
                <label key={field.label}>
                  <strong>
                    {field.label}
                    <small>Obligatoire</small>
                  </strong>
                  <AppSelect
                    aria-label={`Colonne pour ${field.label}`}
                    value={field.value}
                    onValueChange={(event) => field.set(Number(event))}
                  >
                    {data.headers.map((header, index) => (
                      <option key={header} value={index}>
                        {header}
                      </option>
                    ))}
                  </AppSelect>
                </label>
              ))}
            </div>
            <p className="import-local-note">
              Les autres colonnes restent dans le fichier et ne sont pas
              ajoutées à cet aperçu.
            </p>
            {mappingError && (
              <p role="alert" className="import-error">
                {mappingError}
              </p>
            )}
            <div className="import-actions">
              <Button small variant="ghost" onClick={() => moveTo(0)}>
                Retour
              </Button>
              <Button small disabled={!!mappingError} onClick={() => moveTo(2)}>
                Vérifier les données
                <ArrowRight size={12} />
              </Button>
            </div>
          </>
        )}
        {(step === 2 || step === 3) && (
          <>
            {step === 3 ? (
              <div className="import-success">
                <CheckCircle2 size={25} />
                <span>
                  <strong>{mapped.length} sociétés ajoutées à l’aperçu</strong>
                  <small>Démonstration locale · aucune donnée envoyée.</small>
                </span>
              </div>
            ) : (
              <p>
                {mapped.length} sociétés · total{" "}
                {money.format(mapped.reduce((sum, row) => sum + row.amount, 0))}
              </p>
            )}
            <div className="import-preview-table">
              <DataTable>
                <thead>
                  <DataRow>
                    <th>Société</th>
                    <th className="import-amount">Montant</th>
                  </DataRow>
                </thead>
                <tbody>
                  {mapped.slice(0, 5).map((row, index) => (
                    <DataRow key={index}>
                      <td>{row.company}</td>
                      <td className="import-amount">{money.format(row.amount)}</td>
                    </DataRow>
                  ))}
                </tbody>
              </DataTable>
            </div>
            {mapped.length > 5 && (
              <p>Et {mapped.length - 5} autres sociétés.</p>
            )}
            {step === 2 && (
              <div className="import-actions">
                <Button small variant="ghost" onClick={() => moveTo(1)}>
                  Modifier les colonnes
                </Button>
                <Button small onClick={() => moveTo(3)}>
                  Confirmer l’import local
                  <Check size={12} />
                </Button>
              </div>
            )}
          </>
        )}
        {error && (
          <p role="alert" className="import-error">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
