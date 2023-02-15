import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className='w-full h-20 bg-gray-500'></div>
      {children}
    </div>
  );
};

export default PageWrapper;
