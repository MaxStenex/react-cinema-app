const TOGGLE_FAVORITE_FILM = 'TOGGLE_FAVORITE_FILM';

const initialState: Set<number | null> = new Set();

export default function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case TOGGLE_FAVORITE_FILM: {
      state.has(action.payload)
        ? state.delete(action.payload)
        : state.add(action.payload);
      return new Set(state);
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = ReturnType<typeof toggleFavoriteFilm>;

export const toggleFavoriteFilm = (filmId: number | null) => {
  return {
    type: TOGGLE_FAVORITE_FILM,
    payload: filmId,
  };
};
