import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iButtonProps } from './types';

const Button: React.FC<iButtonProps> = ({
  size = 'none',
  variant = 'default',
  icon,
  children,
  disabled,
  className,
  ...props
}) => {
  // Size styles with specific width for each size
  const sizeStyles = {
    none: '',
    small: 'px-2 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg',
    'full-width': 'px-4 py-3 text-base w-full',
  }[size];

  // Core styles for variants
  const variantStyles = {
    default: '',
    primary: 'bg-black hover:opacity-80 text-white rounded-md',
    secondary:
      'bg-gray-500 hover:bg-gray-600 text-white hover:bg-gray-600 rounded-md',
    circular: 'bg-black hover:opacity-80 text-white p-4 rounded-full',
    expand:
      'hover:opacity-80 bg-black text-white rounded-md transition-all transform hover:scale-x-105 hover:scale-y-105',
  }[variant];

  const combinedStyles = twMerge(sizeStyles, variantStyles, className);

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {icon && <span>{icon}</span>}
      {variant !== 'circular' && children}
    </button>
  );
};

export default Button;
