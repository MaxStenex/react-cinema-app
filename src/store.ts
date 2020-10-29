import { combineReducers, createStore } from 'redux';
import searchBlockReducer from './ducks/searchBlock';
import newReleasesReducer from './ducks/newReleases';
import filmPageReducer from './ducks/filmPage';
import favoriteReducer from './ducks/favorite';

const rootReducer = combineReducers({
  searchBlock: searchBlockReducer,
  filmPage: filmPageReducer,
  newReleases: newReleasesReducer,
  favoriteFilms: favoriteReducer,
});

const store = createStore(rootReducer);

export type RootReducerType = ReturnType<typeof rootReducer>;
export default store;
