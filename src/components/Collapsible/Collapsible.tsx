import React from 'react';
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';
import { iCollapsibleProps } from './types';

const Collapsible: React.FC<iCollapsibleProps> = ({
  trigger,
  children,
  className = '',
  triggerClassName = '',
  contentClassName = '',
}) => {
  return (
    <Menu as="div" className={twMerge('relative', className)}>
      {/* Trigger */}
      <MenuButton
        className={twMerge(
          'cursor-pointer focus:outline-none',
          triggerClassName
        )}
      >
        {trigger || <Button variant="primary">Click Me</Button>}
      </MenuButton>

      {/* Dropdown Content */}
      <MenuItems
        className={twMerge(
          'absolute transition-all ease-in-out',
          contentClassName
        )}
      >
        {children || <p className="p-4">This is some dropdown content.</p>}
      </MenuItems>
    </Menu>
  );
};

export default Collapsible;
