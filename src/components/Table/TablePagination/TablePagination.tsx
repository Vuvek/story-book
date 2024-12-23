import { FC } from 'react';
import TablePaginationDropdown from './TablePaginationDropdown';
import Pagination from '@/components/Pagination/Pagination';
import { iPaginationProps } from '../types';
import { PaginationOptions } from '@/utils/constants';
import SvgIcon from '@/components/SvgIcons/SvgIcon';

const TablePagination: FC<iPaginationProps> = ({
  totalCount,
  pageIndex,
  totalPages,
  pageSize,
  setTablePageSize,
  hasPreviousPage,
  hasNextPage,
  fetchData,
  hasPageSize,
}) => {
  return (
    <>
      {totalCount && totalCount > 0 ? (
        <div className="col-span-full p-5 sticky bottom-0 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div
              className="text-sm text-gray-500 text-center sm:text-left hidden"
              style={{ visibility: 'visible' }}
            >
              Showing
              <span className="font-medium text-gray-600">
                &nbsp;
                {pageIndex &&
                  pageSize &&
                  (pageIndex === 1 ? 1 : (pageIndex - 1) * pageSize + 1)}
              </span>
              &nbsp;to
              <span className="font-medium text-gray-600">
                &nbsp;
                {pageIndex && pageSize && pageIndex * pageSize <= totalCount
                  ? pageIndex * pageSize
                  : totalCount}
              </span>
              &nbsp;of
              <span className="font-medium text-gray-600">
                &nbsp;{totalCount}
              </span>
              &nbsp;results
            </div>
            {hasPageSize && (
              <>
                <div
                  className="text-sm text-gray-500 text-center sm:text-left "
                  style={{ visibility: 'visible' }}
                >
                  <TablePaginationDropdown
                    options={PaginationOptions}
                    value={pageSize!!}
                    onChangeHandler={(value: any) => setTablePageSize?.(value)}
                  />
                </div>
                <div className="ml-10">Total Records : {totalCount}</div>
              </>
            )}
            <div className="flex grow justify-end">
              <Pagination
                isPrevButtonDisabled={!hasPreviousPage}
                isNextButtonDisabled={!hasNextPage}
                onPreviousClick={() => fetchData?.(pageIndex!! - 1)}
                onNextClick={() => fetchData?.(pageIndex!! + 1)}
                leftIcon={<SvgIcon name="PaginationLeftArrow" />}
                rightIcon={<SvgIcon name="PaginationRightArrow" />}
                prevButtonClassName={`inline-flex items-center justify-center rounded leading-5 mr-2 p-1.5 ${
                  hasPreviousPage
                    ? 'bg-white border border-slate-200 text-slate-600 hover:bg-blue-500 hover:text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-300'
                }`}
                nextButtonClassName={`inline-flex items-center justify-center rounded leading-5 p-1.5 ml-2 ${
                  hasNextPage
                    ? 'bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-300'
                }`}
                className="mb-4 sm:mb-0 sm:order-1 flex ml-5"
              >
                <ul className="flex justify-center gap-1">
                  {(() => {
                    var count = 0;
                    var display = true;
                    return [...Array(totalPages)].map((elementInArray, i) => {
                      var index = i + 1;
                      var totalPage = totalPages;
                      if (totalPage && totalPage < 7) {
                        display = true;
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              fetchData?.(index);
                            }}
                            //   pk={index + 1}
                            className="cursor-pointer"
                          >
                            <span
                              className={`inline-flex items-center justify-center rounded leading-5 px-3.5 py-2 bg-white border border-slate-200 ${
                                pageIndex === index
                                  ? 'text-white !bg-blue-500'
                                  : 'hover:bg-blue-500  hover:text-white'
                              }`}
                            >
                              {i + 1}
                            </span>
                          </li>
                        );
                      }
                      if (
                        index === pageIndex!! - 1 ||
                        index === pageIndex ||
                        index === pageIndex!! + 1 ||
                        index === 0 ||
                        index === totalPage!! - 1 ||
                        (pageIndex === 0 && index === pageIndex + 2) ||
                        (pageIndex === totalPage!! - 1 &&
                          index === pageIndex - 2) ||
                        index === totalPage ||
                        index === 1
                      ) {
                        display = true;
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              fetchData?.(index);
                            }}
                            className="cursor-pointer"
                          >
                            <span
                              className={`inline-flex items-center justify-center rounded leading-5 px-3.5 py-2 bg-white border border-slate-200 ${
                                pageIndex === index
                                  ? 'text-white !bg-blue-500'
                                  : 'hover:bg-blue-500  hover:text-white'
                              }`}
                            >
                              {i + 1}
                            </span>
                          </li>
                        );
                      }
                      if (
                        index !== 0 &&
                        index !== totalPage!! - 1 &&
                        pageIndex!! - 1 !== pageIndex!! - 2 &&
                        count < 2 &&
                        display
                      ) {
                        display = false;
                        count++;
                        return (
                          <li key={index} className="cursor-pointer">
                            <span
                              className={`inline-flex items-center justify-center rounded leading-5 px-3.5 py-2 bg-white border border-slate-200 ${
                                pageIndex === index
                                  ? 'text-white !bg-blue-500'
                                  : ''
                              }`}
                            >
                              {'...'}
                            </span>
                          </li>
                        );
                      }
                      return '';
                    });
                  })()}
                </ul>
              </Pagination>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default TablePagination;
