import React from 'react';
import { Description, Dialog, DialogTitle } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import SvgIcon from '../SvgIcons/SvgIcon';
import Button from '../Button/Button';
import { iModalProps } from './types';

const Modal: React.FC<iModalProps> = ({
  isOpen,
  onClose,
  header,
  content,
  footer,
  parentContainerClassName = '',
  wrapperClassName = '',
  contentClassName = '',
  headerClassName = '',
  footerClassName = '',
  closeButtonClassName = '',
  closeButtonIcon,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={twMerge(
        'fixed inset-0 z-50 flex items-center justify-center p-10',
        parentContainerClassName
      )}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal Content */}
      <div
        className={twMerge(
          'bg-white shadow-lg rounded-xl w-screen max-w-xl max-h-full overflow-hidden my-5 flex flex-col relative',
          wrapperClassName
        )}
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          className={twMerge(
            'absolute right-3 top-3 hover:bg-gray-200 rounded-lg p-1',
            closeButtonClassName
          )}
        >
          {closeButtonIcon || <SvgIcon name="CrossIcon" />}
        </Button>

        {/* Modal Header */}
        {header && (
          <DialogTitle
            as="div"
            className={twMerge(
              'p-4 flex flex-wrap justify-between gap-x-2 bg-gray-100',
              headerClassName
            )}
          >
            {header}
          </DialogTitle>
        )}

        {/* Modal Content */}
        {content && (
          <Description
            as="div"
            className={twMerge('p-4 overflow-y-auto', contentClassName)}
          >
            {content}
          </Description>
        )}

        {/* Modal Footer */}
        {footer && (
          <div
            className={twMerge(
              'p-4 flex items-center justify-end gap-x-2 border-t',
              footerClassName
            )}
          >
            {footer}
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default Modal;
