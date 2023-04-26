import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../App.css'
import Context from '../../../context';
import Info from './info';
import Square from './square/square';
import EffThickness from './heff/heff';
import Porosity from './poro/poro';
import Saturation from './saturation/sat';
import Density from './density/dens';
import VolFactor from './volfactor/volfact';



function Horizon () {
  
  const { 
    callHorizons, 
    calculations, 
    formations,
    setFormations,
    horizons,
    setHorizons,
    gcos,
    setGcos,
    poroJSON
   } = useContext(Context)
  

  return (

    <div className="inputs-horizon">
      
      <Info></Info>
      
      <div className='params'>
        <h3 className="headers">Parameters</h3>
        <div className='params-graphs'>
          <Square></Square>
          <EffThickness></EffThickness>
        
          <Porosity></Porosity>
          <Saturation></Saturation>
          
          <Density></Density>
          <VolFactor></VolFactor>
          </div>
      </div>

    </div>
  );
};

export default Horizon
  