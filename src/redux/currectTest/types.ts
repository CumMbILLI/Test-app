import { TestItem } from 'redux/types';

export type ActionItemType = FetchItemSuccess | FetchItemError;

export interface FetchItemSuccess {
  type: FetchItemTypes.FETCH_ITEM_SUCCESS;
  payload: TestItem[];
}

export interface FetchItemError {
  type: FetchItemTypes.FETCH_ITEM_ERROR;
  payload: string;
}

export enum FetchItemTypes {
  FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
  FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR',
}

export interface TestsItemState {
  testItem?: TestItem[] | null;
  loading: boolean;
  error?: string | null;
}
