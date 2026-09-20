import test from 'node:test';
import assert from 'node:assert/strict';
import {initialRun,transition as t} from '../src/dossier-demo/model.mjs';
test('preparation, pause, completion and revalidation preserve the draft',()=>{
 let run=t(initialRun(),{type:'start'});run=t(run,{type:'tick'});assert.equal(run.completed,1);
 run=t(run,{type:'pause'});assert.deepEqual(t(run,{type:'tick'}),run);
 run=t(run,{type:'resume'});run=t(run,{type:'tick'});run=t(run,{type:'tick',result:'Synthèse'});assert.equal(run.phase,'done');assert.equal(run.text,'Synthèse');
 assert.deepEqual(t(run,{type:'tick',result:'overwrite'}),run);
 run=t(run,{type:'save'});assert.equal(run.saved,true);run=t(run,{type:'edit',value:'Corrigée'});assert.equal(run.saved,false);assert.equal(run.text,'Corrigée');
 run=t(run,{type:'save'});assert.equal(run.saved,true);
});
test('empty input cannot launch or validate; cancellation ignores stale tick',()=>{
 const empty=t(initialRun(),{type:'prompt',value:'  '});assert.equal(t(empty,{type:'start'}).phase,'idle');
 const reset=t(t(initialRun(),{type:'start'}),{type:'reset'});assert.deepEqual(t(reset,{type:'tick'}),reset);
 let run=t(initialRun(),{type:'start'});for(let i=0;i<3;i++)run=t(run,{type:'tick'});assert.equal(t(run,{type:'save'}).saved,false);
});
