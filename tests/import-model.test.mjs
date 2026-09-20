import test from "node:test";
import assert from "node:assert/strict";
import {
  parseCsv,
  mapImportRows,
  exampleCsv,
} from "../src/components/import-model.mjs";
test("CSV parser preserves quoted delimiters, quotes and multiline cells", () => {
  const data = parseCsv(
    'Societe,Montant,Note\r\n"Atelier, Nord",120,"Un ""test""\nmultiligne"\r\n',
  );
  assert.deepEqual(data.rows, [
    ["Atelier, Nord", "120", 'Un "test"\nmultiligne'],
  ]);
});
test("CSV accepts BOM and French separator and maps numeric amounts", () => {
  const data = parseCsv("\uFEFFSociété;Prix\nAlto;1 250,50");
  assert.deepEqual(mapImportRows(data, 0, 1), [
    { company: "Alto", amount: 1250.5 },
  ]);
  assert.equal(mapImportRows(parseCsv(exampleCsv), 0, 1).length, 3);
});
test("CSV rejects malformed structure and invalid mapped financial values", () => {
  for (const text of ["", "A,A\n1,2", "A,B\n1", 'A,B\n"open,2'])
    assert.throws(() => parseCsv(text));
  assert.throws(
    () => mapImportRows(parseCsv("A,B\nAlto,no"), 0, 1),
    /Montant invalide/,
  );
  assert.throws(
    () => mapImportRows(parseCsv("A,B\nAlto,2"), 0, 0),
    /distinctes/,
  );
  assert.throws(
    () => mapImportRows(parseCsv("A,B\n,2"), 0, 1),
    /Société manquante/,
  );
});
