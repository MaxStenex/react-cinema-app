import { FilmDetails } from '../types';

const SET_FILM = 'SET_FILM';

const initialState: FilmDetails = {
  id: null,
  title: '',
  rating: null,
  duration: null,
  filmGenres: [],
  productionCountries: [],
  overview: '',
  poster: '',
};

export default function reducer(
  state = initialState,
  action: FilmPageActionTypes
) {
  switch (action.type) {
    case SET_FILM: {
      return { ...action.payload.film };
    }
    default: {
      return state;
    }
  }
}

type FilmPageActionTypes = ReturnType<typeof setFilm>;

type SetFilmType = {
  type: typeof SET_FILM;
  payload: {
    film: FilmDetails;
  };
};

export const setFilm = (film: FilmDetails): SetFilmType => {
  return {
    type: SET_FILM,
    payload: {
      film: film,
    },
  };
};
