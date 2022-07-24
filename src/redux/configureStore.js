import { configureStore, combineReducers } from '@reduxjs/toolkit';
import allCountries, { loadAllCountries } from './Countries';
import countryDetails, { loadCountry } from './MoreDetails';

const rootReducer = combineReducers({
  allCountries,
  countryDetails,
});

const store = configureStore({ reducer: rootReducer });

const storeInside = async () => {
  store.dispatch(loadAllCountries());
  await store.dispatch(loadCountry());
};

storeInside();

export default store;
