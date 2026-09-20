import { type ReactNode } from "react";
import "./view-selector.css";
export type ViewSelectorItem = {
    id: string;
    name: string;
    icon: ReactNode;
};
export type ViewSelectorProps = {
    value: string;
    onChange: (value: string) => void;
    listLabel?: string;
    boardLabel?: string;
    items?: ViewSelectorItem[];
    label?: string;
};
export declare function ViewSelector({ value, onChange, listLabel, boardLabel, items, label, }: ViewSelectorProps): import("react").JSX.Element;
