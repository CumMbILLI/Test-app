import React, { FC } from 'react';

import Button from 'components/Button/Button';
import Table, { TableHeaderProps } from 'components/Table/Table';
import { TestItem } from 'redux/types';

interface Props {
  testData: TestItem[];
  headerTable: TableHeaderProps[];
  handleClick: VoidFunction;
}

const TestInfo: FC<Props> = ({ headerTable, testData, handleClick }) => {
  return (
    <div className='w-[1000px] flex flex-col items-center gap-8 mt-4'>
      <h2 className='text-2xl'>Проходження тесту</h2>
      <Table header={headerTable} data={testData} />
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
