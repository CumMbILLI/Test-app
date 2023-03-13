import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { instance } from 'services/axios';
import { history } from 'services/history';
import {
  ActionCreateTest,
  CreateActionTyped,
  NameValuesType,
  QuestionsValuesType,
  SetGradesTestAction,
  SetQuestionsTest,
  SetTestNameAction,
} from './types';

export const createTestAsync = (values: any) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await instance.post('/tests', values);

      history.push('/');
    } catch (e) {
      const err = e as AxiosError;

      console.log(err);
    }
  };
};

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
