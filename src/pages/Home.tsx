import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from 'components/FormField/Input';
import Button from 'components/Button/Button';
import FormNameTest from 'components/CreateTest/FormNameTest';
import PrecentCurrentAnswer from 'components/CreateTest/PrecentCurrentAnswer';
import CreateQuestions from 'components/CreateTest/CreateQuestions';

export interface InputProps {
  name: string;
}

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3000/test')
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <FormNameTest />
      <PrecentCurrentAnswer />
      <CreateQuestions />
    </div>
  );
};

export default Home;
