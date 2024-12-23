import { ReactNode } from 'react';

export interface iGridProps {
  children: ReactNode; // Grid items
  columns?: number; // Number of columns (default 1)
  gap?: string; // Gap between grid items
  className?: string; // Additional class names for the grid container
}
