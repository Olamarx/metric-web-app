// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import InputSearch from './InputSearch';
// import { loadAllCountries } from '../redux/Countries';

function Continent() {
  const conuntries = useSelector((state) => state.allCountries);
  // const dispatch = useDispatch();
  // useEffect(() => {
    //   if (!conuntries.length) {
  //     dispatch(loadAllCountries())
  //   }
  // });
    console.log(conuntries)
  const newReturn = async (event, param) => {
    // const country = `https://restcountries.com/v3.1/name/${param}`;
    // console.log(event);
    // console.log(param);
    const response = await axios.get(country);
    const result = await response.data;
    return (
      <>
        <div />
      </>
    );
  };
  return (
    <>
      <InputSearch />
      {
        conuntries.map((country) => (
          <div
            onClick={(event) => newReturn(event, country.commonName)}
            key={country.commonName}
          >
            <img src={country.flag} alt={country.officialName} />
            <div>
              {country.officialName}
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Continent;
