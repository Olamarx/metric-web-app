const SETCOUNTRY = 'setcountry/country/SETCOUNTRY';

function setCountry(dispatch, country) {
  const payload = country;
  if (Object.keys(country).length === 0) {
    payload.name = '';
  }
  dispatch({ type: SETCOUNTRY, payload });
}

export default function reducer(state = { name: '' }, action) {
  switch (action.type) {
    case SETCOUNTRY:
      return action.payload;
    default:
      return state;
  }
}

export { setCountry };
