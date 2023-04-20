import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../App.css'
import Context from '../../context';


function MainInputs () {
  
  const { mainLat, mainLong, setMainLat, setMainLong } = useContext(Context)
  
  const [basins, setBasins] = useState([
    {value: 'West-Siberian', label: 'West-Siberian'},
    {value: 'East-Siberian', label: 'East-Siberian'},
    {value: 'Permian', label: 'Permian'}
  ])

  console.log(mainLat)
  console.log(mainLong)
  

  return (

    <div className="inputs">
      <input placeholder='Name'></input>

      <Select 
      options={basins}
      placeholder='Basin'
      className='select-basin'
      ></Select>
      <input 
      placeholder='Latitude'
      className='add-input'
      value={mainLat} 
      onChange={text => setMainLat(text.target.value)}
      ></input>

      <input 
      placeholder='Longtitude'
      className='add-input'
      value={mainLong} 
      onChange={text => setMainLong(text.target.value)}
      >
      </input>
      <p>Productive formations</p>
      <p>GCoS</p>
    </div>
  );
};

export default MainInputs
  