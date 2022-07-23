import { configureStore, combineReducers } from '@reduxjs/toolkit';
import allCountries, { loadAllCountries } from './Countries';

const rootReducer = combineReducers({
  allCountries,
});

const store = configureStore({ reducer: rootReducer });

const storeInside = () => {
  store.dispatch(loadAllCountries());
};

storeInside();

export default store;
