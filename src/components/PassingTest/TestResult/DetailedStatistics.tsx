import React, { FC, useState } from 'react';

import { history } from 'services/history';
import Button from 'components/Button/Button';
import Table from 'components/Table/Table';
import { QuestionItem, TableHeaderResult } from '../types';

import { ReactComponent as PdfSVG } from 'assets/pdf.svg';
import { ReactComponent as CompletedSVG } from 'assets/completed.svg';
import { ReactComponent as CloseSVG } from 'assets/close.svg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from '../../PdfDocument/ResultPDF';

interface Props {
  questions: QuestionItem[];
  resultTest: number;
  testId: string | null;
}

const TABLE_HEADER: TableHeaderResult[] = [
  {
    name: '№',
    field: 'numberQuestion',
    tHeaderClassName: 'w-20',
  },
  {
    name: 'Питання',
    field: 'questionTitle',
    tBodyClassName: '!justify-start',
  },
  {
    name: 'Результат',
    field: 'svgComponent',
    tHeaderClassName: 'w-32',
  },
];

const DetailedStatistics: FC<Props> = ({ questions, resultTest, testId }) => {
  const wrongAnswersCount = questions.length - resultTest;

  const tableData = questions.map(
    ({ questionTitle, correctAnswer, userAnswer }, index) => ({
      questionTitle,
      isCorrectAnswer: correctAnswer === userAnswer,
      svgComponent:
        correctAnswer === userAnswer ? (
          <CompletedSVG />
        ) : (
          <CloseSVG className='w-6 fill-red-500' />
        ),
      numberQuestion: index + 1,
    })
  );

  const [showDetails, setShowDetails] = useState(false);

  const changeShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const backToStart = () => {
    history.push(`passing?testId=${testId}`);
  };

  if (!testId) history.push('/');

  return (
    <div className='text-lg flex flex-col text-left border-t border-black mt-5 gap-2 py-2'>
      <span>Кількість питань: {questions.length}</span>
      <span>
        Кількість правильних відповідей:{' '}
        <span className='text-green-500'>{resultTest}</span>
      </span>
      <span>
        Кількість неправильних відповідей:{' '}
        <span className='text-red-500'>{wrongAnswersCount}</span>
      </span>

      <div className='w-[650px] flex justify-between gap-4 text-base my-3'>
        <div className='flex gap-2'>
          <PDFDownloadLink
            document={
              <ResultPDF
                questions={questions}
                resultTest={resultTest}
                tableHeader={TABLE_HEADER}
                tableData={tableData}
              />
            }
            fileName='testResult.pdf'
          >
            <button className='border-2 border-red-400 duration-300 p-1 rounded hover:opacity-80'>
              <PdfSVG />
            </button>
          </PDFDownloadLink>

          <Button
            type='button'
            color='secondary'
            className='!w-52'
            onClick={changeShowDetails}
          >
            {showDetails ? 'Приховати' : 'Детальніше'}
          </Button>
        </div>
        <Button
          className='!w-52'
          type='button'
          color='primary'
          onClick={backToStart}
        >
          Повернутися
        </Button>
      </div>

      {showDetails && <Table header={TABLE_HEADER} data={tableData} />}
    </div>
  );
};

export default DetailedStatistics;
