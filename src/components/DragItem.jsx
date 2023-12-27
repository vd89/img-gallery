/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */

import { forwardRef } from 'react';
import Image from './Image';

const DragItem = forwardRef(({ src, alt, faded, style, isDragging, ...props }, ref) => {
  // some initial CSS
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    ...style,
  };

  return (
    <div
      ref={ref}
      style={inlineStyles}
      {...props}
      className='relative overflow-hidden border-4 rounded-lg cursor-move group first:col-span-2 first:row-span-2 first:w-full first:h-full '
    >
      {/* call image layout and passing props */}
      <Image width={900} height={900} isDragging={isDragging} src={src} alt={alt} />
    </div>
  );
});
export default DragItem;
