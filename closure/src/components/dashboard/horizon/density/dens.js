import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../../App.css'
import Context from '../../../../context';
import distr from '../../distr.jpeg'
import ChartDens from './dens-chart';


function Density () {
  
const { minDensity, medDensity, maxDensity } = useContext(Context)
  
  
  return (

    <div className="param-box">
      <h3 className='param-headers-dist'>Density</h3>
      <ChartDens></ChartDens>
      {/* <img src={distr} alt="distr" className='distr'/> */}
      <div className='param-info'>
        <div className="col-params">
          <p className='min-digit'>{Math.round(minDensity * 1000) / 1000}</p>
          <p className='minmedmax'>min</p>
        </div>
        <div className="col-params">
          <p className='med-digit'>{Math.round(medDensity * 1000) / 1000}</p>
          <p className='minmedmax'>med</p>
        </div>
        <div className="col-params">
          <p className='max-digit'>{Math.round(maxDensity * 1000) / 1000}</p>
          <p className='minmedmax'>max</p>
        </div>  
      </div>
        <p className='distrib-type'>Uniform distribution</p>
    </div>
  );
};

export default Density
  