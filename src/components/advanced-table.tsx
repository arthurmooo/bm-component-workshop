import { DataTable, DataRow, type TableSort } from "./ui/data-table";
import { AppSelect } from "./ui/app-select";
import { useMemo, useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Archive,
  RotateCcw,
  Building2,
} from "lucide-react";
import { Button } from "./ui/button";
import "./advanced-table.css";

const records = [
  ["Atelier Nord", "Alice Martin", 480000, "Qualification", 62, "Industrie"],
  ["Maison Astrée", "Paul Laurent", 1250000, "Négociation", 84, "Services"],
  ["Studio Rivage", "Emma Dubois", 320000, "Découverte", 28, "Design"],
  ["Alto Industrie", "Alice Martin", 860000, "Qualification", 56, "Industrie"],
  ["Groupe Opaline", "Paul Laurent", 670000, "Négociation", 78, "Services"],
  ["Luma Conseil", "Emma Dubois", 240000, "Découverte", 34, "Conseil"],
  ["Ventoux Énergie", "Alice Martin", 920000, "Qualification", 65, "Énergie"],
  ["Orbe Santé", "Paul Laurent", 510000, "Négociation", 89, "Santé"],
  ["Nova Atelier", "Emma Dubois", 180000, "Découverte", 22, "Design"],
  ["Aster Mobilité", "Alice Martin", 760000, "Qualification", 59, "Mobilité"],
  ["Cèdre Habitat", "Paul Laurent", 430000, "Négociation", 76, "Immobilier"],
  ["Ondine Tech", "Emma Dubois", 360000, "Découverte", 31, "Logiciel"],
].map(([company, owner, amount, stage, probability, sector], index) => ({
  id: String(index + 1),
  company: String(company),
  owner: String(owner),
  amount: Number(amount),
  stage: String(stage),
  probability: Number(probability),
  sector: String(sector),
  date: new Date(2026, 8, 16 + index),
  tags: [
    String(sector),
    index % 2 ? "Expansion" : "PME",
    ...(index % 3 === 0 ? ["Prioritaire", "France"] : []),
  ],
  activity: Array.from(
    { length: 12 },
    (_, day) => 1 + ((index * 7 + day * 3 + day * day) % 9),
  ),
}));
const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
const date = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "short",
});
const stageOrder = ["Découverte", "Qualification", "Négociation"];

