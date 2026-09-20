export function nearestRangeEndpoint(min, max, fraction) {
  const raw = Math.max(0, Math.min(1, fraction)) * 1500;
  const endpoint = min === max ? (raw < min ? 'min' : 'max') : (Math.abs(raw - min) <= Math.abs(raw - max) ? 'min' : 'max');
  const snapped = Math.round(raw / 50) * 50;
  return { endpoint, value: endpoint === 'min' ? Math.min(snapped, max) : Math.max(snapped, min) };
}
