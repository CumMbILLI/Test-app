export type ActionType = FetchListAction | FetchListSuccess | FetchListError;

export enum FetchListTypes {
  FETCH_LIST = 'FETCH_LIST',
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
  FETCH_LIST_ERROR = 'FETCH_LIST_ERROR',
}

interface FetchListAction {
  type: FetchListTypes.FETCH_LIST;
}

interface FetchListSuccess {
  type: FetchListTypes.FETCH_LIST_SUCCESS;
  payload: any[];
}

interface FetchListError {
  type: FetchListTypes.FETCH_LIST_ERROR;
  payload: string;
}

export interface TestsState {
  testList: TestItems[] | null | undefined;
  loading: boolean;
  error: string | null | undefined;
}

interface TestItems {
  id: string;
  name: string;
  completed: boolean;
}
