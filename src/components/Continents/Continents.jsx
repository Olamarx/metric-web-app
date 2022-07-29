import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import unidecode from 'unidecode';

import { getCountries } from '../../redux/continentCountries/continentCountries';
import { setContinent } from '../../redux/continent/continent';
import { setCountry } from '../../redux/country/country';
import store from '../../redux/store';
import Spinner from '../Loading/Loading';
import './styles.css';

function Continents() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const continent = useSelector((state) => state.continent);
  const [searchCountries, setSearchCountries] = useState([]);
  const [query, setQuery] = useState('');
  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const continentSelect = (e) => {
    setCountry(dispatch, {});
    setContinent(dispatch, e.target.value);
    getCountries(dispatch, store.getState, e.target.value);
  };

  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };

  const filterSearchResult = (input) => {
    if (input === '') {
      return countries;
    }
    const result = countries.filter((country) => unidecode(`${country.name}`).toLowerCase().includes(unidecode(input)) || `${country.coords}`.includes(parseInt(input, 10)) || `${country.population}`.includes(parseInt(country, 10)));
    return result;
  };

  useEffect(() => {
    setCountry(dispatch, {});
    setSearchCountries(filterSearchResult(query));
  }, [countries, query]);

  useEffect(() => {
    getCountries(dispatch, store.getState, continent);
    setCountry(dispatch, {});
    setSearchCountries(filterSearchResult(query));
  }, [continent]);

  return (
    <div className="countries">
      <div className="inPut-value">
        <input type="text" className="search" value={query} placeholder="Search for Countries" onChange={(e) => setQuery(e.target.value)} />
        <select
          value={continent}
          onChange={(e) => continentSelect(e)}
          className="selectContinent"
        >
          {
            continents.map((continent) => (
              <option
                value={continent}
                key={continent}
              >
                {continent}
              </option>
            ))
        }
        </select>
      </div>

      <ul className="countriesListing">
        {
            searchCountries && searchCountries.map((country) => (
              <li className="indCountry" key={country.name}>
                <NavLink
                  to={`/continents/country/${unidecode(country.name.replace(/ /gi, '_'))}`}
                  className="link"
                  onClick={() => countrySelect(country)}
                >
                  <div className="twoImages">
                    <img className="imageStyle" src={country.flag} alt={`${country.name} flag`} />
                    {country.coatOfArm ? (
                      <img className="coatOfArm" src={country.coatOfArm} alt={`${country.name} Coat of arm`} />
                    ) : (
                      <div className="noCOA">
                        No Coat of Arm now,
                        check back later.
                      </div>
                    ) }

                  </div>
                  <div className="moreInfo">
                    <span>{country.name}</span>
                    <span>{`${country.population} population`}</span>
                  </div>
                </NavLink>
              </li>
            ))
        }
        {countries.length ? '' : <Spinner /> }
      </ul>
    </div>
  );
}

export default Continents;
