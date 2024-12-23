import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';
import SvgIcon from '../SvgIcons/SvgIcon';
import InputSourceCode from '!!raw-loader!./Input';
import Button from '../Button/Button';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iInputProps } from './types';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field. Leave it empty for no label.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input field is disabled.',
    },
    error: {
      control: 'boolean',
      description: 'Indicates whether the input field is in an error state.',
    },
    errorMessage: {
      control: 'text',
      description:
        'Error message displayed below the input field when `error` is true.',
    },
    className: {
      control: 'text',
      description: 'Additional custom CSS classes for the container.',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional custom CSS classes for the label.',
    },
    inputClassName: {
      control: 'text',
      description: 'Additional custom CSS classes for the input field.',
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<iInputProps> = (args) => <Input {...args} />;

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: 'Enter text...',
};
WithoutLabel.parameters = {
  docs: {
    description: {
      story: 'An input field without a label, only displaying a placeholder.',
    },
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Username',
  placeholder: 'Enter your username',
};
WithLabel.parameters = {
  docs: {
    description: {
      story:
        'An input field with a label. The label is displayed above the input field.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'You cannot type here...',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'An input field that is disabled. Users cannot interact with it.',
    },
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  error: true,
  errorMessage: 'This field is required.',
};
ErrorState.parameters = {
  docs: {
    description: {
      story:
        'An input field in an error state, displaying an error message below.',
    },
  },
};

export const WithLeadingIcon: StoryFn<iInputProps> = () => (
  <Input
    label="Search"
    placeholder="Search here..."
    iconChildren={
      <div className="absolute left-3 top-2">
        <SvgIcon name="SearchIcon" />
      </div>
    }
    inputClassName="px-10"
  />
);

WithLeadingIcon.parameters = {
  docs: {
    description: {
      story:
        'An input field with a leading icon (e.g., a search icon) positioned at the start of the input field.',
    },
  },
};

export const WithTrailingIcon: StoryFn<iInputProps> = () => (
  <Input
    label="Username"
    placeholder="Enter your username"
    iconChildren={
      <button
        type="button"
        onClick={() => alert('Icon clicked!')}
        className="absolute top-2 right-3"
      >
        <SvgIcon name="CircleInfo" />
      </button>
    }
    className="relative"
  />
);

WithTrailingIcon.parameters = {
  docs: {
    description: {
      story:
        'An input field with a trailing icon (e.g., an avatar icon) positioned at the end of the input field.',
    },
  },
};

export const PasswordInput: StoryFn<iInputProps> = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Input
      label="Password"
      type={passwordVisible ? 'text' : 'password'}
      placeholder="Enter your password"
      iconChildren={
        <Button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute top-2 right-3"
        >
          {passwordVisible ? (
            <SvgIcon name="EyeOpen" />
          ) : (
            <SvgIcon name="EyeClosed" />
          )}
        </Button>
      }
    />
  );
};

PasswordInput.parameters = {
  docs: {
    description: {
      story:
        'A password input field with a toggle button to show or hide the password.',
    },
  },
};

export const SourceCode = CreateSourceCodeStory(InputSourceCode);
