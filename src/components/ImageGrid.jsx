/* eslint-disable react/prop-types */
import Gallery from './Gallery';

const ImageGrid = ({ freeze }) => {
  return (
    <div className='grid items-center justify-center h-screen  '>
      <Gallery freeze={freeze} />
    </div>
  );
};

export default ImageGrid;
