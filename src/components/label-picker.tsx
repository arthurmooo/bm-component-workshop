import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { Plus, Check, ArrowLeft } from "lucide-react";

export type Label = { id: string; name: string; color: string };
const colors = [
  ["Corail", "#ef6570"],
  ["Ambre", "#de9b21"],
  ["Menthe", "#35b98d"],
  ["Azur", "#438bea"],
  ["Lilas", "#9963e9"],
  ["Rose", "#dd5dac"],
  ["Sarcelle", "#24a9a0"],
];
const cleanName = (name: string) =>
  name.trim().replace(/\s+/g, " ").normalize("NFC");
const nameKey = (name: string) => cleanName(name).toLocaleLowerCase("fr");

export function LabelPicker({
  labels,
  value,
  onChange,
  onCreate,
}: {
  labels: Label[];
  value: string[];
  onChange: (ids: string[]) => void;
  onCreate: (label: Label) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [step, setStep] = useState<"search" | "color">("search");
  const [hoverColor, setHoverColor] = useState(colors[0][1]);
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const firstColor = useRef<HTMLButtonElement>(null);
  const options = useRef<HTMLDivElement>(null);
  const creating = useRef(false);
  const uid = useId();
  const reduced = useReducedMotion();
  const duration = reduced ? 0 : 0.2;
  const normalized = cleanName(query);
  const results = labels
    .filter((l) => nameKey(l.name).includes(nameKey(query)))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
  const canCreate =
    !!normalized && !labels.some((l) => nameKey(l.name) === nameKey(query));
  const count = results.length + (canCreate ? 1 : 0);
  const activeIndex = Math.min(active, Math.max(0, count - 1));

  useLayoutEffect(() => {
    if (!open) return;
    if (step === "search") {
      input.current?.focus();
      creating.current = false;
    } else firstColor.current?.focus();
  }, [open, step]);
  useLayoutEffect(() => {
    const list = options.current;
    const option = list?.querySelector(
      `[id="${CSS.escape(`${uid}-${activeIndex}`)}"]`,
    );
    if (!list || !option) return;
    const row = option.getBoundingClientRect(),
      viewport = list.getBoundingClientRect();
    if (row.top < viewport.top) list.scrollTop -= viewport.top - row.top;
    else if (row.bottom > viewport.bottom)
      list.scrollTop += row.bottom - viewport.bottom;
  }, [activeIndex, query, uid]);

  const toggle = (id: string) =>
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id],
    );
  function beginCreate() {
    if (canCreate) {
      setHoverColor(colors[0][1]);
      setStep("color");
    }
  }
  function choose(index: number) {
    if (results[index]) toggle(results[index].id);
    else if (index === results.length) beginCreate();
  }
  function keys(e: KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (count)
        setActive(
          (activeIndex + (e.key === "ArrowDown" ? 1 : -1) + count) % count,
        );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (!e.repeat) choose(activeIndex);
    }
  }
  function create(color: string) {
    if (!normalized || creating.current) return;
    creating.current = true;
    const existing = labels.find(
      (l) => nameKey(l.name) === nameKey(normalized),
    );
    if (existing) {
      if (!value.includes(existing.id)) onChange([...value, existing.id]);
    } else {
      const label = { id: crypto.randomUUID(), name: normalized, color };
      onCreate(label);
      onChange([...value, label.id]);
    }
    setQuery("");
    setStep("search");
    setActive(0);
  }
  const panelMotion = {
    initial: { opacity: 0, y: reduced ? 0 : 4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduced ? 0 : -4 },
    transition: { duration: reduced ? 0 : 0.14 },
  };
  return (
    <div className="label-picker">
      <LayoutGroup>
      <div className="label-chips" style={{ position: "relative" }}>
        <AnimatePresence initial={false} mode="popLayout">
          {labels
            .filter((l) => value.includes(l.id))
            .sort((a, b) => a.name.localeCompare(b.name, "fr"))
            .map((l) => (
              <motion.span
                layout="position"
                key={l.id}
                initial={{ opacity: 0, scale: reduced ? 1 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduced ? 1 : 0.9 }}
                transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
                className="label-chip"
                title={l.name}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <i style={{ background: l.color, flexShrink: 0 }} />
                {l.name}
              </motion.span>
            ))}
        </AnimatePresence>
        <Popover.Root
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (!next) {
              setQuery("");
              setStep("search");
              setActive(0);
            }
          }}
        >
          <Popover.Trigger asChild>
            <motion.button
              type="button"
              layout="position"
              transition={{ layout: { duration, ease: [0.22, 1, 0.36, 1] } }}
              className="add-label"
            >
              <Plus size={13} aria-hidden />
              Label
            </motion.button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              updatePositionStrategy="always"
              className="label-popover"
              sideOffset={8}
              align="start"
              collisionPadding={12}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                input.current?.focus();
              }}
              onEscapeKeyDown={(e) => {
                if (step === "color") {
                  e.preventDefault();
                  setStep("search");
                }
              }}
              aria-label="Choisir des labels"
            >
              <motion.div
                layout
                transition={{ layout: { duration, ease: [0.22, 1, 0.36, 1] } }}
                className="label-popover-inner"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {step === "search" ? (
                    <motion.div key="search" {...panelMotion}>
                      <input
                        ref={input}
                        value={query}
                        onChange={(e) => {
                          setQuery(e.target.value);
                          setActive(0);
                        }}
                        onKeyDown={keys}
                        placeholder="Rechercher ou créer un label…"
                        aria-label="Rechercher ou créer un label"
                        role="combobox"
                        aria-expanded={open}
                        aria-controls={`${uid}-list`}
                        aria-activedescendant={
                          count ? `${uid}-${activeIndex}` : undefined
                        }
                        aria-autocomplete="list"
                        maxLength={40}
                      />
                      <div
                        ref={options}
                        className="label-options"
                        id={`${uid}-list`}
                        role="listbox"
                        aria-label="Labels disponibles"
                        aria-multiselectable="true"
                      >
                        {results.map((l, index) => (
                          <button
                            type="button"
                            tabIndex={-1}
                            role="option"
                            aria-selected={value.includes(l.id)}
                            id={`${uid}-${index}`}
                            key={l.id}
                            className={`label-option ${activeIndex === index ? "highlighted" : ""}`}
                            onMouseEnter={() => setActive(index)}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => toggle(l.id)}
                          >
                            <span
                              aria-hidden
                              className={`tiny-check ${value.includes(l.id) ? "checked" : ""}`}
                            >
                              {value.includes(l.id) && (
                                <Check size={9} strokeWidth={3} />
                              )}
                            </span>
                            <i aria-hidden style={{ background: l.color }} />
                            <span className="label-option-name">{l.name}</span>
                          </button>
                        ))}
                        {canCreate && (
                          <button
                            type="button"
                            tabIndex={-1}
                            role="option"
                            aria-selected={false}
                            id={`${uid}-${results.length}`}
                            className={`label-option create-option ${activeIndex === results.length ? "highlighted" : ""}`}
                            onMouseEnter={() => setActive(results.length)}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={beginCreate}
                          >
                            <Plus size={13} aria-hidden />
                            <span>
                              Créer <strong>« {normalized} »</strong>
                            </span>
                          </button>
                        )}
                        {count === 0 && (
                          <p className="empty-labels" role="status">
                            Aucun label
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="color" {...panelMotion}>
                      <div className="color-heading">
                        <button
                          type="button"
                          onClick={() => setStep("search")}
                          aria-label="Retour à la recherche"
                        >
                          <ArrowLeft size={14} />
                        </button>
                        <span>Créer</span>
                        <span className="label-chip" title={normalized}>
                          <i style={{ background: hoverColor }} />
                          {normalized}
                        </span>
                      </div>
                      <p className="color-title" id={`${uid}-colors`}>
                        Choisir une couleur
                      </p>
                      <div
                        className="color-options"
                        role="group"
                        aria-labelledby={`${uid}-colors`}
                        onKeyDown={(e) => {
                          if (
                            !["ArrowDown", "ArrowUp", "Home", "End"].includes(
                              e.key,
                            )
                          )
                            return;
                          e.preventDefault();
                          const buttons = [
                            ...e.currentTarget.querySelectorAll("button"),
                          ];
                          const current = buttons.indexOf(
                            document.activeElement as HTMLButtonElement,
                          );
                          const next =
                            e.key === "Home"
                              ? 0
                              : e.key === "End"
                                ? buttons.length - 1
                                : (current +
                                    (e.key === "ArrowDown" ? 1 : -1) +
                                    buttons.length) %
                                  buttons.length;
                          buttons[next]?.focus();
                        }}
                      >
                        {colors.map(([name, color], index) => (
                          <button
                            type="button"
                            ref={index === 0 ? firstColor : undefined}
                            key={color}
                            onMouseEnter={() => setHoverColor(color)}
                            onFocus={() => setHoverColor(color)}
                            onClick={() => create(color)}
                          >
                            <i aria-hidden style={{ background: color }} />
                            {name}
                            <Check
                              aria-hidden
                              size={12}
                              style={{ opacity: hoverColor === color ? 1 : 0 }}
                            />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
      </LayoutGroup>
    </div>
  );
}
