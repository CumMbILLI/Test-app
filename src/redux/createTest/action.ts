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
  SetGradesTestAction,
  SetQuestionsTest,
  SetNameTestAction,
} from './types';

const actionTypeCancel = (): CancelCreateTest => ({
  type: CreateActionTyped.CLEAR_STATE_TEST,
});

export const createTestAsync = (values: any) => {
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
    type: CreateActionTyped.SET_NAME_TEST,
    values,
  };

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};

export const setGradeTest = (values: GradesValuesType) => {
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

export const cancelTestCreation = () => {
  const action: CancelCreateTest = {
    type: CreateActionTyped.CLEAR_STATE_TEST,
  };

  history.push('/');

  return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
};
