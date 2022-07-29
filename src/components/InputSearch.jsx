import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function InputSearch() {
  const [country, setCountry] = useState('');

  const conuntries = useSelector((state) => state.allCountries);
  // const dispatch = useDispatch();
const condi = () => {
  conuntries.map((name) => {
     country === name.officialName
    || country === name.commonName
    ? console.log(name) 
    : console.log('not a valid name');
  });
}


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="formId">Enter Search Term</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input"
            id="formId"
          />
        </div>
      </div>
    </div>
  );
}

export default InputSearch;
