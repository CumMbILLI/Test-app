import { TestQuestionItem } from 'redux/types';

export interface QuestionItem extends TestQuestionItem {
  userAnswer: string | null;
  test?: number[];
}

export type TableHeaderResultTyped = {
  name: string;
  field: keyof TableData;
  className?: string;
};

type TableData = {
  questionTitle: string;
  isCorrectAnswer: React.ReactNode;
  numberQuestion: number;
};
