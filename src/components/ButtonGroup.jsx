/* eslint-disable react/prop-types */
import { Button } from 'flowbite-react';

const ButtonGroup = props => {
  const { onAll, onReset } = props;

  return (
    <div className='flex  justify-center'>
      <div className='gap-4 flex justify-evenly mt-5'>
        <Button outline color='green' onClick={onAll}>
          Freeze
        </Button>
        <Button outline color='green' onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
