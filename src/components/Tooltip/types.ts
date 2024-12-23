// Type for default button properties
type iButtonHTMLProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// Tooltip Props with additional customizations
export type iTooltipProps = iButtonHTMLProps & {
  size?: 'small' | 'medium' | 'large'; // Tooltip size variants
  variant?: 'top' | 'bottom' | 'left' | 'right'; // Tooltip position
  tooltipText: string; // Text displayed in the tooltip
  className?: string; // Custom className to override default styles
};
