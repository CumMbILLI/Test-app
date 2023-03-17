import {
  ActionItemType,
  ActionListType,
  FetchItemTypes,
  FetchListTypes,
  TestsState,
} from './types';

const INITIAL_STATE_LIST: TestsState = {
  loading: true,
  testList: null,
  testItem: null,
  error: null,
};

export const getTestsReducer = (
  state: TestsState = INITIAL_STATE_LIST,
  action: ActionListType
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

export const getCurrentTestReducer = (
  state: TestsState = INITIAL_STATE_LIST,
  action: ActionItemType
): TestsState => {
  switch (action.type) {
    case FetchItemTypes.FETCH_ITEM:
      return { loading: true, testItem: null, error: null };

    case FetchItemTypes.FETCH_ITEM_SUCCESS:
      return { loading: false, testItem: action.payload, error: null };

    case FetchItemTypes.FETCH_ITEM_ERROR:
      return { loading: false, testItem: undefined, error: action.payload };

    default:
      return state;
  }
};
