import axios from 'axios';

const contries = () => 'https://restcountries.com/v3.1/all';

const Actions = {
  LOAD: 'country/countries/LOAD',
};

// Reducer
const initialize = [];

const reducer = (state = initialize, action) => {
  switch (action.type) {
    case Actions.LOAD:
      return [...action.payLoad];
    default:
      return state;
  }
};

// Action Creator
export const loadAllCountries = () => async (dispatch) => {
  const response = await axios.get(contries());
  const result = await response.data;
  const worldCountries = [];
  result.forEach((country) => {
    const officialName = country.name.official
    const commonName = country.name.common
    const flag = country.flags.png

    worldCountries.push({
      officialName,
      commonName,
      flag,
    });
  });
  // console.log(worldCountries);
  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD,
      payLoad: worldCountries,
    });
  }
  return worldCountries;
};

export default reducer;
