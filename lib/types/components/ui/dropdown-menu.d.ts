import * as Primitive from "@radix-ui/react-dropdown-menu";
export declare const DropdownMenu: import("react").FC<Primitive.DropdownMenuProps>;
export declare const DropdownMenuTrigger: import("react").ForwardRefExoticComponent<Primitive.DropdownMenuTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const DropdownMenuContent: import("react").ForwardRefExoticComponent<Omit<Primitive.DropdownMenuContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
    container?: HTMLElement | null;
} & import("react").RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuItem: import("react").ForwardRefExoticComponent<Omit<Primitive.DropdownMenuItemProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare function DropdownMenuSeparator(): import("react").JSX.Element;
