export function cellText(node: any): any;
/** @param {{column:number,direction:"asc"|"desc"|null}} sort */
export function queryTableRows(rows: any, query?: string, filters?: {}, sort?: {
    column: number;
    direction: "asc" | "desc" | null;
}, offset?: number): any;
