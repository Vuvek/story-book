import React from 'react';
import { DisclosurePanel } from '@headlessui/react';
import Checkbox from '@/components/Checkbox/Checkbox';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { iFilterDropdownProps } from '../types';

const FilterDropdown: React.FC<iFilterDropdownProps> = ({
  filterOption,
  selectedFilters,
  handleCheckboxChange,
  handleInputChange,
  dateRange,
  setDateRange,
}) => {
  const [startDate, endDate] = dateRange;

  return (
    <DisclosurePanel className="px-2 py-4 border-b border-neutral-200 max-h-96 overflow-y-auto">
      {filterOption.type === 'select' && filterOption.value && (
        <div className="space-y-2">
          {filterOption.value.map((option, idx) => (
            <div key={idx} className="flex items-center space-x-1">
              <Checkbox
                checked={
                  selectedFilters[filterOption.id]?.includes(option) || false
                }
                onChange={() => handleCheckboxChange(filterOption.id, option)}
              />
              <span className="text-gray-600 text-sm">{option}</span>
            </div>
          ))}
        </div>
      )}
      {filterOption.type === 'date' && (
        <DatePicker
          selectsRange
          startDate={startDate!!}
          endDate={endDate!!}
          onChange={(update) => {
            const [start, end] = update;
            setDateRange([start, end]);
            if (start && end) {
              handleInputChange(filterOption.id, {
                start: format(start, 'MM/dd/yyyy'),
                end: format(end, 'MM/dd/yyyy'),
              });
            }
          }}
          className="w-full px-2 py-1 border border-neutral-200 rounded-md"
          placeholderText={`Select date range`}
        />
      )}
    </DisclosurePanel>
  );
};

export default FilterDropdown;
