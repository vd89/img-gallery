/* eslint-disable react/prop-types */
function GridContainer({ children }) {
  return <div className='grid w-full md:grid-cols-6 gap-4 px-3 sm:px-10 sm:grid-cols-4 xl:grid:cols-5'>{children}</div>;
}

export default GridContainer;
