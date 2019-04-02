import {
  REQUEST_MOVIES_DATA,
  STORE_MOVIES_DATA,
  ADD_MOVIE_TO_LIST,
  REMOVE_MOVIE_FROM_LIST,
} from './types';

export const requestMovieData = () => ({ type: REQUEST_MOVIES_DATA });
export const storeMovieData = payload => ({ type: STORE_MOVIES_DATA, payload });
export const addMovieToList = payload => ({ type: ADD_MOVIE_TO_LIST, payload });
export const removeMovieFromList = payload => ({
  type: REMOVE_MOVIE_FROM_LIST,
  payload,
});
