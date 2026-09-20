/** @typedef {'first'|'last'|'left'|'right'} ColumnDestination */
/** @typedef {'asc'|'desc'|null} SortDirection */
/** @param {readonly string[]} columns @param {string} id @param {ColumnDestination} destination */
export function moveColumn(columns: readonly string[], id: string, destination: ColumnDestination): readonly string[];
/** @template {Record<string, string|number>} T
 * @param {readonly T[]} rows @param {keyof T|null} key @param {SortDirection} direction
 */
export function sortRows<T extends Record<string, string | number>>(rows: readonly T[], key: keyof T | null, direction: SortDirection): readonly T[];
export type ColumnDestination = "first" | "last" | "left" | "right";
export type SortDirection = "asc" | "desc" | null;
