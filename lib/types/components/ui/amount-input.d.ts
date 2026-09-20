import { type InputHTMLAttributes } from 'react';
export declare function AmountInput({ value, onValueChange, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'> & {
    value: string | number;
    onValueChange: (value: string) => void;
}): import("react").JSX.Element;
