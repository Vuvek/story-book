import { ReactNode } from 'react';

// Define the interface for the Sidebar props
export interface iSidebarProps {
  /**
   * Controls whether the sidebar is visible.
   */
  isFilterModalOpen: boolean;

  /**
   * Function to update the visibility state of the sidebar.
   */
  setIsFilterModalOpen: (isOpen: boolean) => void;

  /**
   * Determines the position of the sidebar, either "left" or "right".
   */
  position: 'left' | 'right';

  /**
   * Content to be displayed inside the sidebar, passed as a React node.
   */
  content: ReactNode;

  /**
   * Custom classnames for content wrapper div.
   */
  contentWrapperClassName?: string;
}
