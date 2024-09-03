// qui dentro inizializziamo lo store di redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myListReducer from "../reducers/myList";
import searchResult from "../reducers/searchResults";
import companyJobsReducer from "../reducers/companyJobs";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  storage: localStorage,
  key: 'root'  //salvo tutto
}
const bigReducer = combineReducers({
  myList: myListReducer, //nomi delle mie 'fette'
  searchResults: searchResult,
  companyJobs: companyJobsReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer)

const store = configureStore({
  reducer: persistedReducer ,

  //funzione per togliere l'errore del browser
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  }
});


const persistedStore = persistStore(store)
export { store, persistedStore};

//npm i redux-persist-transform-encrypt 
//npm i redux-persist