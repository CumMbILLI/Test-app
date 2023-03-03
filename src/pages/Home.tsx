import React, { useEffect } from 'react';

import MasterForm from 'components/CreateTest/MasterForm';
import CreateQuestions from 'components/CreateTest/QuestionStep';
import NameStep from 'components/CreateTest/NameStep';

export interface InputProps {
  name: string;
}

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3000/test')
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  return <MasterForm />;
};

export default Home;
