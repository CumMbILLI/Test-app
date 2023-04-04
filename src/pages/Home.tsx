import React, { useEffect } from 'react';
import { getTestAsync } from 'redux/listTest/action';
import { useAppDispatch } from 'redux/hooks';
import TestList from 'components/TestList/TestList';
import Button from 'components/Button/Button';
import { history } from 'services/history';

const Home = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    history.push('/create');
  };

  useEffect(() => {
    dispatch(getTestAsync());
  }, [dispatch]);

  return (
    <div className='text-3xl text-center mx-24'>
      <div className='grid py-10 border-b-2 border-black justify-center gap-10'>
        <h2>Створити нове тестування</h2>
        <Button
          className='text-lg'
          type='button'
          color='primary'
          onClick={handleClick}
        >
          Почнімо
        </Button>
      </div>
      <h2 className='mt-10'>Список всіх тестів</h2>
      <TestList />
    </div>
  );
};

export default Home;
