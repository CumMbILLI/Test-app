import { TestGradeItem, TestQuestionItem } from 'redux/types';

export interface CreateTestState {
  testName: string;
  testGrades: TestGradeItem[];
  testQuestions: TestQuestionItem[];
}

export enum CreateActionTyped {
  SET_TEST_NAME = 'SET_TEST_NAME',
  SET_TEST_GRADES = 'SET_TEST_GRADES',
  SET_QUESTIONS_TEST = 'SET_QUESTIONS_TEST',
  CLEAR_TEST_STATE = 'CLEAR_TEST_STATE',
}

export interface CreateTestValue {
  testName: string;
  testGrades: TestGradeItem[];
  testQuestions: TestQuestionItem[];
  completed: boolean;
  questionsLength: number;
  result: string;
}

export interface NameValuesType {
  testName: string;
}

export interface SetNameTestAction {
  type: CreateActionTyped.SET_TEST_NAME;
  values: NameValuesType;
}

export interface GradesValuesType {
  testGrades: TestGradeItem[];
}

export interface SettestGradesAction {
  type: CreateActionTyped.SET_TEST_GRADES;
  values: GradesValuesType;
}

export interface QuestionsValuesType {
  testQuestions: TestQuestionItem[];
}

export interface SettestQuestions {
  type: CreateActionTyped.SET_QUESTIONS_TEST;
  values: QuestionsValuesType;
}

export interface CancelCreateTest {
  type: CreateActionTyped.CLEAR_TEST_STATE;
}

export type ActionCreateTest =
  | SetNameTestAction
  | SettestGradesAction
  | SettestQuestions
  | CancelCreateTest;
