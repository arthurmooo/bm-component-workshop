import { AmountInput } from "./ui/amount-input";
import { AppSelect } from "./ui/app-select";
import { useState } from "react";
import { GitBranch, Plus, Trash2, Check, X } from "lucide-react";
import { evaluateGroups } from "./rule-model.mjs";
import "./rule-builder-demo.css";
type Rule = { id: number; field: string; operator: string; value: string };
type Group = { id: number; join: string; rules: Rule[] };
const seed: Group[] = [
  {
    id: 1,
    join: "AND",
    rules: [{ id: 1, field: "amount", operator: "gt", value: "75" }],
  },
  {
    id: 2,
    join: "OR",
    rules: [
      { id: 2, field: "category", operator: "in", value: "Repas,Déplacement" },
    ],
  },
];
export function RuleBuilderDemo() {
  const [groups, setGroups] = useState(seed),
    [join, setJoin] = useState("AND"),
    [next, setNext] = useState(10),
    [yes, setYes] = useState("Préparer une approbation"),
    [no, setNo] = useState("Demander une revue"),
    [amount, setAmount] = useState(120),
    [category, setCategory] = useState("Repas");
  const result = evaluateGroups(groups, join, { amount, category });
  function update(gid: number, rid: number, patch: Partial<Rule>) {
    setGroups((gs) =>
      gs.map((g) =>
        g.id === gid
          ? {
              ...g,
              rules: g.rules.map((r) =>
                r.id === rid ? { ...r, ...patch } : r,
              ),
            }
          : g,
      ),
    );
  }
  return (
    <section className="rule-builder">
      <header>
        <GitBranch size={17} />
        <div>
          <h3>Règles de validation</h3>
          <p>Composez les conditions, puis testez une dépense fictive.</p>
        </div>
      </header>
      <div className="rb-section-title">
        <strong>QUAND</strong>
        <label>
          Relier les groupes
          <AppSelect
            aria-label="Opérateur entre les groupes"
            value={join}
            onValueChange={(e) => setJoin(e)}
          >
            <option>AND</option>
            <option>OR</option>
          </AppSelect>
        </label>
      </div>
      <div className="rb-groups">
        {groups.map((g, gi) => (
          <div className="rb-group" key={g.id}>
            {gi > 0 && <span className="rb-link">{join}</span>}
            <div className="rb-group-head">
              <strong>Groupe {gi + 1}</strong>
              <span>
                {g.rules.length} condition{g.rules.length > 1 ? "s" : ""}
              </span>
              <AppSelect
                aria-label={`Opérateur du groupe ${gi + 1}`}
                value={g.join}
                onValueChange={(e) =>
                  setGroups((gs) =>
                    gs.map((v) =>
                      v.id === g.id ? { ...v, join: e } : v,
                    ),
                  )
                }
              >
                <option>AND</option>
                <option>OR</option>
              </AppSelect>
              <button
                aria-label={`Supprimer le groupe ${gi + 1}`}
                onClick={() => setGroups(groups.filter((v) => v.id !== g.id))}
              >
                <Trash2 size={12} />
              </button>
            </div>
            {g.rules.map((r, ri) => (
              <div className="rb-rule" key={r.id}>
                <AppSelect
                  aria-label={`Champ condition ${gi + 1}.${ri + 1}`}
                  value={r.field}
                  onValueChange={(e) =>
                    update(g.id, r.id, {
                      field: e,
                      operator: e === "amount" ? "gt" : "in",
                      value: e === "amount" ? "75" : "Repas",
                    })
                  }
                >
                  <option value="amount">Montant</option>
                  <option value="category">Catégorie</option>
                </AppSelect>
                <AppSelect
                  aria-label={`Comparaison condition ${gi + 1}.${ri + 1}`}
                  value={r.operator}
                  onValueChange={(e) =>
                    update(g.id, r.id, { operator: e })
                  }
                >
                  {r.field === "amount" ? (
                    <>
                      <option value="gt">Supérieur à</option>
                      <option value="lte">Inférieur ou égal</option>
                    </>
                  ) : (
                    <>
                      <option value="in">Parmi</option>
                      <option value="not">Hors de</option>
                    </>
                  )}
                </AppSelect>
                {r.field === "amount" ? (
                  <div className="rb-number">
                    <AmountInput
                      aria-label={`Seuil condition ${gi + 1}.${ri + 1}`}
                      
                      min="0"
                      max="100000"
                      value={r.value}
                      onValueChange={(e) =>
                        update(g.id, r.id, {
                          value: String(
                            Math.min(
                              100000,
                              Math.max(0, Number(e) || 0),
                            ),
                          ),
                        })
                      }
                    />
                    <span>€</span>
                  </div>
                ) : (
                  <div
                    className="rb-values"
                    role="group"
                    aria-label={`Valeurs condition ${gi + 1}.${ri + 1}`}
                  >
                    {["Repas", "Déplacement", "Hôtel"].map((v) => (
                      <button
                        key={v}
                        aria-pressed={r.value.split(",").includes(v)}
                        onClick={() => {
                          const values = r.value.split(",").filter(Boolean);
                          update(g.id, r.id, {
                            value: (values.includes(v)
                              ? values.filter((n) => n !== v)
                              : [...values, v]
                            ).join(","),
                          });
                        }}
                      >
                        {v}
                        {r.value.split(",").includes(v) && <Check size={9} />}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  aria-label={`Supprimer la condition ${gi + 1}.${ri + 1}`}
                  onClick={() =>
                    setGroups((gs) =>
                      gs.map((v) =>
                        v.id === g.id
                          ? {
                              ...v,
                              rules: v.rules.filter((n) => n.id !== r.id),
                            }
                          : v,
                      ),
                    )
                  }
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            {!g.rules.length && (
              <p className="rb-empty">Aucune condition : ce groupe est faux.</p>
            )}
            <button
              className="rb-add"
              onClick={() => {
                setGroups((gs) =>
                  gs.map((v) =>
                    v.id === g.id
                      ? {
                          ...v,
                          rules: [
                            ...v.rules,
                            {
                              id: next,
                              field: "amount",
                              operator: "gt",
                              value: "75",
                            },
                          ],
                        }
                      : v,
                  ),
                );
                setNext(next + 1);
              }}
            >
              <Plus size={12} />
              Ajouter une condition
            </button>
          </div>
        ))}
      </div>
      <button
        className="rb-add"
        onClick={() => {
          setGroups([
            ...groups,
            {
              id: next,
              join: "AND",
              rules: [
                {
                  id: next + 1,
                  field: "category",
                  operator: "in",
                  value: "Repas",
                },
              ],
            },
          ]);
          setNext(next + 2);
        }}
      >
        <Plus size={12} />
        Ajouter un groupe
      </button>
      <div className="rb-then">
        <strong>ALORS</strong>
        {[
          [true, yes, setYes],
          [false, no, setNo],
        ].map(([truth, value, setter]) => (
          <label key={String(truth)}>
            <span>
              {truth ? <Check size={12} /> : <X size={12} />}Si{" "}
              {truth ? "vrai" : "faux"}
            </span>
            <AppSelect
              aria-label={`Action si ${truth ? "vrai" : "faux"}`}
              value={value as string}
              onValueChange={(e) => (setter as typeof setYes)(e)}
            >
              {[
                "Préparer une approbation",
                "Demander une revue",
                "Archiver dans la démo",
              ].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </AppSelect>
          </label>
        ))}
      </div>
      <div className="rb-fixture">
        <strong>Tester la règle</strong>
        <label>
          Montant
          <AmountInput
            
            min="0"
            max="100000"
            value={amount}
            onValueChange={(e) =>
              setAmount(
                Math.min(100000, Math.max(0, Number(e) || 0)),
              )
            }
          />
        </label>
        <label>
          Catégorie
          <AppSelect
            value={category}
            onValueChange={(e) => setCategory(e)}
          >
            {["Repas", "Déplacement", "Hôtel", "Autre"].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </AppSelect>
        </label>
        <p role="status">
          <b>{result ? "Vrai" : "Faux"}</b>
          {result ? yes : no}
        </p>
      </div>
      <footer>
        Évaluation locale · aucune approbation ni action externe exécutée.
      </footer>
    </section>
  );
}
