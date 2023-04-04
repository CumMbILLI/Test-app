import { TestItem } from 'redux/types';

export type ActionListType = FetchListSuccess | FetchListError;

export enum FetchListTypes {
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
  FETCH_LIST_ERROR = 'FETCH_LIST_ERROR',
}

export interface FetchListSuccess {
  type: FetchListTypes.FETCH_LIST_SUCCESS;
  payload: TestItem[];
}

export interface FetchListError {
  type: FetchListTypes.FETCH_LIST_ERROR;
  payload: string;
}

export interface TestsListState {
  testList?: TestItem[] | null;
  loading: boolean;
  error?: string | null;
}
