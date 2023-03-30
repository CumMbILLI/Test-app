import { ActionListType, FetchListTypes, TestsListState } from './types';

const INITIAL_STATE_LIST: TestsListState = {
  loading: true,
  testList: null,
  error: null,
};

export const getTestsReducer = (
  state: TestsListState = INITIAL_STATE_LIST,
  action: ActionListType
): TestsListState => {
  switch (action.type) {
    case FetchListTypes.FETCH_LIST_SUCCESS:
      return { ...state, loading: false, testList: action.payload };

    case FetchListTypes.FETCH_LIST_ERROR:
      return { loading: false, testList: undefined, error: action.payload };

    default:
      return state;
  }
};
