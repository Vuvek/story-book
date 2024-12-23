import Tooltip from './Tooltip';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import TooltipSourceCode from '!!raw-loader!./Tooltip';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iTooltipProps } from './types';

const meta: Meta<iTooltipProps> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the Tooltip: small, medium, or large.',
    },
    tooltipText: {
      control: 'text',
      defaultValue: 'This is a tooltip!',
      description: 'The text displayed inside the Tooltip.',
    },
    variant: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Specifies the position of the Tooltip.',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class to override the default Tooltip styles.',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disables the Tooltip when set to true.',
    },
    children: {
      control: 'text',
      defaultValue: 'Hover me!',
      description: 'The content of the Tooltip trigger element.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<iTooltipProps> = (args) => <Tooltip {...args} />;

// Individual Stories
export const Top: Story = Template.bind({});
Top.args = {
  size: 'medium',
  variant: 'top',
  tooltipText: 'Tooltip displayed at the top!',
};

export const Bottom: Story = Template.bind({});
Bottom.args = {
  size: 'medium',
  variant: 'bottom',
  tooltipText: 'Tooltip displayed at the bottom!',
};

export const Left: Story = Template.bind({});
Left.args = {
  size: 'medium',
  variant: 'left',
  tooltipText: 'Tooltip displayed on the left!',
};

export const Right: Story = Template.bind({});
Right.args = {
  size: 'medium',
  variant: 'right',
  tooltipText: 'Tooltip displayed on the right!',
};

export const SourceCode = CreateSourceCodeStory(TooltipSourceCode);
