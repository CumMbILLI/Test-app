import React from 'react';

import { useAppDispatch } from 'redux/hooks';
import { cancelTestCreation } from 'redux/createTest/action';

import { ReactComponent as CapSVG } from 'assets/cap.svg';

const Logo = () => {
  const dispatch = useAppDispatch();

  const handleLogo = () => {
    dispatch(cancelTestCreation());
  };

  return (
    <div
      onClick={handleLogo}
      className='flex items-center font-bold cursor-pointer select-none'
    >
      <span>Я</span>
      <CapSVG className='w-11 h-11' />
      <span>В курсі</span>
    </div>
  );
};

export default Logo;
