import { cn } from "@/lib/utils";
import React from "react";

export interface OptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const Option = React.forwardRef<HTMLButtonElement, OptionProps>(
  ({ className, children, selected, ...props }, ref) => {
    return (
      <button
        className={cn(
          "duration-[250ms] group relative cursor-pointer select-none border-[none] p-0 outline-offset-4 transition-[filter]",
          className,
        )}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "absolute left-0 top-0 h-full w-full rounded-xl bg-gray-300",
            selected && "bg-blue-400",
          )}
        />
        <span
          className={cn(
            "duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(.3,0.7,0.4,1.5)] group-active:duration-[34ms] relative block -translate-y-1 rounded-xl border-2 border-gray-300 bg-white px-8 py-2 transition-transform will-change-transform group-hover:transition-transform group-active:-translate-y-0 group-active:transition-transform",
            selected && "border-blue-400 bg-blue-200    ",
          )}
        >
          {children}
        </span>
      </button>
    );
  },
);

Option.displayName = "Option";

export default Option;
