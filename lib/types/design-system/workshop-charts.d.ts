import { type ReactNode } from 'react';
import './charts.css';
import './workshop-charts.css';
export declare function ChartFrame({ title, meta, value, caption, children, legend }: {
    title: string;
    meta?: string;
    value?: ReactNode;
    caption?: string;
    children: ReactNode;
    legend?: ReactNode;
}): import("react").JSX.Element;
export declare function ComparisonChart({ title, rows, series, unit, summary, caption, selected, onSelect, compact, depth }: {
    depth?: boolean;
    compact?: boolean;
    title: string;
    rows: {
        id: string;
        label: string;
        values: number[];
    }[];
    series: string[];
    unit?: string;
    summary?: string;
    caption?: string;
    selected?: string;
    onSelect?: (id: string) => void;
}): import("react").JSX.Element;
export declare function DistributionChart({ title, rows, unit, caption, compact }: {
    compact?: boolean;
    title: string;
    rows: {
        label: string;
        value: number;
    }[];
    unit?: string;
    caption?: string;
}): import("react").JSX.Element;
export declare function TrendChart({ title, rows, unit, caption }: {
    title: string;
    rows: {
        label: string;
        value: number;
        detail?: string;
    }[];
    unit?: string;
    caption?: string;
}): import("react").JSX.Element;
