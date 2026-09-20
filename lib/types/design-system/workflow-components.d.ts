import { type ReactNode } from 'react';
import './workflow-components.css';
import '../components/forms-demo.css';
/** Controlled navigation: callers own routing and retain page state. */
export declare function SectionNav({ items, value, onChange, label }: {
    items: {
        id: string;
        label: string;
        count?: number;
    }[];
    value: string;
    onChange: (id: string) => void;
    label?: string;
}): import("react").JSX.Element;
export declare function WorkCard({ title, description, meta, status, action, children }: {
    title: string;
    description?: string;
    meta?: string;
    status?: string;
    action?: ReactNode;
    children?: ReactNode;
}): import("react").JSX.Element;
export type ActivityItem = {
    id: string;
    title: string;
    detail?: ReactNode;
    date: string;
    actor?: ReactNode;
    avatarSrc?: string;
    context?: string;
    source?: string;
    status?: string;
    tone?: 'neutral' | 'attention' | 'danger' | 'success';
    action?: ReactNode;
};
export declare function ActivityTimeline({ items }: {
    items: ActivityItem[];
}): import("react").JSX.Element;
export type ReadinessStep = {
    label: string;
    status: string;
    detail?: string;
    tone?: 'success' | 'danger' | 'review' | 'neutral';
};
export declare function ReadinessFlow({ steps, label }: {
    steps: ReadinessStep[];
    label?: string;
}): import("react").JSX.Element;
export type JourneyStep = {
    label: string;
    state: 'done' | 'current' | 'blocked' | 'upcoming';
    detail?: string;
};
export declare function BuyerJourney({ steps, title, description }: {
    steps: JourneyStep[];
    title?: string;
    description?: string;
}): import("react").JSX.Element;
export type ChecklistItem = {
    id: string;
    label: string;
    status: string;
    state: 'done' | 'pending' | 'open';
    detail?: string;
};
export declare function ReadinessChecklist({ items, title }: {
    items: ChecklistItem[];
    title?: string;
}): import("react").JSX.Element;
export type AccessBoundaryItem = {
    id: string;
    label: string;
    detail?: string;
    status?: string;
};
export declare function AccessBoundary({ included, restricted, title, description, status }: {
    included: AccessBoundaryItem[];
    restricted: AccessBoundaryItem[];
    title?: string;
    description?: string;
    status?: string;
}): import("react").JSX.Element;
export type MissionStep = {
    id: string;
    label: string;
    meta: string;
    detail?: string;
    state: 'done' | 'current' | 'upcoming';
    owner?: ReactNode;
    action?: ReactNode;
};
export declare function MissionProgress({ steps, completed, total, phase, footer, title }: {
    steps: MissionStep[];
    completed: number;
    total: number;
    phase?: string;
    footer?: ReactNode;
    title?: string;
}): import("react").JSX.Element;
export type MemorandumSection = {
    id: string;
    label: string;
    status: string;
    state: 'ready' | 'blocked' | 'review';
    detail?: string;
};
export declare function MemorandumOverview({ title, project, version, progress, readyLabel, sections, updated, owner, dependency, action }: {
    title?: string;
    project: string;
    version: string;
    progress: number;
    readyLabel: string;
    sections: MemorandumSection[];
    updated: string;
    owner: ReactNode;
    dependency?: string;
    action?: ReactNode;
}): import("react").JSX.Element;
export declare function KanbanBoard({ columns, cards, onOpen, onMove, }: {
    columns: {
        id: string;
        label: string;
    }[];
    cards: {
        id: string;
        column: string;
        title: string;
        description?: string;
        meta?: string;
    }[];
    onOpen: (id: string) => void;
    onMove: (id: string, column: string) => void;
}): import("react").JSX.Element;
export type PlanTask = {
    id: string;
    title: string;
    start: string;
    end: string;
    owner: string;
    dependsOn?: string;
    done?: boolean;
};
export declare function GanttTimeline({ tasks, onSelect }: {
    tasks: PlanTask[];
    onSelect: (id: string) => void;
}): import("react").JSX.Element;
export declare function ApprovalPanel({ title, description, onApprove, onRequestChanges, disabled }: {
    title: string;
    description: string;
    onApprove: () => void;
    onRequestChanges?: (reason: string) => void;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function Conversation({ messages, }: {
    messages: {
        id: string;
        author: string;
        body: string;
        date: string;
        outbound?: boolean;
    }[];
}): import("react").JSX.Element;
export declare function MessageComposer({ to, subject, body, onChange, onSend, state, onBack, hideSubject, sendLabel }: {
    hideSubject?: boolean;
    sendLabel?: string;
    to: string;
    subject: string;
    body: string;
    onChange: (v: {
        subject: string;
        body: string;
    }) => void;
    onSend: () => void;
    state?: 'draft' | 'sending' | 'sent';
    onBack?: () => void;
}): import("react").JSX.Element;
export type ReportSection = {
    id: string;
    title: string;
    body: string;
    source?: string;
};
export declare function ReportEditor({ sections, onChange, readOnly, onSource }: {
    sections: ReportSection[];
    onChange: (sections: ReportSection[]) => void;
    readOnly?: boolean;
    onSource?: (id: string) => void;
}): import("react").JSX.Element;
export declare function EvidenceViewer({ file, sheet, cell, raw, normalized, note, rows }: {
    file: string;
    sheet: string;
    cell: string;
    raw: string;
    normalized: string;
    note?: string;
    rows: {
        cell: string;
        label: string;
        value: string;
    }[];
}): import("react").JSX.Element;
export declare function ProfileCard({ name, subtitle, initials, label, photoUrl, photoPosition, children }: {
    name: string;
    subtitle: string;
    initials: string;
    label?: string;
    photoUrl?: string;
    photoPosition?: string;
    children?: ReactNode;
}): import("react").JSX.Element;
export declare function SourcedAnswer({ title, children, sources, onSource }: {
    title: string;
    children: ReactNode;
    sources: {
        id: string;
        label: string;
    }[];
    onSource: (id: string) => void;
}): import("react").JSX.Element;
export type SourcingTab = {
    id: string;
    label: string;
    icon?: ReactNode;
    badge?: string;
    disabled?: boolean;
};
export declare function SourcingTabs({ items, value, onChange, label }: {
    items: SourcingTab[];
    value: string;
    onChange: (id: string) => void;
    label?: string;
}): import("react").JSX.Element;
export declare function CriteriaStrip({ title, description, items, action }: {
    title: string;
    description?: string;
    items: {
        id: string;
        label: string;
        icon?: ReactNode;
    }[];
    action?: ReactNode;
}): import("react").JSX.Element;
export type BuyerSuggestion = {
    id: string;
    name: string;
    logoSrc: string;
    score: string;
    scoreTone?: 'success' | 'review' | 'progress';
    description: string;
    facts: string[];
    warning?: string;
    sources: {
        id: string;
        label: string;
    }[];
};
export declare function BuyerSuggestionCard({ suggestion, selected, onToggle, onSource }: {
    suggestion: BuyerSuggestion;
    selected: boolean;
    onToggle: (id: string) => void;
    onSource?: (id: string) => void;
}): import("react").JSX.Element;
export declare function ShortlistSummary({ buyers, owner, onRemove, onConfirm, feedback }: {
    buyers: {
        id: string;
        name: string;
        logoSrc: string;
    }[];
    owner: string;
    onRemove: (id: string) => void;
    onConfirm: () => void;
    feedback?: string;
}): import("react").JSX.Element;
