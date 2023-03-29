import React, { FC } from 'react';
import { QuestionItem } from '../Test';
import TestFieldItem from './TestFieldItem';

interface Props {
  questions: QuestionItem[];
  questionIdx: number;
  handleChange: (value: string) => () => void;
}

const TestFields: FC<Props> = ({ questions, questionIdx, handleChange }) => {
  return (
    <div className='grid gap-2 text-base my-4 px-4'>
      {questions?.[questionIdx].answers.map((answerText, index) => (
        <div
          className='cursor-pointer w-max'
          key={index}
          onClick={handleChange(index.toString())}
        >
          <TestFieldItem
            userAnswer={questions?.[questionIdx].userAnswer}
            index={index}
            answerText={answerText}
            handleChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default TestFields;
