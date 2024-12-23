import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ReactTable from './ReactTable';
import { iFilterOption, iReactTableProps, iTableColumn } from './types';
import { CreateSourceCodeStory, formatDateTime } from '@/utils/helpers';
import ReactTableSourceCode from '!!raw-loader!./ReactTable';
import { ColumnFiltersState } from '@tanstack/react-table';
import SvgIcon from '../SvgIcons/SvgIcon';
import ProductImageDummy from '@images/dummy.jpg';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Collapsible from '../Collapsible/Collapsible';

export default {
  title: 'Components/ReactTable',
  component: ReactTable,
  tags: ['autodocs'],
  argTypes: {
    COLUMNS: {
      description: 'Array of column definitions for the table.',
    },
    DATA: {
      description: 'Array of row data to populate the table.',
    },
    sortingOptions: {
      description: 'Array defining the sorting configuration for the table.',
      control: { type: 'object' },
    },
    setSortingOptions: {
      description: 'Callback to update the sorting configuration.',
    },
    pageIndex: {
      description: 'Current page index of the table.',
      control: { type: 'number' },
    },
    pageSize: {
      description: 'Number of rows displayed per page.',
      control: { type: 'number' },
    },
    totalCount: {
      description: 'Total number of rows available in the dataset.',
      control: { type: 'number' },
    },
    hasPreviousPage: {
      description: 'Indicates whether there is a previous page available.',
      control: { type: 'boolean' },
    },
    hasNextPage: {
      description: 'Indicates whether there is a next page available.',
      control: { type: 'boolean' },
    },
    setTablePageSize: {
      description: 'Callback to set the number of rows displayed per page.',
    },
    filteringOptions: {
      description: 'Array of filter options for the table.',
      control: { type: 'object' },
    },
    setFilteringOptions: {
      description: 'Callback to update the filtering options.',
    },
    footer: {
      description: 'Boolean to toggle the visibility of the table footer.',
      control: { type: 'boolean' },
    },
    NoData: {
      description:
        'Custom message or component to display when no data is available.',
    },
    displaySearch: {
      description: 'Position of the search bar in the table.',

      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
    fetchData: {
      description:
        'Callback to fetch data for the table, typically used in pagination.',
    },
  },
} as Meta<iReactTableProps>;

/// Updated column definitions with additional columns
const sampleColumns: iTableColumn[] = [
  {
    id: 'productImage',
    accessorKey: 'productImage',
    header: 'Product Image',
    cell: (props: any) => (
      <div className="w-10 h-10">
        <Avatar image={ProductImageDummy} />
      </div>
    ),
  },
  { id: 'productName', accessorKey: 'productName', header: 'Product Name' },
  { id: 'ourSku', accessorKey: 'ourSku', header: 'Our SKU' },
  { id: 'vendorSku', accessorKey: 'vendorSku', header: 'Vendor SKU' },
  {
    id: 'brandName',
    accessorKey: 'brandName',
    header: 'Brand Name',
    filterFn: 'arrIncludesSome',
  },
  {
    id: 'vendorName',
    accessorKey: 'vendorName',
    header: 'Vendor Name',
    filterFn: 'arrIncludesSome',
  },
  { id: 'ourCost', accessorKey: 'ourCost', header: 'Our Cost ($)' },
  { id: 'imap', accessorKey: 'imap', header: 'IMAP ($)' },
  { id: 'salePrice', accessorKey: 'salePrice', header: 'Sale Price ($)' },
  {
    id: 'createdDate',
    accessorKey: 'createdDate',
    header: 'Created Date',
    filterFn: 'customDateFilter',
    cell: (props: any) => (
      <div className="whitespace-pre">{props.getValue()}</div>
    ),
  },
  {
    id: 'createdBy',
    accessorKey: 'createdBy',
    header: 'Created By',
    filterFn: 'arrIncludesSome',
  },
  {
    id: 'updatedDate',
    accessorKey: 'updatedDate',
    header: 'Updated Date',
    filterFn: 'customDateFilter',
    cell: (props: any) => (
      <div className="whitespace-pre">{props.getValue()}</div>
    ),
  },
  {
    id: 'updatedBy',
    accessorKey: 'updatedBy',
    header: 'Updated By',
    filterFn: 'arrIncludesSome',
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: 'Status',
    filterFn: 'arrIncludesSome',
    cell: (props: any) => {
      const status = props.getValue();
      const statusClasses: any = {
        Active: 'bg-green-200 text-green-600',
        Staging: 'bg-yellow-200 text-yellow-600',
        Inactive: 'bg-red-200 text-red-600',
        Draft: 'bg-gray-200 text-gray-600',
      };
      return (
        <span
          className={`rounded-full px-3 py-1 text-[8px] ${
            statusClasses[status] || ''
          } text-center block font-extrabold uppercase tracking-widest`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: 'action',
    accessorKey: 'action',
    header: 'Action',
    cell: () => (
      <div className="flex gap-2 items-center">
        <SvgIcon
          name="Edit"
          className="hover:cursor-pointer"
          height={22}
          width={22}
        />
        <SvgIcon
          name="Trash"
          className="hover:cursor-pointer"
          height={22}
          width={22}
        />
        <Collapsible
          trigger={
            <SvgIcon
              name="EllipsisVertical"
              className="hover:cursor-pointer size-7 mt-2"
            />
          }
          className="relative"
          contentClassName="absolute top-10 right-0"
        >
          <div className="z-10 border bg-white border-gray-light dark:border-gray-dark dark:bg-dark-body-bg rounded-md p-0 w-36 text-left divide-y divide-gray-light dark:divide-gray-dark overflow-hidden relative">
            <a className="group items-center flex hover:cursor-pointer justify-between rounded-lg px-2 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark">
              <span className="flex gap-x-3 items-center">
                <SvgIcon width={24} height={24} name="EyeClosed" /> Inactive
              </span>
            </a>
            <a className="group items-center hover:cursor-pointer flex justify-between px-2 py-2 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark">
              <span className="flex gap-x-3 items-center">
                <SvgIcon name="CopyIcon" width={24} height={24} /> Clone
              </span>
            </a>
            <a className="group items-center hover:cursor-pointer flex justify-between px-2 py-2 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark">
              <span className="flex gap-x-3 items-center">
                <SvgIcon name="HistoryIcon" width={24} height={24} /> History
              </span>
            </a>
          </div>
        </Collapsible>
      </div>
    ),
  },
];

// Updated sample data
const fullData = Array.from({ length: 50 }, (_, i) => {
  const createdAt = new Date();
  createdAt.setDate(createdAt.getDate() - i);
  const updatedAt = new Date();
  updatedAt.setDate(updatedAt.getDate() - (i % 5));

  return {
    productImage: 'images/dummy.jpg',
    productName: `Product ${i + 1}`,
    ourSku: `SKU${1000 + i}`,
    vendorSku: `VSKU${2000 + i}`,
    brandName: `Brand ${(i % 5) + 1}`,
    vendorName: `Vendor ${(i % 3) + 1}`,
    ourCost: `$${(80 + i * 8).toFixed(2)}`,
    imap: `$${(90 + i * 9).toFixed(2)}`,
    salePrice: `$${(95 + i * 5).toFixed(2)}`,
    createdDate: formatDateTime(createdAt),
    updatedDate: formatDateTime(updatedAt),
    createdBy: `User ${(i % 5) + 1}`,
    updatedBy: `Admin ${(i % 3) + 1}`,
    status: ['Active', 'Staging', 'Inactive', 'Draft'][i % 4],
  };
});

const uniqueValues = (key: string) => {
  return Array.from(new Set(fullData.map((item: any) => item[key])));
};

const Template: StoryFn<iReactTableProps> = (args) => {
  const [paginationData, setPaginationData] = useState({
    pageIndex: 1,
    pageSize: args.pageSize || 25,
    totalCount: fullData.length,
    hasPreviousPage: false,
    hasNextPage: true,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [tableData, setTableData] = useState(
    fullData.slice(
      (paginationData.pageIndex - 1) * paginationData.pageSize,
      paginationData.pageIndex * paginationData.pageSize
    )
  );

  const setPaginationDataFunc = (key: string, value: any) => {
    setPaginationData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    if (key === 'pageSize') fetchData(1, value);
  };

  const [filteringOptions, setFilteringOptions] = useState<iFilterOption[]>([
    {
      id: 'brandName',
      label: 'Brand Name',
      type: 'select',
      value: uniqueValues('brandName'),
    },
    {
      id: 'vendorName',
      label: 'Vendor Name',
      type: 'select',
      value: uniqueValues('vendorName'),
    },
    {
      id: 'createdBy',
      label: 'Created By',
      type: 'select',
      value: uniqueValues('createdBy'),
    },
    {
      id: 'updatedBy',
      label: 'Updated By',
      type: 'select',
      value: uniqueValues('updatedBy'),
    },
    { id: 'createdDate', label: 'Created Date', type: 'date', value: null },
    { id: 'updatedDate', label: 'Updated Date', type: 'date', value: null },
    {
      id: 'status',
      label: 'Status',
      type: 'select',
      value: uniqueValues('status'),
    },
  ]);

  const fetchData = (pageIndex: number = 1, pageSize: number = 25) => {
    const start = (pageIndex - 1) * pageSize;
    const end = start + pageSize;
    const newPageData = fullData.slice(start, end);
    setPaginationData((prev) => ({
      ...prev,
      pageIndex,
      hasPreviousPage: pageIndex > 1,
      hasNextPage: end < fullData.length,
    }));
    setTableData(newPageData);
  };

  return (
    <ReactTable
      {...args}
      DATA={args.DATA || tableData}
      pageIndex={paginationData.pageIndex}
      pageSize={paginationData.pageSize}
      setTablePageSize={(value) => {
        setPaginationDataFunc('pageSize', value);
      }}
      totalCount={
        args.totalCount !== undefined
          ? args.totalCount
          : paginationData.totalCount
      }
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      hasPreviousPage={paginationData.hasPreviousPage}
      hasNextPage={paginationData.hasNextPage}
      fetchData={fetchData}
      filteringOptions={filteringOptions}
      setFilteringOptions={setFilteringOptions}
    />
  );
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  COLUMNS: sampleColumns,
  sortingOptions: [
    { id: 'productName', desc: false },
    { id: 'ourCost', desc: false },
    { id: 'salePrice', desc: false },
  ],
  setSortingOptions: (newSorting) =>
    console.log('Sorting changed:', newSorting),
  footer: false,
  NoData: 'No rows found',
};

export const NoDataState: StoryFn = (args) => {
  return (
    <ReactTable
      {...args}
      COLUMNS={sampleColumns}
      DATA={[]}
      totalCount={0}
      NoData={'No data available'}
    />
  );
};

export const SourceCode = CreateSourceCodeStory(ReactTableSourceCode);
