export function moveSpan(start: any, duration: any, delta: any, limit: any): {
    start: number;
    duration: number;
};
export function resizeSpan(start: any, duration: any, delta: any, limit: any): {
    start: any;
    duration: number;
};
export function resizeStartSpan(start: any, duration: any, delta: any, limit: any): {
    start: number;
    duration: number;
};
export function sortPlanningRows(items: any, order: any): any[];
export function reorderPlanningRows(items: any, id: any, targetIndex: any): any;
export function calendarLayout(items: any): Record<string, {
    column: number;
    columns: number;
}>;
