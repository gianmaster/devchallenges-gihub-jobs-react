import { call, put, takeEvery } from 'redux-saga/effects';
import * as service from '../../services/githubApi';
import * as type from '../types';

function* fetchJobs(action) {
  try {
    const data = yield call(service.findJob, action.query);
    const jobs = [...(action.query.page !== 0 ? action.jobs : []), ...data];
    yield put({ type: type.GET_JOBS_SUCCESS, jobs });
  } catch (e) {
    yield put({ type: type.GET_JOBS_FAILED, message: e.message });
  }
}

function* jobSaga() {
  yield takeEvery(type.GET_JOBS_REQUESTED, fetchJobs);
}

export default jobSaga;
