import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#a11a1a] text-white hover:bg-[#831414] shadow-sm active:scale-98",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm",
        outline:
          "border border-neutral-300 bg-transparent text-neutral-800 hover:border-neutral-900 hover:text-neutral-950",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        ghost:
          "hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950",
        link:
          "text-[#a11a1a] underline-offset-4 hover:underline",
        luxury:
          "bg-[#a11a1a] text-white hover:bg-[#831414] shadow-lg shadow-red-950/20 hover:scale-102",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-full",
        sm: "h-9 px-4 rounded-full text-[11px]",
        lg: "h-13 px-8 rounded-full text-sm",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
