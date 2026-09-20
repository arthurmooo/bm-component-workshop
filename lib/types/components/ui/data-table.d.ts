import { type HTMLAttributes } from 'react';
import './data-table.css';
export type TableSort = {
    column: number;
    direction: 'asc' | 'desc' | null;
};
export declare function DataRow({ children, ...props }: HTMLAttributes<HTMLTableRowElement>): import("react").JSX.Element;
export declare function DataTable({ children, sort: controlledSort, onSortChange, filters: controlledFilters, onFiltersChange, sortable, locale, ...props }: HTMLAttributes<HTMLTableElement> & {
    sort?: TableSort;
    onSortChange?: (sort: TableSort) => void;
    filters?: Record<string, string>;
    onFiltersChange?: (filters: Record<string, string>) => void;
    sortable?: boolean;
    locale?: "fr" | "en";
}): import("react").JSX.Element;
