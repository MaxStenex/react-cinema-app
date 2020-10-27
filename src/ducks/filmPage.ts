const SET_FILM = 'SET_FILM';

export type FilmDetails = {
  title: string;
  rating: null | number;
  duration: null | number;
  filmGenres: Array<{ id: number; name: string }>;
  productionCountries: Array<string>;
  overview: string;
  poster: string;
};

const initialState: FilmDetails = {
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

export const setFilm = (film: FilmDetails) => {
  return {
    type: SET_FILM,
    payload: {
      film: film,
    },
  };
};
