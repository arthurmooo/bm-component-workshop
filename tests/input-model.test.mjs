import test from 'node:test';
import assert from 'node:assert/strict';
import {formatAmount,normalizeAmount,calendarDays,dateKey,parseDate} from '../src/components/input-model.mjs';
test('amounts group thousands without losing cents or empty input',()=>{
 assert.equal(formatAmount('1234567.80'),'1\u202f234\u202f567,80');
 assert.equal(normalizeAmount('1 234 567,80 €'),'1234567.80');
 assert.equal(formatAmount(''),'');assert.equal(formatAmount('1234.'),'1\u202f234,');
});
test('calendar aligns Mondays and validates leap days without UTC shifts',()=>{
 const days=calendarDays(2026,8);assert.equal(days.length,42);assert.equal(days[0].getDay(),1);assert.equal(dateKey(days[0]),'2026-08-31');
 assert.equal(parseDate('2026-02-29'),null);assert.equal(dateKey(parseDate('2028-02-29')),'2028-02-29');assert.equal(parseDate('2026-13-01'),null);
});
