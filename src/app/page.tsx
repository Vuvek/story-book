'use client';
import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import ReactTable from '@/components/Table/ReactTable';
import Tab from '@/components/Tab/Tab';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import SvgIcon from '@/components/SvgIcons/SvgIcon';
import { formatDateTime } from '@/utils/helpers';
import Collapsible from '@/components/Collapsible/Collapsible';
import Avatar from '@/components/Avatar/Avatar';
import { iFilterOption, iTableColumn } from '@/components/Table/types';
import ProductImageDummy from '@images/dummy.jpg';
import { ColumnFiltersState } from '@tanstack/react-table';

export default function Home() {
  const [sidebarOpen, setSideBarOpen] = useState<boolean>(true);

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
  const [paginationData, setPaginationData] = useState({
    pageIndex: 1,
    pageSize: 25,
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
    <div>
      <Header
        navigationLinks={[
          { label: 'Team', href: '#' },
          { label: 'Enterprise', href: '#' },
          { label: 'Explore', href: '#' },
          { label: 'Marketplace', href: '#' },
          { label: 'Pricing', href: '#' },
        ]}
        profileOptions={[
          { label: 'Profile', href: '#' },
          { label: 'User', href: '#' },
          { label: 'Logs', href: '#' },
          { label: 'Sign out', href: '#', isSignOut: true },
        ]}
        user={{
          name: 'Umang Patel',
          role: 'Super Admin',
        }}
        handleBurgerMenuClick={() => setSideBarOpen(!sidebarOpen)}
        handleNavigation={(path: string) => {}}
      />

      <Sidebar
        isFilterModalOpen={sidebarOpen}
        setIsFilterModalOpen={setSideBarOpen}
        position="left"
        content={
          <div className="bg-neutral-50 dark:bg-dark-body-bg max-md:mr-16 flex w-64 md:w-72 flex-1 h-full md:p-6 px-4 py-3">
            <div className="w-full flex grow flex-col gap-y-5 overflow-y-auto">
              <nav className="flex w-full flex-1 flex-col">
                <ul id="topiclinks" role="list" className="space-y-1 menu">
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavDashboard" /> Dashboard{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavMasterProductFeed" /> Master
                        Product Feed{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavStores" /> Stores{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavContentManagement" /> Content
                        Management{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavCustomers" /> Customers{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavPromotions" /> Promotions{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavOrders" /> Orders{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavSettings" /> Settings{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="SidebarNavAdminTheme" /> Admin Theme{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="Settings" /> Google Analytics{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group items-center flex justify-between hover:cursor-pointer rounded-lg px-4 py-2.5 text-xs font-bold text-tertiary-dark dark:text-tertiary-light hover:bg-gray-default dark:hover:bg-gray-dark hover:text-primary-light dark:hover:text-primary-dark [&amp;.active]:bg-gray-default dark:[&amp;.active]:bg-gray-dark [&amp;.active]:text-primary-light dark:[&amp;.active]:text-primary-dark">
                      <span className="flex gap-x-3 items-center">
                        <SvgIcon name="Settings" /> Reports{' '}
                      </span>
                      <span>
                        <SvgIcon name="ArrowDown" className="size-5" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        }
      />

      <div
        id="RightContent"
        className="transition-all duration-500 lg:pl-[296px]"
      >
        <main className="">
          <div>
            <div className="flex items-center justify-between border-b border-gray-light dark:border-gray-dark lg:p-6 p-4">
              <div className="flex items-center xl:text-base text-sm text-secondary-dark dark:text-secondary-light font-bold">
                <span
                  className="rounded-lg bg-white dark:bg-dark-body-bg w-8
                      h-8 md:w-12 md:h-12 flex items-center justify-center
                      border border-gray-light dark:border-gray-dark mr-2
                      md:mr-4"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5.5 9.5H8.5V19.5H5.5V9.5ZM5.5 4.5H8.5V8.5H5.5V4.5ZM15.5 15.5H18.5V19.5H15.5V15.5ZM15.5 12.5H18.5V14.5H15.5V12.5ZM10.5 12.5H13.5V19.5H10.5V12.5ZM10.5 8.5H13.5V11.5H10.5V8.5Z"
                      fill="#CCCCCC"
                    />
                  </svg>{' '}
                </span>
                Master Product Feed
              </div>
              <Button className="btn btn-primary dark:btn-dark-primary">
                Add Product
              </Button>
            </div>

            <div className="w-full xl:py-10 xl:px-[88px] py-6 px-6">
              <div className="w-full flex flex-wrap mb-6 border-b border-gray-light dark:border-gray-dark">
                <Tab
                  items={[
                    {
                      name: 'All',
                      content: (
                        <ReactTable
                          DATA={tableData}
                          COLUMNS={sampleColumns}
                          pageIndex={paginationData.pageIndex}
                          pageSize={paginationData.pageSize}
                          setTablePageSize={(value) => {
                            setPaginationDataFunc('pageSize', value);
                          }}
                          sortingOptions={[
                            { id: 'productName', desc: false },
                            { id: 'ourCost', desc: false },
                            { id: 'salePrice', desc: false },
                          ]}
                          setSortingOptions={(newSorting) =>
                            console.log('Sorting changed:', newSorting)
                          }
                          footer={false}
                          NoData={'No rows found'}
                          totalCount={paginationData.totalCount}
                          columnFilters={columnFilters}
                          setColumnFilters={setColumnFilters}
                          hasPreviousPage={paginationData.hasPreviousPage}
                          hasNextPage={paginationData.hasNextPage}
                          fetchData={fetchData}
                          filteringOptions={filteringOptions}
                          setFilteringOptions={setFilteringOptions}
                        />
                      ),
                    },
                    {
                      name: 'Active',
                      content: (
                        <ReactTable
                          DATA={tableData}
                          COLUMNS={sampleColumns}
                          pageIndex={paginationData.pageIndex}
                          pageSize={paginationData.pageSize}
                          setTablePageSize={(value) => {
                            setPaginationDataFunc('pageSize', value);
                          }}
                          sortingOptions={[
                            { id: 'productName', desc: false },
                            { id: 'ourCost', desc: false },
                            { id: 'salePrice', desc: false },
                          ]}
                          setSortingOptions={(newSorting) =>
                            console.log('Sorting changed:', newSorting)
                          }
                          footer={false}
                          NoData={'No rows found'}
                          totalCount={paginationData.totalCount}
                          columnFilters={columnFilters}
                          setColumnFilters={setColumnFilters}
                          hasPreviousPage={paginationData.hasPreviousPage}
                          hasNextPage={paginationData.hasNextPage}
                          fetchData={fetchData}
                          filteringOptions={filteringOptions}
                          setFilteringOptions={setFilteringOptions}
                        />
                      ),
                    },
                    {
                      name: 'Inactive',
                      content: (
                        <ReactTable
                          DATA={tableData}
                          COLUMNS={sampleColumns}
                          pageIndex={paginationData.pageIndex}
                          pageSize={paginationData.pageSize}
                          setTablePageSize={(value) => {
                            setPaginationDataFunc('pageSize', value);
                          }}
                          sortingOptions={[
                            { id: 'productName', desc: false },
                            { id: 'ourCost', desc: false },
                            { id: 'salePrice', desc: false },
                          ]}
                          setSortingOptions={(newSorting) =>
                            console.log('Sorting changed:', newSorting)
                          }
                          footer={false}
                          NoData={'No rows found'}
                          totalCount={paginationData.totalCount}
                          columnFilters={columnFilters}
                          setColumnFilters={setColumnFilters}
                          hasPreviousPage={paginationData.hasPreviousPage}
                          hasNextPage={paginationData.hasNextPage}
                          fetchData={fetchData}
                          filteringOptions={filteringOptions}
                          setFilteringOptions={setFilteringOptions}
                        />
                      ),
                    },
                    {
                      name: 'Staging',
                      content: (
                        <ReactTable
                          DATA={tableData}
                          COLUMNS={sampleColumns}
                          pageIndex={paginationData.pageIndex}
                          pageSize={paginationData.pageSize}
                          setTablePageSize={(value) => {
                            setPaginationDataFunc('pageSize', value);
                          }}
                          sortingOptions={[
                            { id: 'productName', desc: false },
                            { id: 'ourCost', desc: false },
                            { id: 'salePrice', desc: false },
                          ]}
                          setSortingOptions={(newSorting) =>
                            console.log('Sorting changed:', newSorting)
                          }
                          footer={false}
                          NoData={'No rows found'}
                          totalCount={paginationData.totalCount}
                          columnFilters={columnFilters}
                          setColumnFilters={setColumnFilters}
                          hasPreviousPage={paginationData.hasPreviousPage}
                          hasNextPage={paginationData.hasNextPage}
                          fetchData={fetchData}
                          filteringOptions={filteringOptions}
                          setFilteringOptions={setFilteringOptions}
                        />
                      ),
                    },
                    {
                      name: 'Draft',
                      content: (
                        <ReactTable
                          DATA={tableData}
                          COLUMNS={sampleColumns}
                          pageIndex={paginationData.pageIndex}
                          pageSize={paginationData.pageSize}
                          setTablePageSize={(value) => {
                            setPaginationDataFunc('pageSize', value);
                          }}
                          sortingOptions={[
                            { id: 'productName', desc: false },
                            { id: 'ourCost', desc: false },
                            { id: 'salePrice', desc: false },
                          ]}
                          setSortingOptions={(newSorting) =>
                            console.log('Sorting changed:', newSorting)
                          }
                          footer={false}
                          NoData={'No rows found'}
                          totalCount={paginationData.totalCount}
                          columnFilters={columnFilters}
                          setColumnFilters={setColumnFilters}
                          hasPreviousPage={paginationData.hasPreviousPage}
                          hasNextPage={paginationData.hasNextPage}
                          fetchData={fetchData}
                          filteringOptions={filteringOptions}
                          setFilteringOptions={setFilteringOptions}
                        />
                      ),
                    },
                  ]}
                  tabListClass={'flex gap-2 px-3 text-quaternary-dark'}
                  tabClass={
                    'tag-button cursor-pointer block text-sm font-bold pb-2 px-2 lg:pb-8 lg:px-6 hover:text-primary-light hover:border-b hover:border-primary-light'
                  }
                  activeTabClass={
                    'active tag-button cursor-pointer block text-sm font-bold pb-2 px-2 lg:pb-8 lg:px-6 hover:text-primary-light hover:border-b hover:border-primary-light text-primary-light border-b border-primary-light outline-none'
                  }
                  panelsWrapperClass="w-full mt-6"
                  parentClass="w-full"
                  tabPanelClass="rounded-lg border border-gray-light dark:border-gray-dark w-full overflow-auto md:overflow-x-auto md:max-w-full"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
