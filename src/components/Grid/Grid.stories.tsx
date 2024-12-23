import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';
import GridSourceCode from '!!raw-loader!./Grid';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iGridProps } from './types';

export default {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number' },
      defaultValue: 3,
      description: 'Number of columns in the grid',
    },
    gap: {
      control: { type: 'text' },
      defaultValue: '4',
      description: 'Gap between grid items (e.g., "4" for gap-4)',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'Additional custom classes for the grid container',
    },
  },
} as Meta<iGridProps>;

const Template: StoryFn = (args) => (
  <Grid {...args}>
    <div className="border border-gray-300 p-4 text-center">Item 1</div>
    <div className="border border-gray-300 p-4 text-center">Item 2</div>
    <div className="border border-gray-300 p-4 text-center">Item 3</div>
    <div className="border border-gray-300 p-4 text-center">Item 4</div>
    <div className="border border-gray-300 p-4 text-center">Item 5</div>
    <div className="border border-gray-300 p-4 text-center">Item 6</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: '4',
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
  gap: '4',
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  columns: 3,
  gap: '4',
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  columns: 4,
  gap: '2',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  columns: 3,
  gap: '4',
  className: 'bg-gray-100 p-5 rounded-lg shadow',
};

export const SourceCode = CreateSourceCodeStory(GridSourceCode);
