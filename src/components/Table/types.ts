import { ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { ReactNode } from 'react';

// Interface for defining a single table column
export interface iTableColumn {
  id: string; // Unique identifier for the column
  accessorKey: string; // Key to access data in the row
  header?: any; // Custom header component or string
  cell?: any; // Custom cell component or string
  enableSorting?: boolean; // Whether sorting is enabled for the column
  filterFn?: any; // Custom filter function
}

// Interface for React Table properties
export interface iReactTableProps {
  COLUMNS: iTableColumn[]; // Array of column definitions
  DATA: any[]; // Array of data rows
  hasNextPage?: boolean; // Indicates if there is a next page for pagination
  hasPreviousPage?: boolean; // Indicates if there is a previous page for pagination
  pageIndex?: number; // Current page index
  pageSize?: number; // Number of rows per page
  totalCount?: number; // Total number of rows
  totalPages?: number; // Total number of pages
  fetchData?: (pageIndex?: number, pageSize?: number) => void; // Function to fetch data for a specific page
  setTablePageSize?: (size: number) => void; // Function to set the number of rows per page
  filteringOptions?: iFilterOption[]; // Array of filtering options
  setFilteringOptions?: React.Dispatch<React.SetStateAction<iFilterOption[]>>; // Function to update filtering options
  columnFilters?: ColumnFiltersState;
  setColumnFilters?: (value: React.SetStateAction<ColumnFiltersState>) => void;
  sortingOptions?: SortingState; // Current sorting state
  setSortingOptions?: React.Dispatch<React.SetStateAction<SortingState>>; // Function to update sorting state
  setSelectedRows?: React.Dispatch<React.SetStateAction<any[]>>; // Function to update selected rows
  selectedRows?: any[]; // Array of selected rows
  footer?: boolean; // Whether to display the table footer
  NoData?: ReactNode; // Custom component or message when no data is available
  displaySearch?: 'left' | 'center' | 'right'; // Position of the search bar
  hasPageSize?: boolean; // Whether to allow changing the page size
}

// Interface for Pagination properties
export interface iPaginationProps {
  totalCount?: number; // Total number of rows
  pageIndex?: number; // Current page index
  totalPages?: number; // Total number of pages
  pageSize?: number; // Number of rows per page
  setTablePageSize?: (value: number) => void; // Function to set the number of rows per page
  hasPreviousPage?: boolean; // Indicates if there is a previous page
  hasNextPage?: boolean; // Indicates if there is a next page
  fetchData?: (pageIndex?: number, pageSize?: number) => void; // Function to fetch data for a specific page
  hasPageSize?: boolean; // Whether to allow changing the page size
}

// Interface for Dropdown properties
export interface iDropdownProps {
  options: iOption[]; // Array of dropdown options
  onChangeHandler: (value: number) => void; // Function to handle selection changes
  value: number; // Currently selected value
}

// Interface for a single dropdown option
export interface iOption {
  id: number; // Unique identifier for the option
  period: string; // Label for the option
  value: number; // Value for the option
}

// Interface for Table Search properties
export interface iTableSearchProps {
  globalFilter: string; // Current global search value
  setGlobalFilter: (value: React.SetStateAction<string>) => void; // Function to update the global search value
}

// Interface for a table column with visibility control
export interface iColumn extends iTableColumn {
  isVisible?: boolean; // Whether the column is visible
  disableShowHide?: boolean; // Whether to disable show/hide toggle for the column
  getToggleHiddenProps?: () => void; // Function to get properties for toggling visibility
}

// Interface for editing table columns
export interface iEditColumnProps {
  allColumns: iColumn[]; // Array of all columns
  columns: iColumn[]; // Array of currently visible columns
  changeColumnFormat: (newColumnsOrder: iColumn[]) => void; // Function to update column order
  saveFilterOptionsHandler: () => void; // Function to save filter options
  setHiddenColumns?: (columns: string[]) => void; // Function to set hidden columns
}

// Interface for a single filter option
export interface iFilterOption {
  id: string; // Unique identifier for the filter
  label: string; // Label for the filter
  type: 'select' | 'date'; // Type of filter (select or date)
  value: any[] | null; // Current filter values
}

// Interface for Filter Modal properties
export interface iFilterModalProps {
  filteringOptions?: iFilterOption[]; // Array of filtering options
  columnFilters: ColumnFiltersState; // Current state of column filters
  setColumnFilters?: React.Dispatch<React.SetStateAction<ColumnFiltersState>>; // Function to update column filters
  onFiltersApply: (updatedFilters: any) => void; // Function to apply updated filters
}

// Interface for Filter Dropdown properties
export interface iFilterDropdownProps {
  filterOption: iFilterOption; // Filter option details
  selectedFilters: Record<string, any>; // Current selected filter values
  handleCheckboxChange: (filterId: string, option: string) => void; // Function to handle checkbox selection
  handleInputChange: (filterId: string, newValue: any) => void; // Function to handle input changes
  dateRange: [Date | null, Date | null]; // Current date range for date filters
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >; // Function to update the date range
}
