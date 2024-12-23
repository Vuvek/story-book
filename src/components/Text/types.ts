export interface iTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The size of the text */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  /** The alignment of the text */
  align?: 'left' | 'center' | 'right';
  /** The content of the text */
  children: React.ReactNode;
  /** Additional class names for custom styling */
  className?: string;
  /** Whether the text is disabled */
  disabled?: boolean;
}
