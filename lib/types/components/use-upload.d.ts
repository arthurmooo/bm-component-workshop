export type UploadState = 'idle' | 'uploading' | 'paused' | 'complete' | 'error' | 'cancelled';
export interface UploadSnapshot {
    state: UploadState;
    progress: number;
}
export type UploadAction = {
    type: 'start' | 'pause' | 'resume' | 'cancel' | 'fail' | 'reset';
} | {
    type: 'tick';
    amount: number;
};
export declare const initialUploadState: UploadSnapshot;
export declare function uploadReducer(snapshot: UploadSnapshot, action: UploadAction): UploadSnapshot;
export declare function useUpload({ durationMs }?: {
    durationMs?: number;
}): {
    state: UploadState;
    progress: number;
    onStart: () => void;
    onPause: () => void;
    onResume: () => void;
    onCancel: () => void;
    onError: () => void;
    reset: () => void;
};
