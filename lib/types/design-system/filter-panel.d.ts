import { type ReactNode } from 'react';
import './panels.css';
export declare function Overlay({ title, children, onClose, drawer, closeLabel }: {
    title: string;
    children: ReactNode;
    onClose: () => void;
    drawer?: boolean;
    closeLabel?: string;
}): import("react").JSX.Element;
export declare function FilterPanel({ title, fields, values, onApply, defaults, applyLabel, resetLabel }: {
    title?: string;
    fields: {
        key: string;
        label: string;
        options: string[];
    }[];
    values: Record<string, string>;
    defaults: Record<string, string>;
    onApply: (values: Record<string, string>) => void;
    applyLabel?: string;
    resetLabel?: string;
}): import("react").JSX.Element;
