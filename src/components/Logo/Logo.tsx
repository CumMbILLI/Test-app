import React from 'react';
import { ReactComponent as CapSVG } from 'assets/cap.svg';
import { history } from 'services/history';

const Logo = () => {
  const clickLogo = () => history.push('/');

  return (
    <div
      onClick={clickLogo}
      className='flex items-center font-bold cursor-pointer select-none'
    >
      <span>Я</span>
      <CapSVG className='w-11 h-11' />
      <span>В курсі</span>
    </div>
  );
};

export default Logo;
