import { movieSaga } from './movieSaga';
import { takeLatest } from 'redux-saga/effects';
import { REQUEST_MOVIES_DATA } from '../actions/types';

export default function* rootSaga() {
  //add movieSaga to the rootSaga
  yield takeLatest(REQUEST_MOVIES_DATA, movieSaga);
}
