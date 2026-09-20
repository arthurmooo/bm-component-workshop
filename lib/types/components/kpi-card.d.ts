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
export declare function KpiCard({ label, value, delta, deltaLabel, total, detail, progress, tone, icon, loading, progressLabel, showProgress, }: KpiCardProps): import("react").JSX.Element;
