import { ActionListType } from './listTest/types';

export type DispatchType = (args: ActionListType) => ActionListType;

export interface TestQuestionItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
}

export interface TestGradeItem {
  id: number;
  gradeName: string;
  placeholder?: string;
  from: string;
  to: string;
}

export interface TestItem {
  id: string;
  testName: string;
  testGrades: TestGradeItem[];
  testQuestions: TestQuestionItem[];
  completed: boolean;
  result: number | '-';
  questionsLength: number;
}
