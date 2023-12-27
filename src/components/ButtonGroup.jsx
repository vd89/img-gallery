/* eslint-disable react/prop-types */
import { Button } from 'flowbite-react';

const ButtonGroup = props => {
  const { onReset } = props;

  return (
    <div className='flex  justify-center'>
      <div className='gap-4 flex justify-evenly mt-5 mb-5'>
        <Button outline color='green' className='' onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
