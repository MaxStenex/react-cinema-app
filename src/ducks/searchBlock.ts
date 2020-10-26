import { Film } from '../types';

type SearchState = Array<Film>;

const initialState: SearchState = [];
const SET_SEARCHED_FILMS = 'SET_SEARCHED_FILMS';

export default function reducer(
  state = initialState,
  action: ActionTypes
): SearchState {
  switch (action.type) {
    case SET_SEARCHED_FILMS: {
      return [...action.payload.films];
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = SetSearchedFilmsType;

type SetSearchedFilmsType = {
  type: typeof SET_SEARCHED_FILMS;
  payload: {
    films: Array<Film>;
  };
};

export const setSearchedFilms = (films: Array<Film>): SetSearchedFilmsType => {
  return {
    type: SET_SEARCHED_FILMS,
    payload: {
      films: films,
    },
  };
};
