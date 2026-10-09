import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#a11a1a] text-white",
        secondary:
          "bg-neutral-100 text-neutral-800",
        outline:
          "text-neutral-800 border border-neutral-200",
        placaPreta:
          "bg-neutral-950 text-white border border-neutral-800 shadow-sm",
        redLight:
          "bg-[#fff4f4] text-[#a11a1a] border border-[#a11a1a]/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
