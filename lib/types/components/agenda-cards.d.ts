import "./agenda-cards.css";
export type AgendaEvent = {
    id: string;
    day: string;
    month: string;
    title: string;
    time: string;
    priority: string;
    tone: string;
    description: string;
    place: string;
    owner: string;
};
export declare function AgendaCardsDemo(): import("react").JSX.Element;
export declare function AgendaCards({ events, title, footer, onOpen, onDone }: {
    events: AgendaEvent[];
    title?: string;
    footer?: string;
    onOpen?: (id: string) => void;
    onDone?: (id: string) => void;
}): import("react").JSX.Element;
