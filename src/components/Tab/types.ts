import { ReactNode } from 'react';

export interface iTabItem {
  name: string;
  content: ReactNode;
}

export interface iTabProps {
  items: iTabItem[]; // Array of tab items
  tabListClass?: string; // Custom class for the Tab List container
  panelsWrapperClass?: string; // Custom class for the Tab Panels container
  tabPanelClass?: string; // Custom class for each Tab Panel
  tabClass?: string; // Custom class for each Tab item
  activeTabClass?: string; // Custom class for the active Tab
  parentClass?: string; // parent container class
}
