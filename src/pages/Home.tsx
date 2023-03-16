import React, { useEffect } from 'react';
import { getTestAsync } from 'redux/listTest/action';
import { useAppDispatch } from 'redux/hooks';
import TestList from 'components/TestList/TestList';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTestAsync());
  }, [dispatch]);

  return (
    <div className='text-3xl text-center mx-24'>
      <div className='grid py-10 border-b-2 border-black'>
        <h2>Створити нове тестування</h2>
        <Link
          className='duration-300 opacity-80 hover:opacity-100 text-xl bg-green-500 py-3 w-64 text-white justify-self-center mt-14'
          to='/create'
        >
          Почнімо
        </Link>
      </div>
      <h2 className='mt-10'>Список всіх тестів</h2>
      <TestList />
    </div>
  );
};

export default Home;
