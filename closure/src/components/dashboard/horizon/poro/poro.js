import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../../App.css'
import Context from '../../../../context';
import distr from '../../distr.jpeg'
import ChartPoro from './poro-chart';



function Porosity () {
  
const {minPoro, medPoro, maxPoro} = useContext(Context)
  
  return (

    <div className="param-box">
      <h3 className='param-headers-dist'>Porosity</h3>
      <ChartPoro></ChartPoro>
      {/* <img src={distr} alt="distr" className='distr'/> */}
      <div className='param-info'>
        <div className="col-params">
          <p className='min-digit'>{Math.round(minPoro * 100) / 100}</p>
          <p className='minmedmax'>min</p>
        </div>
        <div className="col-params">
          <p className='med-digit'>{Math.round(medPoro * 100) / 100}</p>
          <p className='minmedmax'>med</p>
        </div>
        <div className="col-params">
          <p className='max-digit'>{Math.round(maxPoro * 100) / 100}</p>
          <p className='minmedmax'>max</p>
        </div>  
      </div>
        <p className='distrib-type'>Gaussian distribution</p>
    </div>
  );
};

export default Porosity
  