export function widgetDropOrder(items, id, targets, x, y) {
  if (!targets.length || !items.some(item => item.id === id)) return items;
  const distance = p => Math.hypot(x - p.x, y - p.y);
  const target = targets.reduce((best, p, index) => distance(p) < distance(targets[best]) ? index : best, 0);
  const next = items.filter(item => item.id !== id);
  next.splice(target, 0, items.find(item => item.id === id));
  return next;
}
