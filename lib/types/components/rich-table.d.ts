import { type ReactNode } from "react";
import "./advanced-table.css";
export type RichTableRow = {
    id: string;
    cells: ReactNode[];
    searchText: string;
    group?: string;
};
export type RichTableProps = {
    title: string;
    columns: string[];
    rows: RichTableRow[];
    searchLabel?: string;
    groupLabel?: string;
    empty?: string;
    pageSize?: number;
    onOpen?: (id: string) => void;
    openOnClick?: boolean;
    action?: ReactNode;
    footerLabel?: ReactNode;
    locale?: "fr" | "en";
};
export declare function RichTable({ title, columns, rows, searchLabel, groupLabel, empty, pageSize, onOpen, openOnClick, action, footerLabel, locale, }: RichTableProps): import("react").JSX.Element;
