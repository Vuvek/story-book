import { FC, useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { iColumn, iEditColumnProps } from '../types';
import Modal from '@/components/Modal/Modal';
import Checkbox from '@/components/Checkbox/Checkbox';
import SvgIcon from '@/components/SvgIcons/SvgIcon';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

const EditColumn: FC<iEditColumnProps> = (props) => {
  const [columns, setColumns] = useState<iColumn[]>([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize columns with all checked by default
    const initializedColumns = props.allColumns.map((column) => ({
      ...column,
      isVisible: column.isVisible ?? true, // Default to true if not already set
    }));
    setColumns(initializedColumns);
  }, [props.allColumns]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;

    const newColumnsOrder = Array.from(columns);
    const [movedColumn] = newColumnsOrder.splice(source.index, 1);
    newColumnsOrder.splice(destination.index, 0, movedColumn);

    setColumns(newColumnsOrder);
    props.changeColumnFormat(newColumnsOrder);
  };

  const handleColumnVisibilityChange = (columnId: string) => {
    const updatedColumns = columns.map((col) =>
      col.id === columnId ? { ...col, isVisible: !col.isVisible } : col
    );
    setColumns(updatedColumns);

    const hiddenColumns = updatedColumns
      .filter((col) => !col.isVisible)
      .map((col) => col.id);
    props.setHiddenColumns?.(hiddenColumns);
  };

  return (
    <>
      <Button
        onClick={toggleModal}
        className="flex items-center text-sm px-3 py-2 bg-white border border-neutral-200 text-gray-500 hover:text-gray-700 rounded-md shadow-sm"
      >
        <SvgIcon name="ViewColumns" />
        <span className="ml-1">Edit Columns</span>
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        header={<div className="font-semibold text-gray-800">Edit Columns</div>}
        content={
          <div className="px-5 pb-1">
            <div className="flex flex-wrap -mx-4">
              {/* Search and Checkbox List */}
              <div className="w-full lg:w-1/2 px-4 border-r border-gray-300">
                <div className="relative mb-4">
                  <Input
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search columns"
                    inputClassName="block w-full bg-[#f7f7fa] border-neutral-200 hover:border-neutral-300 focus:border-neutral-100 focus:ring-neutral-300 focus:shadow-lg rounded-md"
                  />
                </div>
                <ul>
                  {columns
                    .filter(
                      (column) =>
                        search === '' ||
                        column.id.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((column, index) => (
                      <li
                        key={index}
                        className={`py-1 px-3 ${column.disableShowHide && 'opacity-50'}`}
                      >
                        <label className="flex items-center">
                          <Checkbox
                            inputSize="small"
                            checked={column.isVisible}
                            onChange={() =>
                              handleColumnVisibilityChange(column.id)
                            }
                            disabled={column.disableShowHide}
                          />
                          <span className="text-sm font-medium ml-2">
                            {column.header}
                          </span>
                        </label>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Drag-and-Drop Column Order */}
              <div className="w-full lg:w-1/2 px-4">
                <DragDropContext onDragEnd={onDragEndHandler}>
                  <Droppable droppableId="columns" direction="vertical">
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="h-full overflow-auto"
                      >
                        {columns.map((column, index) => (
                          <Draggable
                            key={column.id}
                            draggableId={column.id}
                            index={index}
                            isDragDisabled={column.disableShowHide}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`py-1 px-2 border mt-2 flex items-center text-sm ${
                                  snapshot.isDragging
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-300 bg-white'
                                }`}
                              >
                                <SvgIcon name="DragIndicator" />
                                {column.header}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default EditColumn;
