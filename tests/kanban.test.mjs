import test from "node:test";
import assert from "node:assert/strict";
import { moveDeal } from "../src/components/kanban-model.mjs";
const items = [
  { id: "a", stage: "Qualification" },
  { id: "b", stage: "Proposition" },
  { id: "c", stage: "Proposition" },
];
test("déplacement conserve chaque dossier et insère avant la destination", () => {
  const next = moveDeal(items, "a", "Proposition", "c");
  assert.deepEqual(
    next.map((i) => i.id),
    ["b", "a", "c"],
  );
  assert.equal(next[1].stage, "Proposition");
  assert.equal(items[0].stage, "Qualification");
});
test("déplacement vers une colonne vide et cible invalide", () => {
  assert.equal(moveDeal(items, "a", "Négociation").at(-1).stage, "Négociation");
  assert.equal(moveDeal(items, "a", "inconnue"), items);
  assert.equal(moveDeal(items, "a", "Qualification", "a"), items);
});

test('documents : aperçu ordonné, dépôt et déplacement vers un état vide',()=>{
 const docs=[{id:'a',stage:'Brouillon'},{id:'b',stage:'À signer'},{id:'c',stage:'À signer'}];
 const states=['Brouillon','À signer','Signé'];
 const preview=moveDeal(docs,'a','À signer','c',states);
 assert.deepEqual(preview.map(d=>d.id),['b','a','c']);
 assert.equal(docs[0].stage,'Brouillon');
 assert.equal(moveDeal(preview,'a','Signé',null,states).at(-1).stage,'Signé');
 assert.equal(moveDeal(docs,'a','Qualification',null,states),docs);
});
