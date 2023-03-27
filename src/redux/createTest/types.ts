import { GradeTestItem, QuestionTestItem } from 'redux/types';

export interface CreateTestState {
  testName: string;
  testGrades: GradeTestItem[];
  testQuestions: QuestionTestItem[];
}

export enum CreateActionTyped {
  SET_NAME_TEST = 'SET_NAME_TEST',
  SET_GRADES_TEST = 'SET_GRADES_TEST',
  SET_QUESTIONS_TEST = 'SET_QUESTIONS_TEST',
  CLEAR_STATE_TEST = 'CLEAR_STATE_TEST',
}

export interface CreateTestValue {
  testName: string;
  testGrades: GradeTestItem[];
  testQuestions: QuestionTestItem[];
  completed: boolean;
  questionsLength: number;
  result: string;
}

export interface NameValuesType {
  testName: string;
}

export interface SetNameTestAction {
  type: CreateActionTyped.SET_NAME_TEST;
  values: NameValuesType;
}

export interface GradesValuesType {
  testGrades: GradeTestItem[];
}

export interface SettestGradesAction {
  type: CreateActionTyped.SET_GRADES_TEST;
  values: GradesValuesType;
}

export interface QuestionsValuesType {
  testQuestions: QuestionTestItem[];
}

export interface SettestQuestions {
  type: CreateActionTyped.SET_QUESTIONS_TEST;
  values: QuestionsValuesType;
}

export interface CancelCreateTest {
  type: CreateActionTyped.CLEAR_STATE_TEST;
}

export type ActionCreateTest =
  | SetNameTestAction
  | SettestGradesAction
  | SettestQuestions
  | CancelCreateTest;
