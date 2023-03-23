import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import TestResult from './TestResult';

export interface QuestionItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
}

interface Props {
  questionsTest?: QuestionItem[];
}

const Test: FC<Props> = ({ questionsTest }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultTest, setResulTest] = useState<any | null>(null);

  const [questions, setQuestions] = useState(
    questionsTest?.map((test) => ({ ...test, userAnswer: null }))
  );

  const [queryParam, setQueryParam] = useSearchParams();

  //@ts-ignore
  const currectQuestionID = queryParam!.get('questionId') | 0;

  useEffect(() => {
    setQueryParam(
      `testId=${queryParam.get('testId')}&questionId=${currentQuestion}`
    );
  }, [currentQuestion]);

  const calculateResult = () => {
    if (questions) {
      setResulTest(() =>
        questions?.filter((item) => item.correctAnswer === item.userAnswer)
      );
    }
  };

  const changeUserAnswer = (value: string) => {
    setQuestions((prev) =>
      prev?.map((item: any) =>
        item.id === questions?.[currectQuestionID].id
          ? { ...item, userAnswer: value }
          : item
      )
    );
  };

  const nextQuestion = () => setCurrentQuestion((prev) => ++prev);

  const prevQuestion = () => setCurrentQuestion((prev) => --prev);

  if (resultTest && questions)
    return <TestResult resultTest={resultTest} questions={questions} />;

  if (!questions) return null;

  return (
    <div className='w-[600px]'>
      <div className='w-full flex justify-center'>
        {questions?.[currectQuestionID].image && (
          <img
            className='mb-4 h-56 object-contain'
            src={questions?.[currectQuestionID].image}
            alt=''
          />
        )}
      </div>
      <span className='text-xl w-full border-b border-black block'>
        {questions?.[currectQuestionID].questionTitle}
      </span>
      <div className='grid gap-2 text-base my-4 px-4'>
        {questions?.[currectQuestionID].answers.map((answerText, index) => (
          <div key={index}>
            <input
              checked={
                questions?.[currectQuestionID].userAnswer === index.toString()
              }
              className='mr-3'
              name='radio'
              type='radio'
              value={index}
              onChange={(e) => changeUserAnswer(e.target.value)}
            />
            {answerText}
          </div>
        ))}
      </div>

      <div className='flex gap-40'>
        {1 <= currectQuestionID && (
          <Button type='button' color='secondary' onClick={prevQuestion}>
            Назад
          </Button>
        )}

        {questions?.length - 1 > currectQuestionID ? (
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
