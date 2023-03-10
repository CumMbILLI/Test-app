import React, { useEffect } from 'react';
import { getTestAsync } from 'redux/getListTest/action';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import TestList from 'components/TestList/TestList';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useAppDispatch();
  const testList = useAppSelector((state) => state.tests);

  useEffect(() => {
    dispatch(getTestAsync());
  }, [dispatch]);

  return (
    <div className='text-3xl text-center'>
      <div className='grid py-20 border-b-2 border-black'>
        <h2>Створити нове тестування</h2>
        <Link
          className='duration-300 opacity-80 hover:opacity-100 text-xl bg-green-500 py-3 w-64 text-white justify-self-center mt-14'
          to='/create'
        >
          Почнімо
        </Link>
      </div>
      <h2 className='mt-6'>Список всіх тестів</h2>
      <TestList />
    </div>
  );
};

export default Home;
