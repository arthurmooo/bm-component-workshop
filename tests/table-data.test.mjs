import test from 'node:test';
import assert from 'node:assert/strict';
import {cellText,queryTableRows} from '../src/components/table-data.mjs';
test('custom cells expose meaningful values and skip decoration',()=>{
 assert.equal(cellText({props:{title:{props:{children:'Project Atlantic'}},subtitle:'Northline',initials:'At'}}),'Project Atlantic Northline');
 assert.equal(cellText({props:{label:'Verified',children:{props:{'aria-hidden':true,children:'icon'}}}}),'Verified');
 assert.equal(cellText({props:{name:'Morgan Lee'}}),'Morgan Lee');
});
test('column filters and sorting run on full dataset before pagination',()=>{
 const rows=Array.from({length:20},(_,i)=>({id:String(i),cells:[{props:{title:`Company ${i}`}},i,i>10?'Verified':'Review'],searchText:`Company ${i}`}));
 const found=queryTableRows(rows,'Company',{'3':'verified'},{column:2,direction:'desc'},1);
 assert.equal(found.length,9);assert.deepEqual(found.slice(0,3).map(r=>r.cells[1]),[19,18,17]);
 assert.equal(queryTableRows(rows,'',{'1':'company 19'},undefined,1)[0].id,'19');
 assert.equal(queryTableRows(rows,'',{},undefined,1).length,20);
});
test('accent insensitive filtering and multiple predicates',()=>{
 const rows=[{cells:['Élodie','Ready']},{cells:['Elodie','Signed']}];
 assert.equal(queryTableRows(rows,'',{'0':'elodie','1':'sign'}).length,1);
});
