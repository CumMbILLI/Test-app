import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { setFieldsReducer } from './createTest/reducer';
import { getTestsReducer } from './getListTest/reducer';

export const rootReducer = combineReducers({
  tests: getTestsReducer,
  testName: setFieldsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
