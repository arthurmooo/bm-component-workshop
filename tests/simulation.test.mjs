import test from 'node:test';
import assert from 'node:assert/strict';
import { projectSavings } from '../src/components/simulation-model.mjs';
test('zero return equals all end-of-month contributions',()=>{assert.equal(projectSavings(250,10,0).total,30000)});
test('zero contribution stays zero',()=>{assert.equal(projectSavings(0,20,7).total,0)});
test('effective annual return uses monthly compounding and end-month deposits',()=>{const r=1.05**(1/12)-1;const expected=250*((1+r)**120-1)/r;assert.ok(Math.abs(projectSavings(250,10,5).total-expected)<1e-6)});
test('negative returns remain below contributions and invalid ranges fail',()=>{assert.ok(projectSavings(250,10,-5).total<30000);assert.throws(()=>projectSavings(-1,10,5),RangeError);assert.throws(()=>projectSavings(250,0,5),RangeError);assert.throws(()=>projectSavings(250,10,NaN),RangeError)});
