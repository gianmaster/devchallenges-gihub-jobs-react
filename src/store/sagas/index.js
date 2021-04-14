import { all } from '@redux-saga/core/effects';
import jobSaga from './jobSaga';

export default function* rootSaga() {
  yield all([jobSaga()]);
}
