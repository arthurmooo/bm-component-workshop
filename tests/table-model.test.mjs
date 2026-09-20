import test from "node:test";
import assert from "node:assert/strict";
import { moveColumn, sortRows } from "../src/components/table-model.mjs";

const columns = Object.freeze(["company", "owner", "amount", "stage"]);
const rows = Object.freeze([
  Object.freeze({ id: "a", company: "Érable", amount: 90 }),
  Object.freeze({ id: "b", company: "Alpha", amount: 1200 }),
  Object.freeze({ id: "c", company: "Zénith", amount: 8 }),
  Object.freeze({ id: "d", company: "Érable", amount: 90 }),
]);
const ids = (result) => result.map((row) => row.id);

test("numeric ascending/descending use values and preserve stable ties", () => {
  assert.deepEqual(ids(sortRows(rows, "amount", "asc")), ["c", "a", "d", "b"]);
  assert.deepEqual(ids(sortRows(rows, "amount", "desc")), ["b", "a", "d", "c"]);
  assert.deepEqual(ids(rows), ["a", "b", "c", "d"]);
});
test("French text sort handles accented names and reverses direction", () => {
  assert.deepEqual(ids(sortRows(rows, "company", "asc")), ["b", "a", "d", "c"]);
  assert.deepEqual(ids(sortRows(rows, "company", "desc")), [
    "c",
    "a",
    "d",
    "b",
  ]);
});
test("no sorting returns original ordering after a prior derived sort", () => {
  sortRows(rows, "company", "asc");
  assert.deepEqual(ids(sortRows(rows, "company", null)), ["a", "b", "c", "d"]);
  assert.equal(sortRows(rows, null, null), rows);
});
test("moves an entire column while retaining the source order", () => {
  assert.deepEqual(moveColumn(columns, "owner", "right"), [
    "company",
    "amount",
    "owner",
    "stage",
  ]);
  assert.deepEqual(moveColumn(columns, "amount", "left"), [
    "company",
    "amount",
    "owner",
    "stage",
  ]);
  assert.deepEqual(moveColumn(columns, "owner", "last"), [
    "company",
    "amount",
    "stage",
    "owner",
  ]);
  assert.deepEqual(moveColumn(columns, "amount", "first"), [
    "amount",
    "company",
    "owner",
    "stage",
  ]);
  assert.deepEqual(columns, ["company", "owner", "amount", "stage"]);
});
test("boundaries, unknown columns and destinations cannot move the wrong column", () => {
  for (const [id, destination] of [
    ["company", "left"],
    ["company", "first"],
    ["stage", "right"],
    ["stage", "last"],
    ["unknown", "left"],
    ["owner", "typo"],
  ]) {
    assert.equal(moveColumn(columns, id, destination), columns);
  }
  assert.deepEqual(moveColumn([], "company", "right"), []);
  assert.deepEqual(moveColumn(["company"], "company", "right"), ["company"]);
});
