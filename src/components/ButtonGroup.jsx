import { Button } from 'flowbite-react';

const ButtonGroup = props => {

  const { onAll, onReset } = props;

  return (
    <div className='flex  justify-center'>
      <div className='gap-4 flex justify-evenly'>
        <Button outline color='green' onClick={onAll}>All</Button>
        <Button outline color='green' onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
