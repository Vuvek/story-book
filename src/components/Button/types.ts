// Type for default button properties
type iButtonHTMLProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type iButtonProps = iButtonHTMLProps & {
  size?: 'none' | 'small' | 'medium' | 'large' | 'full-width'; // Button size variants
  variant?: 'default' | 'primary' | 'secondary' | 'circular' | 'expand'; // Core button style variants
  icon?: React.ReactNode; // Icon to be displayed in the button
  className?: string; // Custom className to override default styles
};
