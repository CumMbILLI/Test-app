import React, { FC } from 'react';
import { ReactComponent as RemoveSVG } from 'assets/remove.svg';
import { ReactComponent as CompletedSVG } from 'assets/completed.svg';
import { useAppDispatch } from 'redux/hooks';
import { removeTestItem } from 'redux/listTest/action';
import { history } from 'services/history';

interface Props {
  id: string;
  index: number;
  name: string;
  completed: boolean;
}

const TestItem: FC<Props> = ({ id, index, name, completed }) => {
  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    history.push(`/passing?testId=${id}`);
  };

  const handleRemoveItem = () => {
    dispatch(removeTestItem(id));
  };

  return (
    <div className='border border-1 border-black p-4 text-xl flex justify-between '>
      <div
        onClick={handleClickItem}
        className='w-full flex justify-start items-center cursor-pointer'
      >
        <span className='text-base pr-5'>{index + 1}.</span>
        <span>{name}</span>
      </div>
      <div className='flex items-center'>
        {completed && <CompletedSVG className='mr-8' />}
        <RemoveSVG
          onClick={handleRemoveItem}
          className='w-5 duration-300 fill-rose-500 opacity-80 cursor-pointer hover:opacity-100 relative z-10'
        />
      </div>
    </div>
  );
};

export default TestItem;
