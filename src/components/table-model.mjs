/** @typedef {'first'|'last'|'left'|'right'} ColumnDestination */
/** @typedef {'asc'|'desc'|null} SortDirection */

/** @param {readonly string[]} columns @param {string} id @param {ColumnDestination} destination */
export function moveColumn(columns, id, destination) {
  const index = columns.indexOf(id);
  if (index < 0 || !["first", "last", "left", "right"].includes(destination))
    return columns;
  const target =
    destination === "first"
      ? 0
      : destination === "last"
        ? columns.length - 1
        : index + (destination === "left" ? -1 : 1);
  if (target < 0 || target >= columns.length || target === index)
    return columns;
  const result = [...columns];
  result.splice(index, 1);
  result.splice(target, 0, id);
  return result;
}

/** @template {Record<string, string|number>} T
 * @param {readonly T[]} rows @param {keyof T|null} key @param {SortDirection} direction
 */
export function sortRows(rows, key, direction) {
  if (direction === null || key === null) return rows;
  return [...rows].sort((a, b) => {
    const x = a[key],
      y = b[key];
    const comparison =
      typeof x === "number" && typeof y === "number"
        ? x - y
        : String(x).localeCompare(String(y), "fr");
    return direction === "asc" ? comparison : -comparison;
  });
}
