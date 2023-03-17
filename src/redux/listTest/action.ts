import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { instance } from 'services/axios';
import {
  ActionListType,
  FetchListTypes,
  TestItem,
  FetchListAction,
  FetchListSuccess,
  FetchListError,
  FetchItemTypes,
  ActionItemType,
  FetchItemAction,
  FetchItemSuccess,
  FetchItemError,
} from './types';

const fetchItem = (): FetchItemAction => ({
  type: FetchItemTypes.FETCH_ITEM,
});

const fetchItemSuccess = (data: TestItem[]): FetchItemSuccess => ({
  type: FetchItemTypes.FETCH_ITEM_SUCCESS,
  payload: data,
});

const fetchItemError = (errorMessage: string): FetchItemError => ({
  type: FetchItemTypes.FETCH_ITEM_ERROR,
  payload: errorMessage,
});

export const getTestByIdAsync = (id: string) => {
  return async (dispatch: Dispatch<ActionItemType>) => {
    try {
      dispatch(fetchItem());

      const { data } = await instance.get(`/tests?id=${id}`);

      dispatch(fetchItemSuccess(data));
    } catch (e) {
      const err = e as AxiosError;

      console.log(err);

      dispatch(fetchItemError(err.message));
    }
  };
};

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

      console.log(err);
    }
  };
};
