import test from "node:test";
import assert from "node:assert/strict";
import {
  clampColumnWidth,
  resizeColumnByKey,
} from "../src/components/column-width.mjs";
test("column width keeps a usable minimum and bounded maximum", () => {
  assert.equal(clampColumnWidth(-100), 120);
  assert.equal(clampColumnWidth(900), 520);
  assert.equal(clampColumnWidth(234.6), 235);
});
test("keyboard resize supports fine, coarse, endpoints and unrelated keys", () => {
  assert.equal(resizeColumnByKey(180, "ArrowLeft"), 170);
  assert.equal(resizeColumnByKey(180, "ArrowRight", true), 220);
  assert.equal(resizeColumnByKey(125, "ArrowLeft", true), 120);
  assert.equal(resizeColumnByKey(180, "Home"), 120);
  assert.equal(resizeColumnByKey(180, "End"), 520);
  assert.equal(resizeColumnByKey(180, "Enter"), null);
});
