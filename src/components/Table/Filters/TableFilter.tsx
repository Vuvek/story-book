import React, { FC, useEffect, useState } from 'react';
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import Button from '@/components/Button/Button';
import SvgIcon from '@/components/SvgIcons/SvgIcon';
import { iFilterModalProps } from '../types';
import FilterDropdown from './FilterDropdown';
import 'react-datepicker/dist/react-datepicker.css';

const TableFilter: FC<iFilterModalProps> = ({
  filteringOptions,
  columnFilters,
  setColumnFilters,
  onFiltersApply,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: any;
  }>({});
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const initialFilters: { [key: string]: any } = {};
    filteringOptions?.forEach((filter) => {
      if (filter.type === 'select') initialFilters[filter.id] = [];
      else initialFilters[filter.id] = null;
    });
    setSelectedFilters(initialFilters);
  }, [filteringOptions]);

  const handleCheckboxChange = (filterId: string, option: string) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[filterId] || [];
      const updatedValues = currentValues.includes(option)
        ? currentValues.filter((v: string) => v !== option)
        : [...currentValues, option];
      return { ...prev, [filterId]: updatedValues };
    });
  };

  const handleInputChange = (filterId: string, newValue: any) => {
    setSelectedFilters((prev) => ({ ...prev, [filterId]: newValue }));
  };

  const resetFilters = () => {
    const initialFilters: { [key: string]: any } = {};
    filteringOptions?.forEach((filter) => {
      if (filter.type === 'select') initialFilters[filter.id] = [];
      else initialFilters[filter.id] = null;
    });
    setSelectedFilters(initialFilters);
    setColumnFilters?.([]);
    setDateRange([null, null]);
  };

  const handleApply = () => {
    const updatedFilters = filteringOptions
      ?.map((filter) => ({
        id: filter.id,
        value: selectedFilters[filter.id],
      }))
      .filter(
        (filter) =>
          filter.value &&
          (!Array.isArray(filter.value) || filter.value.length > 0)
      );
    onFiltersApply(updatedFilters);
    setIsFilterModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsFilterModalOpen(true)}
        className="flex items-center text-sm px-3 py-2 bg-white border border-neutral-200 text-gray-500 hover:text-gray-700 rounded-md shadow-sm"
      >
        <SvgIcon name="TableFilter" />
        <span className="ml-1">Filters</span>
        <span>({columnFilters.length})</span>
      </Button>
      <Transition show={isFilterModalOpen}>
        <div>
          <TransitionChild
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed h-screen right-80 left-0 top-0 bg-black opacity-60 z-50"
              onClick={() => setIsFilterModalOpen(false)}
            />
          </TransitionChild>
          <TransitionChild
            enter="transition-opacity ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog
              open={isFilterModalOpen}
              onClose={() => setIsFilterModalOpen(false)}
              className="fixed h-screen top-0 right-0 w-full max-w-xs bg-white border-l border-neutral-200 overflow-hidden overflow-y-auto z-50"
            >
              <div className="flex flex-col h-screen">
                <div className="flex flex-wrap justify-between items-center p-3 border-b">
                  <h3 className="text-md font-medium">
                    <span className="mr-1">Filter Options</span>
                    <span>({columnFilters.length})</span>
                  </h3>
                  <button
                    onClick={() => setIsFilterModalOpen(false)}
                    className="h-6 w-6 text-gray-500 hover:text-gray-700"
                  >
                    <SvgIcon name="CrossIcon" />
                  </button>
                </div>
                <div className="flex flex-col overflow-y-auto">
                  {filteringOptions?.map((filterOption) => (
                    <Disclosure key={filterOption.id}>
                      {({ open }) => (
                        <div>
                          <DisclosureButton className="flex justify-between items-center w-full py-2 px-4 border-b border-neutral-200 text-gray-600">
                            <span className="text-sm">
                              {filterOption.label}
                            </span>
                            <span>
                              {open ? (
                                <SvgIcon name="ArrowUp" />
                              ) : (
                                <SvgIcon name="ArrowDown" />
                              )}
                            </span>
                          </DisclosureButton>
                          <FilterDropdown
                            filterOption={filterOption}
                            selectedFilters={selectedFilters}
                            handleCheckboxChange={handleCheckboxChange}
                            handleInputChange={handleInputChange}
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                          />
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </div>
                <div className="py-2 px-3 bg-slate-50">
                  <div className="flex justify-between">
                    <Button
                      onClick={() => {
                        resetFilters();
                        setIsFilterModalOpen(false);
                      }}
                      className="bg-white border border-neutral-200 text-gray-500 hover:text-gray-700 px-5 py-1 rounded-md"
                    >
                      Clear
                    </Button>
                    <Button
                      onClick={handleApply}
                      className="bg-indigo-500 text-white hover:bg-indigo-600 px-5 py-1 rounded-md"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </Dialog>
          </TransitionChild>
        </div>
      </Transition>
    </>
  );
};

export default TableFilter;
