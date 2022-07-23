import axios from 'axios';

const contries = () => 'https://restcountries.com/v3.1/all';

const Actions = {
  LOAD: 'details/countries/LOAD',
};

const initialize = [];

const reducer = (state = initialize, action) => {
  switch (action.type) {
    case Actions.LOAD:
      return [...action.payLoad];
    default:
      return state;
  }
};

export const loadAllCountries = () => async (dispatch) => {
  const response = await axios.get(contries());
  const result = await response.data;
  const worldCountries = [];
  result.forEach((country) => {
    const officialName = country.name.official
    const commonName = country.name.common
    const flag = country.flags.png
    // const continent = country.continents
    // const coatOfArm = country.coatOfArms.png
    // const area = country.area
    // const currencyName = country.area
    // const currencySymbol = country.currencies.symbol

    worldCountries.push({
      officialName,
      commonName,
      // name,
      flag,
      // area
      // country,
    });
  });
  // console.log(result);
  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD,
      payLoad: worldCountries,
    });
  }
  return worldCountries;
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
