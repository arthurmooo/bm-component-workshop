import { type ReactNode } from 'react';
import './workspace.css';
export type WorkspaceNavItem = {
    id: string;
    label: string;
    icon?: ReactNode;
    children?: {
        id: string;
        label: string;
        icon?: ReactNode;
    }[];
};
export declare function WorkspaceShell({ brand, items, active, onNavigate, toolbar, footer, children, density }: {
    brand: ReactNode;
    items: WorkspaceNavItem[];
    active: string;
    onNavigate: (id: string) => void;
    toolbar?: ReactNode;
    footer?: ReactNode;
    children: ReactNode;
    density?: 'comfortable' | 'compact';
}): import("react").JSX.Element;
