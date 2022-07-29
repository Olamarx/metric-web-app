import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import unidecode from 'unidecode';
import Continents from './Continents/Continents';
import Country from './Country/Country';

function App() {
  const contr = useSelector((state) => state.country);
  const path = `/continents/country/:${unidecode(contr.name.replace(/ /gi, '_'))}`;
  return (
    <div>

      <Routes>
        <Route path="/" element={<Navigate to="/continents" />} />
        <Route path="/continents/*" element={<Continents />} />
        <Route path={path} element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
