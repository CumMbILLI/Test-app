import React from 'react';

import Logo from 'components/Logo/Logo';

import { ReactComponent as MoonSVG } from 'assets/moon.svg';

const Header = () => {
  return (
    <div className='w-full h-20 bg-gray-300 flex items-center justify-between px-24'>
      <Logo />
      <MoonSVG className='w-6 h-6' />
    </div>
  );
};

export default Header;
