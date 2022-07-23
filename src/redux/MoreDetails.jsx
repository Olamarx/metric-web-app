import axios from 'axios';

const contries = () => 'https://restcountries.com/v3.1/all';

const Actions = {
  LOAD: 'details/countries/LOAD',
};

const initialize = [];

const reducer = (state = initialize, action) => {
  switch (action.type) {
    case Actions.LOAD:
      return [ ...action.payLoad ];
    default:
      return state;
  }
};

export const loadAllCountries = () => async (dispatch) => {
  const response = await axios.get(contries());
  const result = await response.data;
  const worldCountries = [];
  result.forEach((country) => {
    const name = country.name.official
    const flag = country.flags.png
    worldCountries.push({
      name,
      flag,
    });
  });
  console.log(worldCountries)

  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD,
      payLoad: worldCountries,
    });
  }
};

export default reducer;

// export const APIContinent = async () => {
//   const endPoint = await axios.get('');
//   console.log(endPoint.data);
// };

// export const APICountry = async (name) => {
//   const endPoint = await axios.get(`https://restcountries.com/v2/name/${name}`);
//   console.log(endPoint.data);
// };
