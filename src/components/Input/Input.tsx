import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iInputProps } from './types';

const Input: React.FC<iInputProps> = ({
  label,
  error = false,
  errorMessage,
  className = '',
  labelClassName = '',
  inputClassName = '',
  disabled = false,
  iconChildren,
  ...props
}) => {
  return (
    <div className={twMerge('flex flex-col gap-2', className)}>
      {/* Optional Label */}
      {label && (
        <label
          className={twMerge(
            'text-sm font-medium text-gray-700',
            disabled && 'text-gray-400',
            labelClassName
          )}
        >
          {label}
        </label>
      )}

      {/* Input wrapper to handle relative positioning for icons */}
      <div className="relative">
        <input
          {...props}
          disabled={disabled}
          className={twMerge(
            'w-full rounded-md bg-white py-2 px-4 text-base',
            error ? 'outline-red-500' : 'outline-gray-600',
            disabled && 'bg-gray-100 cursor-not-allowed',
            inputClassName
          )}
        />

        {/* Render icon or additional React node if provided */}
        {iconChildren ? iconChildren : null}

        {/* Render error message if input is in an error state */}
        {error && errorMessage && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
