import { Dispatch } from 'redux';
import {
  ActionCreateTest,
  CreateActionTyped,
  NameValuesType,
  QuestionsValuesType,
  SetGradesTestAction,
  SetQuestionsTest,
  SetTestNameAction,
} from './types';

export const setTestName = (values: NameValuesType) => {
  const action: SetTestNameAction = {
    type: CreateActionTyped.SET_TEST_NAME,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};

export const setGradeTest = (values: any) => {
  const action: SetGradesTestAction = {
    type: CreateActionTyped.SET_GRADES_TEST,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};

export const setQuestionsTest = (values: QuestionsValuesType) => {
  const action: SetQuestionsTest = {
    type: CreateActionTyped.SET_QUESTIONS_TEST,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};
