import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { instance } from 'services/axios';
import { ActionListType, FetchListTypes, TestItems } from './types';

const fetchList = () =>
  ({
    type: FetchListTypes.FETCH_LIST,
  } as ActionListType);

const fetchListSuccess = (data: TestItems[]) =>
  ({
    type: FetchListTypes.FETCH_LIST_SUCCESS,
    payload: data,
  } as ActionListType);

const fetchListError = (errorMessage: string) =>
  ({
    type: FetchListTypes.FETCH_LIST_ERROR,
    payload: errorMessage,
  } as ActionListType);

export const getTestAsync = () => {
  return async (dispatch: Dispatch<ActionListType>) => {
    try {
      dispatch(fetchList());

      const { data } = await instance.get('/tests');

      dispatch(fetchListSuccess(data));
    } catch (e: any) {
      console.log(e.message);

      dispatch(fetchListError(e.message));
    }
  };
};
