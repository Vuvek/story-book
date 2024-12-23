import React from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import { iSidebarProps } from './types';
import { twMerge } from 'tailwind-merge';

export const Sidebar: React.FC<iSidebarProps> = ({
  isFilterModalOpen,
  setIsFilterModalOpen,
  position = 'left',
  content,
  contentWrapperClassName = '',
}) => {
  return (
    <Transition show={isFilterModalOpen}>
      <TransitionChild
        enter="transition-transform ease-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className={twMerge(
            `fixed h-screen ${position === 'right' ? 'right-0' : 'left-0'} top-0`,
            contentWrapperClassName
          )}
        >
          {content}
        </div>
      </TransitionChild>
    </Transition>
  );
};
