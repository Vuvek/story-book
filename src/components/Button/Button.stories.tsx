import React from 'react';
import Button from './Button';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import ButtonSourceCode from '!!raw-loader!./Button';
import SvgIcon from '../SvgIcons/SvgIcon';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iButtonProps } from './types';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large', 'full-width'],
      description:
        'Defines the size of the button: none, small, medium, large, or full-width.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'circular', 'expand'],
      description: 'Specifies the core style variant of the button.',
    },
    children: {
      control: 'text',
      defaultValue: 'Click Me',
      description: 'Text or content to be displayed inside the button.',
    },
    icon: {
      control: 'text',
      description:
        'Optional icon to render inside the button, for icon-specific variants.',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disables the button when set to true.',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class to override the default button styles.',
    },
  },
} satisfies Meta<iButtonProps>;

export default meta;

type Story = StoryObj<iButtonProps>;

const Template: StoryFn<iButtonProps> = (args) => (
  <Button {...args}>{args.children || 'Click Me'}</Button>
);

export const Default: Story = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'primary',
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  size: 'medium',
  // variant: 'primary',
  disabled: true,
  className: 'bg-black cursor-not-allowed text-white rounded-md',
};

export const ExpandOnHover: Story = Template.bind({});
ExpandOnHover.args = {
  size: 'medium',
  variant: 'expand',
};

export const WithSizes: StoryFn = () => (
  <div className="flex-1 space-y-4 space-x-4">
    <Button size="full-width" variant="primary">
      Full Width
    </Button>
    <Button size="small" variant="primary">
      Small
    </Button>
    <Button size="medium" variant="primary">
      Medium
    </Button>
    <Button size="large" variant="primary">
      Large
    </Button>
  </div>
);

// Grouping all primary buttons
export const Primary: StoryFn = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Button size="medium" variant="primary">
      Primary
    </Button>
    <Button
      size="medium"
      variant="primary"
      className="flex items-center justify-center gap-x-2"
      icon={<SvgIcon name="CheckmarkWithCircle" />}
    >
      Leading Icon
    </Button>
    <Button
      size="medium"
      variant="primary"
      className="flex items-center justify-center gap-x-2 flex-row-reverse"
      icon={<SvgIcon name="CheckmarkWithCircle" />}
    >
      Trailing Icon
    </Button>
    <Button
      size="medium"
      variant="primary"
      className="bg-black text-white rounded-full"
    >
      Rounded Primary
    </Button>
    <Button variant="circular" icon={<SvgIcon name="PlusIcon" />} />
  </div>
);

// Grouping all secondary buttons
export const Secondary: StoryFn = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Button size="medium" variant="secondary">
      Secondary Button
    </Button>
    <Button
      size="medium"
      variant="secondary"
      className="bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-md"
    >
      Soft Secondary
    </Button>
    <Button
      size="medium"
      variant="secondary"
      className="bg-gray-500 text-white rounded-full hover:bg-gray-600"
    >
      Rounded Secondary
    </Button>
    <Button
      variant="circular"
      icon={<SvgIcon name="PlusIcon" />}
      className="bg-gray-500 text-white"
    />
  </div>
);

export const SourceCode = CreateSourceCodeStory(ButtonSourceCode);
