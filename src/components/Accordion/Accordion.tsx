import React from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { iAccordionProps } from './types';

const Accordion: React.FC<iAccordionProps> = ({
  items,
  className = '',
  itemClassName = '',
  renderTitle,
}) => {
  return (
    <div className={twMerge('px-4', className)}>
      {items.map((item, index) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <div
              className={twMerge(
                'border-b border-gray-400 py-3 transition-all',
                itemClassName
              )}
            >
              {/* Accordion Title */}
              <DisclosureButton className="w-full text-left">
                {renderTitle ? renderTitle(item, index, open) : item.title}
              </DisclosureButton>

              {/* Accordion Content */}
              <DisclosurePanel className="overflow-hidden transition-[max-height] duration-300 ease-in-out">
                <div>{item.content}</div>
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
