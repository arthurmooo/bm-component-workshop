/**
 * @template {{id:string,stage:string}} T
 * @param {T[]} items
 * @param {string} id
 * @param {string} stage
 * @param {string|null} beforeId
 * @param {string[]} allowedStages
 */
export function moveDeal<T extends {
    id: string;
    stage: string;
}>(items: T[], id: string, stage: string, beforeId?: string | null, allowedStages?: string[]): T[];
