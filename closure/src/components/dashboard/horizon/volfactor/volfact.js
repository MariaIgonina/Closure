import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../../App.css'
import Context from '../../../../context';
import distr from '../../distr.jpeg'
import ChartVolFact from './chart-volfactor';


function VolFactor () {
  
const { minVolFactor, medVolFactor, maxVolFactor,} = useContext(Context)
  
  return (

    <div className="param-box">

      <h3 className='param-headers-dist'>Reciprocal volume factor</h3>
      <ChartVolFact></ChartVolFact>
      {/* <img src={distr} alt="distr" className='distr'/> */}
      <div className='param-info'>
        <div className="col-params">
          <p className='min-digit'>{Math.round(minVolFactor * 1000) / 1000}</p>
          <p className='minmedmax'>min</p>
        </div>
        <div className="col-params">
          <p className='med-digit'>{Math.round(medVolFactor * 1000) / 1000}</p>
          <p className='minmedmax'>med</p>
        </div>
        <div className="col-params">
          <p className='max-digit'>{Math.round(maxVolFactor * 1000) / 1000}</p>
          <p className='minmedmax'>max</p>
        </div>  
      </div>
      
        <p className='distrib-type'>Uniform distribution</p>
    </div>
  );
};

export default VolFactor
  