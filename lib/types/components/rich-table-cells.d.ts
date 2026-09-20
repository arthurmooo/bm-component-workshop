import type { ReactNode } from "react";
import "./advanced-table.css";
import "./rich-table-cells.css";
export declare function EntityCell({ title, subtitle, initials, action }: {
    title: ReactNode;
    subtitle?: ReactNode;
    initials?: string;
    action?: ReactNode;
}): import("react").JSX.Element;
export declare function ProgressCell({ value, label, detail, ariaLabel, colorByRate }: {
    value: number;
    label?: ReactNode;
    detail?: ReactNode;
    ariaLabel?: string;
    colorByRate?: boolean;
}): import("react").JSX.Element;
export declare function SparklineCell({ values, label, color, value, unit, onInspect, onActiveChange }: {
    values: number[];
    label: string;
    color?: string;
    value?: ReactNode;
    unit?: string;
    onInspect?: () => void;
    onActiveChange?: (active: boolean) => void;
}): import("react").JSX.Element;
export declare function PersonCell({ name, children, photoUrl, photoPosition, photoSize }: {
    name: string;
    children?: ReactNode;
    photoUrl?: string;
    photoPosition?: string;
    photoSize?: string;
}): import("react").JSX.Element;
export declare function NextActionCell({ title, meta, tone }: {
    title: ReactNode;
    meta: ReactNode;
    tone?: 'neutral' | 'attention' | 'overdue';
}): import("react").JSX.Element;
