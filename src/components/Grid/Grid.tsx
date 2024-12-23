import React from 'react';
import { twMerge } from 'tailwind-merge';
import { iGridProps } from './types';

const Grid: React.FC<iGridProps> = ({
  children,
  columns = 1,
  gap = '1rem',
  className = '',
}) => {
  return (
    <div
      className={twMerge(`grid grid-cols-${columns} gap-${gap}`, className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
};

export default Grid;
