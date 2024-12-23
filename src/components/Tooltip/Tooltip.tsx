import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iTooltipProps } from './types';

const Tooltip: React.FC<iTooltipProps> = ({
  size = 'medium',
  variant = 'top',
  tooltipText,
  children,
  className,
  disabled,
  ...props
}) => {
  // Base styles
  const baseStyles = 'relative flex items-center';

  // Size styles for tooltip container
  const sizeStyles = {
    small: 'w-40 px-2 py-1 text-sm',
    medium: 'w-52 px-4 py-2 text-base',
    large: 'w-60 px-6 py-3 text-lg',
  }[size];

  // Tooltip positioning styles
  const positionStyles = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  }[variant];

  return (
    <div className={twMerge(baseStyles, 'group')}>
      {/* Trigger element */}
      <button
        className={twMerge(
          'select-none rounded-lg text-base bg-blue-500 text-white py-3 px-6 font-bold shadow-md shadow-gray-900/10 transition-all',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children || 'Tooltip'}
      </button>

      {/* Tooltip element */}
      <div
        className={twMerge(
          'absolute z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-normal break-words rounded-lg bg-gray-500 text-white font-sans font-normal',
          sizeStyles,
          positionStyles
        )}
      >
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;
