import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[transform,box-shadow,background-color,border-color,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 motion-reduce:hover:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(79,116,255,0.35),0_12px_36px_rgba(79,116,255,0.22)]",
        secondary:
          "border border-border-strong bg-white text-ink hover:border-accent/30 hover:bg-accent-soft hover:shadow-[var(--shadow-card)]",
        ghost:
          "border border-transparent bg-transparent text-ink-muted hover:border-border hover:bg-black/[0.03] hover:text-ink",
        soft: "border border-border bg-surface-secondary text-ink hover:border-border-strong hover:bg-surface-elevated",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
