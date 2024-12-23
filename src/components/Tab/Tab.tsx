import React from 'react';
import {
  Tab as TabComponent,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { iTabProps } from './types';

const Tab: React.FC<iTabProps> = ({
  items,
  tabListClass = '',
  panelsWrapperClass = '',
  tabPanelClass = '',
  tabClass = '',
  activeTabClass = '',
  parentClass = '',
}) => {
  return (
    <TabGroup className={parentClass}>
      <TabList className={tabListClass}>
        {items?.map((item, index) => (
          <TabComponent
            key={index}
            className={({ selected }) =>
              twMerge(`${selected ? activeTabClass : tabClass}`)
            }
          >
            {item.name}
          </TabComponent>
        ))}
      </TabList>
      <TabPanels className={panelsWrapperClass}>
        {items?.map((item, index) => (
          <TabPanel key={index} className={tabPanelClass}>
            {item.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Tab;
