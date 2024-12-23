import { ReactNode } from 'react';

export interface iModalProps {
  isOpen: boolean; // Boolean flag to control modal visibility
  onClose: () => void; // Callback for closing the modal
  header?: ReactNode; // React node for modal header
  content?: ReactNode; // React node for modal content
  footer?: ReactNode; // React node for modal footer
  parentContainerClassName?: string; // Additional classes for the modal's parent container
  wrapperClassName?: string; // Additional classes for the modal wrapper
  contentClassName?: string; // Additional classes for the content section
  headerClassName?: string; // Additional classes for the header section
  footerClassName?: string; // Additional classes for the footer section
  closeButtonClassName?: string; // Additional classes for the close button
  closeButtonIcon?: ReactNode; // Custom close button icon
}
