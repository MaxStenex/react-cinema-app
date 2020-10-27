import { combineReducers, createStore } from 'redux';
import searchBlockReducer from './ducks/searchBlock';
import filmPageReducer from './ducks/filmPage';

const rootReducer = combineReducers({
  searchBlock: searchBlockReducer,
  filmPage: filmPageReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
