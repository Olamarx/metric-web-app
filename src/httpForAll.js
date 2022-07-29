import axios from 'axios';

const countriesPoint = 'https://restcountries.com/v3.1';
const APIkey = '8f40c08c46feff1ed7ccf880a4bb1b09';
const pollutionPoint = 'http://api.openweathermap.org/data/2.5';

const pollutionAPI = axios.create({
  baseURL: pollutionPoint,
  headers: {
    'Content-type': 'application/json',
  },
});
const countriesAPI = axios.create({
  baseURL: countriesPoint,
  headers: {
    'Content-type': 'application/json',
  },
});

export { pollutionAPI, APIkey, countriesAPI };
