import * as type from '../types';

const initalState = {
  jobs: [],
  loading: false,
  error: null,
  query: {
    description: '',
    location: '',
    full_time: true,
    page: 0,
  },
};

export default function jobs(state = initalState, action) {
  switch (action.type) {
    case type.GET_JOBS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.jobs,
      };

    case type.GET_JOBS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.UPDATE_PARAMS:
      return {
        ...state,
        query: { ...action.query },
      };

    default:
      return state;
  }
}
