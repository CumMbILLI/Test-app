import React from 'react';

import TestItem from './TestItem';

const MOCK_TEST = [
  {
    id: 1,
    name: 'Хто ти із Наруто?',
    completed: false,
  },
  {
    id: 2,
    name: 'Хто ти із Боку но Пику?',
    completed: false,
  },
  {
    id: 3,
    name: 'Хто ти із трансендеров?',
    completed: false,
  },
  {
    id: 4,
    name: 'Хто ти?',
    completed: true,
  },
  {
    id: 5,
    name: 'А я хто?',
    completed: false,
  },
];

const TestList = () => {
  return (
    <div className='grid gap-2 mt-10'>
      {MOCK_TEST.map(({ id, name, completed }, index) => (
        <TestItem id={id} name={name} completed={completed} index={index} />
      ))}
    </div>
  );
};

export default TestList;
