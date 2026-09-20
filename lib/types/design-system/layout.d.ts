import { type HTMLAttributes, type InputHTMLAttributes, type ReactNode } from 'react';
export declare function Card({ className, ...props }: HTMLAttributes<HTMLElement>): import("react").JSX.Element;
export declare function CardHeader({ title, description, action }: {
    title: string;
    description?: string;
    action?: ReactNode;
}): import("react").JSX.Element;
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
export declare function Field({ label, hint, error, id, ...props }: InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    hint?: string;
    error?: string;
}): import("react").JSX.Element;
export type MetricTone = 'neutral' | 'info' | 'positive' | 'warning' | 'critical';
export declare function MetricCard({ label, value, detail, tone }: {
    label: string;
    value: ReactNode;
    detail?: ReactNode;
    tone?: MetricTone;
}): import("react").JSX.Element;
export declare function EmptyState({ title, description, action }: {
    title: string;
    description: string;
    action?: ReactNode;
}): import("react").JSX.Element;
