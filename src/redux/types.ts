import { ActionListType } from './listTest/types';

export type DispatchType = (args: ActionListType) => ActionListType;

export interface QuestionTestItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
}

export interface GradeTestItem {
  id: number;
  gradeName: string;
  placeholder?: string;
  from: string;
  to: string;
}

export interface TestItem {
  id: string;
  testName: string;
  testGrades: GradeTestItem[];
  testQuestions: QuestionTestItem[];
  completed: boolean;
  result: number | '-';
  questionsLength: number;
}
