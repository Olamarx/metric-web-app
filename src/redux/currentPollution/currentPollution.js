import worldUtilities from '../../utilities/APIEndPoint';

const GETPOLLUTION = 'getpollution/pollution/GETPOLLUTION';
const REMOVE = 'removepollution/pollution/REMOVE';

const getpollution = async (dispatch, getState) => {
  const { country } = getState();
  const { data } = await worldUtilities.getPollutionData(...country.coords);

  const payload = {
    ...data.coord,
    composition: data.list[0].components,
    index: data.list[0].main.aqi,
    dt: data.list[0].dt,
  };
  dispatch({ type: GETPOLLUTION, payload });
};

function removePollution(dispatch) {
  dispatch({ type: REMOVE });
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GETPOLLUTION:
      return action.payload;
    case REMOVE:
      return {};
    default:
      return state;
  }
}

export { getpollution, removePollution };
