import React, { FC } from 'react';
import { ReactComponent as RemoveSVG } from 'assets/remove.svg';
import { ReactComponent as CompletedSVG } from 'assets/completed.svg';
import { useAppDispatch } from 'redux/hooks';
import { removeTestItem } from 'redux/listTest/action';

interface Props {
  id: string;
  index: number;
  name: string;
  completed: boolean;
}

const TestItem: FC<Props> = ({ id, index, name, completed }) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => () => dispatch(removeTestItem(id));

  return (
    <div className='border border-1 border-black p-4 text-xl flex items-cente justify-between cursor-pointer'>
      <div>
        <span className='text-base pr-5'>{index + 1}.</span>
        <span>{name}</span>
      </div>
      <div className='flex items-center'>
        {completed && <CompletedSVG className='mr-8' />}
        <RemoveSVG
          onClick={handleRemoveItem(id)}
          className='w-5 duration-300 fill-rose-500 opacity-80 hover:opacity-100 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default TestItem;
