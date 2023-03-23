import { TestItem } from 'redux/types';

export type ActionItemType =
  | FetchItemAction
  | FetchItemSuccess
  | FetchItemError;

export interface FetchItemAction {
  type: FetchItemTypes.FETCH_ITEM;
}

export interface FetchItemSuccess {
  type: FetchItemTypes.FETCH_ITEM_SUCCESS;
  payload: TestItem[];
}

export interface FetchItemError {
  type: FetchItemTypes.FETCH_ITEM_ERROR;
  payload: string;
}

export enum FetchItemTypes {
  FETCH_ITEM = 'FETCH_ITEM',
  FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
  FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR',
}

export interface TestsItemState {
  testItem?: TestItem[] | null;
  loading: boolean;
  error?: string | null;
}
