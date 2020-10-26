import { combineReducers, createStore } from 'redux';
import searchBlockReducer from './ducks/searchBlock';

const rootReducer = combineReducers({
  searchBlock: searchBlockReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
