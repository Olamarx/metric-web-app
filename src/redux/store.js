import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './Countries';
// import countryDetails, { loadCountry } from './MoreDetails';

const store = configureStore({
  reducer: {
    countriesReducer,
  },
});

export default store;
