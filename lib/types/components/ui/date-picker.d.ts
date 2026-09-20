import { type AriaAttributes } from 'react';
import './date-picker.css';
export declare function DatePicker({ value, onValueChange, required, ...aria }: AriaAttributes & {
    value: string;
    onValueChange: (value: string) => void;
    required?: boolean;
}): import("react").JSX.Element;
