export function moveSpan(start, duration, delta, limit) {
  const boundedDuration = Math.max(1, Math.min(limit, duration));
  return { start: Math.max(0, Math.min(limit - boundedDuration, Math.round(start + delta))), duration: boundedDuration };
}
export function resizeSpan(start, duration, delta, limit) {
  return { start, duration: Math.max(1, Math.min(limit - start, Math.round(duration + delta))) };
}

export function resizeStartSpan(start, duration, delta, limit) {
  const end = Math.min(limit, start + duration);
  const nextStart = Math.max(0, Math.min(end - 1, Math.round(start + delta)));
  return { start: nextStart, duration: end - nextStart };
}

export function sortPlanningRows(items, order) {
  if (order === 'manual') return [...items];
  return [...items].sort((a, b) => {
    if (order === 'start') return a.start - b.start;
    if (order === 'duration') return b.duration - a.duration;
    return String(a[order]).localeCompare(String(b[order]), 'fr');
  });
}
export function reorderPlanningRows(items, id, targetIndex) {
  const from = items.findIndex(item => item.id === id);
  if (from < 0) return items;
  const result = [...items];
  const [item] = result.splice(from, 1);
  result.splice(Math.max(0, Math.min(result.length, targetIndex)), 0, item);
  return result;
}

// Connected overlap groups share columns; touching endpoints are not overlaps.
export function calendarLayout(items) {
  /** @type {Record<string, {column:number, columns:number}>} */
  const layout = {};
  for (const day of new Set(items.map(item => item.day))) {
    const sorted = items.filter(item => item.day === day).sort((a,b) => a.start-b.start || b.duration-a.duration || a.id.localeCompare(b.id));
    let group = [], groupEnd = -Infinity;
    const flush = () => {
      const ends = [];
      for (const item of group) {
        let column = ends.findIndex(end => end <= item.start);
        if (column < 0) column = ends.length;
        ends[column] = item.start + item.duration;
        layout[item.id] = { column, columns: 1 };
      }
      for (const item of group) layout[item.id].columns = ends.length;
    };
    for (const item of sorted) {
      if (item.start >= groupEnd) { flush(); group = []; groupEnd = -Infinity; }
      group.push(item); groupEnd = Math.max(groupEnd, item.start + item.duration);
    }
    flush();
  }
  return layout;
}
