import { GET_COMPANY_JOBS } from "../actions";

const initialState = {
  jobs: [],
};

const companyJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default companyJobsReducer;
