import DraggableArea from './DraggableArea';

function Gallery() {
  return (
    <section className='w-full max-w-5xl pb-10 bg-white rounded-lg shadow-2x1'>
      {/* add the Draggable area */}
      <DraggableArea />
    </section>
  );
}

export default Gallery;
