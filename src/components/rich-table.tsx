import { Fragment, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
} from "lucide-react";
import { DataTable, DataRow, type TableSort } from "./ui/data-table";
import { queryTableRows } from "./table-data.mjs";
import { AppSelect } from "./ui/app-select";
import { Button } from "./ui/button";
import "./advanced-table.css";
export type RichTableRow = {
  id: string;
  cells: ReactNode[];
  searchText: string;
  group?: string;
};
export type RichTableProps = {
  title: string;
  columns: string[];
  rows: RichTableRow[];
  searchLabel?: string;
  groupLabel?: string;
  empty?: string;
  pageSize?: number;
  onOpen?: (id: string) => void;
  openOnClick?: boolean;
  action?: ReactNode;
  footerLabel?: ReactNode;
  locale?: "fr" | "en";
};
export function RichTable({
  title,
  columns,
  rows,
  searchLabel = "Rechercher…",
  groupLabel = "Grouper",
  empty = "Aucun résultat.",
  pageSize = 8,
  onOpen,
  openOnClick = false,
  action,
  footerLabel,
  locale = "fr",
}: RichTableProps) {
  const en = locale === "en";
  const safePageSize = Math.max(1, pageSize);
  const input = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState("");
  const [grouped, setGrouped] = useState(false);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sort, setSort] = useState<TableSort>({ column: -1, direction: null });
  const filtered = useMemo(
    () => queryTableRows(rows, q, filters, sort, 1) as RichTableRow[],
    [rows, q, filters, sort],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / safePageSize));
  const active = Math.min(page, pageCount - 1);
  const visible = grouped
    ? filtered
    : filtered.slice(
        active * safePageSize,
        active * safePageSize + safePageSize,
      );
  const groups = grouped
    ? [...new Set(visible.map((r) => r.group || "Autres"))].map((name) => ({
        name,
        rows: visible.filter((r) => (r.group || "Autres") === name),
      }))
    : [{ name: "", rows: visible }];
  const toggle = (id: string) =>
    setSelected((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  const reset = () => {
    setQ("");
    setFilters({});
    setSort({ column: -1, direction: null });
    setGrouped(false);
    setPage(0);
    setSelected(new Set());
    setCollapsed(new Set());
    input.current?.focus();
  };
  return (
    <section className="advanced-table-demo" aria-label={title}>
      <header className="advanced-table-title">
        <span>
          <Building2 size={15} aria-hidden="true" />
          {title}
          <small>{filtered.length}</small>
        </span>
        <div className="advanced-table-title-actions">
          {action}
          <Button small variant="ghost" onClick={reset}>
            <RotateCcw size={12} aria-hidden="true" />
            {en ? "Reset" : "Réinitialiser"}
          </Button>
        </div>
      </header>
      <div className="advanced-table-toolbar">
        <label className="advanced-table-search">
          <Search size={14} aria-hidden="true" />
          <input
            ref={input}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(0);
            }}
            aria-label={searchLabel}
            placeholder={searchLabel}
          />
        </label>
        {rows.some((r) => r.group) && (
          <label className="advanced-table-group">
            {groupLabel}
            <AppSelect
              aria-label={groupLabel}
              value={grouped ? "group" : "none"}
              onValueChange={(v) => {
                setGrouped(v === "group");
                setPage(0);
              }}
            >
              <option value="none">{en ? "None" : "Aucun"}</option>
              <option value="group">{en ? "By group" : "Par groupe"}</option>
            </AppSelect>
          </label>
        )}
      </div>
      {selected.size > 0 && (
        <div className="advanced-table-selection" aria-live="polite">
          {selected.size ? (
            <>
              <strong>
                {selected.size} {en ? "selected" : "sélectionné(s)"}
              </strong>
              <Button
                small
                variant="ghost"
                onClick={() => setSelected(new Set())}
              >
                {en ? "Clear selection" : "Désélectionner"}
              </Button>
            </>
          ) : (
            <span>Sélectionnez des lignes pour agir en une fois.</span>
          )}
        </div>
      )}
      <div className="advanced-table-overflow">
        <DataTable
          locale={locale}
          filters={filters}
          onFiltersChange={(next) => {
            setFilters(next);
            setPage(0);
          }}
          sort={sort}
          onSortChange={(next) => {
            setSort(next);
            setPage(0);
          }}
        >
          <thead>
            <DataRow>
              <th className="selection-cell">
                <input
                  type="checkbox"
                  aria-label={
                    en
                      ? "Select all visible rows"
                      : "Sélectionner toutes les lignes visibles"
                  }
                  disabled={!visible.length}
                  checked={
                    visible.length > 0 &&
                    visible.every((r) => selected.has(r.id))
                  }
                  ref={(node) => {
                    if (node)
                      node.indeterminate =
                        visible.some((r) => selected.has(r.id)) &&
                        !visible.every((r) => selected.has(r.id));
                  }}
                  onChange={(e) =>
                    setSelected(
                      e.target.checked
                        ? new Set(visible.map((r) => r.id))
                        : new Set(),
                    )
                  }
                />
              </th>
              {columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </DataRow>
          </thead>
          <tbody>
            {groups.map((g) => (
              <Fragment key={g.name || "all"}>
                {grouped && (
                  <DataRow className="advanced-table-group-row">
                    <td colSpan={columns.length + 1}>
                      <button
                        aria-expanded={!collapsed.has(g.name)}
                        onClick={() =>
                          setCollapsed((s) => {
                            const n = new Set(s);
                            n.has(g.name) ? n.delete(g.name) : n.add(g.name);
                            return n;
                          })
                        }
                      >
                        <ChevronDown
                          size={13}
                          aria-hidden="true"
                          style={{
                            transform: collapsed.has(g.name)
                              ? "rotate(-90deg)"
                              : undefined,
                          }}
                        />
                        <span>{g.name}</span>
                        <small>{g.rows.length}</small>
                      </button>
                    </td>
                  </DataRow>
                )}
                {!collapsed.has(g.name) &&
                  g.rows.map((r) => (
                    <DataRow
                      key={r.id}
                      className={onOpen ? "advanced-table-openable" : undefined}
                      data-selected={selected.has(r.id)}
                      tabIndex={onOpen ? 0 : undefined}
                      onClick={(event) => {
                        if (
                          openOnClick &&
                          onOpen &&
                          !(event.target as HTMLElement).closest(
                            "button,a,input,select,textarea,[role=menuitem],[role=button]",
                          )
                        )
                          onOpen(r.id);
                      }}
                      onDoubleClick={() => {
                        if (!openOnClick) onOpen?.(r.id);
                      }}
                      onKeyDown={(event) => {
                        if (
                          onOpen &&
                          (event.key === "Enter" || event.key === " ")
                        ) {
                          event.preventDefault();
                          onOpen(r.id);
                        }
                      }}
                    >
                      <td className="selection-cell">
                        <input
                          type="checkbox"
                          checked={selected.has(r.id)}
                          aria-label={`${en ? "Select" : "Sélectionner"} ${r.searchText}`}
                          onChange={() => toggle(r.id)}
                        />
                      </td>
                      {r.cells.map((cell, i) => (
                        <td key={i}>{cell}</td>
                      ))}
                    </DataRow>
                  ))}
              </Fragment>
            ))}
            {!filtered.length && (
              <DataRow>
                <td
                  colSpan={columns.length + 1}
                  className="advanced-table-empty"
                >
                  {empty}
                </td>
              </DataRow>
            )}
          </tbody>
        </DataTable>
      </div>
      <footer className="advanced-table-pagination">
        <span>
          {footerLabel ?? (
            <>
              {filtered.length}{" "}
              {en
                ? filtered.length === 1
                  ? "record"
                  : "records"
                : filtered.length === 1
                  ? "dossier"
                  : "dossiers"}
              {pageCount > 1 && !grouped
                ? ` · ${active + 1} / ${pageCount}`
                : ""}
            </>
          )}
        </span>
        {!grouped && pageCount > 1 && (
          <div>
            <button
              aria-label={en ? "Previous page" : "Page précédente"}
              disabled={active === 0}
              onClick={() => setPage(active - 1)}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              aria-label={en ? "Next page" : "Page suivante"}
              disabled={active >= pageCount - 1}
              onClick={() => setPage(active + 1)}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </footer>
    </section>
  );
}
