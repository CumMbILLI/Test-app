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
  gradesTest: INITIAL_GRADE_TEST,
  questionsTest: INITIAL_QUESTIONS_TEST,
};

export const setFieldsReducer = (
  state: CreateTestState = initialState,
  action: ActionCreateTest
): CreateTestState => {
  switch (action.type) {
    case CreateActionTyped.SET_TEST_NAME:
      return {
        ...state,
        testName: action.values?.testName,
      };
    case CreateActionTyped.SET_GRADES_TEST:
      return {
        ...state,
        gradesTest: action.values?.gradesTest,
      };
    case CreateActionTyped.SET_QUESTIONS_TEST:
      return {
        ...state,
        questionsTest: action.values?.questionsTest,
      };
    case CreateActionTyped.CLEAR_STATE_TEST:
      return {
        ...state,
        testName: '',
        gradesTest: INITIAL_GRADE_TEST,
        questionsTest: INITIAL_QUESTIONS_TEST,
      };

    default:
      return state;
  }
};
