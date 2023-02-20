import { ActionType, FetchListTypes, TestsState } from './types';

const initialState: TestsState = {
  loading: true,
  testList: [],
  error: null,
};

export const getTestsReducer = (
  state: TestsState = initialState,
  action: ActionType
): TestsState => {
  switch (action.type) {
    case FetchListTypes.FETCH_LIST:
      return { loading: true, testList: null, error: null };

    case FetchListTypes.FETCH_LIST_SUCCESS:
      return { loading: false, testList: action.payload, error: null };

    case FetchListTypes.FETCH_LIST_ERROR:
      return { loading: false, testList: undefined, error: action.payload };

    default:
      return state;
  }
};
