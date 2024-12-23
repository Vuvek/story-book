export interface iInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label displayed above the input
  error?: boolean; // Indicates if the input is in an error state
  errorMessage?: string; // Error message displayed below the input
  className?: string; // Additional classes for the input container
  labelClassName?: string; // Additional classes for the label
  inputClassName?: string; // Additional classes for the input field
  iconChildren?: React.ReactNode; // Custom React node for icons or additional elements
}
