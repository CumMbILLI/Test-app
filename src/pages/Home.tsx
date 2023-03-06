import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3000/test')
      .then((res) => res.json())
      .then((result) => result);
  }, []);

  return <div></div>;
};

export default Home;
