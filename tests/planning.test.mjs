import test from 'node:test';
import assert from 'node:assert/strict';
import { moveSpan, resizeSpan, resizeStartSpan, sortPlanningRows, reorderPlanningRows, calendarLayout } from '../src/components/planning-model.mjs';
test('moving keeps duration and respects both boundaries',()=>{assert.deepEqual(moveSpan(3,4,-20,16),{start:0,duration:4});assert.deepEqual(moveSpan(3,4,20,16),{start:12,duration:4});assert.deepEqual(moveSpan(3,4,2,16),{start:5,duration:4})});
test('resize has a one-slot minimum and never crosses day end',()=>{assert.deepEqual(resizeSpan(3,4,-20,16),{start:3,duration:1});assert.deepEqual(resizeSpan(3,4,20,16),{start:3,duration:13})});
test('pointer movement snaps to the nearest slot',()=>{assert.deepEqual(moveSpan(3,4,.6,16),{start:4,duration:4});assert.deepEqual(resizeSpan(3,4,.4,16),{start:3,duration:4})});

test('resizing the start preserves the end and respects minimum duration and start boundary',()=>{
 assert.deepEqual(resizeStartSpan(3,4,-2,20),{start:1,duration:6});
 assert.deepEqual(resizeStartSpan(3,4,2,20),{start:5,duration:2});
 assert.deepEqual(resizeStartSpan(3,4,-20,20),{start:0,duration:7});
 assert.deepEqual(resizeStartSpan(3,4,20,20),{start:6,duration:1});
 assert.deepEqual(resizeStartSpan(3,4,.6,20),{start:4,duration:3});
});

test('planning sort leaves source intact and manual reorder preserves dates',()=>{
 const rows=[{id:'a',title:'Zulu',owner:'Paul',start:4,duration:2},{id:'b',title:'Alpha',owner:'Alice',start:1,duration:4},{id:'c',title:'Beta',owner:'Emma',start:3,duration:1}];
 for(const mode of ['title','owner','start'])assert.deepEqual(sortPlanningRows(rows,mode).map(x=>x.id),['b','c','a']);
 assert.deepEqual(sortPlanningRows(rows,'duration').map(x=>x.id),['b','a','c']);
 assert.deepEqual(reorderPlanningRows(rows,'a',2),[rows[1],rows[2],rows[0]]);
 assert.deepEqual(reorderPlanningRows(rows,'c',-1),[rows[2],rows[0],rows[1]]);
 assert.deepEqual(rows.map(x=>x.id),['a','b','c']);
});

test('calendar overlaps share columns, reuse free lanes, and separate days and touching events',()=>{
 const a={id:'a',day:0,start:0,duration:4},b={id:'b',day:0,start:1,duration:2},c={id:'c',day:0,start:3,duration:3};
 const layout=calendarLayout([c,b,a,{id:'d',day:0,start:6,duration:2},{id:'e',day:1,start:1,duration:4}]);
 assert.deepEqual(layout.a,{column:0,columns:2});
 assert.deepEqual(layout.b,{column:1,columns:2});
 assert.deepEqual(layout.c,{column:1,columns:2});
 assert.deepEqual(layout.d,{column:0,columns:1});
 assert.deepEqual(layout.e,{column:0,columns:1});
 assert.equal(calendarLayout([a,b,{...c,start:2}]).a.columns,3);
 assert.equal(calendarLayout([a,{...b,day:1}]).a.columns,1);
});
