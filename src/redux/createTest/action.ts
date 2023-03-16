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
  SetTestNameAction,
} from './types';

export const createTestAsync = (values: any) => {
  return async (dispatch: Dispatch<ActionCreateTest>) => {
    try {
      await instance.post('/tests', values);

      dispatch({ type: CreateActionTyped.CLEAR_STATE_TEST });

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

export const cancelCreateTest = () => {
  const isCancel = window.confirm('Бажаєте вийти?\n(Дані будуть втрачені)');

  if (isCancel) {
    const action: CancelCreateTest = {
      type: CreateActionTyped.CLEAR_STATE_TEST,
    };

    history.push('/');

    return (dispatch: Dispatch<ActionCreateTest>) => dispatch(action);
  }

  return null;
};
