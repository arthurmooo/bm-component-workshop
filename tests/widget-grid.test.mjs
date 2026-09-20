import test from 'node:test';
import assert from 'node:assert/strict';
import { widgetDropOrder } from '../src/components/widget-grid-model.mjs';
test('widget drop previews positions without altering widths or the original order',()=>{
 const items=[{id:'a',span:1},{id:'b',span:1},{id:'c',span:2}];
 const targets=[{x:100,y:100},{x:300,y:100},{x:200,y:300}];
 assert.deepEqual(widgetDropOrder(items,'a',targets,300,100),[items[1],items[0],items[2]]);
 assert.deepEqual(widgetDropOrder(items,'a',targets,200,300),[items[1],items[2],items[0]]);
 assert.deepEqual(widgetDropOrder(items,'a',targets,100,100),items);
 assert.deepEqual(items.map(item=>item.id),['a','b','c']);
});