export function AdvancedTableDemo() {
  const [tableSort,setTableSort]=useState<TableSort>({column:-1,direction:null});
  const searchRef = useRef<HTMLInputElement>(null);
  const [aggregation, setAggregation] = useState("sum");
  const [query, setQuery] = useState("");
  const [grouped, setGrouped] = useState(false);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [archived, setArchived] = useState<Set<string>>(new Set());
  const [lastArchived, setLastArchived] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [notice, setNotice] = useState("");
  const filtered = useMemo(
    () =>
      records.filter(
        (row) =>
          !archived.has(row.id) &&
          `${row.company} ${row.owner} ${row.sector} ${row.stage}`
            .toLocaleLowerCase("fr")
            .includes(query.trim().toLocaleLowerCase("fr")),
      ),
    [query, archived],
  );
  const sorted = [...filtered].sort((a,b)=>{
    const get=(row:typeof records[number]):string|number=>["",row.company,row.tags.join(' '),row.owner,row.amount,row.probability,row.activity.reduce((a,b)=>a+b,0),row.date.getTime()][tableSort.column] ?? '';
    if(!tableSort.direction)return 0;
    const x=get(a),y=get(b);const delta=typeof x==='number'&&typeof y==='number'?x-y:String(x).localeCompare(String(y),'fr',{numeric:true});
    return tableSort.direction==='asc'?delta:-delta;
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / 6));
  const activePage = Math.min(page, pageCount - 1);
  const pageRows = grouped
    ? sorted
    : sorted.slice(activePage * 6, activePage * 6 + 6);
  const visibleRows = pageRows.filter(
    (row) => !grouped || !collapsed.has(row.stage),
  );
  const groups = grouped
    ? stageOrder
        .map((stage) => ({
          stage,
          rows: pageRows.filter((row) => row.stage === stage),
        }))
        .filter((group) => group.rows.length)
    : [{ stage: "", rows: pageRows }];
  const allVisibleSelected =
    visibleRows.length > 0 && visibleRows.every((row) => selected.has(row.id));
  const someVisibleSelected = visibleRows.some((row) => selected.has(row.id));
  const toggle = (id: string) =>
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const reset = () => {
    setTableSort({column:-1,direction:null});
    setQuery("");
    setGrouped(false);
    setPage(0);
    setAggregation("sum");
    setSelected(new Set());
    setArchived(new Set());
    setCollapsed(new Set());
    setLastArchived([]);
    setNotice("Table réinitialisée.");
  };

  return (
    <section
      className="advanced-table-demo"
      aria-label="Tableau sociétés avec sélection et regroupement"
    >
      <header className="advanced-table-title">
        <span>
          <Building2 size={15} /> Dossiers actifs{" "}
          <small>{records.length - archived.size}</small>
        </span>
        <Button small variant="ghost" onClick={reset}>
          <RotateCcw size={12} />
          Réinitialiser
        </Button>
      </header>
      <div className="advanced-table-toolbar">
        <label className="advanced-table-search">
          <Search size={14} aria-hidden="true" />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(0);
            }}
            aria-label="Rechercher les sociétés"
            placeholder="Rechercher une société…"
          />
        </label>
        <label className="advanced-table-group">
          Regrouper{" "}
          <AppSelect
            aria-label="Regrouper les sociétés"
            value={grouped ? "stage" : "none"}
            onValueChange={(event) => {
              setGrouped(event === "stage");
              setPage(0);
            }}
          >
            <option value="none">Aucun</option>
            <option value="stage">Par étape</option>
          </AppSelect>
        </label>
      </div>
      <div className="advanced-table-selection" aria-live="polite">
        {selected.size ? (
          <>
            <strong>
              {selected.size} sélectionnée{selected.size > 1 ? "s" : ""}
            </strong>
            <Button
              small
              variant="ghost"
              onClick={() => {
                const ids = [...selected];
                setArchived((current) => new Set([...current, ...ids]));
                setLastArchived(ids);
                setSelected(new Set());
                searchRef.current?.focus();
                setNotice(
                  `${ids.length} société${ids.length > 1 ? "s" : ""} archivée${ids.length > 1 ? "s" : ""} dans cette démonstration.`,
                );
              }}
            >
              <Archive size={12} />
              Archiver
            </Button>
            <Button
              small
              variant="ghost"
              onClick={() => {
                setSelected(new Set());
                searchRef.current?.focus();
              }}
            >
              Désélectionner
            </Button>
          </>
        ) : (
          <span>Sélectionnez des lignes pour agir en une fois.</span>
        )}
      </div>
      <div className="advanced-table-overflow">
        <DataTable sort={tableSort} onSortChange={sort=>{setTableSort(sort);setPage(0)}}>
          <thead>
            <DataRow>
              <th className="selection-cell">
                <input
                  type="checkbox"
                  aria-label="Sélectionner toutes les lignes visibles"
                  disabled={!visibleRows.length}
                  checked={allVisibleSelected}
                  ref={(input) => {
                    if (input)
                      input.indeterminate =
                        someVisibleSelected && !allVisibleSelected;
                  }}
                  onChange={() =>
                    setSelected((current) => {
                      const next = new Set(current);
                      for (const row of visibleRows) {
                        if (allVisibleSelected) next.delete(row.id);
                        else next.add(row.id);
                      }
                      return next;
                    })
                  }
                />
              </th>
              <th>Société</th>
              <th>Segments</th>
              <th>Responsable</th>
              <th>Montant</th>
              <th>Probabilité</th>
              <th>Activité · 12 jours</th>
              <th>Prochaine action</th>
            </DataRow>
          </thead>
          <tbody>
            {groups.map((group) => (
              <TableGroup
                key={group.stage || "all"}
                group={group}
                grouped={grouped}
                collapsed={collapsed.has(group.stage)}
                onCollapse={() =>
                  setCollapsed((current) => {
                    const next = new Set(current);
                    if (next.has(group.stage)) next.delete(group.stage);
                    else next.add(group.stage);
                    return next;
                  })
                }
                selected={selected}
                toggle={toggle}
              />
            ))}
            {!filtered.length && (
              <DataRow>
                <td colSpan={8} className="advanced-table-empty">
                  Aucune société ne correspond à cette recherche.
                </td>
              </DataRow>
            )}
          </tbody>
          <tfoot>
            <DataRow>
              <td colSpan={4}>
                <span className="advanced-aggregate-label">
                  Toutes les sociétés filtrées
                </span>
                <strong>{filtered.length} dossiers</strong>
              </td>
              <td>
                <span className="advanced-aggregate-label">
                  <AppSelect
                    aria-label="Calcul du montant du pipeline"
                    value={aggregation}
                    onValueChange={(event) => setAggregation(event)}
                  >
                    <option value="sum">Somme du pipeline</option>
                    <option value="average">Montant moyen</option>
                    <option value="min">Minimum</option>
                    <option value="max">Maximum</option>
                  </AppSelect>
                </span>
                <strong>
                  {filtered.length
                    ? money.format(
                        aggregation === "min"
                          ? Math.min(...filtered.map((row) => row.amount))
                          : aggregation === "max"
                            ? Math.max(...filtered.map((row) => row.amount))
                            : filtered.reduce(
                                (sum, row) => sum + row.amount,
                                0,
                              ) /
                              (aggregation === "average" ? filtered.length : 1),
                      )
                    : "—"}
                </strong>
              </td>
              <td>
                <span className="advanced-aggregate-label">
                  Probabilité moyenne
                </span>
                <strong>
                  {filtered.length
                    ? `${Math.round(filtered.reduce((sum, row) => sum + row.probability, 0) / filtered.length)} %`
                    : "—"}
                </strong>
              </td>
              <td colSpan={2}>
                <span className="advanced-aggregate-label">
                  Activité cumulée · 12 jours
                </span>
                <strong>
                  {filtered.reduce(
                    (sum, row) => sum + row.activity.reduce((a, b) => a + b, 0),
                    0,
                  )}{" "}
                  interactions
                </strong>
              </td>
            </DataRow>
          </tfoot>
        </DataTable>
      </div>
      <footer className="advanced-table-pagination">
        <span>
          {filtered.length} société{filtered.length > 1 ? "s" : ""}
          {grouped
            ? ` · ${groups.length} étapes`
            : ` · page ${activePage + 1} sur ${pageCount}`}
        </span>
        {!grouped && (
          <div>
            <button
              aria-label="Page précédente"
              disabled={activePage === 0}
              onClick={() => setPage(activePage - 1)}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              aria-label="Page suivante"
              disabled={activePage >= pageCount - 1}
              onClick={() => setPage(activePage + 1)}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </footer>
      <div className="advanced-table-notice">
        <span role="status">
          {notice ||
            "Données fictives · les modifications restent dans cet aperçu."}
        </span>
        {lastArchived.length > 0 && (
          <Button
            small
            variant="ghost"
            onClick={() => {
              setArchived(
                (current) =>
                  new Set(
                    [...current].filter((id) => !lastArchived.includes(id)),
                  ),
              );
              setNotice(`${lastArchived.length} sociétés restaurées.`);
              setLastArchived([]);
            }}
          >
            Annuler l’archivage
          </Button>
        )}
      </div>
    </section>
  );
}

