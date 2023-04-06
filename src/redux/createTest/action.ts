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

export const setNameTest = (values: NameValuesType) => ({
  type: CreateActionTyped.SET_TEST_NAME,
  values,
});

export const setGradeTest = (values: GradesValuesType) => ({
  type: CreateActionTyped.SET_TEST_GRADES,
  values,
});

export const settestQuestions = (values: QuestionsValuesType) => ({
  type: CreateActionTyped.SET_QUESTIONS_TEST,
  values,
});

export const cancelTestCreation = () => {
  history.push('/');

  return {
    type: CreateActionTyped.CLEAR_TEST_STATE,
  };
};
