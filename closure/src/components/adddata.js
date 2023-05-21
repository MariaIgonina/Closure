import React from 'react';
import '../add.css'
import '../App.css'
import { useState, useContext, useRef } from 'react';
import Context from '../context';
import { TextField, Alert } from '@mui/material';

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

  const [error, setError] = useState('');
  const [errorDec, setErrorDec] = useState('');
  const [success, setSuccess] = useState(false);

  //to reset the form
  const formRef = useRef(null);

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
  
  function submitTrap(event) {
    event.preventDefault()

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

    const isFormValid = Object.values(newTrap).every((value) => value !== "");
    
    if (newTrap.porosity < 0 || newTrap.porosity > 1 ||
        newTrap.saturation < 0 || newTrap.saturation > 1 ||
        newTrap.volumefactor < 0 || newTrap.volumefactor > 1 ||
        newTrap.density < 0 || newTrap.density > 1 ) 
    {
      setErrorDec('Required meaning from 0 to 1');
    } else setErrorDec('');

    if (isFormValid && errorDec === '') {
      postTrapToDB(newTrap);
      setSuccess(true);
      setError('');
      formRef.current.reset();
    } else {
      setError('All fields are required');
    }
  };

  return (
  <div class="add-window">
    <form
      ref={formRef}
      onSubmit={submitTrap}
      className="form"
    >

      <div class="big-columns">
      
        <div class="basic-info-add">
          <h2 class="add-header">Basic Information</h2>

          <TextField 
            id="Name"
            size="small" 
            label="Name" 
            variant="outlined"
            margin="dence"
            onChange={(text) => setName(text.target.value)}
          />

          <div class="input-coordinates">
            
            <TextField 
              id="Latitude"
              size="small" 
              label="Latitude, WGS84" 
              variant="outlined"
              margin="normal"
              onChange={(text) => setLat(text.target.value)}
            />

            <TextField 
              id="Longitude"
              size="small" 
              label="Longitude, WGS84" 
              variant="outlined"
              margin="normal"
              onChange={(text) => setLong(text.target.value)}
            />

          </div>

          <TextField 
            id="Basin"
            size="small" 
            label="Basin" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setBasin(text.target.value)}
          />
          
          <TextField 
            id="Formation"
            size="small" 
            label="Formation" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setFormation(text.target.value)}
          />

          <TextField 
            id="Horizon"
            size="small" 
            label="Horizon" 
            variant="outlined" 
            margin="normal"
            onChange={(text) => setHorizon(text.target.value)}
          />

          <TextField 
            id="Reservoir"
            size="small" 
            label="Reservoir" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setReservoir(text.target.value)}
          />

          <TextField 
            id="Medium depth"
            size="small" 
            label="Medium depth, m" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setDepth(text.target.value)}
          />
        </div>
      
        <div class="rest-info">
          <h2 class="add-header">Effective Volume, m</h2>

           <TextField 
            id="Square"
            size="small" 
            label="Square, k m²" 
            variant="outlined"
            margin="dence"
            onChange={(text) => setSquare(text.target.value)}
          />

          <TextField 
            id="Effective Thickness"
            size="small" 
            label="Effective Thickness, m" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setHeff(text.target.value)}
          />

          <h2 class="add-header">Petrophysical Parameters</h2>

          <TextField 
            id="Porosity"
            size="small" 
            label="Porosity, dec" 
            variant="outlined"
            margin="dence"
            onChange={(text) => setPorosity(text.target.value)}
          />

          <TextField
            id="Saturation"
            size="small" 
            label="Saturation, dec" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setSaturation(text.target.value)}
          />

          <h2 class="add-header">Physico-chemical Parameters</h2>

          <TextField 
            id="Density"
            size="small" 
            label="Density, g/cm³" 
            variant="outlined"
            margin="dence"
            onChange={(text) => setDensity(text.target.value)}
          />

          <TextField 
            id="Reciprocal volume factor"
            size="small" 
            label="Reciprocal volume factor, dec" 
            variant="outlined"
            margin="normal"
            onChange={(text) => setVolFactor(text.target.value)}
          />
        </div>

        <div class="contact">
          <h2 class="add-header">Contact</h2>

          <TextField 
            id="Email"
            size="small" 
            label="Email" 
            variant="outlined"
            margin="dence"
            onChange={(text) => setContact(text.target.value)}
          />

          <h2 class="notes">Notes</h2>
          <textarea
            placeholder="What did you notice working with this target?"
            class="add-textarea"
            value={notes}
            onChange={(text) => setNotes(text.target.value)}
          ></textarea>


          {error && <Alert severity="error">{error}</Alert>}
          {errorDec && <Alert severity="error">{errorDec}</Alert>}
          {(success == true) && <Alert severity="success">Your data is in the data base!</Alert>}
        </div>
      </div>

      

        <button className='adddata'>
        Add data
        </button>
      </form>
    </div>
  );
};

export default Add
  