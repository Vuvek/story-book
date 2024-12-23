import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import CheckboxSourceCode from '!!raw-loader!./Checkbox';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iCheckboxProps } from './types';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    inputSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the checkbox: small, medium, or large.',
    },
    label: {
      control: 'text',
      description: 'The label for the checkbox.',
    },
    description: {
      control: 'text',
      description: 'Additional descriptive text for the checkbox.',
    },
    wrapperClassName: {
      control: 'text',
      description: 'Custom CSS class for the parent wrapper div.',
    },
    labelDescriptionWrapperClassName: {
      control: 'text',
      description: 'Custom CSS class for the wrapper of label and description.',
    },
    labelClassName: {
      control: 'text',
      description: 'Custom CSS class for the label.',
    },
    descriptionClassName: {
      control: 'text',
      description: 'Custom CSS class for the description.',
    },
    checkboxClassName: {
      control: 'text',
      description: 'Custom CSS class for the checkbox input.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
const Template: StoryFn<iCheckboxProps> = (args) => <Checkbox {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  inputSize: 'medium',
  label: 'Default Checkbox',
  wrapperClassName: 'items-center',
};

export const ListWithDescription: StoryFn = () => (
  <div className="space-y-4">
    <Checkbox
      inputSize="medium"
      label="Comments"
      description="Get notified when someone posts a comment."
      wrapperClassName="items-center"
      descriptionClassName="ml-3 text-gray-500"
      labelClassName="ml-3 font-medium text-gray-900"
    />
    <Checkbox
      inputSize="medium"
      label="Candidates"
      description="Get notified when a candidate applies for a job."
      wrapperClassName="items-center"
      descriptionClassName="ml-3 text-gray-500"
      labelClassName="ml-3 font-medium text-gray-900"
    />
    <Checkbox
      inputSize="medium"
      label="Offers"
      description="Get notified when a candidate accepts or rejects an offer."
      wrapperClassName="items-center"
      descriptionClassName="ml-3 text-gray-500"
      labelClassName="ml-3 font-medium text-gray-900"
    />
  </div>
);

export const ListWithInlineDescription: StoryFn = () => (
  <div className="space-y-4">
    <Checkbox
      inputSize="medium"
      label="Comments"
      description="Get notified about new comments."
      wrapperClassName="flex items-center space-x-3"
      labelDescriptionWrapperClassName="flex space-x-3 text-sm"
      labelClassName="font-medium text-gray-900"
      descriptionClassName="text-gray-500"
    />
    <Checkbox
      inputSize="medium"
      label="Candidates"
      description="Stay informed about job applicants."
      wrapperClassName="flex items-center space-x-3"
      labelDescriptionWrapperClassName="flex space-x-3 text-sm"
      labelClassName="font-medium text-gray-900"
      descriptionClassName="text-gray-500"
    />
    <Checkbox
      inputSize="medium"
      label="Offers"
      description="Be updated when offers are accepted."
      wrapperClassName="flex items-center space-x-3"
      labelDescriptionWrapperClassName="flex space-x-3 text-sm"
      labelClassName="font-medium text-gray-900"
      descriptionClassName="text-gray-500"
    />
  </div>
);

export const ListWithCheckboxOnRight: StoryFn = () => (
  <div className="space-y-4">
    <Checkbox
      inputSize="medium"
      label="Comments"
      description="Get notified when someone posts a comment."
      wrapperClassName="flex-row-reverse items-center"
      labelDescriptionWrapperClassName="flex-1 text-left"
      labelClassName="font-medium text-gray-900"
      descriptionClassName="text-gray-500"
    />
    <Checkbox
      inputSize="medium"
      label="Candidates"
      description="Get notified when a candidate applies for a job."
      wrapperClassName="flex-row-reverse items-center"
      labelDescriptionWrapperClassName="flex-1 text-left"
      labelClassName="font-medium text-gray-900"
      descriptionClassName="text-gray-500"
      checkboxClassName="ml-3"
    />
    <Checkbox
      inputSize="medium"
      label="Offers"
      description="Get notified when a candidate accepts or rejects an offer."
      wrapperClassName="flex-row-reverse items-center"
      labelDescriptionWrapperClassName="flex-1 text-left"
      labelClassName="font-medium text-gray-900"
      descriptionClassName="text-gray-500"
      checkboxClassName="ml-3"
    />
  </div>
);

export const SimpleListWithHeading: StoryFn = () => (
  <div>
    <legend className="text-base font-semibold text-gray-900">
      Team Members
    </legend>
    <div className="flex flex-col mt-4">
      <Checkbox
        inputSize="medium"
        label="Annette Black"
        wrapperClassName="flex items-center py-4 border-b border-t border-gray-200"
      />
      <Checkbox
        inputSize="medium"
        label="Cody Fisher"
        wrapperClassName="flex items-center py-4 border-b border-gray-200"
      />
      <Checkbox
        inputSize="medium"
        label="Courtney Henry"
        wrapperClassName="flex items-center py-4 border-b border-gray-200"
      />
      <Checkbox
        inputSize="medium"
        label="Kathryn Murphy"
        wrapperClassName="flex items-center py-4 border-b border-gray-200"
      />
      <Checkbox
        inputSize="medium"
        label="Theresa Webb"
        wrapperClassName="flex items-center py-4 border-b border-gray-200"
      />
    </div>
  </div>
);

export const SourceCode = CreateSourceCodeStory(CheckboxSourceCode);
