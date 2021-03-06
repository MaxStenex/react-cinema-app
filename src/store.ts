import { combineReducers, createStore } from 'redux';
import searchBlockReducer from './ducks/searchBlock';
import newReleasesReducer from './ducks/newReleases';
import filmPageReducer from './ducks/filmPage';
import favoriteReducer from './ducks/favorite';
import favoritePageReducer from './ducks/favoritePage';

const rootReducer = combineReducers({
  searchBlock: searchBlockReducer,
  filmPage: filmPageReducer,
  newReleases: newReleasesReducer,
  favoriteFilms: favoriteReducer,
  faroviritePageFilms: favoritePageReducer,
});

const store = createStore(rootReducer);

export type RootReducerType = ReturnType<typeof rootReducer>;
export default store;
