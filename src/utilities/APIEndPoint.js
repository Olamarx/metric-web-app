import { pollutionAPI, APIkey, countriesAPI } from '../httpForAll';

const getPollutionData = (lat, lon) => pollutionAPI.get(`air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`);
const getContinents = (continent) => countriesAPI.get(`/region/${continent}`);

const worldUtilities = {
  getPollutionData,
  getContinents,
};

export default worldUtilities;
