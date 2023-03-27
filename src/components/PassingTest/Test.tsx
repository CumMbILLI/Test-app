import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import TestResult from './TestResult';
import { QuestionTestItem, TestItem } from 'redux/types';

export interface QuestionItem extends QuestionTestItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
  userAnswer?: string | null;
}

interface Props {
  testItem: TestItem;
}

const Test: FC<Props> = ({ testItem }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultTest, setResulTest] = useState<any | null>(null);

  const [questions, setQuestions] = useState<QuestionItem[]>(
    testItem.testQuestions.map((test: any) => ({ ...test, userAnswer: null }))
  );

  const [params, setParams] = useSearchParams();

  const currectQuestionInd = Number(params.get('questionIdx'));

  useEffect(() => {
    setParams(`testId=${params.get('testId')}&questionIdx=${currentQuestion}`);
  }, [currentQuestion]);

  const calculateResult = () => {
    if (questions) {
      setResulTest(
        questions
          .map(({ correctAnswer, userAnswer, id }) =>
            correctAnswer === userAnswer ? id : null
          )
          .filter((item) => item !== null)
      );
    }
  };

  const changeUserAnswer = (value: string) => {
    setQuestions((prev) =>
      prev?.map((item) =>
        item.id === questions?.[currectQuestionInd].id
          ? { ...item, userAnswer: value }
          : item
      )
    );
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => ++prev);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => --prev);
  };

  if (!params.get('questionIdx')) return null;

  if (!questions) return null;

  if (resultTest && questions)
    return (
      <TestResult
        testItem={testItem}
        resultTest={resultTest}
        questions={questions}
      />
    );

  return (
    <div className='w-[600px]'>
      <div className='w-full flex justify-center'>
        {questions?.[currectQuestionInd].image && (
          <img
            className='mb-4 h-56 object-contain'
            src={questions?.[currectQuestionInd].image}
            alt=''
          />
        )}
      </div>
      <span className='text-xl w-full border-b border-black block'>
        {questions?.[currectQuestionInd].questionTitle}
      </span>
      <div className='grid gap-2 text-base my-4 px-4'>
        {questions?.[currectQuestionInd].answers.map((answerText, index) => (
          <div
            className='cursor-pointer w-max'
            key={index}
            onClick={() => changeUserAnswer(index.toString())}
          >
            <input
              checked={
                questions?.[currectQuestionInd].userAnswer === index.toString()
              }
              onChange={(e) => changeUserAnswer(e.target.value)}
              className='mr-3 cursor-pointer'
              name='radio'
              type='radio'
              value={index}
            />
            {answerText}
          </div>
        ))}
      </div>

      <div className='flex gap-40'>
        {1 <= currectQuestionInd && (
          <Button type='button' color='secondary' onClick={prevQuestion}>
            Назад
          </Button>
        )}

        {questions?.length - 1 > currectQuestionInd ? (
          <Button type='button' color='secondary' onClick={nextQuestion}>
            Впреред
          </Button>
        ) : (
          <Button onClick={calculateResult} color='primary' type='button'>
            Завершити
          </Button>
        )}
      </div>
    </div>
  );
};

export default Test;
