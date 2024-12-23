// Type for default input properties
type iCheckboxHTMLProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// Enhanced Checkbox Props with additional customizations
export type iCheckboxProps = iCheckboxHTMLProps & {
  inputSize?: 'small' | 'medium' | 'large'; // Checkbox size variants
  label?: string; // Label for the checkbox
  description?: string; // Additional description for the checkbox
  wrapperClassName?: string; // Custom className for outer wrapper div
  labelDescriptionWrapperClassName?: string; // Custom className for label and description wrapper
  labelClassName?: string; // Custom className for label
  descriptionClassName?: string; // Custom className for description
  checkboxClassName?: string; // Custom className for checkbox input
};
