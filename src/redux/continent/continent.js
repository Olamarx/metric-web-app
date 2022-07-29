const CONTINENT = 'fetch/continent/CONTINENT';

function setContinent(dispatch, continent) {
  dispatch({ type: CONTINENT, payload: continent });
}

export default function reducer(state = 'africa', action) {
  switch (action.type) {
    case CONTINENT:
      return action.payload;
    default:
      return state;
  }
}

export { setContinent };
