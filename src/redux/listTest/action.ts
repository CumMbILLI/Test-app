import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { TestItem } from 'redux/types';
import { instance } from 'services/axios';
import {
  ActionListType,
  FetchListTypes,
  FetchListSuccess,
  FetchListError,
} from './types';

const fetchListSuccess = (data: TestItem[]): FetchListSuccess => ({
  type: FetchListTypes.FETCH_LIST_SUCCESS,
  payload: data,
});

const fetchListError = (errorMessage: string): FetchListError => ({
  type: FetchListTypes.FETCH_LIST_ERROR,
  payload: errorMessage,
});

export const getTestAsync = () => {
  return async (dispatch: Dispatch<ActionListType>) => {
    try {
      const { data } = await instance.get('/tests');

      dispatch(fetchListSuccess(data));
    } catch (e) {
      const err = e as AxiosError;

      dispatch(fetchListError(err.message));
    }
  };
};

export const removeTestItem = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await instance.delete(`/tests/${id}`);

      dispatch(getTestAsync());
    } catch (e) {
      const err = e as AxiosError;

      dispatch(fetchListError(err.message));
    }
  };
};
