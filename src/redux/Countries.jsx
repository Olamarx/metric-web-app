import axios from 'axios';
import { act } from 'react-test-renderer';
import countryReducer from './MoreDetails';

// const contries = () => 'https://restcountries.com/v3.1/all';
// ACTION
const STARTED = 'country/countries/STARTED';
const SUCCEEDED = 'ountry/countries/SUCCEEDED';
const FAILED = 'ountry/countries/FAILED';
const SEARCH = 'ountry/countries/SEARCH';

const getCountrySTARTED = () => ({
  type: STARTED,
});

const getCountrySUCCEEDED = (countries) => ({
  type: SUCCEEDED,
  payload: countries,
});

const getCountryFAILED = (error) => ({
  type: FAILED,
  error,
});

// THUNKS
const fetchCountries = (region) => async (dispatch) => {
  dispatch(getCountrySTARTED());
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    const result = await response.data;
    const individualData = result.map(({
      flags, name,
      coatOfArms, continents,
      timezones, population, maps,
      capital, latlng,
    }) => ({
      flag: flags.png,
      name: name.common,
      coatOfArm: coatOfArms.png,
      continent: continents[0],
      timezone: timezones[0],
      population,
      map: maps.googleMaps,
      capital: capital[0],
      latitude: latlng[0],
      longitude: latlng[1],
    }));
    dispatch(getCountrySUCCEEDED(individualData));
  } catch (error) {
    dispatch(getCountryFAILED(error.toString()));
  }
};

const searchCountry = (param) => (dispatch, getState) => {
  const { countries } = getState();
  const Arr = countries.countries;
  const filterArr = Arr.filter(({ name }) => name.toLowerCase().includes(param.toLowerCase()))

  dispatch({ type: SEARCH, payload: filterArr })
}  

// Reducer
const initialize = {
  countries: [],
  status: 'Waiting',
  error: null,
  filter: []
};

const CountriesReducer = (state = initialize, action) => {
  switch (action.type) {
    case STARTED:
      return {...state,
        status: 'loading',
        error: null
      };
    case SUCCEEDED:
      return { ...state,
        countries: action.payload,
        filter: action.payload,
        status: 'succeeded',
        error: null,
       };
    case FAILED:
      return {
        ...state,
        status: 'failed',
        error: action.error
      };
    case SEARCH:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state;
  }
}

export {
  getCountrySTARTED,
  getCountrySUCCEEDED,
  getCountryFAILED,
  fetchCountries,
  searchCountry
}

export default CountriesReducer;
