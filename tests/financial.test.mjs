import test from "node:test";
import assert from "node:assert/strict";
import {candles,asks,bids,cumulativeOrders} from "../src/components/financial-model.mjs";
test("les mèches encadrent toujours ouverture et clôture",()=>{for(const c of candles){assert.ok(c.low<=Math.min(c.open,c.close));assert.ok(c.high>=Math.max(c.open,c.close));assert.ok(c.volume>0)}});
test("le cumul du carnet est la somme exacte des quantités au meilleur prix",()=>{for(const rows of [asks,bids]){let sum=0;for(const row of rows){sum+=row.size;assert.equal(row.total,sum)}assert.equal(sum,1000)}assert.ok(asks[0].price>bids[0].price)});
test("le calcul du cumul ne modifie pas les ordres d’entrée",()=>{const rows=[{price:3,size:4},{price:4,size:7}];assert.deepEqual(cumulativeOrders(rows),[{price:3,size:4,total:4},{price:4,size:7,total:11}]);assert.equal(rows[0].total,undefined)});