function TableGroup({
  group,
  grouped,
  collapsed,
  onCollapse,
  selected,
  toggle,
}: {
  group: { stage: string; rows: typeof records };
  grouped: boolean;
  collapsed: boolean;
  onCollapse: () => void;
  selected: Set<string>;
  toggle: (id: string) => void;
}) {
  return (
    <>
      {grouped && (
        <DataRow className="advanced-table-group-row">
          <td colSpan={8}>
            <button aria-expanded={!collapsed} onClick={onCollapse}>
              <ChevronDown
                size={13}
                style={{ transform: collapsed ? "rotate(-90deg)" : undefined }}
              />
              <span>{group.stage}</span>
              <small>{group.rows.length}</small>
              <span className="group-total">
                {money.format(
                  group.rows.reduce((sum, row) => sum + row.amount, 0),
                )}
              </span>
            </button>
          </td>
        </DataRow>
      )}
      {!collapsed &&
        group.rows.map((row) => (
          <DataRow key={row.id} data-selected={selected.has(row.id)}>
            <td className="selection-cell">
              <input
                type="checkbox"
                checked={selected.has(row.id)}
                aria-label={`Sélectionner ${row.company}`}
                onChange={() => toggle(row.id)}
              />
            </td>
            <td>
              <div className="advanced-company">
                <i aria-hidden="true">{row.company[0]}</i>
                <div>
                  <strong>{row.company}</strong>
                  <small>{row.sector}</small>
                </div>
              </div>
            </td>
            <td>
              <span className="advanced-tags">
                {row.tags.slice(0, 2).map((tag, index) => (
                  <span key={tag} className={`advanced-tag tone-${index}`}>
                    {tag}
                  </span>
                ))}
                {row.tags.length > 2 && (
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button
                        className="advanced-tags-more"
                        aria-label={`Afficher les ${row.tags.length} segments de ${row.company}`}
                      >
                        +{row.tags.length - 2}
                      </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        align="start"
                        className="advanced-tags-popover"
                        sideOffset={6}
                        aria-label={`Segments de ${row.company}`}
                      >
                        <strong>{row.company}</strong>
                        <div>
                          {row.tags.map((tag) => (
                            <span className="advanced-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Popover.Close aria-label="Fermer les segments">
                          Fermer
                        </Popover.Close>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                )}
              </span>
            </td>
            <td>
              <span className="advanced-owner">
                <img
                  src={`./avatars/${row.owner === "Alice Martin" ? "alice" : row.owner === "Paul Laurent" ? "paul" : "emma"}.svg`}
                  alt=""
                  width={22}
                  height={22}
                />
                {row.owner}
              </span>
            </td>
            <td className="advanced-money">{money.format(row.amount)}</td>
            <td>
              <span className="advanced-probability">
                <span className="advanced-probability-track" aria-hidden="true">
                  <i style={{ width: `${row.probability}%` }} />
                </span>
                {row.probability} %
              </span>
            </td>
            <td>
              <div
                className="advanced-activity"
                role="img"
                aria-label={`${row.activity.reduce((a, b) => a + b, 0)} interactions sur les 12 derniers jours : ${row.activity.join(", ")}`}
                tabIndex={0}
                title={`${row.activity.reduce((a, b) => a + b, 0)} interactions sur 12 jours`}
              >
                {row.activity.map((value, index) => (
                  <i
                    key={index}
                    style={{
                      height: `${(value / 9) * 100}%`,
                      opacity: 0.42 + value / 16,
                    }}
                  />
                ))}
              </div>
            </td>
            <td>
              <time dateTime={`2026-09-${16 + Number(row.id) - 1}`}>
                {date.format(row.date)}
              </time>
              <span className="advanced-stage">{row.stage}</span>
            </td>
          </DataRow>
        ))}
    </>
  );
}
