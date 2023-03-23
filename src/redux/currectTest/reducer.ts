import { ActionItemType, FetchItemTypes, TestsItemState } from './types';

const INITIAL_STATE_LIST: TestsItemState = {
  loading: true,
  testItem: null,
  error: null,
};

export const getCurrentTestReducer = (
  state: TestsItemState = INITIAL_STATE_LIST,
  action: ActionItemType
): TestsItemState => {
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
