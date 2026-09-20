export function evaluateRule(condition, fixture) {
 if(condition.field==='amount')return condition.operator==='gt'?fixture.amount>Number(condition.value):fixture.amount<=Number(condition.value);
 const values=condition.value.split(',').map(v=>v.trim()).filter(Boolean);
 const match=values.includes(fixture.category);
 return condition.operator==='in'?match:!match;
}
export function evaluateGroups(groups, join, fixture){
 if(!groups.length)return false;
 const results=groups.map(group=>group.rules.length>0&&(group.join==='AND'?group.rules.every(r=>evaluateRule(r,fixture)):group.rules.some(r=>evaluateRule(r,fixture))));
 return join==='AND'?results.every(Boolean):results.some(Boolean);
}
