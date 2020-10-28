import { Film } from '../types';

const SET_NEW_RELEASES = 'SET_NEW_RELEASES';

type NewReleasesState = Array<Film>;

const initialState: NewReleasesState = [];

export default function reducer(
  state = initialState,
  action: ActionTypes
): NewReleasesState {
  switch (action.type) {
    case SET_NEW_RELEASES: {
      return [...action.payload.films];
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = SetNewReleasesType;

type SetNewReleasesType = {
  type: typeof SET_NEW_RELEASES;
  payload: {
    films: Array<Film>;
  };
};

export const setNewReleases = (films: Array<Film>): SetNewReleasesType => {
  return {
    type: SET_NEW_RELEASES,
    payload: {
      films: films,
    },
  };
};
