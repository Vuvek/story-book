import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iBadgeProps } from './types';

const Badge: React.FC<iBadgeProps> = ({
  size = 'medium',
  variant = 'red',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded';

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  const variantStyles = {
    red: 'bg-red-600 text-white',
    green: 'bg-green-600 text-white',
    blue: 'bg-blue-600 text-white',
  }[variant];

  const combinedStyles = twMerge(
    baseStyles,
    sizeStyles,
    variantStyles,
    className
  );

  return (
    <span className={combinedStyles} {...props}>
      {children}
    </span>
  );
};

export default Badge;
