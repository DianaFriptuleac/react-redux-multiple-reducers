// qui dentro inizializziamo lo store di redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myListReducer from "../reducers/myList";
import searchResult from "../reducers/searchResults";
import companyJobsReducer from "../reducers/companyJobs";


const bigReducer = combineReducers({
  myList: myListReducer, //nomi delle mie 'fette'
  searchResults: searchResult,
  companyJobs: companyJobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
