import { type ReactNode } from 'react';
import './prompt.css';
export type PromptAttachment = {
    id: string;
    name: string;
    size: number;
};
export type PromptOption = {
    value: string;
    description: string;
};
export declare function PromptAttachmentChip({ file, remove, removeLabel, locale }: {
    file: PromptAttachment;
    remove: () => void;
    removeLabel?: string;
    locale?: string;
}): import("react").JSX.Element;
export declare function PromptMenu({ label, icon, children, disabled, open, setOpen }: {
    label: ReactNode;
    icon: ReactNode;
    children: ReactNode;
    disabled?: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
}): import("react").JSX.Element;
export declare function PromptBox({ value, onChange, onSubmit, busy, onStop, files, onFilesChange, mode, modes, onModeChange, sources, sourceOptions, onSourcesChange, label, placeholder, caption, labels }: {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    busy?: boolean;
    onStop?: () => void;
    files?: PromptAttachment[];
    onFilesChange?: (files: PromptAttachment[]) => void;
    mode?: string;
    modes?: PromptOption[];
    onModeChange?: (mode: string) => void;
    sources?: string[];
    sourceOptions?: PromptOption[];
    onSourcesChange?: (sources: string[]) => void;
    label?: string;
    placeholder?: string;
    caption?: string;
    labels?: {
        attach?: string;
        send?: string;
        stop?: string;
        mode?: string;
        sources?: string;
        remove?: string;
        fileError?: string;
    };
}): import("react").JSX.Element;
export declare function PromptActionTiles({ items, selected, onSelect, disabled }: {
    items: {
        id: string;
        title: string;
        description: string;
        icon?: ReactNode;
    }[];
    selected?: string;
    onSelect: (id: string) => void;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function PromptPanel({ title, description, children }: {
    title?: string;
    description?: string;
    children: ReactNode;
}): import("react").JSX.Element;
