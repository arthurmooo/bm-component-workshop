/** Toggle one style only inside a selected character interval. */
export function toggleTextFormat(marks, start, end, bit) {
  if (start < 0 || end > marks.length || start >= end) return marks;
  const remove = marks.slice(start, end).every(mark => (mark & bit) !== 0);
  return marks.map((mark, i) => i < start || i >= end ? mark : remove ? mark & ~bit : mark | bit);
}
