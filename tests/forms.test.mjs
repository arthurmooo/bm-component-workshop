import test from 'node:test';
import assert from 'node:assert/strict';
import {validIdentity,validMission} from '../src/components/forms-model.mjs';
test('identity requires name and valid trimmed address',()=>{assert.ok(validIdentity('Atelier Nord',' contact@example.com '));assert.ok(!validIdentity(' ','contact@example.com'));assert.ok(!validIdentity('Atelier','not-email'))});
test('mission rejects nonfinite and fractional amounts',()=>{assert.ok(validMission('48000','2026-09-30'));for(const v of ['Infinity','NaN','1.5','0','-1',''])assert.ok(!validMission(v,'2026-09-30'))});
test('date must exist in calendar including leap years',()=>{assert.ok(!validMission('100','2026-02-29'));assert.ok(!validMission('100','2026-04-31'));assert.ok(validMission('100','2028-02-29'));assert.ok(!validMission('100',''))});
