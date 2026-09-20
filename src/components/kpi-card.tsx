import { ArrowUp, ArrowDown, Files } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import "./kpi-card.css";
export type KpiCardProps = {
  label?: string;
  value?: ReactNode;
  delta?: number | null;
  deltaLabel?: string;
  total?: number;
  detail?: ReactNode;
  progress?: number;
  progressLabel?: string;
  tone?: "blue" | "coral" | "amber" | "neutral";
  icon?: ReactNode;
  loading?: boolean;
  showProgress?: boolean;
};
export function KpiCard({
  label = "Dossiers qualifiés",
  value = 38,
  delta = 6,
  deltaLabel = "dossiers",
  total = 42,
  detail,
  progress,
  tone = "blue",
  icon,
  loading = false,
  progressLabel,
  showProgress = true,
}: KpiCardProps) {
  const numericValue = typeof value === "number" ? value : 0;
  const percentage = progress ?? (total > 0 ? (numericValue / total) * 100 : 0);
  const boundedPercentage = Math.min(100, Math.max(0, percentage));
  const progressValue = typeof value === "number"
    ? Math.min(total, Math.max(0, numericValue))
    : (boundedPercentage / 100) * total;
  return (
    <div
      className={`kpi-shell ${loading ? "loading" : ""}`}
      data-tone={tone}
      aria-busy={loading}
    >
      <div className="kpi-heading">
        {icon ?? <Files size={22} strokeWidth={1.5} aria-hidden="true" />}
        <span>{label}</span>
      </div>
      <div className="kpi-body">
        {loading ? (
          <div className="kpi-skeleton" />
        ) : (
          <div className="kpi-values">
            <motion.strong
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {value}
            </motion.strong>
            {delta !== null && <span className={`kpi-delta ${delta < 0 ? "negative" : ""}`}>
              {delta < 0 ? <ArrowDown size={16} aria-hidden="true" /> : <ArrowUp size={16} aria-hidden="true" />}{" "}
              {Math.abs(delta)} <span>{deltaLabel}</span>
            </span>}
          </div>
        )}
        {showProgress && <><div className="kpi-divider" />
        <div
          className="hatched-track"
          role="progressbar"
          aria-label={progressLabel ?? label}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={Math.round(progressValue)}
        >
          <motion.div
            animate={{ width: `${boundedPercentage}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div></>}
        <p>
          {loading ? "Chargement…" : detail ?? `${Math.max(0, total - numericValue)} dossiers à qualifier sur ${total}`}
        </p>
      </div>
    </div>
  );
}
