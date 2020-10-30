import { Film } from '../types';

const SET_FAVORITE_PAGE = 'SET_FAVORITE_PAGE';

const initialState: Array<Film> = [];

export default function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_FAVORITE_PAGE: {
      return [...action.payload.films];
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = ReturnType<typeof setFavoritePage>;

type SetFavoritePageType = {
  type: typeof SET_FAVORITE_PAGE;
  payload: {
    films: Array<Film>;
  };
};

export const setFavoritePage = (films: Array<Film>): SetFavoritePageType => {
  return {
    type: SET_FAVORITE_PAGE,
    payload: {
      films: films,
    },
  };
};
