import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from './Accordion';
import SvgIcon from '../SvgIcons/SvgIcon';
import AccordionSourceCode from '!!raw-loader!./Accordion';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iAccordionProps } from './types';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for the accordion container',
    },
    itemClassName: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for each accordion item',
    },
    renderTitle: {
      control: false,
      description: 'Function to render the title dynamically based on state',
    },
  },
} as Meta<iAccordionProps>;

export const Default: StoryFn = () => (
  <Accordion
    className="bg-white rounded-lg shadow-md"
    itemClassName="border-gray-300"
    items={[
      {
        id: '1',
        title: 'Easy Customization with PK Health Gear',
        content: (
          <p className="mt-3 mb-5 text-sm">
            Inspired by the original shooting arcade at the legendary G2 Hunting
            Ranch in Pearsal, TX, the Broken Bottle Arcade Base Unit offers the
            ultimate backyard target shooting experience. Designed by G2 owner,
            Don Gilchrist, this patented system ensures a mess-free, thrilling
            action of shooting glass bottles with air guns.
          </p>
        ),
      },
      {
        id: '2',
        title: 'Multiple Options in our Design Process',
        content: (
          <p className="mt-3 mb-5 text-sm">
            Inspired by the original shooting arcade at the legendary G2 Hunting
            Ranch in Pearsal, TX, the Broken Bottle Arcade Base Unit offers the
            ultimate backyard target shooting experience. Designed by G2 owner,
            Don Gilchrist, this patented system ensures a mess-free, thrilling
            action of shooting glass bottles with air guns.
          </p>
        ),
      },
      {
        id: '3',
        title:
          "Men's Patagonia Premium Branded Apparel and Merchandise we Provide",
        content: (
          <p className="mt-3 mb-5 text-sm">
            Inspired by the original shooting arcade at the legendary G2 Hunting
            Ranch in Pearsal, TX, the Broken Bottle Arcade Base Unit offers the
            ultimate backyard target shooting experience. Designed by G2 owner,
            Don Gilchrist, this patented system ensures a mess-free, thrilling
            action of shooting glass bottles with air guns.
          </p>
        ),
      },
    ]}
    renderTitle={(item, index, isExpanded) => (
      <div className="flex items-center justify-between cursor-pointer">
        <span>{item.title}</span>
        <SvgIcon
          name={
            isExpanded
              ? 'MinusIconWithRoundedCircle'
              : 'PlusIconWithRoundedCircle'
          }
        />
      </div>
    )}
  />
);

export const SourceCode = CreateSourceCodeStory(AccordionSourceCode);
