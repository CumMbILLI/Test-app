import React, { FC, ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='px-24'>{children}</div>
    </div>
  );
};

export default PageWrapper;
