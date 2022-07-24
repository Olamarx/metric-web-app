import axios from 'axios';

const contries = (param) => `https://restcountries.com/v3.1/name/${param}`;

const Actions = {
  LOAD: 'details/countries/LOAD',
};

const initialize = [];

const countryReducer = (state = initialize, action) => {
  switch (action.type) {
    case Actions.LOAD:
      return [...action.payLoad];
    default:
      return state;
  }
};

export const loadCountry = (param) => async (dispatch) => {
  const response = await axios.get(contries('nigeria'));
  const result = await response.data;
  console.log(param)
  const output = result.map((country) => country.name.common || country.name.official === dispatch);
  // console.log(output);
  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD,
      payLoad: output,
    });
  }
};

export default countryReducer;
