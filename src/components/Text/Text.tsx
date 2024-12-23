import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iTextProps } from './types';

const Text: React.FC<iTextProps> = ({
  size = 'base',
  align = 'left',
  children,
  className,
  disabled = false,
  ...props
}) => {
  // Base styles
  const baseStyles = 'text-gray-900 flex items-center';

  // Size styles for the text
  const sizeClass = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  }[size];

  // Alignment styles
  const alignClass = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right',
  }[align];

  return (
    <div
      className={twMerge(
        baseStyles,
        alignClass,
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
      aria-disabled={disabled}
      {...props} // Spread additional div props
    >
      <span className={twMerge(sizeClass)}>{children}</span>
    </div>
  );
};

export default Text;
