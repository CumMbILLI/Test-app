import {
  Document,
  Font,
  Page,
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

const ResultPDF: FC<Props> = ({
  questions,
  resultTest,
  tableHeader,
  tableData,
}) => {
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

        <TablePDF tableHeader={tableHeader} tableData={tableData} />
      </Page>
    </Document>
  );
};

export default React.memo(ResultPDF);
