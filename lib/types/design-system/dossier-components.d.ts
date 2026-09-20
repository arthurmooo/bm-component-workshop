import { type ReactNode } from 'react';
import { type ActivityItem } from './workflow-components';
import './dossier-components.css';
import '../components/drawer-demo.css';
export type DrawerProperty = {
    label: string;
    value: ReactNode;
    icon?: ReactNode;
};
export type DrawerActivity = {
    id: string;
    title: string;
    detail?: ReactNode;
    time?: string;
    icon?: ReactNode;
    actor?: ReactNode;
    avatarSrc?: string;
    scope?: string;
    context?: string;
    source?: string;
    status?: string;
    tone?: ActivityItem['tone'];
    day?: string;
    schedule?: {
        label: string;
        start: string;
        end: string;
        owner?: string;
    };
};
export type DetailDrawerProps = {
    open: boolean;
    title: string;
    description?: string;
    onClose: () => void;
    children: ReactNode;
    footer?: ReactNode;
    closeLabel?: string;
    wide?: boolean;
    eyebrow?: string;
    reference?: string;
    properties?: DrawerProperty[];
    documents?: DocumentItem[];
    activity?: DrawerActivity[];
    activityLabel?: string;
    summaryTitle?: string;
    summary?: ReactNode;
    nextStep?: {
        label?: string;
        title: string;
        detail?: ReactNode;
        action?: ReactNode;
    };
    locale?: 'fr' | 'en';
};
export declare function DetailDrawer({ open, title, description, onClose, children, footer, closeLabel, wide, eyebrow, reference, properties, documents, activity, activityLabel, summaryTitle, summary, nextStep, locale }: DetailDrawerProps): import("react").JSX.Element;
export type DocumentItem = {
    id: string;
    name: string;
    meta?: string;
    status?: ReactNode;
    content: ReactNode;
};
export declare function DocumentList({ documents }: {
    documents: DocumentItem[];
}): import("react").JSX.Element;
export type ExecutionStep = {
    id: string;
    label: string;
    detail?: string;
    state: 'pending' | 'running' | 'done' | 'paused' | 'failed';
};
export declare function ExecutionJournal({ steps, title, progressive, children, locale }: {
    steps: ExecutionStep[];
    title?: string;
    progressive?: boolean;
    children?: ReactNode;
    locale?: 'fr' | 'en';
}): import("react").JSX.Element;
export declare function PromptComposer({ value, onChange, onSubmit, disabled, label, submitLabel }: {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    disabled?: boolean;
    label?: string;
    submitLabel?: string;
}): import("react").JSX.Element;
export declare function TextEditor({ value, onChange, label, readOnly }: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    readOnly?: boolean;
}): import("react").JSX.Element;
