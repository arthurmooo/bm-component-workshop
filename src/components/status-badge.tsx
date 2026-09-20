import {
  CircleCheck,
  Clock,
  LoaderCircle,
  Send,
  MessageCircle,
  TriangleAlert,
  CircleX,
} from "lucide-react";
const definitions = {
  pending: { label: "En attente", icon: TriangleAlert },
  progress: { label: "En cours", icon: LoaderCircle },
  submitted: { label: "Envoyé", icon: Send },
  review: { label: "En revue", icon: MessageCircle },
  success: { label: "Terminé", icon: CircleCheck },
  failed: { label: "Échec", icon: CircleX },
  expired: { label: "Expiré", icon: Clock },
};
export type Status = keyof typeof definitions;
export const statusKeys = Object.keys(definitions) as Status[];
export function StatusBadge({
  status,
  label,
}: {
  status: Status;
  label?: string;
}) {
  const { icon: Icon, label: fallback } = definitions[status];
  return (
    <span className={`status-badge ${status}`}>
      <Icon size={14} strokeWidth={1.8} />
      {label ?? fallback}
    </span>
  );
}
