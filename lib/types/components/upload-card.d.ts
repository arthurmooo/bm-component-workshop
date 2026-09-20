import type { UploadState } from "./use-upload";
import "./upload-card.css";
export type { UploadState } from "./use-upload";
export interface UploadCardProps {
    name: string;
    progress: number;
    state: UploadState;
    bytes: number;
    onStart: () => void;
    onPause: () => void;
    onResume: () => void;
    onCancel: () => void;
    onDownload: () => void;
    fileType?: string;
}
export declare function UploadCard({ name, progress, state, bytes, onStart, onPause, onResume, onCancel, onDownload, fileType, }: UploadCardProps): import("react").JSX.Element;
