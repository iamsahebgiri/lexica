import { cn } from '@/lib/utils';
import React from 'react';

export interface OptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const Option = React.forwardRef<HTMLButtonElement, OptionProps>(
  ({ className, children, selected, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative cursor-pointer outline-offset-4 transition-[filter] duration-[250ms] p-0 border-[none] group select-none',
          className
        )}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            'absolute w-full h-full rounded-xl left-0 top-0 bg-gray-300',
            selected && 'bg-blue-400'
          )}
        />
        <span
          className={cn(
            'block relative border-2 border-gray-300 will-change-transform -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(.3,0.7,0.4,1)] group-hover:transition-transform group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(.3,0.7,0.4,1.5)] group-active:-translate-y-0 group-active:transition-transform group-active:duration-[34ms] bg-white rounded-xl px-8 py-2',
            selected && 'bg-blue-200 border-blue-400    '
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);

Option.displayName = 'Option';

export default Option;
