import { storeMovieData } from '../actions/movieAction';
import { call, put } from 'redux-saga/effects';
import { queryAllMovies } from '../services/api';

export function* movieSaga() {
  //send request to backend api
  const response = yield call(queryAllMovies);
  //store response to redux store
  yield put(storeMovieData(response));
}
