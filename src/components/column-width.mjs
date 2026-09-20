export const MIN_COLUMN_WIDTH = 120;
export const MAX_COLUMN_WIDTH = 520;
export function clampColumnWidth(width) {
  return Math.round(
    Math.max(MIN_COLUMN_WIDTH, Math.min(MAX_COLUMN_WIDTH, width)),
  );
}
export function resizeColumnByKey(width, key, shift = false) {
  if (key === "Home") return MIN_COLUMN_WIDTH;
  if (key === "End") return MAX_COLUMN_WIDTH;
  if (key !== "ArrowLeft" && key !== "ArrowRight") return null;
  return clampColumnWidth(
    width + (key === "ArrowLeft" ? -1 : 1) * (shift ? 40 : 10),
  );
}
