import { type ReactNode } from 'react';
import './analytics.css';
export declare function PageLayout({ title, description, action, children }: {
    title: string;
    description?: string;
    action?: ReactNode;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function Grid({ children, columns, ratio }: {
    children: ReactNode;
    columns?: number;
    ratio?: "2:1" | "1:2" | "1:1";
}): import("react").JSX.Element;
export declare function Stack({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function SelectField({ label, value, options, onChange, labels }: {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
    labels?: Record<string, string>;
}): import("react").JSX.Element;
export declare function KeyValueList({ items }: {
    items: {
        label: string;
        value: ReactNode;
    }[];
}): import("react").JSX.Element;
export declare function Notice({ children, error }: {
    children: ReactNode;
    error?: boolean;
}): import("react").JSX.Element;
export declare function ChoiceCards({ items, onSelect }: {
    items: {
        id: string;
        title: string;
        description?: string;
    }[];
    onSelect: (id: string) => void;
}): import("react").JSX.Element;
export declare function Pagination({ page, totalPages, onChange, label }: {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
    label?: string;
}): import("react").JSX.Element;
export type ChartRow = {
    id: string;
    label: string;
    values: number[];
    detail?: string;
};
export declare function BarChart({ rows, series, unit, selected, onSelect }: {
    rows: ChartRow[];
    series: string[];
    unit?: string;
    selected?: string;
    onSelect?: (id: string) => void;
}): import("react").JSX.Element;
export declare function RangeChart({ rows, unit, onSelect, selected }: {
    rows: {
        id: string;
        label: string;
        low: number;
        median: number;
        high: number;
        detail?: string;
    }[];
    unit?: string;
    onSelect?: (id: string) => void;
    selected?: string;
}): import("react").JSX.Element;
export declare function EvidenceMatrix({ columns, rows }: {
    columns: string[];
    rows: {
        id: string;
        label: string;
        cells: {
            label: string;
            tone?: 'positive' | 'warning' | 'muted';
        }[];
    }[];
}): import("react").JSX.Element;
export type NetworkNode = {
    id: string;
    label: string;
    kind: string;
    description?: string;
    metric?: string;
};
export declare function NetworkExplorer({ nodes, links }: {
    nodes: NetworkNode[];
    links: {
        source: string;
        target: string;
        relation: string;
    }[];
}): import("react").JSX.Element;
export declare function Row({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
