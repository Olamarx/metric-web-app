import worldUtilities from '../../utilities/APIEndPoint';

const COUNTRIES = 'fetch/countries/COUNTRIES';
const REMOVE = 'fetch/countries/REMOVE';

const getCountries = async (dispatch, getState, continent) => {
  const { pollution: currentData } = getState();
  if (Object.keys(currentData).length === 0 || currentData.continent !== continent) {
    const { data } = await worldUtilities.getContinents(continent);
    const countries = data.map(({
      flags,
      name,
      coatOfArms,
      population,
      latlng,
    }) => ({
      name: name.common,
      coords: latlng,
      population,
      flag: flags.svg,
      coatOfArm: coatOfArms.png,
    }));

    dispatch({ type: COUNTRIES, payload: countries });
  }
};

function removeCountries(dispatch) {
  dispatch({ type: REMOVE });
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case COUNTRIES:
      return action.payload;
    case REMOVE:
      return [];
    default:
      return state;
  }
}

export { getCountries, removeCountries };
