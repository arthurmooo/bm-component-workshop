export function normalizeAmount(value){return value.replace(/[\s€]/g,'').replace(',','.').replace(/[^\d.\-]/g,'');}
export function formatAmount(value){const [integer,...fraction]=value.replace(',','.').split('.');return integer.replace(/\B(?=(\d{3})+(?!\d))/g,'\u202f')+(fraction.length?','+fraction.join('.'):'');}
export function dateKey(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function parseDate(value){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return null;const [y,m,d]=value.split('-').map(Number);const date=new Date(y,m-1,d,12);return dateKey(date)===value?date:null;}
export function calendarDays(year,month){const start=new Date(year,month,1,12);start.setDate(start.getDate()-(start.getDay()+6)%7);return Array.from({length:42},(_,i)=>new Date(start.getFullYear(),start.getMonth(),start.getDate()+i,12));}
