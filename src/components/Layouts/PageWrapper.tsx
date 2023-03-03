import React, { FC, ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ children }) => {
  return (
    <div className='w-full h-full'>
      <Header />
      <div className='px-24 h-full w-full'>{children}</div>
    </div>
  );
};

export default PageWrapper;
