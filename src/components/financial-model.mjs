export const candles = Array.from({length:20},(_,i)=>{
 const open=100+[0,2,1,4,7,5,8,9,6,4,7,10,8,12,14,11,13,15,12,16][i];
 const close=open+[2,-1,3,3,-2,3,1,-3,-2,3,3,-2,4,2,-3,2,2,-3,4,1][i];
 return {day:i+1,open,close,high:Math.max(open,close)+2,low:Math.min(open,close)-2,volume:100+(i*73)%400};
});
export function cumulativeOrders(rows){
 let total=0;return rows.map(row=>({...row,total:total+=row.size}));
}
export const asks=cumulativeOrders([101,102,103,104,105,106].map((price,i)=>({price,size:[120,180,140,220,160,180][i]})));
export const bids=cumulativeOrders([100,99,98,97,96,95].map((price,i)=>({price,size:[150,100,190,210,150,200][i]})));
