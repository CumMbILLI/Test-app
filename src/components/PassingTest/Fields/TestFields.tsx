import React, { FC } from 'react';
import { QuestionItem } from '../Test';
import TestFieldItem from './TestFieldItem';

interface Props {
  questionItem: QuestionItem;
  questionIdx: number;
  handleChange: (value: string) => () => void;
}

const TestFields: FC<Props> = ({ questionItem, questionIdx, handleChange }) => {
  return (
    <div className='grid gap-2 text-base my-4 px-4'>
      {questionItem.answers.map((answerText, index) => (
        <div
          className='cursor-pointer w-max'
          key={index}
          onClick={handleChange(index.toString())}
        >
          <TestFieldItem
            userAnswer={questionItem.userAnswer}
            questionIdx={index.toString()}
            answerText={answerText}
            handleChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default TestFields;
