import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TestResult from './TestResult/TestResult';
import { TestItem } from 'redux/types';
import TestNavigation from './TestNavigation';
import TestFields from './Fields/TestFields';
import { history } from 'services/history';
import { QuestionItem } from './types';

interface Props {
  testItem: TestItem;
}

const Test: FC<Props> = ({ testItem }) => {
  const [resultTest, setResulTest] = useState<number | null>(null);

  const [questions, setQuestions] = useState<QuestionItem[]>(
    testItem.testQuestions.map((test) => ({ ...test, userAnswer: null }))
  );

  const [params, setParams] = useSearchParams();

  const testId = params.get('testId');

  const questionIdx = Number(params.get('questionIdx'));

  const calculateResult = () => {
    if (questions) {
      const correctAnswerArray = questions.filter(
        ({ correctAnswer, userAnswer }) => correctAnswer === userAnswer
      );

      setResulTest(correctAnswerArray.length);
    }
  };

  const changeUserAnswer = (value: string) => () => {
    setQuestions((prev) =>
      prev?.map((item) =>
        item.id === questions?.[questionIdx].id
          ? { ...item, userAnswer: value }
          : item
      )
    );
  };

  const nextQuestion = () => {
    const nextStep = Number(params.get('questionIdx')) + 1;

    setParams(`testId=${params.get('testId')}&questionIdx=${nextStep}`);
  };

  const prevQuestion = () => {
    const currentStep = Number(params.get('questionIdx'));

    if (currentStep >= 1) {
      const prevStep = currentStep - 1;

      setParams(`testId=${params.get('testId')}&questionIdx=${prevStep}`);
    } else {
      setParams(`testId=${params.get('testId')}`);
    }
  };

  if (!testId) history.push('/');

  if (!questions) return null;

  if (resultTest !== null && questions)
    return (
      <TestResult
        testId={testId}
        testItem={testItem}
        resultTest={resultTest}
        questions={questions}
      />
    );

  return (
    <div className='w-[600px]'>
      <div className='w-full flex justify-center'>
        {questions?.[questionIdx].image && (
          <img
            className='mb-4 h-56 object-contain'
            src={questions?.[questionIdx].image}
            alt=''
          />
        )}
      </div>
      <span className='text-xl w-full border-b border-black block'>
        {questions?.[questionIdx].questionTitle}
      </span>

      <TestFields
        questionItem={questions[questionIdx]}
        questionIdx={questionIdx}
        handleChange={changeUserAnswer}
      />

      <TestNavigation
        correctQuestion={questionIdx}
        finalStep={questions.length - 1}
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        finishTest={calculateResult}
      />
    </div>
  );
};

export default Test;
