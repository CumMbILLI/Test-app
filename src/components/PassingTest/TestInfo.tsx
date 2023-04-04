import React, { FC } from 'react';

import Button from 'components/Button/Button';
import Table from 'components/Table/Table';
import { TestItem } from 'redux/types';

interface Props {
  testData: TestItem[];
  handleClick: VoidFunction;
}

type TableHeaderInfoTyped = {
  name: string;
  field: keyof TestItem;
  className: string;
};

const TABLE_HEADER: TableHeaderInfoTyped[] = [
  {
    name: 'Назва тесту',
    field: 'testName',
    className: 'w-72',
  },
  {
    name: 'Кількість питань',
    field: 'questionsLength',
    className: 'w-36',
  },
  {
    name: 'Результат',
    field: 'result',
    className: 'w-36',
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
