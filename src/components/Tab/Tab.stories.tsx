import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Tab from './Tab';
import { CreateSourceCodeStory } from '@/utils/helpers';
import TabSourceCode from '!!raw-loader!./Tab';
import { iTabProps } from './types';

export default {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    tabListClass: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for the Tab List container.',
    },
    panelsWrapperClass: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for the wrapper around Tab Panels.',
    },
    tabPanelClass: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for individual Tab Panel items.',
    },
    tabClass: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for each Tab item.',
    },
    activeTabClass: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Custom class for the active Tab item.',
    },
    items: {
      control: false,
      description: 'Array containing tab items and their content.',
    },
  },
} as Meta<iTabProps>;

type Story = StoryObj<iTabProps>;

const Template: StoryFn<iTabProps> = (args) => <Tab {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Tab 1',
      content: (
        <div>
          <h2 className="text-lg font-bold">Tab 1 Content</h2>
          <p className="mt-2 text-sm text-gray-600">
            This is a description for Tab 1.
          </p>
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <p>This is some additional content inside a div for Tab 1.</p>
          </div>
        </div>
      ),
    },
    {
      name: 'Tab 2',
      content: (
        <div>
          <h2 className="text-lg font-bold">Tab 2 Content</h2>
          <p className="mt-2 text-sm text-gray-600">
            This is a description for Tab 2.
          </p>
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <p>This is some additional content inside a div for Tab 2.</p>
          </div>
          <div className="mt-4 p-4 border rounded bg-gray-200">
            <p>Another div with more content for Tab 2.</p>
          </div>
        </div>
      ),
    },
    {
      name: 'Tab 3',
      content: (
        <div>
          <h2 className="text-lg font-bold">Tab 3 Content</h2>
          <p className="mt-2 text-sm text-gray-600">
            This is a description for Tab 3.
          </p>
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <ul className="list-disc pl-5">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </div>
      ),
    },
  ],
  tabListClass: '',
  panelsWrapperClass: '',
  tabPanelClass: 'p-4',
  tabClass: 'bg-gray-200',
  activeTabClass: 'bg-gray-500',
};

export const SourceCode = CreateSourceCodeStory(TabSourceCode);
