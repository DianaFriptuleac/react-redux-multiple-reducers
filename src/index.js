import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store,persistedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// Provider è un COMPONENTE! Serve a iniettare redux dentro la nostra applicazione React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Provider ha bisogno di una prop chiamata "store"
  // gli diamo come valore l'oggetto store che abbiamo esportato da redux/store
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
    <App />
    </PersistGate>
  </Provider>
);
//per svuotare la memoria devo eliminare la key di persist:root in local storage di application (strumenti)
