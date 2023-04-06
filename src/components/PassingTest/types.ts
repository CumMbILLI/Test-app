import { TestItem, TestQuestionItem } from 'redux/types';

export interface QuestionItem extends TestQuestionItem {
  userAnswer: string | null;
  test?: number[];
}

export type TableHeader = {
  name: string;
  tHeaderClassName?: string;
  tBodyClassName?: string;
};

export interface TableHeaderInfo extends TableHeader {
  field: keyof TestItem;
}

export interface TableHeaderResult extends TableHeader {
  field: keyof TableData;
}

type TableData = {
  questionTitle: string;
  svgComponent: React.ReactNode;
  numberQuestion: number;
};
