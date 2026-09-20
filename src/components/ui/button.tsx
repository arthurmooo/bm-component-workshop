import { forwardRef, type ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "ghost" | "tint" | "danger";
  small?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      small = false,
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={`button ${variant} ${small ? "small" : ""} ${className}`}
      {...props}
    />
  ),
);
Button.displayName = "Button";
