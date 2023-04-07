import React, { FC } from 'react';

import Button from 'components/Button/Button';
import Table from 'components/Table/Table';

import { TestItem } from 'redux/types';
import { TableHeaderInfo } from './types';

interface Props {
  testData: TestItem[];
  handleClick: VoidFunction;
}

const TABLE_HEADER: TableHeaderInfo[] = [
  {
    name: 'Назва тесту',
    field: 'testName',
    tHeaderClassName: 'w-72',
  },
  {
    name: 'Кількість питань',
    field: 'questionsLength',
    tHeaderClassName: 'w-36',
  },
  {
    name: 'Результат',
    field: 'result',
    tHeaderClassName: 'w-36',
  },
];

const TestInfo: FC<Props> = ({ testData, handleClick }) => {
  return (
    <div className='w-[800px] flex flex-col items-center gap-8 mt-4'>
      <h2 className='text-2xl'>Проходження тесту</h2>
      <Table header={TABLE_HEADER} data={testData} />
      <Button
        onClick={handleClick}
        className='!w-72'
        color='primary'
        type='button'
      >
        Почати
      </Button>
    </div>
  );
};

export default TestInfo;
