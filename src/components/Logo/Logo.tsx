import React from 'react';
import { ReactComponent as CapSVG } from 'assets/cap.svg';

const Logo = () => {
  return (
    <div className='flex items-center font-bold select-none'>
      <span>Я</span>
      <CapSVG className='w-11 h-11' />
      <span>В курсі</span>
    </div>
  );
};

export default Logo;
