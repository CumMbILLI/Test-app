import {
  Document,
  Font,
  Page,
  Path,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { QuestionItem, TableHeaderResult } from 'components/PassingTest/types';
import React, { FC } from 'react';

import TablePDF from './TablePDF';
interface TableDataResult {
  questionTitle: string;
  isCorrectAnswer: boolean;
  svgComponent: React.ReactNode;
  numberQuestion: number;
}

interface Props {
  questions: QuestionItem[];
  resultTest: number;
  tableHeader: TableHeaderResult[];
  tableData: TableDataResult[];
}

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf',
      fontWeight: 'regular',
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  detailsContainer: {
    borderBottom: 2,
    paddingBottom: 10,
    marginBottom: 20,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'light',
  },
  textGreen: {
    color: 'green',
  },
  textRed: {
    color: 'red',
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 1,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const correctSvg = (
  <Path
    d='M18.2999 6.3L9.09995 16.4L6.79995 13.4C6.49995 13 5.79995 12.9 5.39995 13.2C4.99995 13.5 4.89995 14.2 5.19995 14.6L8.19995 18.6C8.39995 18.8 8.69995 19 8.99995 19C9.29995 19 9.49995 18.9 9.69995 18.7L19.6999 7.7C20.0999 7.3 19.9999 6.7 19.5999 6.3C19.2999 5.9 18.5999 5.9 18.2999 6.3Z'
    fill='#4BBD6B'
  />
);

const wrongSvg = (
  <Path
    d='M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z'
    fill='#EF4444'
  />
);

const ResultPDF: FC<Props> = ({
  questions,
  resultTest,
  tableHeader,
  tableData,
}) => {
  const data = tableData.map((item) => {
    if (item.isCorrectAnswer) {
      return {
        ...item,
        svgComponent: correctSvg,
      };
    }

    return {
      ...item,
      svgComponent: wrongSvg,
    };
  });

  const resultPercent = Math.round((resultTest / questions.length) * 100);

  const wrongAnswersCount = questions.length - resultTest;

  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Результат тесту</Text>
          <Text style={styles.text}>
            Ваш резулатат:{' '}
            <Text
              style={resultPercent > 50 ? styles.textGreen : styles.textRed}
            >
              {resultPercent}%
            </Text>
          </Text>

          <Text style={styles.text}>Кількість питань: {questions.length}</Text>
          <Text style={styles.text}>
            Кількість правильних відповідей:{' '}
            <Text style={styles.textGreen}>{resultTest}</Text>
          </Text>
          <Text style={styles.text}>
            Кількість неправильних відповідей:{' '}
            <Text style={styles.textRed}>{wrongAnswersCount}</Text>
          </Text>
        </View>

        <TablePDF tableHeader={tableHeader} tableData={data} />
      </Page>
    </Document>
  );
};

export default React.memo(ResultPDF);
