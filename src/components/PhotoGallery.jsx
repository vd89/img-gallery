import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import ImageGrid from './ImageGrid';

const PhotoGallery = () => {
  const [freeze, setFreeze] = useState(false);
  const onReset = () => {
    location.reload();
  };

  const onAll = () => {
    setFreeze(!freeze);
  };
  return (
    <div>
      <Header />
      <ButtonGroup onReset={onReset} onAll={onAll} />
      <ImageGrid freeze={freeze} />
    </div>
  );
};

export default PhotoGallery;
