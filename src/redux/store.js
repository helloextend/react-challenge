import { configureStore } from "@reduxjs/toolkit";
import favReducer from './favSlice.js'
const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};
const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};
const store=configureStore({
  preloadedState: reHydrateStore(),
    reducer:{
        fav:favReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    .concat(localStorageMiddleware),
}) ;
export default store 