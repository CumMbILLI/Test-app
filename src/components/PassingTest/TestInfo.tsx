import Button from 'components/Button/Button';
import Table from 'components/Table/Table';
import React, { FC } from 'react';

interface Props {
  headerTable: any;
  testData: any;
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
