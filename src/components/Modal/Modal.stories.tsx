import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ModalSourceCode from '!!raw-loader!./Modal';
import SvgIcon from '../SvgIcons/SvgIcon';
import { CreateSourceCodeStory } from '@/utils/helpers';
import { iModalProps } from './types';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Controls whether the modal is visible or hidden.',
      control: 'boolean',
      defaultValue: false,
    },
    onClose: {
      description: 'Callback function invoked when the modal is closed.',
      action: 'onClose',
    },
    header: {
      description:
        'ReactNode to render in the header of the modal. Can include text, icons, or custom elements.',
      control: 'text',
    },
    content: {
      description: 'ReactNode to render as the main content of the modal.',
      control: 'text',
    },
    footer: {
      description:
        'ReactNode to render in the footer of the modal, typically containing action buttons.',
      control: 'text',
    },
    parentContainerClassName: {
      description:
        "Additional classes for the modal's parent container for custom styling.",
      control: 'text',
    },
    wrapperClassName: {
      description:
        "Additional classes for the modal's wrapper to customize its layout and appearance.",
      control: 'text',
    },
    contentClassName: {
      description: "Additional classes for the modal's content section.",
      control: 'text',
    },
    headerClassName: {
      description: "Additional classes for the modal's header section.",
      control: 'text',
    },
    footerClassName: {
      description: "Additional classes for the modal's footer section.",
      control: 'text',
    },
    closeButtonClassName: {
      description:
        'Additional classes for the close button to customize its appearance.',
      control: 'text',
    },
    closeButtonIcon: {
      description: 'Custom ReactNode to replace the default close button icon.',
      control: 'text',
    },
  },
} as Meta<iModalProps>;

export const Default: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        header={
          <div className="text-sm font-semibold">
            Reach more shoppers with Instagram product tags
          </div>
        }
        content={
          <div>
            Use Instagram posts to share your products with millions of people.
            Let shoppers buy from your store without leaving Instagram.
          </div>
        }
        footer={
          <>
            <Button
              size="small"
              variant="secondary"
              onClick={() => alert('Learn more clicked!')}
            >
              Learn more
            </Button>
            <Button size="small" variant="primary" onClick={handleClose}>
              Add Instagram
            </Button>
          </>
        }
      />
    </>
  );
};

export const WithPrimaryAction: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        header={
          <div className="text-sm font-semibold">Get a shareable link</div>
        }
        content={
          <div>
            <div className="mb-2">
              You can share this discount link with your customers via email or
              social media. Your discount will be automatically applied at
              checkout.
            </div>
            <div className="flex gap-x-1 items-end">
              <Input
                className="grow"
                placeholder="https://polaris.shopify.com/"
                label="Discount link"
                inputClassName="py-1"
              />
              <Button size="small" variant="primary" className="py-1.5">
                Copy link
              </Button>
            </div>
          </div>
        }
        footer={
          <>
            <Button
              size="small"
              variant="primary"
              onClick={handleClose}
              className="px-4"
            >
              Close
            </Button>
          </>
        }
      />
    </>
  );
};

export const Large: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        header={
          <div className="text-sm font-semibold">Import customers by CSV</div>
        }
        wrapperClassName="max-w-5xl"
        content={
          <div>
            <div className="mb-3">Drag and Drop Input will come here</div>
            <div>
              <label htmlFor="overwrite">
                <input id="overwrite" type="checkbox" /> Overwrite existing
                customers that have the same email or phone
              </label>
            </div>
          </div>
        }
        footer={
          <>
            <Button size="small" variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button size="small" variant="primary">
              Export customers
            </Button>
          </>
        }
      />
    </>
  );
};

export const WithoutTitle: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        content={
          <div className="pr-12">
            Use Instagram posts to share your products with millions of people.
            Let shoppers buy from your store without leaving Instagram.
          </div>
        }
        footer={
          <>
            <Button size="small" variant="secondary" onClick={handleClose}>
              Learn more
            </Button>
            <Button size="small" variant="primary" onClick={handleClose}>
              Add Instagram
            </Button>
          </>
        }
      />
    </>
  );
};

export const WithScrollListeners: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        header={<div className="text-sm font-semibold">Scrollable content</div>}
        content={
          <div className="grow overflow-y-auto max-h-60">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="p-4 border-b last:border-b-0">
                Item #{i}
              </div>
            ))}
          </div>
        }
        footer={
          <>
            <Button
              size="small"
              variant="primary"
              onClick={handleClose}
              className="px-4"
            >
              Close
            </Button>
          </>
        }
      />
    </>
  );
};

export const Sectioned: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        content={
          <div className="p-4 grow overflow-x-auto">
            <ul>
              <li>First section</li>
              <li>
                Second section
                <ul className="p-3">
                  <li>Nested section</li>
                </ul>
              </li>
              <li>Fourth section</li>
            </ul>
          </div>
        }
        header={<div className="text-sm font-semibold">Sectioned modal</div>}
        footer={
          <>
            <Button
              size="small"
              variant="primary"
              onClick={handleClose}
              className="px-4"
            >
              Save
            </Button>
          </>
        }
      />
    </>
  );
};

export const WithLongContent: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" variant="secondary">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        header={<div className="text-sm font-semibold">Long form modal</div>}
        footer={
          <Button
            size="small"
            variant="primary"
            onClick={handleClose}
            className="px-4"
          >
            Save
          </Button>
        }
        content={
          <div className="grow overflow-x-auto">
            <div className="p-4">
              <div className="mb-2 flex flex-wrap items-center gap-x-1 bg-blue-100 p-2 rounded-xl font-semibold">
                <SvgIcon name="CircleInfo" className="w-5" />
                Payment details
              </div>
            </div>
            <form className="border-t p-4 grid grid-cols-2 gap-x-3 gap-y-4">
              <div className="col-span-1">
                <label htmlFor="payment_method" className="mb-2 block">
                  Payment method type
                </label>
                <div className="">
                  <Input type="text" name="" id="payment_method" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="card_number" className="mb-2 block">
                  Card number
                </label>
                <div className="">
                  <Input type="text" name="" id="card_number" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="expires" className="mb-2 block">
                  Expires
                </label>
                <div className="">
                  <Input type="text" name="" id="expires" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="cvv" className="mb-2 block">
                  CVV
                </label>
                <div className="">
                  <Input type="text" name="" id="cvv" />
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="country_region" className="mb-2 block">
                  Country/region
                </label>
                <div className="">
                  <Input type="text" name="" id="country_region" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="first_name" className="mb-2 block">
                  First name
                </label>
                <div className="">
                  <Input type="text" name="" id="first_name" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="last_name" className="mb-2 block">
                  Last name
                </label>
                <div className="">
                  <Input type="text" name="" id="last_name" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="address" className="mb-2 block">
                  Address
                </label>
                <div className="">
                  <Input type="text" name="" id="address" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="apartment" className="mb-2 block">
                  Apartment, suite, etc.
                </label>
                <div className="">
                  <Input type="text" name="" id="apartment" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="city" className="mb-2 block">
                  City
                </label>
                <div className="">
                  <Input type="text" name="" id="city" />
                </div>
              </div>
              <div className="col-span-1">
                <label htmlFor="province" className="mb-2 block">
                  Province
                </label>
                <div className="">
                  <Input type="text" name="" id="province" />
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="postal_code" className="mb-2 block">
                  Postal code
                </label>
                <div className="">
                  <Input type="text" name="" id="postal_code" />
                </div>
              </div>
            </form>
          </div>
        }
      />
    </>
  );
};

export const SourceCode = CreateSourceCodeStory(ModalSourceCode);
