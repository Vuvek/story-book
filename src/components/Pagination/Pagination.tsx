import React from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';
import { iPaginationProps } from './types';

const Pagination: React.FC<iPaginationProps> = ({
  leftIcon,
  rightIcon,
  children,
  className = '',
  prevButtonClassName = '',
  nextButtonClassName = '',
  onPreviousClick,
  onNextClick,
  isPrevButtonDisabled = false,
  isNextButtonDisabled = false,
}) => {
  return (
    <div className={twMerge('flex items-center', className)}>
      {/* Previous Button */}
      <Button
        type="button"
        onClick={onPreviousClick}
        disabled={isPrevButtonDisabled}
        className={prevButtonClassName}
      >
        <span className="sr-only">Previous</span>
        {leftIcon || <span>&larr;</span>}
      </Button>

      {/* Content/Label */}
      {children ? children : null}

      {/* Next Button */}
      <Button
        type="button"
        disabled={isNextButtonDisabled}
        onClick={onNextClick}
        className={nextButtonClassName}
      >
        <span className="sr-only">Next</span>
        {rightIcon || <span>&rarr;</span>}
      </Button>
    </div>
  );
};

export default Pagination;
