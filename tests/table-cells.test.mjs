import test from 'node:test';
import assert from 'node:assert/strict';
import { projectCells,compareTableValues } from '../src/components/table-cells.mjs';
test('totals follow reordered and hidden columns without duplicating merged content',()=>{
 assert.deepEqual(projectCells([4,1,1,2],[4,0,1,2,3,5,6,7]),[{owner:1,span:1,show:true},{owner:0,span:4,show:true},{owner:2,span:1,show:true},{owner:3,span:2,show:true}]);
 assert.deepEqual(projectCells([2,1],[0,2,1]),[{owner:0,span:1,show:true},{owner:1,span:1,show:true},{owner:0,span:1,show:false}]);
 assert.deepEqual(projectCells([8],[1,4,6]),[{owner:0,span:3,show:true}]);
});
test('sorting respects numeric amounts, French labels and original order',()=>{
 assert.ok(compareTableValues(900,1250,'asc')<0);
 assert.ok(compareTableValues('Équipe 2','Équipe 10','asc')<0);
 assert.equal(compareTableValues(2,3,null),0);
});
