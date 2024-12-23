import React from 'react';
import Input from '../../Input/Input';
import SvgIcon from '../../SvgIcons/SvgIcon';
import { iTableSearchProps } from '../types';

export const TableSearch: React.FC<iTableSearchProps> = ({
  setGlobalFilter,
  globalFilter,
}) => {
  return (
    <div className="flex-grow">
      <Input
        type="text"
        placeholder="Search..."
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        iconChildren={
          <div className="absolute left-3 top-2">
            <SvgIcon name="SearchIcon" />
          </div>
        }
        inputClassName="px-10"
      />
    </div>
  );
};
