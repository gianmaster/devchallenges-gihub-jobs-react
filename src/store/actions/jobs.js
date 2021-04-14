import * as type from '../types';

export function fetchJobsAction(query, currentJobs = []) {
  return {
    type: type.GET_JOBS_REQUESTED,
    jobs: currentJobs,
    query,
  };
}

export function updateQueryParams(query) {
  return {
    type: type.UPDATE_PARAMS,
    query,
  };
}
