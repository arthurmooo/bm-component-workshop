export function parseCsv(text) {
  const clean = text.replace(/^\uFEFF/, "");
  if (!clean.trim()) throw new Error("Le fichier est vide.");
  if (clean.length > 1_000_000)
    throw new Error("Le fichier dépasse la limite de 1 Mo.");
  const firstLine = clean.split(/\r?\n/, 1)[0];
  const delimiter =
    (firstLine.match(/;/g) ?? []).length > (firstLine.match(/,/g) ?? []).length
      ? ";"
      : ",";
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < clean.length; index++) {
    const char = clean[index];
    if (char === '"') {
      if (quoted && clean[index + 1] === '"') {
        value += '"';
        index++;
      } else if (!value || quoted) quoted = !quoted;
      else throw new Error("Guillemets invalides dans le CSV.");
    } else if (char === delimiter && !quoted) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && clean[index + 1] === "\n") index++;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
    } else value += char;
  }
  if (quoted) throw new Error("Un champ entre guillemets n’est pas fermé.");
  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  const headers = rows.shift();
  if (!headers || headers.length < 2 || headers.some((header) => !header))
    throw new Error("Ajoutez au moins deux colonnes avec un en-tête.");
  if (
    new Set(headers.map((header) => header.toLowerCase())).size !==
    headers.length
  )
    throw new Error("Les noms de colonnes doivent être uniques.");
  if (!rows.length)
    throw new Error("Le fichier contient des en-têtes mais aucune donnée.");
  if (rows.length > 5000)
    throw new Error("Limite de 5 000 lignes pour cet aperçu.");
  if (rows.some((row) => row.length !== headers.length))
    throw new Error("Chaque ligne doit contenir le même nombre de colonnes.");
  return { headers, rows };
}
export function mapImportRows(data, companyColumn, amountColumn) {
  if (companyColumn === amountColumn)
    throw new Error("Choisissez deux colonnes distinctes.");
  if (
    companyColumn < 0 ||
    amountColumn < 0 ||
    companyColumn >= data.headers.length ||
    amountColumn >= data.headers.length
  )
    throw new Error("Choisissez une colonne pour chaque champ.");
  return data.rows.map((row, index) => {
    const company = row[companyColumn]?.trim();
    const amountText = row[amountColumn]
      ?.replace(/[\s\u202f€]/g, "")
      .replace(",", ".");
    const amount = Number(amountText);
    if (!company) throw new Error(`Société manquante à la ligne ${index + 2}.`);
    if (!amountText || !Number.isFinite(amount) || amount < 0)
      throw new Error(`Montant invalide à la ligne ${index + 2}.`);
    return { company, amount };
  });
}
export const exampleCsv =
  "Societe,Montant,Responsable\nAtelier Nord,480000,Alice Martin\nMaison Astrée,1250000,Paul Laurent\nStudio Rivage,320000,Emma Dubois\n";
