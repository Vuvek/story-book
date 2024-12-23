import React, { useState } from 'react';
import { iDropdownProps } from '../types';
import Collapsible from '../../Collapsible/Collapsible';
import Button from '../../Button/Button';
import SvgIcon from '../../SvgIcons/SvgIcon';

const TablePaginationDropdown: React.FC<iDropdownProps> = ({
  options,
  onChangeHandler,
  value,
}) => {
  const [selected, setSelected] = useState(
    value === 100 ? 2 : value === 50 ? 1 : 0
  );

  return (
    <div className="relative inline-flex w-full">
      <Collapsible
        trigger={
          <div className="flex items-center gap-3 py-2 px-4 bg-white border rounded-md border-neutral-200 hover:border-neutral-300 text-gray-500 hover:text-gray-600 cursor-pointer">
            <span className="flex items-center">
              <span>{options[selected]?.period}</span>
            </span>
            <SvgIcon name="ArrowDown" />
          </div>
        }
        contentClassName="absolute bottom-full left-0 w-full bg-white border border-neutral-200 py-1 rounded shadow-lg overflow-hidden mb-1 font-medium text-sm text-gray-500 divide-y divide-slate-200"
      >
        {options.map((option, index) => (
          <Button
            key={index}
            className={`flex items-center justify-between w-full hover:bg-slate-50 py-2 px-3 cursor-pointer ${
              selected === option.id ? 'text-indigo-500' : ''
            }`}
            onClick={() => {
              setSelected(option.id);
              onChangeHandler(option.value);
            }}
            type="button"
          >
            <span>{option.period}</span>
            <SvgIcon
              name="SuccessCheckmark"
              className={`shrink-0 mr-2 fill-current text-indigo-500 ${
                selected !== option.id && 'invisible'
              }`}
              width="20"
              height="20"
            />
          </Button>
        ))}
      </Collapsible>
    </div>
  );
};

export default TablePaginationDropdown;
