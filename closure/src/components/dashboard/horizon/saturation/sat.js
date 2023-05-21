import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../../App.css'
import Context from '../../../../context';
import distr from '../../distr.jpeg'
import ChartSat from './sat-chart';


function Saturation () {
  
const { minSat, medSat, maxSat } = useContext(Context)
  
  return (

    <div className="param-box">
      <h3 className='param-headers-dist'>Saturation, dec</h3>
      <ChartSat></ChartSat>
      {/* <img src={distr} alt="distr" className='distr'/> */}
      <div className='param-info'>
        <div className="col-params">
          <p className='min-digit'>{Math.round(minSat * 100) / 100}</p>
          <p className='minmedmax'>min</p>
        </div>
        <div className="col-params">
          <p className='med-digit'>{Math.round(medSat * 100) / 100}</p>
          <p className='minmedmax'>med</p>
        </div>
        <div className="col-params">
          <p className='max-digit'>{Math.round(maxSat * 100) / 100}</p>
          <p className='minmedmax'>max</p>
        </div>  
      </div>
        <p className='distrib-type'>Gaussian distribution</p>
    </div>
  );
};

export default Saturation
  