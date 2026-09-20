export function validIdentity(name, email) {
  return Boolean(name.trim()) && /^\S+@\S+\.\S+$/.test(email.trim());
}
export function validMission(amount, date) {
  const number = Number(amount);
  if (!Number.isFinite(number) || number <= 0 || !Number.isInteger(number)) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}
