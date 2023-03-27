import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { TestItem } from 'redux/types';
import { instance } from 'services/axios';
import {
  ActionItemType,
  FetchItemAction,
  FetchItemError,
  FetchItemSuccess,
  FetchItemTypes,
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

export const putTestAsync = (id: string, value: TestItem) => {
  return async (dispatch: Dispatch<ActionItemType>) => {
    try {
      dispatch(fetchItem());

      const { data } = await instance.put(`tests/${id}`, value);

      dispatch(fetchItemSuccess([data]));
    } catch (e) {
      const err = e as AxiosError;

      dispatch(fetchItemError(err.message));
    }
  };
};
