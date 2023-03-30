import React, { FC } from 'react';

interface Props {
  userAnswer: string | null;
  questionIdx: string;
  answerText: string;
  handleChange: (value: string) => () => void;
}

const TestFieldItem: FC<Props> = ({
  userAnswer,
  questionIdx,
  answerText,
  handleChange,
}) => {
  const isChecked = userAnswer === questionIdx.toString();

  return (
    <>
      <input
        checked={isChecked}
        onChange={handleChange(questionIdx.toString())}
        className='mr-3 cursor-pointer'
        name='radio'
        type='radio'
      />
      {answerText}
    </>
  );
};

export default TestFieldItem;
