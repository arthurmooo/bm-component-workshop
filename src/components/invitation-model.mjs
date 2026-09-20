export function validateInvite(raw, existing) {
  const email = raw.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { email, error: 'Saisissez une adresse e-mail valide.' };
  if (existing.includes(email)) return { email, error: 'Cette adresse est déjà ajoutée.' };
  return { email, error: '' };
}
export function requiredDocuments(amount, threshold, memo, receipt) {
  if (amount <= threshold) return [];
  return [memo ? 'motif' : '', receipt ? 'reçu' : ''].filter(Boolean);
}
