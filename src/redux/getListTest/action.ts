import { Dispatch } from 'redux';
import { instance } from 'services/axios';
import { ActionType, FetchListTypes } from './types';

export const getTestAsync = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: FetchListTypes.FETCH_LIST });

      const { data } = await instance.get('/tests');

      dispatch({
        type: FetchListTypes.FETCH_LIST_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: FetchListTypes.FETCH_LIST_ERROR,
        payload: 'Ошибка',
      });
    }
  };
};
