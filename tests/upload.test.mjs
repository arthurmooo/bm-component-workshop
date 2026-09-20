import test from "node:test";
import assert from "node:assert/strict";
import {
  uploadReducer as reduce,
  initialUploadState,
  UPLOAD_CSV,
  UPLOAD_FILENAME,
} from "../src/components/use-upload-demo.ts";

const started = () => reduce(initialUploadState, { type: "start" });

test("pause and interruption freeze progress; resuming preserves transferred data", () => {
  let upload = reduce(started(), { type: "tick", amount: 38 });
  upload = reduce(upload, { type: "pause" });
  assert.equal(reduce(upload, { type: "tick", amount: 80 }), upload);
  upload = reduce(upload, { type: "resume" });
  assert.deepEqual(upload, { state: "uploading", progress: 38 });
  upload = reduce(upload, { type: "fail" });
  assert.deepEqual(upload, { state: "error", progress: 38 });
  assert.equal(reduce(upload, { type: "tick", amount: 80 }), upload);
  upload = reduce(upload, { type: "resume" });
  assert.deepEqual(upload, { state: "uploading", progress: 38 });
});

test("completion clamps progress; late ticks cannot restart a stopped transfer", () => {
  const complete = reduce(started(), { type: "tick", amount: 150 });
  assert.deepEqual(complete, { state: "complete", progress: 100 });
  for (const action of [
    { type: "tick", amount: 3 },
    { type: "resume" },
    { type: "fail" },
  ]) {
    assert.equal(reduce(complete, action), complete);
  }
  const cancelled = reduce(reduce(started(), { type: "tick", amount: 45 }), {
    type: "cancel",
  });
  assert.deepEqual(cancelled, { state: "cancelled", progress: 0 });
  assert.equal(reduce(cancelled, { type: "tick", amount: 100 }), cancelled);
  assert.equal(reduce(cancelled, { type: "resume" }), cancelled);
  assert.deepEqual(reduce(complete, { type: "start" }), started());
  assert.deepEqual(reduce(cancelled, { type: "start" }), started());
});

test("invalid timing never corrupts progress; reset returns the idle state", () => {
  const upload = started();
  for (const amount of [NaN, Infinity, -10, 0])
    assert.equal(reduce(upload, { type: "tick", amount }), upload);
  assert.deepEqual(
    reduce(reduce(upload, { type: "tick", amount: 40 }), { type: "reset" }),
    initialUploadState,
  );
});

test("download fixture is a concrete UTF-8 CSV with fictional companies", () => {
  assert.equal(UPLOAD_FILENAME.endsWith(".csv"), true);
  const rows = UPLOAD_CSV.replace(/^\uFEFF/, "").split("\r\n");
  assert.equal(rows.length, 241);
  assert.equal(
    rows[0],
    "Societe;Secteur;Chiffre_affaires_EUR;EBITDA_EUR;Statut",
  );
  assert.equal(
    rows.every((row) => row.split(";").length === 5),
    true,
  );
  assert.equal(
    rows.slice(1).every((row) => row.startsWith("Societe fictive ")),
    true,
  );
});
