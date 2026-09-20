import test from 'node:test';
import assert from 'node:assert/strict';
import {validateInvite,requiredDocuments} from '../src/components/invitation-model.mjs';
test('invitation normalise avant dédoublonnage et rejette adresse malformée',()=>{
 assert.equal(validateInvite(' ALICE@EXAMPLE.COM ',['alice@example.com']).error,'Cette adresse est déjà ajoutée.');
 assert.ok(validateInvite('alice@',[]).error);
 assert.deepEqual(validateInvite(' Alice@example.com ',[]),{email:'alice@example.com',error:''});
});
test('pièces exigées strictement au-dessus du seuil',()=>{
 assert.deepEqual(requiredDocuments(75,75,true,true),[]);
 assert.deepEqual(requiredDocuments(76,75,true,true),['motif','reçu']);
 assert.deepEqual(requiredDocuments(120,75,false,true),['reçu']);
 assert.deepEqual(requiredDocuments(120,75,false,false),[]);
});
