import test from 'node:test';
import assert from 'node:assert/strict';
import { toggleTextFormat } from '../src/components/text-format-model.mjs';
test('formatting changes only the selected passage and preserves overlapping styles', () => {
  const original = [0,0,0,0,0];
  const bold = toggleTextFormat(original, 1, 4, 1);
  assert.deepEqual(bold, [0,1,1,1,0]);
  const italic = toggleTextFormat(bold, 2, 5, 2);
  assert.deepEqual(italic, [0,1,3,3,2]);
  assert.deepEqual(toggleTextFormat(italic, 1, 4, 1), [0,0,2,2,2]);
  assert.deepEqual(original, [0,0,0,0,0]);
});
test('a mixed selection becomes uniform; an empty selection changes nothing', () => {
  assert.deepEqual(toggleTextFormat([1,0,1], 0, 3, 1), [1,1,1]);
  assert.deepEqual(toggleTextFormat([0,2], 1, 1, 4), [0,2]);
});
