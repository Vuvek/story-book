import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { iSidebarProps } from './types';
import SvgIcon from '../SvgIcons/SvgIcon';
import Button from '../Button/Button';
import SidebarSourceCode from '!!raw-loader!./Sidebar';
import { CreateSourceCodeStory } from '@/utils/helpers';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    isFilterModalOpen: {
      control: 'boolean',
      description: 'Controls whether the sidebar is visible.',
    },
    position: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      description:
        'Determines the position of the sidebar, either "left" or "right".',
    },
    content: {
      control: false,
      description:
        'Content to be displayed inside the sidebar, passed as a React node.',
    },
    contentWrapperClassName: {
      control: 'text',
      description: 'Custom classnames for the content wrapper div.',
    },
  },
} as Meta<iSidebarProps>;

const Template: StoryFn<iSidebarProps> = (args) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(
    args.isFilterModalOpen
  );

  return (
    <div>
      <div className="flex w-full justify-center">
        <Button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
        >
          Toggle Sidebar
        </Button>
      </div>
      <Sidebar
        {...args}
        isFilterModalOpen={isFilterModalOpen}
        setIsFilterModalOpen={setIsFilterModalOpen}
      />
    </div>
  );
};

export const LeftSidebarNavigation = Template.bind({});
LeftSidebarNavigation.args = {
  isFilterModalOpen: false,
  position: 'left',
  content: (
    <div className="bg-neutral-50 dark:bg-dark-body-bg max-md:mr-16 flex w-64 md:w-72 flex-1 h-full md:p-6 px-4 py-3">
      <div className="w-full flex grow flex-col gap-y-5 overflow-y-auto">
        <nav className="flex w-full flex-1 flex-col">
          <ul id="topiclinks" role="list" className="space-y-1 menu">
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavDashboard" /> Dashboard{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavMasterProductFeed" /> Master Product
                  Feed{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavStores" /> Stores{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavContentManagement" /> Content
                  Management{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavCustomers" /> Customers{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavPromotions" /> Promotions{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavOrders" /> Orders{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavSettings" /> Settings{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="SidebarNavAdminTheme" /> Admin Theme{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="Settings" /> Google Analytics{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                <span className="flex gap-x-3 items-center">
                  <SvgIcon name="Settings" /> Reports{' '}
                </span>
                <span>
                  <SvgIcon name="ArrowDown" className="size-5" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ),
};

export const SourceCode = CreateSourceCodeStory(SidebarSourceCode);
