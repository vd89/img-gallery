/* eslint-disable react/prop-types */
import DraggableArea from './DraggableArea';

function Gallery({ freeze }) {
  return (
    <section className='w-full pb-10rounded-lg shadow-2x1'>
      {/* add the Draggable area */}
      <DraggableArea freeze={freeze} />
    </section>
  );
}

export default Gallery;
