import { ReactNode } from 'react';

export interface iAccordionItem {
  id: string; // Unique ID for each accordion item
  title: ReactNode; // Dynamic title content as ReactNode
  content: ReactNode; // Dynamic content as ReactNode
}

export interface iAccordionProps {
  items: iAccordionItem[]; // Array of items for the accordion
  className?: string; // Custom class for the accordion container
  itemClassName?: string; // Custom class for each accordion item
  renderTitle?: (
    item: iAccordionItem,
    index: number,
    isExpanded: boolean
  ) => ReactNode; // Function to render the title dynamically
}
