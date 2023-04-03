import React, { FC, useState } from 'react';

import { history } from 'services/history';
import Button from 'components/Button/Button';
import Table from 'components/Table/Table';
import { QuestionItem, TableHeaderResultTyped } from '../types';

import { ReactComponent as PdfSVG } from 'assets/pdf.svg';
import { ReactComponent as CompletedSVG } from 'assets/completed.svg';
import { ReactComponent as CloseSVG } from 'assets/close.svg';

interface Props {
  questions: QuestionItem[];
  resultTest: number;
  testId: string | null;
}

const TABLE_HEADER: TableHeaderResultTyped[] = [
  {
    name: '№',
    field: 'numberQuestion',
    className: 'w-20',
  },
  {
    name: 'Питання',
    field: 'questionTitle',
  },
  {
    name: 'Результат',
    field: 'isCorrectAnswer',
    className: 'w-32',
  },
];

const DetailedStatistics: FC<Props> = ({ questions, resultTest, testId }) => {
  const wrongAnswersCount = questions.length - resultTest;

  const tableData = questions.map(
    ({ questionTitle, correctAnswer, userAnswer }, index) => ({
      questionTitle,
      isCorrectAnswer:
        correctAnswer === userAnswer ? (
          <CompletedSVG />
        ) : (
          <CloseSVG className='w-6 fill-red-500' />
        ),
      numberQuestion: index + 1,
    })
  );

  const [showDetailse, setShowDetailse] = useState(false);

  const changeShowDetailse = () => {
    setShowDetailse((prev) => !prev);
  };

  const backToStart = () => {
    history.push(`passing?testId=${testId}`);
  };

  if (!testId) history.push('/');

  return (
    <div className='text-lg flex flex-col text-left border-t border-black mt-5 gap-2 py-2'>
      <span>Кількість питань: {questions.length}</span>
      <span>Кількість правильних відповідей: {resultTest}</span>
      <span>Кількість неправильних відповідей: {wrongAnswersCount}</span>

      <div className='w-[650px] flex justify-between gap-4 text-base my-3'>
        <div className='flex gap-2'>
          <button className='border-2 border-red-400 duration-300 p-1 rounded hover:opacity-80'>
            <PdfSVG />
          </button>
          <Button
            type='button'
            color='secondary'
            className='w-52'
            onClick={changeShowDetailse}
          >
            {showDetailse ? 'Приховати' : 'Детальніше'}
          </Button>
        </div>
        <Button
          className='w-52'
          type='button'
          color='primary'
          onClick={backToStart}
        >
          Повернутися
        </Button>
      </div>

      {showDetailse && <Table header={TABLE_HEADER} data={tableData} />}
    </div>
  );
};

export default DetailedStatistics;
