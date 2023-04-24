import './App.css';
import logo from './img/logo.png'
import React from 'react';
import Context from "./context";
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Add from './components/adddata';
import Dashboard from './components/dashboard/dashboard';
import Support from './components/support';


function App() {

  const url = 'http://localhost:3009'

  const [mainLat, setMainLat] = useState('')
  const [mainLong, setMainLong] = useState('')

  return (
    <Context.Provider value={{ url, mainLat, mainLong, setMainLat, setMainLong }}>
      <div className='everything'>
        <img src={logo} alt="logo" id="logo" />
        
        <Navbar />

        <Routes>
          <Route path= '/' element={<Dashboard />} />
          <Route path= '/adddata' element={<Add />} />
          <Route path= '/support' element={<Support />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
