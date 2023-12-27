import { photos } from '../constants';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import ImageGrid from './ImageGrid';

const PhotoGallery = () => {
  const onReset = () => {
    if (localStorage.getItem('itemsArray') !== null) {
      localStorage.setItem('itemsArray', JSON.stringify(photos));
      location.reload();
    }
  };

  return (
    <div>
      <Header />
      <ButtonGroup onReset={onReset} />
      <ImageGrid />
    </div>
  );
};

export default PhotoGallery;
