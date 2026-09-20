/**
 * @template {{id:string,stage:string}} T
 * @param {T[]} items
 * @param {string} id
 * @param {string} stage
 * @param {string|null} beforeId
 * @param {string[]} allowedStages
 */
export function moveDeal(items, id, stage, beforeId = null, allowedStages = ["Qualification", "Proposition", "Négociation"]) {
  const item = items.find((entry) => entry.id === id);
  if (
    !item ||
    beforeId === id ||
    !allowedStages.includes(stage)
  )
    return items;
  const next = items.filter((entry) => entry.id !== id);
  const before = next.findIndex(
    (entry) => entry.id === beforeId && entry.stage === stage,
  );
  const moved = { ...item, stage };
  if (before >= 0) next.splice(before, 0, moved);
  else next.push(moved);
  return next;
}
