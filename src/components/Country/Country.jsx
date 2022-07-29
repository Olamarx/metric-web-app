import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { setCountry } from '../../redux/country/country';
import { getpollution, removePollution } from '../../redux/currentPollution/currentPollution';
import Damages from '../damages/Damages';
import Spinner from '../Loading/Loading';
import './Country.css';

function Country() {
  const dispatch = useDispatch();
  const continent = useSelector((state) => state.continent);
  const country = useSelector((state) => state.country);
  const pollution = useSelector((state) => state.pollution);

  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };

  const revert = () => {
    countrySelect({});
    removePollution(dispatch);
  };

  const stat = {
    1: ['Good', '#0f0'],
    2: ['Fair', '#66ff00'],
    3: ['Moderate', '#eeff00'],
    4: ['Poor', '#ff7300'],
    5: ['Very Poor', '#ff0000'],
  };
  useEffect(() => {
    dispatch(getpollution);
    dispatch(removePollution);
  }, []);

  return (
    <div className="wholeClass">
      <div className="navStyle">
        <NavLink
          to="/continents"
          onClick={revert}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
            {continent.toUpperCase()}
          </span>
        </NavLink>
        <span>{` <<<<< ${country.name}`}</span>
      </div>
      <div
        className="date"
      >
        <span>
          As at
          {` ${new Date(pollution.dt * 1000).toLocaleString().replace(/[/]/gi, '-')}
        `}
        </span>
        <span>{` ${country.name}'s Population is ${country.population}`}</span>
        <div className="twoImg">
          <img src={country.flag} alt={country.name} className="countryInd" />
          { country.coatOfArm ? (<img src={country.coatOfArm} alt={country.coatOfArm} className="countryCoat" />)
            : (
              <div className="no-coatOfArm">
                {`The Coat of Arm for ${country.name}
                is yet to be added, please check back later.`}
              </div>
            )}
        </div>
        {pollution && Object.keys(pollution).length > 0
          ? (
            <div className="wholeStat">
              <span
                style={{ color: stat[pollution.index][1] }}
              >
                {`${pollution.index}: ${stat[pollution.index][0]}`}
              </span>
              <ul>
                {
                        Object.keys(pollution.composition).map((key) => {
                          const com = key.replace('_', '.');
                          const comName = com.replace(/[0-9]/g, '').toUpperCase();
                          const comNum = com.replace(/[a-z]/g, '');
                          return (
                            <li key={key} className="indLI">
                              <span>
                                {comName}
                                <sub>{comNum}</sub>
                              </span>

                              <span>
                                {pollution.composition[key]}
                                <small>
                                  &#181;g/m
                                  <sup>3</sup>
                                </small>
                              </span>
                            </li>
                          );
                        })
                    }
              </ul>
            </div>
          ) : (<Spinner />)}
      </div>
      {pollution && Object.keys(pollution).length > 0
        ? <Damages inten={parseInt(pollution.index, 10)} col={stat[pollution.index][1]} /> : <></>}
    </div>
  );
}

export default Country;
