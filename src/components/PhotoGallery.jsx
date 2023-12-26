import { Card } from 'flowbite-react';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import ImageGrid from './ImageGrid';

const PhotoGallery = () => {
  const onReset = () => {
    console.log('onReset');
  };

  const onAll = () => {
    console.log('onAllClick');
  };
  return (
    <Card className='flex'>
      <Header />
      <ButtonGroup onReset={onReset} onAll={onAll} />
      <ImageGrid />
    </Card>
  );
};

export default PhotoGallery;
