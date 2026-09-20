import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { List, Columns3 } from "lucide-react";
import { motion } from "motion/react";
import { useId, type ReactNode } from "react";
import "./view-selector.css";
export type ViewSelectorItem = { id: string; name: string; icon: ReactNode };
export type ViewSelectorProps = {
  value: string;
  onChange: (value: string) => void;
  listLabel?: string;
  boardLabel?: string;
  items?: ViewSelectorItem[];
  label?: string;
};
export function ViewSelector({
  value,
  onChange,
  listLabel = "Liste",
  boardLabel = "Kanban",
  items,
  label = "Présentation des dossiers",
}: ViewSelectorProps) {
  const id = useId();
  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v)}
      className="view-selector"
      aria-label={label}
    >
      {(items ?? [
        { id: "list", name: listLabel, icon: <List size={18} strokeWidth={1.7}/> },
        { id: "board", name: boardLabel, icon: <Columns3 size={18} strokeWidth={1.7}/> },
      ]).map((v) => (
        <ToggleGroup.Item
          key={v.id}
          value={v.id}
          aria-label={v.name}
          title={v.name}
        >
          {value === v.id && (
            <motion.span
              layoutId={id}
              className="selection-surface"
              transition={{ type: "spring", stiffness: 480, damping: 36 }}
            />
          )}
          {v.icon}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
