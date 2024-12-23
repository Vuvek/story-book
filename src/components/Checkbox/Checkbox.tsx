import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iCheckboxProps } from './types';

const Checkbox: React.FC<iCheckboxProps> = ({
  inputSize = 'medium',
  label,
  description,
  wrapperClassName,
  labelDescriptionWrapperClassName,
  labelClassName,
  descriptionClassName,
  checkboxClassName,
  ...props
}) => {
  // Size styles for the checkbox
  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }[inputSize];

  // Base styles for the checkbox input
  const baseStyles =
    'rounded border-gray-300 text-indigo-600 focus:ring-transparent checked:bg-indigo-600';

  return (
    <div className={twMerge('flex items-start space-x-3', wrapperClassName)}>
      <input
        type="checkbox"
        className={twMerge(baseStyles, sizeStyles, checkboxClassName)}
        {...props}
      />
      <div className={twMerge(labelDescriptionWrapperClassName)}>
        {label && (
          <label
            className={twMerge(
              'text-sm font-medium text-gray-900',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <p className={twMerge('text-sm text-gray-500', descriptionClassName)}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
