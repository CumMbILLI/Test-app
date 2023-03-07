import React, { FC } from 'react';
import { ReactComponent as RemoveSVG } from 'assets/remove.svg';
import { ReactComponent as CompletedSVG } from 'assets/completed.svg';

interface Props {
  id: number | string;
  index: number;
  name: string;
  completed: boolean;
}

const TestItem: FC<Props> = ({ id, index, name, completed }) => {
  return (
    <div
      className='border border-1 border-black p-4 text-xl flex items-cente justify-between cursor-pointer'
      key={id}
    >
      <div>
        <span className='text-base pr-5'>{index + 1}.</span>
        <span>{name}</span>
      </div>
      <div className='flex items-center'>
        {completed && <CompletedSVG className='mr-8' />}
        <RemoveSVG className='w-5 duration-300 fill-rose-500 opacity-80 hover:opacity-100 cursor-pointer' />
      </div>
    </div>
  );
};

export default TestItem;
