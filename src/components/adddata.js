import React from 'react';
import '../add.css'
import '../App.css'
import { useState, useContext } from 'react';
import Context from '../context';

function Add () {
  const { url } = useContext(Context)

  const [name, setName] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const [basin, setBasin] = useState('')
  const [formation, setFormation] = useState('')
  const [horizon, setHorizon] = useState('')
  const [reservoir, setReservoir] = useState('')
  const [depth, setDepth] = useState('')
  const [square, setSquare] = useState('')
  const [heff, setHeff] = useState('')
  const [porosity, setPorosity] = useState('')
  const [saturation, setSaturation] = useState('')
  const [density, setDensity] = useState('')
  const [volumefactor, setVolFactor] = useState('')
  const [contact, setContact] = useState('')
  const [notes, setNotes] = useState('')

  async function postTrapToDB (trap) {
    const response = await fetch(url + '/traps', {
      method: "POST",
      body: JSON.stringify(trap),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.text();
    return data;
  };
  
  function submitTrap(trap) {
    trap.preventDefault()
    
    const newTrap = { 
      name, 
      basin,
      formation,
      horizon,
      reservoir,
      depth,
      lat, 
      long,
      square, 
      heff, 
      porosity, 
      saturation, 
      density, 
      volumefactor, 
      notes,
      contact 
    }
    
    postTrapToDB(newTrap)
    console.log(newTrap)

    setName('')
    setLat('')
    setLong('')
    setBasin('')
    setFormation('')
    setHorizon('')
    setReservoir('')
    setDepth('')
    setSquare('')
    setHeff('')
    setPorosity('')
    setSaturation('')
    setDensity('')
    setVolFactor('')
    setContact('')
    setNotes('')
  };

  return (
    <div className='add-window'>
      <form onSubmit={submitTrap} >
        <div className='basic-info'>
          <h2>Basic Information</h2>
          
          <input 
          placeholder='Name' 
          className='add-input'
          value={name} 
          onChange={text => setName(text.target.value)}
          ></input>

          <div className='input-coordinates'>

            <input 
            placeholder='Latitude' 
            className='add-input'
            value={lat} 
            onChange={text => setLat(text.target.value)}
            ></input>

            <input placeholder='Longtitude' 
            className='add-input'
            value={long} 
            onChange={text => setLong(text.target.value)}
            ></input>

          </div>

          <input 
          placeholder='Basin' 
          className='add-input'
          value={basin} 
          onChange={text => setBasin(text.target.value)}
          ></input>

          <input 
          placeholder='Formation' 
          className='add-input'
          value={formation} 
          onChange={text => setFormation(text.target.value)}
          ></input>

          <input 
          placeholder='Horizon' 
          className='add-input'
          value={horizon} 
          onChange={text => setHorizon(text.target.value)}
          ></input>

          <input 
          placeholder='Reservoir' 
          className='add-input'
          value={reservoir} 
          onChange={text => setReservoir(text.target.value)}
          ></input>

          <input 
          placeholder='Medium depth' 
          className='add-input'
          value={depth} 
          onChange={text => setDepth(text.target.value)}
          ></input>

        </div>

        <div className='rest-info'>
          <h2>Effective Volume</h2>

          <input 
          placeholder='Square' 
          className='add-input'
          value={square} 
          onChange={text => setSquare(text.target.value)}
          ></input>

          <input 
          placeholder='Effective Thickness' 
          className='add-input'
          value={heff} 
          onChange={text => setHeff(text.target.value)}
          ></input>

          <h2>Petrophysical parameters</h2>

          <input 
          placeholder='Porosity' 
          className='add-input'
          value={porosity} 
          onChange={text => setPorosity(text.target.value)}
          ></input>

          <input 
          placeholder='Saturation' 
          className='add-input'
          value={saturation} 
          onChange={text => setSaturation(text.target.value)}
          ></input>

          <h2>Phisico-chemical parameters</h2>

          <input 
          placeholder='Density' 
          className='add-input'
          value={density} 
          onChange={text => setDensity(text.target.value)}
          ></input>

          <input 
          placeholder='Reciprocal volume factor' 
          className='add-input'
          value={volumefactor} 
          onChange={text => setVolFactor(text.target.value)}
          ></input>

          <h2>Contact</h2>

          <input 
          placeholder='Email' 
          className='add-input'
          value={contact} 
          onChange={text => setContact(text.target.value)}
          ></input>

          <h2>Here you can write some notes (optional)</h2>
          <input 
          placeholder='Write something...' 
          className='add-input'
          value={notes} 
          onChange={text => setNotes(text.target.value)}
          ></input>

        </div>

        <button>
        Add data
        </button>
      </form>
    </div>
  );
};

export default Add
  