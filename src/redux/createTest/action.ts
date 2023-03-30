import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { instance } from 'services/axios';
import { history } from 'services/history';
import {
  ActionCreateTest,
  CancelCreateTest,
  CreateActionTyped,
  GradesValuesType,
  NameValuesType,
  QuestionsValuesType,
  SettestGradesAction,
  SettestQuestions,
  SetNameTestAction,
  CreateTestValue,
} from './types';

const actionTypeCancel = (): CancelCreateTest => ({
  type: CreateActionTyped.CLEAR_TEST_STATE,
});

export const createTestAsync = (values: CreateTestValue) => {
  return async (dispatch: Dispatch<ActionCreateTest>) => {
    try {
      await instance.post('/tests', values);

      dispatch(actionTypeCancel());

      history.push('/');
    } catch (e) {
      const err = e as AxiosError;

      console.log(err);
    }
  };
};

export const setNameTest = (values: NameValuesType) => {
  const action: SetNameTestAction = {
    type: CreateActionTyped.SET_TEST_NAME,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};

export const setGradeTest = (values: GradesValuesType) => {
  const action: SettestGradesAction = {
    type: CreateActionTyped.SET_TEST_GRADES,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};

export const settestQuestions = (values: QuestionsValuesType) => {
  const action: SettestQuestions = {
    type: CreateActionTyped.SET_QUESTIONS_TEST,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};

export const cancelTestCreation = () => {
  const action: CancelCreateTest = {
    type: CreateActionTyped.CLEAR_TEST_STATE,
  };

  history.push('/');

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};
