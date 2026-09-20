// Adapted from shadcn/ui (MIT). Source and license retained in this project.
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as Primitive from "@radix-ui/react-dropdown-menu";
export const DropdownMenu = Primitive.Root;
export const DropdownMenuTrigger = Primitive.Trigger;
export const DropdownMenuContent = forwardRef<
  ElementRef<typeof Primitive.Content>,
  ComponentPropsWithoutRef<typeof Primitive.Content> & { container?: HTMLElement | null }
>(({ className = "", sideOffset = 7, align = "start", container, ...props }, ref) => (
  <Primitive.Portal container={container}>
    <Primitive.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      collisionPadding={12}
      className={`menu-surface ${className}`}
      {...props}
    />
  </Primitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";
export const DropdownMenuItem = forwardRef<
  ElementRef<typeof Primitive.Item>,
  ComponentPropsWithoutRef<typeof Primitive.Item>
>(({ className = "", ...props }, ref) => (
  <Primitive.Item ref={ref} className={`menu-item ${className}`} {...props} />
));
DropdownMenuItem.displayName = "DropdownMenuItem";
export function DropdownMenuSeparator() {
  return <Primitive.Separator className="menu-separator" />;
}
