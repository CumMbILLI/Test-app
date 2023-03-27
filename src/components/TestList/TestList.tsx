import React from 'react';
import { useAppSelector } from 'redux/hooks';

import TestItem from './TestItem';

const TestList = () => {
  const { testList } = useAppSelector((state) => state.tests);

  return (
    <div className='grid gap-2 mt-10'>
      {testList?.map(({ id, testName, completed }, index) => (
        <TestItem
          id={id}
          key={index + id}
          name={testName}
          completed={completed}
          index={index}
        />
      ))}
    </div>
  );
};

export default TestList;
