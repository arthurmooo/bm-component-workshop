import { useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Pause,
  Play,
  X,
  Check,
  Trash2,
  ArrowDown,
  RotateCcw,
  FileSpreadsheet,
  TriangleAlert,
} from "lucide-react";
import { Button } from "./ui/button";
import type { UploadState } from "./use-upload";
import "./upload-card.css";
export type { UploadState } from "./use-upload";

export interface UploadCardProps {
  name: string;
  progress: number;
  state: UploadState;
  bytes: number;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onCancel: () => void;
  onDownload: () => void;
  fileType?: string;
}

const statusLabels: Record<UploadState, string> = {
  idle: "Prêt à transférer",
  uploading: "Transfert en cours",
  paused: "Transfert en pause",
  complete: "Transfert terminé",
  error: "Transfert interrompu. Vous pouvez reprendre.",
  cancelled: "Transfert annulé",
};

function formatBytes(bytes: number) {
  const amount = Math.max(0, bytes);
  if (amount < 1000) return `${Math.round(amount)} o`;
  const unit = amount < 1_000_000 ? "ko" : "Mo";
  return `${(amount / (unit === "ko" ? 1000 : 1_000_000)).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} ${unit}`;
}

export function UploadCard({
  name,
  progress,
  state,
  bytes,
  onStart,
  onPause,
  onResume,
  onCancel,
  onDownload,
  fileType = "CSV",
}: UploadCardProps) {
  const reducedMotion = useReducedMotion();
  const shell = useRef<HTMLDivElement>(null);
  const focusedCommand = useRef<HTMLButtonElement | null>(null);
  const primaryCommand = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    const previous = focusedCommand.current;
    if (!previous) return;
    const active = document.activeElement;
    if (active !== previous && active !== document.body) return;
    const command = previous.dataset.uploadCommand;
    const available =
      state === "uploading" || state === "paused"
        ? ["toggle", "cancel"]
        : state === "complete"
          ? ["remove", "start", "download"]
          : state === "error"
            ? ["cancel", "resume"]
            : ["start"];
    if (
      !command ||
      (available.includes(command) &&
        previous.isConnected &&
        !previous.closest("[inert]"))
    )
      return;
    primaryCommand.current?.focus({ preventScroll: true });
  }, [state]);
  const done = state === "complete";
  const error = state === "error";
  const paused = state === "paused";
  const running = state === "uploading" || paused;
  const percent = done
    ? 100
    : Math.round(
        Math.min(100, Math.max(0, Number.isFinite(progress) ? progress : 0)),
      );
  const transferred = Math.round((Math.max(0, bytes) * percent) / 100);
  const duration = reducedMotion ? 0 : 0.24;
  const status = done ? (
    <>
      <Check size={13} aria-hidden="true" />
      Terminé
    </>
  ) : error ? (
    <>
      <TriangleAlert size={13} aria-hidden="true" />
      Transfert interrompu
    </>
  ) : paused ? (
    `En pause ${percent} %`
  ) : state === "uploading" ? (
    `Transfert ${percent} %`
  ) : (
    statusLabels[state]
  );

  return (
    <motion.div
      ref={shell}
      onFocusCapture={(event) => {
        if (event.target instanceof HTMLButtonElement)
          focusedCommand.current = event.target;
      }}
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !shell.current?.contains(event.relatedTarget)
        )
          focusedCommand.current = null;
      }}
      layout={!reducedMotion}
      className={`upload-shell state-${state}`}
      transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
    >
      <span className="sr-only" role="status" aria-atomic="true">
        {statusLabels[state]}
      </span>
      <div className="upload-face">
        <AnimatePresence initial={false}>
          {running && (
            <motion.div
              key="wash"
              className="upload-wash"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ width: `${percent}%`, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                width: { duration: reducedMotion ? 0 : 0.12, ease: "linear" },
                opacity: { duration },
              }}
            />
          )}
        </AnimatePresence>
        <div className="upload-info">
          <div className="file-symbol" aria-hidden="true">
            <FileSpreadsheet size={23} strokeWidth={1.6} />
            <span>{fileType.slice(0, 5).toUpperCase()}</span>
          </div>
          <div className="file-text">
            <strong title={name}>{name}</strong>
            <div className="file-subline">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={state}
                  className="upload-status"
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reducedMotion ? 0 : -3 }}
                  transition={{ duration: reducedMotion ? 0 : 0.16 }}
                >
                  {status}
                </motion.span>
              </AnimatePresence>
              <span className="file-size">
                · {running || error ? `${formatBytes(transferred)} sur ` : ""}
                {formatBytes(bytes)}
              </span>
            </div>
          </div>
          <div className="upload-tools">
            {running && (
              <>
                <button
                  ref={primaryCommand}
                  data-upload-command="toggle"
                  type="button"
                  aria-label={
                    paused ? "Reprendre le transfert" : "Mettre en pause"
                  }
                  onClick={paused ? onResume : onPause}
                >
                  {paused ? (
                    <Play size={12} fill="currentColor" aria-hidden="true" />
                  ) : (
                    <Pause size={12} fill="currentColor" aria-hidden="true" />
                  )}
                </button>
                <button
                  data-upload-command="cancel"
                  type="button"
                  className="plain-tool"
                  aria-label="Annuler le transfert"
                  onClick={onCancel}
                >
                  <X size={13} aria-hidden="true" />
                </button>
              </>
            )}
            {done && (
              <button
                data-upload-command="remove"
                type="button"
                className="remove-file"
                aria-label="Retirer le fichier"
                onClick={onCancel}
              >
                <Trash2 size={13} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {running && (
            <motion.div
              key="progress"
              className="upload-track"
              role="progressbar"
              aria-label={`Transfert de ${name}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-valuetext={`${percent} %${paused ? ", en pause" : ""}`}
              initial={{ height: 5, opacity: 1 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration }}
            >
              <motion.div
                animate={{ width: `${percent}%` }}
                transition={{
                  duration: reducedMotion ? 0 : 0.12,
                  ease: "linear",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {error && (
          <p className="upload-error">
            Le transfert a été interrompu. Reprenez à {percent} %.
          </p>
        )}
      </div>
      <motion.div
        className="upload-actions"
        initial={false}
        inert={running}
        aria-hidden={running}
        animate={{ height: running ? 0 : "auto", opacity: running ? 0 : 1 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          {running ? null : done ? (
            <>
              <Button
                ref={primaryCommand}
                data-upload-command="start"
                onClick={onStart}
              >
                Recommencer
              </Button>
              <Button
                data-upload-command="download"
                variant="primary"
                onClick={onDownload}
              >
                <ArrowDown size={14} aria-hidden="true" />
                Télécharger
              </Button>
            </>
          ) : error ? (
            <>
              <Button data-upload-command="cancel" onClick={onCancel}>
                Annuler
              </Button>
              <Button
                ref={primaryCommand}
                data-upload-command="resume"
                variant="primary"
                onClick={onResume}
              >
                <RotateCcw size={13} aria-hidden="true" />
                Reprendre
              </Button>
            </>
          ) : (
            <Button
              ref={primaryCommand}
              data-upload-command="start"
              variant="primary"
              onClick={onStart}
            >
              <Play size={13} aria-hidden="true" />
              {state === "cancelled" ? "Recommencer" : "Lancer le transfert"}
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
