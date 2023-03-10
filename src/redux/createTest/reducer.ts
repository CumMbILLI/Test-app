import { ActionCreateTest, CreateActionTyped, CreateTestState } from './types';

const INITIAL_GRADE_TEST = [
  {
    id: 1,
    name: '',
    placeholder: 'Мудрець',
    result: ['', ''],
  },
  {
    id: 2,
    name: '',
    placeholder: 'Знавець',
    result: ['', ''],
  },
  {
    id: 3,
    name: '',
    placeholder: 'Невдаха',
    result: ['', ''],
  },
];

const INITIAL_QUESTIONS_TEST = [
  {
    id: 1,
    image: '',
    questionTitle: '',
    correctAnswer: '',
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
      return { ...state, testName: action.values?.testName };
    case CreateActionTyped.SET_GRADES_TEST:
      return { ...state, gradesTest: action.values?.gradesTest };
    case CreateActionTyped.SET_QUESTIONS_TEST:
      return { ...state, questionsTest: action.values?.questionsTest };

    default:
      return state;
  }
};
