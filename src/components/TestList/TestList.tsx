import React from 'react';
import { useAppSelector } from 'redux/hooks';

import TestItem from './TestItem';

const TestList = () => {
  const testList = useAppSelector((state) => state.tests.testList);

  return (
    <div className='grid gap-2 mt-10'>
      {testList?.map(({ id, nameTest, completed }, index) => (
        <TestItem
          id={id}
          key={index + id}
          name={nameTest}
          completed={completed}
          index={index}
        />
      ))}
    </div>
  );
};

export default TestList;
