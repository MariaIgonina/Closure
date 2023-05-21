import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../../App.css'
import Context from '../../../../context';
import distr from '../../distr.jpeg'
import ChartHeff from './heff-chart';


function EffThickness () {
  
const { minHeff, medHeff, maxHeff } = useContext(Context)
  
  return (

    <div className="param-box">
      <h3 className='param-headers-dist'>Effective thickness, m</h3>
      <ChartHeff></ChartHeff>
      <div className='param-info'>
        <div className="col-params">
          <p className='min-digit'>{Math.round(minHeff * 10) / 10}</p>
          <p className='minmedmax'>min</p>
        </div>
        <div className="col-params">
          <p className='med-digit'>{Math.round(medHeff * 10) / 10}</p>
          <p className='minmedmax'>med</p>
        </div>
        <div className="col-params">
          <p className='max-digit'>{Math.round(maxHeff * 10) / 10}</p>
          <p className='minmedmax'>max</p>
        </div>  

        </div>
        <p className='distrib-type'>Triangular distribution</p>
    </div>
  );
};

export default EffThickness
  