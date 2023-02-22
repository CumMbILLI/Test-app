import React, { useEffect } from 'react';
import { getTestAsync } from 'redux/getListTest/action';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const testList = useAppSelector((state) => state.tests);

  useEffect(() => {
    dispatch(getTestAsync());
  }, [dispatch]);

  console.log(testList);

  return (
    <div>
      <button>Создать тест</button>
    </div>
  );
};

export default Home;
