import React, { useEffect } from 'react';
import TestList from 'components/TestList/TestList';

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3000/tests')
      .then((res) => res.json())
      .then((result) => result);
  }, []);
  return (
    <div>
      <TestList />
    </div>
  );
};

export default Home;
