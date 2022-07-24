import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountry } from '../redux/MoreDetails';

function CountriesDetail() {
  const conuntry = useSelector((state) => state.countryDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!conuntry) {
      dispatch(loadCountry())
    }
  }, []);
  console.log(conuntry)
  return (
    <div> Ny NAME</div>
    // <div>
    //   we move
    //   {/* {
    //     conuntries.map((country) => (
    //       <div
    //       key={country.common}
    //       >
    //         <img src={country.flag} alt={country.common} />
    //         <div>
    //           {country.official}
    //         </div>
    //       </div>
    //     ))
    //   } */}
    // </div>
  );
}

export default CountriesDetail;