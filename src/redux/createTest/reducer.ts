import { ActionCreateTest, CreateActionTyped, CreateTestState } from './types';

const INITIAL_GRADE_TEST = [
  {
    id: 1,
    gradeName: '',
    placeholder: 'Мудрець',
    from: '',
    to: '',
  },
  {
    id: 2,
    gradeName: '',
    placeholder: 'Знавець',
    from: '',
    to: '',
  },
  {
    id: 3,
    gradeName: '',
    placeholder: 'Невдаха',
    from: '',
    to: '',
  },
];

const INITIAL_QUESTIONS_TEST = [
  {
    id: 1,
    image: '',
    questionTitle: '',
    correctAnswer: '0',
    answers: ['', '', '', ''],
  },
];

const initialState: CreateTestState = {
  testName: '',
  testGrades: INITIAL_GRADE_TEST,
  testQuestions: INITIAL_QUESTIONS_TEST,
};

export const setFieldsReducer = (
  state: CreateTestState = initialState,
  action: ActionCreateTest
): CreateTestState => {
  switch (action.type) {
    case CreateActionTyped.SET_NAME_TEST:
      return {
        ...state,
        testName: action.values?.testName,
      };
    case CreateActionTyped.SET_GRADES_TEST:
      return {
        ...state,
        testGrades: action.values?.testGrades,
      };
    case CreateActionTyped.SET_QUESTIONS_TEST:
      return {
        ...state,
        testQuestions: action.values?.testQuestions,
      };
    case CreateActionTyped.CLEAR_STATE_TEST:
      return {
        testName: '',
        testGrades: INITIAL_GRADE_TEST,
        testQuestions: INITIAL_QUESTIONS_TEST,
      };

    default:
      return state;
  }
};
