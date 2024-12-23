import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iRadioGroupProps } from './types';

const RadioGroup: React.FC<iRadioGroupProps> = ({
  label,
  description,
  wrapperClassName,
  labelDescriptionWrapperClassName,
  labelClassName,
  descriptionClassName,
  radioClassName,
  ...props
}) => {
  return (
    <div className={twMerge('flex items-start', wrapperClassName)}>
      <input
        type="radio"
        className={twMerge(
          'relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
          radioClassName
        )}
        {...props}
      />
      <div className={twMerge('ml-3', labelDescriptionWrapperClassName)}>
        {label && (
          <label
            className={twMerge(
              'block font-medium text-gray-900',
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

export default RadioGroup;
