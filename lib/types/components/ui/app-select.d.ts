import { type ReactNode } from "react";
import "./app-select.css";
export declare function AppSelect({ value, defaultValue, onValueChange, children, required, disabled, id, 'aria-label': label }: {
    value?: string | number;
    defaultValue?: string | number;
    onValueChange?: (value: string) => void;
    children: ReactNode;
    required?: boolean;
    disabled?: boolean;
    id?: string;
    'aria-label'?: string;
}): import("react").JSX.Element;
