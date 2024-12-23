import { StoryFn } from '@storybook/react';

// Common function to create a story with dynamic code
export const CreateSourceCodeStory = (code: string) => {
  const Template: StoryFn = () => <></>;
  const Story = Template.bind({});
  Story.parameters = {
    docs: {
      source: {
        code,
      },
    },
  };
  return Story;
};

// Utility function to format date and time
export const formatDateTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const formatted = date.toLocaleString('en-US', options);
  const [datePart, timePart] = formatted.split(', ');
  return `${datePart} ${timePart}`;
};
