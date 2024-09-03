// qui dentro inizializziamo lo store di redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myListReducer from "../reducers/myList";
// il fatto che il file dentro la cartella reducers si chiami proprio "index.js"
// semplifica l'import, perchè si può omettere

const bigReducer = combineReducers({
  myList: myListReducer, //nomi delle mie 'fette'
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
