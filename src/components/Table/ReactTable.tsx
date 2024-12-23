import React, { useMemo, useState, FC, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  flexRender,
  ColumnFiltersState,
  Row,
} from '@tanstack/react-table';
import { iColumn, iReactTableProps, iTableColumn } from './types';
import SvgIcon from '../SvgIcons/SvgIcon';
import TablePagination from './TablePagination/TablePagination';
import Checkbox from '../Checkbox/Checkbox';
import { TableSearch } from './Filters/TableSearch';
import EditColumn from './Filters/EditColumns';
import TableFilter from './Filters/TableFilter';
import { isWithinInterval, parse } from 'date-fns';

const ReactTable: FC<iReactTableProps> = ({
  COLUMNS,
  DATA,
  pageIndex = 1,
  pageSize = 25,
  totalCount = 50,
  totalPages = Math.ceil(totalCount / pageSize),
  hasPreviousPage,
  hasNextPage,
  setTablePageSize,
  filteringOptions,
  setFilteringOptions,
  columnFilters = [],
  setColumnFilters,
  sortingOptions,
  setSortingOptions,
  selectedRows,
  setSelectedRows,
  fetchData,
  hasPageSize = true,
  displaySearch = 'left',
  NoData,
}) => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    COLUMNS.map((col) => col.id)
  );

  const handleColumnFormatChange = (newColumnsOrder: iColumn[]) => {
    const newVisibleColumns = newColumnsOrder
      .filter((col) => col.isVisible)
      .map((col) => col.id);
    setVisibleColumns(newVisibleColumns);
  };

  const customDateFilter = (
    row: Row<any>,
    columnId: string,
    filterValue: { start: string; end: string },
    addMeta: (meta: any) => void
  ) => {
    const { start, end } = filterValue;
    if (!start || !end) return true;

    const rawDate: any = row.getValue(columnId);

    // Parse the date using the known format
    const rowDate = rawDate
      ? parse(rawDate, 'MM/dd/yyyy hh:mm a', new Date())
      : null;

    if (!rowDate || isNaN(rowDate.getTime())) {
      console.error(`Invalid date for column ${columnId}:`, rawDate);
      return false;
    }

    const isValid = isWithinInterval(rowDate, {
      start: parse(start, 'MM/dd/yyyy', new Date()),
      end: parse(end, 'MM/dd/yyyy', new Date()),
    });

    addMeta?.({
      start,
      end,
    });

    return isValid;
  };

  const handleApplyFilters = (updatedFilters: ColumnFiltersState) => {
    setColumnFilters?.(updatedFilters);
  };
  console.log('columnFilters', columnFilters);

  const columns: iTableColumn[] = useMemo(() => {
    const checkboxColumn: iTableColumn = {
      id: 'rowSelection',
      accessorKey: 'rowSelection',
      header: ({ table }: any) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: any) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
    };

    // Reorder COLUMNS based on visibleColumns
    const reorderedColumns: iTableColumn[] = visibleColumns
      .map((visibleColumnId) =>
        COLUMNS.find((column) => column.id === visibleColumnId)
      )
      .filter(Boolean) as iTableColumn[];

    // Add sorting logic for each column
    const sortedColumns = reorderedColumns.map((column) => ({
      ...column,
      enableSorting: sortingOptions?.some(
        (sortField) => sortField.id === column.id
      ),
    }));

    return [checkboxColumn, ...sortedColumns];
  }, [COLUMNS, visibleColumns, sortingOptions]);

  const data = useMemo(() => DATA, [DATA, columnFilters]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      sorting,
      globalFilter,
      rowSelection,
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      customDateFilter,
    },
    manualPagination: true,
  });

  useEffect(() => {
    const selectedData = table
      .getSelectedRowModel()
      .rows.map((row) => row.original);
    setSelectedRows?.(selectedData);
  }, [rowSelection, table]);

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center space-x-3 mb-4 p-3 pb-0">
        {displaySearch === 'left' && (
          <TableSearch
            setGlobalFilter={setGlobalFilter}
            globalFilter={globalFilter}
          />
        )}
        <div className="flex space-x-2">
          <EditColumn
            allColumns={COLUMNS}
            columns={COLUMNS.map((col) => ({
              ...col,
              isVisible: visibleColumns.includes(col.id),
            }))}
            changeColumnFormat={handleColumnFormatChange}
            saveFilterOptionsHandler={() => {}}
            setHiddenColumns={(hiddenColumns) =>
              setVisibleColumns(
                COLUMNS.map((col) =>
                  hiddenColumns.includes(col.id) ? '' : col.id
                ).filter(Boolean)
              )
            }
          />
          <TableFilter
            filteringOptions={filteringOptions}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            onFiltersApply={handleApplyFilters}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-[#191919]">
          <thead className="border-b bg-neutral-50 dark:bg-dark-body-bg capitalize text-xs font-semibold text-tertiary-dark dark:text-tertiary-light">
            {table.getHeaderGroups().map((headerGroup: any) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <th key={header.id} className="px-2 first:pl-5 py-4">
                    <div className="font-semibold text-left flex items-center">
                      <div
                        onClick={header.column.getToggleSortingHandler()}
                        className="flex items-center cursor-pointer"
                      >
                        {header.isPlaceholder ? null : (
                          <>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </>
                        )}
                        {sortingOptions?.some(
                          (sortField) => sortField.id === header.column.id
                        ) && <SvgIcon name="TableSortIcon" />}
                        {header.column.getIsSorted() === 'asc' && ' 🔼'}
                        {header.column.getIsSorted() === 'desc' && ' 🔽'}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="text-sm divide-y divide-slate-200">
            {table.getRowModel().rows.map((row: any) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell: any) => (
                  <td key={cell.id} className="px-2 first:pl-5 py-3">
                    <>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {table.getRowModel().rows.length === 0 && (
          <p className="flex justify-center items-center p-5 text-red-600">
            {NoData || 'No data available'}
          </p>
        )}
      </div>

      {totalCount > 0 && (
        <TablePagination
          totalCount={totalCount}
          pageSize={pageSize}
          totalPages={totalPages}
          pageIndex={pageIndex}
          setTablePageSize={setTablePageSize}
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
          hasPageSize={hasPageSize}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default ReactTable;
