import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

test("le survol de dépôt ne colore que la zone des cartes", () => {
  const css = readFileSync(new URL("../src/components/kanban-demo.css", import.meta.url), "utf8");
  assert.match(css, /\.kb-column\.is-over \.kb-cards\s*\{/);
  assert.doesNotMatch(css, /\.kb-column\.is-over\s*\{[^}]*background/);
});

test("le glisser de carte ne déclenche pas la sélection native du texte", () => {
  const component = readFileSync(new URL("../src/components/kanban.tsx", import.meta.url), "utf8");
  assert.match(component, /function startPointer[\s\S]*?e\.preventDefault\(\);[\s\S]*?setPointerCapture/);
});

test("un document ouvre le drawer partagé sans confondre clic et dépôt", () => {
  const component = readFileSync(new URL("../src/components/kanban.tsx", import.meta.url), "utf8");
  assert.match(component, /<KanbanBoard documents onOpen=\{setSelected\}\/>/);
  assert.match(component, /<DetailDrawer[\s\S]*?breadcrumbLabel="Documents"[\s\S]*?properties=\{/);
  assert.match(component, /suppressOpen\.current=true[\s\S]*?finishDrop\(\)/);
});
