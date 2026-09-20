import test from 'node:test';
import assert from 'node:assert/strict';
import { nearestRangeEndpoint } from '../src/components/range-model.mjs';
test('track clicks move the closest endpoint and snap to 50 k€', () => {
 assert.deepEqual(nearestRangeEndpoint(0,1500,.21), {endpoint:'min',value:300});
 assert.deepEqual(nearestRangeEndpoint(300,1500,.79), {endpoint:'max',value:1200});
 assert.deepEqual(nearestRangeEndpoint(300,1200,.5), {endpoint:'min',value:750});
});
test('overlapping handles can separate in both directions and values stay in bounds', () => {
 assert.deepEqual(nearestRangeEndpoint(750,750,.2), {endpoint:'min',value:300});
 assert.deepEqual(nearestRangeEndpoint(750,750,.8), {endpoint:'max',value:1200});
 assert.deepEqual(nearestRangeEndpoint(300,1200,-1), {endpoint:'min',value:0});
 assert.deepEqual(nearestRangeEndpoint(300,1200,2), {endpoint:'max',value:1500});
});
