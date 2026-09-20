import "./charts-demo.css";
export type PipelineStage = {
    label: string;
    value: number;
    color?: string;
};
export type PipelineChartProps = {
    title?: string;
    meta?: string;
    stages: PipelineStage[];
    summaryLabel?: string;
    caption?: string;
    fixture?: string;
    emptyLabel?: string;
    locale?: "fr" | "en";
    compact?: boolean;
    expanded?: boolean;
    showSummary?: boolean;
    showInspector?: boolean;
};
export declare function PipelineChart({ title, meta, stages, locale, compact, expanded, showSummary, showInspector, summaryLabel, caption, fixture, emptyLabel, }: PipelineChartProps): import("react").JSX.Element;
