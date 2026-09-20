import { type ButtonProps } from './ui/button';
export type FileUploadButtonProps = {
    label?: string;
    accept?: string;
    onSelect: (file: File) => void;
    buttonProps?: Omit<ButtonProps, 'onClick' | 'children'>;
};
export declare function FileUploadButton({ label, accept, onSelect, buttonProps }: FileUploadButtonProps): import("react").JSX.Element;
