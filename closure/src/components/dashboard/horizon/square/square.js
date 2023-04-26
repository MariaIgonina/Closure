import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../../App.css'
import Context from '../../../../context';
import distr from '../../distr.jpeg'
import ChartSquare from './square-chart';


function Square () {
  
const { minSquare,
  setMinSquare,
  medSquare, 
  setMedSquare,
  maxSquare,
  setMaxSquare } = useContext(Context)
  
  return (

    <div className="param-box">
      <h3 className='param-headers-dist'>Square</h3>
      <ChartSquare></ChartSquare>
      {/* <img src={distr} alt="distr" className='distr'/> */}
      
      
      
      
      <div className='param-info'>
        <div className="col-params">
          <input 
            placeholder='Enter min'
            className='input-square-min'
            required
            onChange={text => setMinSquare(Number(text.target.value))}
          ></input>
          <p className="minmedmax">min</p>
          </div>

        <div className="col-params">
          <input 
            placeholder='Enter med'
            required
            className='input-square-med'
            onChange={text => setMedSquare(Number(text.target.value))}
          ></input>
          <p className="minmedmax">med</p>
          </div>
        <div className="col-params">
          <input 
            placeholder='Enter max'
            className='input-square-max'
            required
            onChange={text => setMaxSquare(Number(text.target.value))}
          ></input>
          <p className="minmedmax">max</p>
          </div>
        </div>
        <p className='distrib-type'>Triangular distribution</p>
    </div>
  );
};

export default Square
  