import React from 'react';
import { useState, useContext } from 'react';
import '../../../App.css'
import Context from '../../../context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function MainInputs (props) {
  
  const { mainLat, mainLong, setMainLat, setMainLong, callFormations, gcos } = useContext(Context)

  const [basins, setBasins] = useState([
    'West-Siberian','Permian','East-Siberian'
  ])
  
  return (

    <div className="inputs">
      <h3 className="headers">Main information</h3>
      <label for="name-input" className="labels-main-input">Name</label>
      <input placeholder='Enter the name' className="name-input" required></input>

      <label for="select-basin" class="labels-main-input">Basin</label>
      <select 
        placeholder='Basin'
        className='select-basin'
        onChange={ (e) => callFormations(e.target.value) }
      > 
        {basins.map(el => (
          <option value={el}>{el}</option>
        ))}
      </select>

      <div className='coordinates'>   
        <label for="coord-input" class="labels-main-input">Longtitude</label>
        <input 
          required
          placeholder='Enter latitude'
          className='coord-input'
          value={mainLat} 
          onChange={text => setMainLat(Number(text.target.value))}
          ></input>

        <label for="coord-input" class="labels-main-input">Latitude</label>
        <input 
          required
          placeholder='Enter longtitude'
          className='coord-input'
          value={mainLong} 
          onChange={text => setMainLong(Number(text.target.value))}
        >
        </input>
      </div>
      
    </div>
  );
};

export default MainInputs
  