import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "block relative border-2 border-transparent font-bold will-change-transform -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:transition-transform group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(.3,0.7,0.4,1.5)] group-active:-translate-y-0.5 group-active:transition-transform group-active:duration-[34ms] uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-emerald-500 text-white",
        secondary: "bg-blue-500 text-white",
        destructive: "bg-rose-500 text-white",
        warning: "bg-amber-500 text-white",
        orange: "bg-orange-500 text-white",
        teal: "bg-teal-500 text-white",
        gray: "bg-gray-500 text-white",
        amber: "bg-amber-500 text-white",
        lime: "bg-lime-500 text-white",
        indigo: "bg-indigo-500 text-white",
        pink: "bg-pink-500 text-white",
        outline: "bg-white text-gray-800 border-gray-400",
      },
      size: {
        default: "rounded-xl px-8 py-2",
        sm: "rounded-lg px-4 py-2 text-sm",
        lg: "rounded-2xl px-8 py-3",
        icon: "rounded-full h-20 w-20 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const edgeVariants = cva("absolute w-full h-full rounded-xl left-0 top-0", {
  variants: {
    variant: {
      default: "bg-emerald-700",
      secondary: "bg-blue-700",
      warning: "bg-yellow-700",
      destructive: "bg-rose-700",
      orange: "bg-orange-700",
      amber: "bg-amber-700",
      lime: "bg-lime-700",
      gray: "bg-gray-700",
      teal: "bg-teal-700",
      indigo: "bg-indigo-700",
      pink: "bg-pink-700",
      outline: "bg-gray-400",
    },
    size: {
      default: "rounded-xl",
      sm: "rounded-lg",
      lg: "rounded-2xl",
      icon: "rounded-full h-20 w-20",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "group relative cursor-pointer select-none border-[none] p-0 outline-offset-4 transition-[filter] duration-[250ms] hover:brightness-110",
        )}
        ref={ref}
        {...props}
      >
        {/* <span className="shadow-layer absolute w-full h-full will-change-transform translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] rounded-xl left-0 top-0 bg-[hsl(0deg_0%_0%_/_0.20)] group-hover:translate-y-1 group-hover:transition-transform group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(.3,0.7,0.4,1.5)] group-active:translate-y-px group-active:transition-transform group-active:duration-[34ms] blur-[3px]" /> */}
        <span className={cn(edgeVariants({ variant, size }))} />
        <span className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
