 
import { DndContext, DragOverlay, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';

import { photos } from '../constants';
import DragItem from './DragItem';
import GridContainer from './GridContainer';
import { Sortable } from './Sortable';

const DraggableArea = () => {
  // set the data to the state
  const [items, setItems] = useState(null);
  // maintaining which image is dragging
  const [activeId, setActiveId] = useState(null);
  // maintaining which image is selected
  const [selectedImages, setSelectedImages] = useState([]);

  // handle the image selection and deselecting
  const handleSelect = index => {
    let selected = [...selectedImages];
    let unSelect = selected.indexOf(index);
    if (unSelect != -1) {
      selected.splice(unSelect, 1);
    } else {
      selected.push(index);
    }
    setSelectedImages(selected);
  };

  useEffect(() => {
    if (localStorage.getItem('itemsArray') !== null) {
      setItems(JSON.parse(localStorage.getItem('itemsArray')));
    } else {
      setItems(photos);
    }
    return () => {};
  }, []);

  // using mouse and touch sensor for drag and drop functionality
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  // handle dragstart event
  function handleDragStart(event) {
    // update active id
    setActiveId(event.active.id);
  }

  // handle dragend event
  function handleDragEnd(event) {
    const { active, over } = event;
    // update the the data after drag and drop
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        const updateArr = arrayMove(items, oldIndex, newIndex);
        localStorage.setItem('itemsArray', JSON.stringify(updateArr));
        return updateArr;
      });
    }
    // update active id
    setActiveId(null);
  }

  // handle the drag cancel  event
  function handleDragCancel() {
    // update active id
    setActiveId(null);
  }

  return (
    <>
      {/* call the header component and pass the props */}

      {/* DndContext is the main wrapper for the drag and drop */}
      {items && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          {/* SortableContext is wrapper for sortable items */}
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {/* call the grid layout for all the images */}

            <GridContainer>
              {/* mapping all data from items */}
              {items?.map((url, index) => (
                // return Sortable component for each data and passing important props
                <Sortable
                  key={index}
                  url={url}
                  index={index}
                  selectColor={
                    selectedImages.includes(url)
                      ? 'bg-[#ffffff8f] visible opacity-100'
                      : 'bg-[#82828283] invisible opacity-0'
                  }
                  // checked={selectedImages.includes(url) ? true : false}
                  onChangeFun={() => handleSelect(url)}
                />
              ))}
              {/* show the upload image component */}
            </GridContainer>
          </SortableContext>
          {/*drag overlay maintains that image which is dragging */}
          {/* <Freeze freeze={freeze} > */}
          <DragOverlay adjustScale={true}>
            {activeId ? <DragItem src={activeId} index={items.indexOf(activeId)} overlay={true} /> : null}
          </DragOverlay>
          {/* </Freeze> */}
        </DndContext>
      )}
    </>
  );
};

export default DraggableArea;
