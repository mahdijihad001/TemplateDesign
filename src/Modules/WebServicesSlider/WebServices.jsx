import { memo } from 'react';
import Slider from './Slider';

const WebServices = () => {
  return (
    <div className='bg-sky-100 py-[100px]'>
      <div className='container max-w-7xl mx-auto'>
        <h2 className='text-4xl text-center text-gray-400 pb-[50px]'>Industries We Services</h2>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default memo(WebServices);