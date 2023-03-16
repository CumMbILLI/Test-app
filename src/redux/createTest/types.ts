interface GradeTestItem {
  id: number;
  gradeName: string;
  placeholder?: string;
  from: string;
  to: string;
}

interface QuestionTestItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
}

export interface CreateTestState {
  testName: string;
  gradesTest: GradeTestItem[];
  questionsTest: QuestionTestItem[];
}

export enum CreateActionTyped {
  SET_TEST_NAME = 'setNameTest',
  SET_GRADES_TEST = 'setGradesTest',
  SET_QUESTIONS_TEST = 'setQuestionsTest',
  CLEAR_STATE_TEST = 'clearStateTest',
}

export interface NameValuesType {
  testName: string;
}

export interface SetTestNameAction {
  type: CreateActionTyped.SET_TEST_NAME;
  values: NameValuesType;
}

export interface GradesValuesType {
  gradesTest: GradeTestItem[];
}

export interface SetGradesTestAction {
  type: CreateActionTyped.SET_GRADES_TEST;
  values: GradesValuesType;
}

export interface QuestionsValuesType {
  questionsTest: QuestionTestItem[];
}

export interface SetQuestionsTest {
  type: CreateActionTyped.SET_QUESTIONS_TEST;
  values: QuestionsValuesType;
}

export interface CancelCreateTest {
  type: CreateActionTyped.CLEAR_STATE_TEST;
}

export type ActionCreateTest =
  | SetTestNameAction
  | SetGradesTestAction
  | SetQuestionsTest
  | CancelCreateTest;