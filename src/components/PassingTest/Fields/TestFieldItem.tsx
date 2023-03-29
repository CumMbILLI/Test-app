import React, { FC } from 'react';

interface Props {
  userAnswer: string | null;
  index: number;
  answerText: string;
  handleChange: (value: string) => () => void;
}

const TestFieldItem: FC<Props> = ({
  userAnswer,
  index,
  answerText,
  handleChange,
}) => {
  const isChecked = userAnswer === index.toString();

  return (
    <>
      <input
        checked={isChecked}
        onChange={handleChange(index.toString())}
        className='mr-3 cursor-pointer'
        name='radio'
        type='radio'
        value={index}
      />
      {answerText}
    </>
  );
};

export default TestFieldItem;
