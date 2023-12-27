 
import DraggableArea from './DraggableArea';

function Gallery() {
  return (
    <section className='w-full pb-10rounded-lg shadow-2x1'>
      {/* add the Draggable area */}
      <DraggableArea />
    </section>
  );
}

export default Gallery;
