import { GradeTestItem, QuestionTestItem } from 'redux/types';

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

export type ActionListType =
  | FetchListAction
  | FetchListSuccess
  | FetchListError;

export enum FetchListTypes {
  FETCH_LIST = 'FETCH_LIST',
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
  FETCH_LIST_ERROR = 'FETCH_LIST_ERROR',
}

export interface FetchListAction {
  type: FetchListTypes.FETCH_LIST;
}

export interface FetchListSuccess {
  type: FetchListTypes.FETCH_LIST_SUCCESS;
  payload: TestItem[];
}

export interface FetchListError {
  type: FetchListTypes.FETCH_LIST_ERROR;
  payload: string;
}

export interface TestsState {
  testItem?: TestItem[] | null;
  testList?: TestItem[] | null;
  loading: boolean;
  error?: string | null;
}

export interface TestItem {
  id: string;
  nameTest: string;
  gradesTest: GradeTestItem[];
  questionsTest: QuestionTestItem[];
  completed: boolean;
}
