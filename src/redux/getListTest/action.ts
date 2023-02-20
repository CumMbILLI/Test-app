import { Dispatch } from 'redux';
import { instance } from 'services/axios';
import { FetchListTypes } from './types';
import { ActionType } from '../types';

export const getTestAsync = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: FetchListTypes.FETCH_LIST, payload: [] });

      const { data } = await instance.get('/tests');

      dispatch({
        type: FetchListTypes.FETCH_LIST_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: FetchListTypes.FETCH_LIST_ERROR,
        payload: [],
      });
    }
  };
};
