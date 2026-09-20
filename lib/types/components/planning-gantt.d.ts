import type { PlanTask } from "../design-system/workflow-components";
import "./planning-demo.css";
export type PlanningGanttProps = {
    tasks: PlanTask[];
    onSelect: (id: string) => void;
    onChange?: (id: string, dates: {
        start: string;
        end: string;
    }) => boolean | void;
    title?: string;
    locale?: "fr" | "en";
    showHelp?: boolean;
};
export declare function PlanningGantt({ tasks, onSelect, onChange, locale, title, showHelp }: PlanningGanttProps): import("react").JSX.Element;
