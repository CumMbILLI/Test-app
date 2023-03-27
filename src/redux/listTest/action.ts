import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { TestItem } from 'redux/types';
import { instance } from 'services/axios';
import {
  ActionListType,
  FetchListTypes,
  FetchListAction,
  FetchListSuccess,
  FetchListError,
} from './types';

const fetchList = (): FetchListAction => ({
  type: FetchListTypes.FETCH_LIST,
});

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
      dispatch(fetchList());

      const { data } = await instance.get('/tests');

      console.log(data);

      dispatch(fetchListSuccess(data));
    } catch (e) {
      const err = e as AxiosError;

      dispatch(fetchListError(err.message));
    }
  };
};

//не получаеться затипизировать функцию getTestAsync
export const removeTestItem = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      instance.delete(`/tests/${id}`);

      dispatch(getTestAsync());
    } catch (e) {
      const err = e as AxiosError;

      dispatch(fetchListError(err.message));
    }
  };
};
