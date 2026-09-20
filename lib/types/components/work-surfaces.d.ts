import { type ReactNode } from 'react';
import './work-cards-demo.css';
export type InboxWorkItem = {
    id: string;
    title: string;
    description: string;
    author: string;
    initials: string;
    meta: string;
    priority?: string;
    context?: string;
    reason?: string;
    photoUrl?: string;
    photoPosition?: string;
};
export type WorkInboxProps = {
    title?: string;
    items: InboxWorkItem[];
    onOpen: (id: string) => void;
    onDone: (id: string) => void;
    wide?: boolean;
    locale?: "fr" | "en";
};
export declare function WorkInbox({ title, items, onOpen, onDone, wide, locale }: WorkInboxProps): import("react").JSX.Element;
export type AlertLevel = 'neutre' | 'attention' | 'critique' | 'aucun';
export declare function AlertSurface({ level, title, value, action, detail, layout }: {
    level: AlertLevel;
    title: string;
    value: ReactNode;
    action: ReactNode;
    detail: string;
    layout?: 'card' | 'banner';
}): import("react").JSX.Element;
